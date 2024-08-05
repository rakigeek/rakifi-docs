import {cn} from '@utils/cn'
import Link from 'next/link';

type LinkType = "internal" | "external" | undefined | null;

interface TitleProps {
  children: React.ReactElement;
  linkType: LinkType;
}

function generateLinkTypeCharacter(linkType: LinkType) {
  switch (linkType) {
    case "external":
      return "↗";
    case "internal":
      return "→";
    default:
      return "";
  }
}

export const Title = ({
  children,
  linkType = "internal",
  ...props
}: TitleProps) => (
  <h2 className="font-semibold items-start gap-2" {...props}>
    {children}
    {linkType ? " " + generateLinkTypeCharacter(linkType) : null}
  </h2>
);

export const Description = ({ children, ...props }) => (
  <span className="card-description" {...props}>
    {children}
  </span>
);

export interface CardProps {
  children: React.ReactElement;
  href?: string;
  className?: string;
}

export function Card({ children, href, className }: CardProps) {
  return (
    <Link
    href={`${href}`}
    className={cn(
      `
        flex flex-col justify-start overflow-hidden rounded-lg border border-gray-400 
        text-current no-underline shadow-gray-100 active:shadow-sm active:shadow-gray-200
        transition-all duration-200 hover:border-gray-300 bg-transparent shadow-sm
        hover:bg-slate-50 hover:shadow-md p-4 text-gray-900 hover:text-gray-700 gap-2
      `,
      className,
    )}
      style={{ cursor: href ? "pointer" : undefined }}
    >
      {children}
    </Link>
  );
}

interface ImageProps {
  src: string;
  className?: string;
}

export function Image({ src, className }: ImageProps) {
  return (
    <img
      src={src}
      className={cn(
        "aspect-square object-cover rounded-[0.5rem] h-[64px]",
        className,
      )}
      width="64px"
    />
  );
}

export interface CardsProps {
  children: React.ReactElement;
  className?: string;
}

export function Cards({ children, className }: CardsProps) {
  return (
    <div
      className={cn(
        "cards mt-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4",
        className,
      )}
    >
      {children}
    </div>
  );
}

Card.Title = Title;
Card.Description = Description;
Card.Image = Image;

export default Card;
