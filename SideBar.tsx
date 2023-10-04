"use client";
/* eslint-disable react/no-array-index-key -- disabled */
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

import type { SideBarLink } from "./SidebarLink";

import styles from "./Sidebar.module.css";
import { SidebarNavLink } from "./SidebarNavLink/SidebarNavLink";

type SideBarProperties = {
  readonly includeImage: boolean;
  readonly imageSrc?: string;
  readonly imageTitle?: string;
  readonly links?: SideBarLink[];
};

/**
 * The common sidebar component, used to manage links to separate parts of the application
 *
 * @param props.includeImage -  Whether to include the company image in the sidebar
 * @param props.imageSrc - The src of the company image
 * @param props.imageTitle - The title of the company image (the text that displays underneath it)
 * @param props.links - The associated links you want displayed on the sidebar
 * @returns The sidebar component
 */
const SideBar = ({
  includeImage,
  imageSrc,
  imageTitle,
  links,
}: SideBarProperties): JSX.Element => {
  const router = useRouter();

  const linkOnClick = React.useCallback(
    (href: string) => {
      router.push(`${href}`);
    },
    [router]
  );

  return (
    <div className={styles.sidebar_container}>
      {includeImage && (
        <div className={styles.sidebar_image_container}>
          <Image
            alt="Company Image located on the top-left of the screen, in the sidebar"
            className={styles.sidebar_image}
            height={200}
            src={imageSrc ?? ""}
            width={200}
          />
          <div className={styles.sidebar_image_title}>{imageTitle}</div>
        </div>
      )}
      <div className={styles.sidebar_container_links}>
        {links?.map((eachLink: SideBarLink, index: number) => (
          <SidebarNavLink
            index={index}
            key={`sidebar_nav_link_${index}`}
            onClick={linkOnClick}
            {...eachLink}
          />
        ))}
      </div>
    </div>
  );
};

export { SideBar };
