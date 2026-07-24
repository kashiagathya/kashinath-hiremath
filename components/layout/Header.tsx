"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import portfolio from "@/lib/portfolio";
import ResumeDownloadButton from "@/app/resume/ResumeDownloadButton";

import {
  Bell,
  Check,
  CircleAlert,
  CircleX,
  ExternalLink,
  MessageSquarePlus,
  Search,
} from "lucide-react";

type SearchEntry = {
  id: string;
  title: string;
  snippet: string;
  route: string;
};

type QueryNotification = {
  id: string;
  query: string;
  route: string;
  createdAt: string;
  read: boolean;
};

const QUERY_STORAGE_KEY = "portfolio-user-queries-v1";

function buildSearchEntries(): SearchEntry[] {
  const entries: SearchEntry[] = [];

  portfolio.sidebar.menu.forEach((item, index) => {
    entries.push({
      id: `menu-${index}`,
      title: item.title,
      snippet: `Navigate to ${item.title}`,
      route: item.route,
    });
  });

  portfolio.experience.forEach((item) => {
    entries.push({
      id: `exp-${item.id}`,
      title: `${item.designation} at ${item.company}`,
      snippet: item.summary,
      route: "/experience",
    });
  });

  portfolio.projects.forEach((item) => {
    entries.push({
      id: `prj-${item.id}`,
      title: item.name,
      snippet: `${item.client} • ${item.summary}`,
      route: "/projects",
    });
  });

  Object.values(portfolio.skills).forEach((group, index) => {
    entries.push({
      id: `skill-group-${index}`,
      title: group.title,
      snippet: group.items.join(", "),
      route: "/skills",
    });

    group.items.forEach((skill, itemIndex) => {
      entries.push({
        id: `skill-item-${index}-${itemIndex}`,
        title: skill,
        snippet: `${group.title} skill area`,
        route: "/skills",
      });
    });
  });

  portfolio.achievements.forEach((item) => {
    entries.push({
      id: `ach-${item.id}`,
      title: item.title,
      snippet: item.description,
      route: "/about",
    });
  });

  portfolio.educations.forEach((item) => {
    entries.push({
      id: `edu-${item.id}`,
      title: `${item.degree} - ${item.specialization}`,
      snippet: `${item.institution} • ${item.duration.from} - ${item.duration.to}`,
      route: "/resume",
    });
  });

  portfolio.certifications.forEach((item) => {
    entries.push({
      id: `cert-${item.id}`,
      title: item.name,
      snippet: `${item.issuer || "Independent Learning"} ${item.year ? `• ${item.year}` : ""}`,
      route: "/resume",
    });
  });

  entries.push({
    id: "contact-email",
    title: "Email Contact",
    snippet: portfolio.personal.contact.email,
    route: "/contact",
  });

  entries.push({
    id: "contact-phone",
    title: "Phone Contact",
    snippet: portfolio.personal.contact.phone,
    route: "/contact",
  });

  return entries;
}

function suggestRoute(query: string, entries: SearchEntry[]): string {
  const normalized = query.trim().toLowerCase();

  if (!normalized) {
    return "/contact";
  }

  const match = entries.find((entry) => {
    return (
      entry.title.toLowerCase().includes(normalized) ||
      entry.snippet.toLowerCase().includes(normalized)
    );
  });

  return match?.route ?? "/contact";
}

