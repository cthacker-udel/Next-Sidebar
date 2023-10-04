/* eslint-disable react/jsx-no-useless-fragment -- disabled */
import { usePathname } from "next/navigation";
import React from "react";
import { Key } from "ts-key-enum";

import type { SideBarLink } from "../SidebarLink";

import styles from "./SidebarNavLink.module.css";

type SidebarNavLinkProperties = SideBarLink & { readonly index: number };

/**
 *
 * @param props.content - The content of the link
 * @param props.iconLink - The link to the FA (font awesome) icon (if one is supplied)
 * @param props.hasAccess - Whether the user has access to link (basically will it display)
 * @returns
 */
export const SidebarNavLink = ({
  content,
  iconLink,
  index,
  hasAccess,
  href,
  onClick,
}: SidebarNavLinkProperties): JSX.Element => {
  const pathname = usePathname();
  const [isCurrent, setIsCurrent] = React.useState<boolean>(false);
  const keyboardListener = React.useCallback(
    async (event: React.KeyboardEvent) => {
      const { key } = event;
      if (key === Key.Enter) {
        await onClick?.(href);
      }
    },
    [href, onClick]
  );

  const sidebarOnClick = React.useCallback(async () => {
    await onClick?.(href);
  }, [href, onClick]);

  React.useEffect(() => {
    if (pathname !== undefined) {
      setIsCurrent(pathname === href);
    }
  }, [href, pathname]);

  if (!hasAccess) {
    return <></>;
  }

  return (
    <div
      className={`${styles.sidebar_navlink_container}${
        isCurrent ? ` ${styles.sidebar_navlink_current}` : ""
      }`}
      id={`sidebar_link_${href}`}
      onClick={sidebarOnClick}
      onKeyDown={keyboardListener}
      role="menuitem"
      tabIndex={index}
    >
      <i className={`fa-solid fa-xs ${iconLink}`} />
      <div className={styles.sidebar_navlink_content}>{content}</div>
    </div>
  );
};
