import type { ReactNode } from "react";

/**
 * Represents a link in the sidebar component
 */
export type SideBarLink = {
  /**
   * The content of the link (usually just text)
   */
  content: ReactNode;

  /**
   * The link of the FontAwesomeIcon to render
   */
  iconLink: string;

  /**
   * Whether the user has access
   */
  hasAccess: boolean;

  /**
   * The actual link to the page
   */
  href: string;

  /**
   * The onClick callback that is fired when the link is clicked
   *
   * @param _link - The link to the page
   * @returns Nothing, mutates the window internally
   */
  onClick?: (_link: string) => void | Promise<void>;
};