function formatNotificationTime(value: string) {
  return new Date(value).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

function isTypingTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) {
    return false;
  }

  const tag = target.tagName.toLowerCase();

  return (
    tag === "input" ||
    tag === "textarea" ||
    tag === "select" ||
    target.isContentEditable
  );
}

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [newQuery, setNewQuery] = useState("");
  const [notifications, setNotifications] = useState<QueryNotification[]>(() => {
    if (typeof window === "undefined") {
      return [];
    }

    try {
      const raw = window.localStorage.getItem(QUERY_STORAGE_KEY);

      if (!raw) {
        return [];
      }

      const parsed = JSON.parse(raw) as QueryNotification[];

      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  });

  const searchEntries = useMemo(() => buildSearchEntries(), []);

  const filteredResults = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();

    if (!term) {
      return searchEntries.slice(0, 10);
    }

    return searchEntries
      .filter((entry) => {
        return (
          entry.title.toLowerCase().includes(term) ||
          entry.snippet.toLowerCase().includes(term)
        );
      })
      .slice(0, 20);
  }, [searchEntries, searchTerm]);

  const unreadCount = useMemo(() => {
    return notifications.filter((item) => !item.read).length;
  }, [notifications]);

  useEffect(() => {
    try {
      window.localStorage.setItem(QUERY_STORAGE_KEY, JSON.stringify(notifications));
    } catch {
      // Ignore storage errors in restrictive environments.
    }
  }, [notifications]);

  useEffect(() => {
    const handleKeyboardShortcuts = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (searchOpen || notificationOpen) {
          event.preventDefault();
          setSearchOpen(false);
          setNotificationOpen(false);
        }
        return;
      }

      if (event.key === "/") {
        if (isTypingTarget(event.target)) {
          return;
        }

        event.preventDefault();
        setSearchOpen(true);
        setNotificationOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyboardShortcuts);

    return () => {
      window.removeEventListener("keydown", handleKeyboardShortcuts);
    };
  }, [searchOpen, notificationOpen]);

  const closeAllPopups = () => {
    setSearchOpen(false);
    setNotificationOpen(false);
  };

  const handleAddQueryNotification = () => {
    const value = newQuery.trim();

    if (!value) {
      return;
    }

    const notification: QueryNotification = {
      id: `query-${Date.now()}`,
      query: value,
      route: suggestRoute(value, searchEntries),
      createdAt: new Date().toISOString(),
      read: false,
    };

    setNotifications((current) => [notification, ...current].slice(0, 50));
    setNewQuery("");
  };

  const markAllAsRead = () => {
    setNotifications((current) => current.map((item) => ({ ...item, read: true })));
  };

  const clearNotifications = () => {
    setNotifications([]);
  };

  const openSearch = () => {
    setSearchOpen(true);
    setNotificationOpen(false);
  };

  const openNotifications = () => {
    setNotificationOpen(true);
    setSearchOpen(false);
  };

  const selectResult = () => {
    closeAllPopups();
  };

  return (
    <>
      <header className="flex h-20 items-center justify-between border-b border-slate-200 bg-white px-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            Welcome 👋
          </h1>

          <p className="text-sm text-slate-500">
            {portfolio.personal.tagline}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={openSearch}
            className="rounded-xl border p-3 transition hover:bg-slate-100"
            aria-label="Open search"
          >
            <Search size={18} />
          </button>

          <button
            onClick={openNotifications}
            className="relative rounded-xl border p-3 transition hover:bg-slate-100"
            aria-label="Open notifications"
          >
            <Bell size={18} />
            {unreadCount > 0 && (
              <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold text-white">
                {unreadCount > 9 ? "9+" : unreadCount}
              </span>
            )}
          </button>

          <a
            href={portfolio.personal.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border px-4 py-3 hover:bg-slate-100"
          >
            GitHub
          </a>

          <a
            href={portfolio.personal.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border px-4 py-3 hover:bg-slate-100"
          >
            LinkedIn
          </a>

          <ResumeDownloadButton
            label="Resume"
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
          />
        </div>
      </header>

      {(searchOpen || notificationOpen) && (
        <div className="fixed inset-0 z-50 bg-black/30 p-4" onClick={closeAllPopups}>
          <div
            className="mx-auto mt-20 w-full max-w-4xl rounded-2xl border bg-white p-6 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            {searchOpen && (
              <div>
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-2xl font-bold text-slate-900">Search Site Content</h2>
                  <button
                    onClick={closeAllPopups}
                    className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100"
                    aria-label="Close search popup"
                  >
                    <CircleX size={20} />
                  </button>
                </div>

                <p className="mt-2 text-sm text-slate-600">
                  Search across projects, experience, skills, certifications, and contact information.
                </p>

                <div className="mt-5 flex items-center gap-3 rounded-xl border px-4 py-3">
                  <Search size={18} className="text-slate-400" />
                  <input
                    autoFocus
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                    placeholder="Type keyword, skill, project, company, or role"
                    className="w-full outline-none"
                  />
                  {searchTerm.trim() !== "" && (
                    <button
                      onClick={() => setSearchTerm("")}
                      className="rounded-md p-1 text-slate-500 transition hover:bg-slate-100"
                      aria-label="Clear search"
                    >
                      <CircleX size={16} />
                    </button>
                  )}
                </div>

                <div className="mt-5 max-h-[55vh] space-y-3 overflow-y-auto pr-1">
                  {filteredResults.length > 0 ? (
                    filteredResults.map((entry) => (
                      <div key={entry.id} className="rounded-xl border p-4">
                        <h3 className="font-semibold text-slate-900">{entry.title}</h3>
                        <p className="mt-1 text-sm text-slate-600">{entry.snippet}</p>
                        <Link
                          href={entry.route}
                          onClick={selectResult}
                          className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-cyan-700 hover:text-cyan-800"
                        >
                          View Details
                          <ExternalLink size={15} />
                        </Link>
                      </div>
                    ))
                  ) : (
                    <div className="rounded-xl border border-dashed p-5 text-sm text-slate-500">
                      No results found for this search term.
                    </div>
                  )}
                </div>
              </div>
            )}

            {notificationOpen && (
              <div>
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-2xl font-bold text-slate-900">End-User Query Notifications</h2>
                  <button
                    onClick={closeAllPopups}
                    className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100"
                    aria-label="Close notifications popup"
                  >
                    <CircleX size={20} />
                  </button>
                </div>

                <p className="mt-2 text-sm text-slate-600">
                  Add and track incoming user queries. Each query includes a suggested route to review details.
                </p>

                <div className="mt-5 grid gap-3 md:grid-cols-[1fr_auto]">
                  <input
                    value={newQuery}
                    onChange={(event) => setNewQuery(event.target.value)}
                    onKeyDown={(event) => {
                      if (event.key !== "Enter") {
                        return;
                      }

                      event.preventDefault();
                      handleAddQueryNotification();
                    }}
                    placeholder="Enter new query from user"
                    className="rounded-xl border px-4 py-3 outline-none focus:border-cyan-500"
                  />
                  <button
                    onClick={handleAddQueryNotification}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-600 px-5 py-3 font-semibold text-white transition hover:bg-cyan-700"
                  >
                    <MessageSquarePlus size={17} />
                    Add Query
                  </button>
                </div>

                <div className="mt-4 flex flex-wrap gap-3">
                  <button
                    onClick={markAllAsRead}
                    className="inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
                  >
                    <Check size={16} />
                    Mark All Read
                  </button>
                  <button
                    onClick={clearNotifications}
                    className="inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
                  >
                    <CircleX size={16} />
                    Clear All
                  </button>
                </div>

                <div className="mt-5 max-h-[50vh] space-y-3 overflow-y-auto pr-1">
                  {notifications.length > 0 ? (
                    notifications.map((item) => (
                      <div
                        key={item.id}
                        className={`rounded-xl border p-4 ${
                          item.read ? "bg-white" : "bg-cyan-50"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="font-semibold text-slate-900">{item.query}</p>
                            <p className="mt-1 text-xs text-slate-500">
                              {formatNotificationTime(item.createdAt)}
                            </p>
                          </div>
                          {!item.read && (
                            <span className="inline-flex items-center gap-1 rounded-full bg-cyan-100 px-2 py-1 text-[11px] font-semibold text-cyan-800">
                              <CircleAlert size={12} />
                              New
                            </span>
                          )}
                        </div>

                        <div className="mt-3 flex flex-wrap gap-3">
                          <Link
                            href={item.route}
                            onClick={selectResult}
                            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-700 hover:text-cyan-800"
                          >
                            Open Suggested Page
                            <ExternalLink size={15} />
                          </Link>
                          {!item.read && (
                            <button
                              onClick={() => {
                                setNotifications((current) =>
                                  current.map((notification) => {
                                    if (notification.id !== item.id) {
                                      return notification;
                                    }

                                    return {
                                      ...notification,
                                      read: true,
                                    };
                                  })
                                );
                              }}
                              className="text-sm font-medium text-slate-600 hover:text-slate-800"
                            >
                              Mark as read
                            </button>
                          )}
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="rounded-xl border border-dashed p-5 text-sm text-slate-500">
                      No user queries yet. Add one above to track incoming requests.
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}