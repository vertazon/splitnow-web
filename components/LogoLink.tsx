'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { APP_NAME } from '@/lib/config';

interface Props {
  imgSize?: number;
  fontSize?: number;
  gap?: string;
}

export function LogoLink({ imgSize = 32, fontSize = 18, gap = 'gap-3' }: Props) {
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <Link href="/" onClick={handleClick} className={`flex items-center ${gap}`}>
      <Image
        src="/icon.png"
        alt={APP_NAME}
        width={imgSize}
        height={imgSize}
        className="rounded-[10px]"
      />
      <span
        style={{
          fontSize,
          fontWeight: 800,
          color: '#F8F8F6',
          letterSpacing: '-0.3px',
        }}
      >
        {APP_NAME}
      </span>
    </Link>
  );
}
