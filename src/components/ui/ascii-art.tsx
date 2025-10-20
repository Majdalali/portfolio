'use client';

import { useEffect, useState } from 'react';
import { TextAnimate } from './text-animate';

type AsciiArtType = 
  | 'logo' 
  | 'terminal' 
  | 'computer' 
  | 'github'
    | 'fairy'
  | 'code';

interface AsciiArtProps {
  art: AsciiArtType;
  color?: string;
  animate?: boolean;
  animationDelay?: number;
  animateSpeed?: number;
  className?: string;
}

export function ASCIIArt({
  art,
  color = 'var(--color-accent)',
  animate = false,
  animationDelay = 1000,
    animateSpeed = 1000,
  className = '',
}: AsciiArtProps) {
  const [artContent, setArtContent] = useState<string>('');

  useEffect(() => {
    // Get the appropriate ASCII art
    switch (art) {
      case 'logo':
        setArtContent(`
        ___         ___           ___                         ___           ___                                     ___     
     /\\  \\       /\\  \\         /\\  \\                       /\\__\\         /\\  \\                                   /\\  \\    
    /::\\  \\     /::\\  \\       /::\\  \\         ___         /:/ _/_       /::\\  \\                     ___         /::\\  \\   
   /:/\\:\\__\\   /:/\\:\\  \\     /:/\\:\\__\\       /\\__\\       /:/ /\\__\\     /:/\\:\\  \\                   /\\__\\       /:/\\:\\  \\  
  /:/ /:/  /  /:/  \\:\\  \\   /:/ /:/  /      /:/  /      /:/ /:/  /    /:/  \\:\\  \\   ___     ___   /:/__/      /:/  \\:\\  \\ 
 /:/_/:/  /  /:/__/ \\:\\__\\ /:/_/:/__/___   /:/__/      /:/_/:/  /    /:/__/ \\:\\__\\ /\\  \\   /\\__\\ /::\\  \\     /:/__/ \\:\\__\\
 \\:\\/:/  /   \\:\\  \\ /:/  / \\:\\/:::::/  /  /::\\  \\      \\:\\/:/  /     \\:\\  \\ /:/  / \\:\\  \\ /:/  / \\/\\:\\  \\__  \\:\\  \\ /:/  /
  \\::/__/     \\:\\  /:/  /   \\::/~~/~~~~  /:/\\:\\  \\      \\::/__/       \\:\\  /:/  /   \\:\\  /:/  /   ~~\\:\\/\\__\\  \\:\\  /:/  / 
   \\:\\  \\      \\:\\/:/  /     \\:\\~~\\      \\/__\\:\\  \\      \\:\\  \\        \\:\\/:/  /     \\:\\/:/  /       \\::/  /   \\:\\/:/  /  
    \\:\\__\\      \\::/  /       \\:\\__\\          \\:\\__\\      \\:\\__\\        \\::/  /       \\::/  /        /:/  /     \\::/  /   
     \\/__/       \\/__/         \\/__/           \\/__/       \\/__/         \\/__/         \\/__/         \\/__/       \\/__/                                           
        `);
        break;
        case 'terminal':
            setArtContent(`
$ whoami
> developer

$ ls -la projects
> ...
`);

            break;
        case 'fairy':
            setArtContent(`
   .'.         .'.
   |  \\       /  |
    '.  \\ | /  .'
      '. \\|/ .'
        '-- --'
        .'/|\\'. ^~DanDan
       '..'|'..'
`);
            break;
        case 'computer':
        setArtContent(`
         ,-----------------.
         |  ,------------. |
         | /              \\|
         |/                |
         |\\                |
         | \\              /|
         |  \`------------\` |
         |    []     []    |
         |----------------.|
         |                ||
         \\________________/|
          \`----------------´
        `);
        break;
      case 'github':
        setArtContent(`
                 _.--.
             _.-'_:-'||
         _.-'_.-::::'||
    _.-:'_.-::::::'  ||
  .'\'\'\''-'-'''''     ||
 /.\',                ||
/.\',                 ||
/.\',                 ||
/.\',.-''.            ||
/.\',                 ||
/.\',                 ||
/.\',               _ ||_
/.\',           _.-' |*| \`-._
/.\',       _.-'     |*|     \`-._
         '       |*|       \`
                 |*|
                 |*|
                 |*|
                 |*|
                 \`-'
        `);
        break;

      case 'code':
        setArtContent(`
         {
           "name": "developer",
           "skills": [
             "typescript",
             "react",
             "nextjs"
           ],
           "isAvailable": true
         }
        `);
        break;

      default:
        setArtContent('');
    }
  }, [art]);

  if (!artContent) return null;

  if (animate) {
    return (
      <pre 
        className={`font-mono whitespace-pre ${className}`}
        style={{ color }}
        aria-hidden="true"
      >
        <TextAnimate text={artContent} speed={animateSpeed} delay={animationDelay} />
      </pre>
    );
  }

  return (
    <pre 
      className={`font-mono whitespace-pre ${className}`}
      style={{ color }}
      aria-hidden="true"
    >
      {artContent}
    </pre>
  );
}