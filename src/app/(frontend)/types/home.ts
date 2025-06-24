export interface SocialItem {
    imageUrl: string;
    linkUrl: string;
    classname: string;
}
// interface SocialComponentProps {
//     socialMedia: SocialItem[];
// }

export interface ConditionalLinkProps {
  href: string;
  children: React.ReactNode;
}

export interface JoinUsTextProps {
  htmlContent: string;
}