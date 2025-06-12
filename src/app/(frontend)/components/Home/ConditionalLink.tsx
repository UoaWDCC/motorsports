import Link from "next/link";

interface ConditionalLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function ConditionalLink( {href, children}:ConditionalLinkProps ) {
  // This component is responsible for displaying a link or span
    if (href.trim()) {
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