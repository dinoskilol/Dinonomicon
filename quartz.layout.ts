import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
    Component.Comments({
      provider: "giscus",
      options: {
        // from data-repo
        repo: "dinoskilol/Dinonomicon",
        // from data-repo-id
        repoId: "R_kgDOQtKCYg",
        // from data-category
        category: "Announcements",
        // from data-category-id
        categoryId: "DIC_kwDOQtKCYs4C0IHP",
        // from data-lang
        lang: "en",
      },
    }),
  ],
  footer: Component.Footer({}),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.SocialLinks(),
    Component.Explorer(),

    Component.DesktopOnly(Component.TableOfContents()),
    Component.DesktopOnly(Component.Video2Ascii()),
    Component.Backlinks(),
  ],
  right: [Component.Graph(), Component.RecentNotes()],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.SocialLinks(),
    Component.Explorer(),
  ],
  right: [],
}
