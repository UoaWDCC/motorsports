import Link from "next/link";
import {ConditionalLinkProps } from "../../types/home";


export default function ConditionalLink( {href, children}:ConditionalLinkProps ) {
  // This component is responsible for displaying a link or span
    if (href && href.trim()) {
    return (
      <Link href={href}>
        {children}
      </Link>
    );
  }
    return (
        <>
            {children}
        </>
    );
}