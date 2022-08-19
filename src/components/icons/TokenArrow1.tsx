import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface Props {
    size?: number;
}

export const TokenArrow1 = (props: Props) => (
    <Svg width={props.size || 32} height={props.size || 32} viewBox="0 0 229 229">
        <Path
            fill="#6d6b6f"
            d="M0 0h229v6.56c-3.65-7.13-9.28 2.97-15.02-1.5-9.29-2.22-18.85 3.31-27.77-1.51-10.85.9-21.82 1.49-32.78 1.75-.85-2.65-4.77-2.26-3.92.76-4.95-4.6-10.97-.2-16.58-2.38-3.66 2.04-7.99-.29-11.73 2.02-.1-.6-.28-1.81-.38-2.41-7.6 3.25-16.46.14-24.58 1.32-2.88 1.18-4.97-2.55-7.32.43-5.47-1.58-10.11.73-14.99-.32-6.44-2.14-14-.57-20.64.58-8.16-.16-16.94-2.25-25.34-1.2.97 1.35 4.78 3.52.93 3.25-.49-.31-1.48-.91-1.98-1.21-1-3.16-8.47-1.2-12.01-1.37-3.49-.15.4 1.02-.83 2.4-3-1.46-5.39.19-7.64 2.09C7.97 5.08 2.63 7.25 0 6.96V0Z"
        />
        <Path
            fill="#4f4a4f"
            d="M27.95 4.1c8.4-1.05 17.18 1.04 25.34 1.2 6.64-1.15 14.2-2.72 20.64-.58-3.5 3.82 6.44 1.43 1.4 3.67-4.12 3.12-6.83-4.89-10.53-.78.85.18 2.57.54 3.43.72-9.99 3.51-20.86-1.86-30.82 2.01-2.05-2.88-5.43-2.74-8.53-2.99 3.85.27.04-1.9-.93-3.25Z"
        />
        <Path
            fill="#4c474d"
            d="M88.92 5.04c2.35-2.98 4.44.75 7.32-.43 8.12-1.18 16.98 1.93 24.58-1.32.1.6.28 1.81.38 2.41 3.74-2.31 8.07.02 11.73-2.02 5.61 2.18 11.63-2.22 16.58 2.38-.85-3.02 3.07-3.41 3.92-.76 10.96-.26 21.93-.85 32.78-1.75 8.92 4.82 18.48-.71 27.77 1.51 5.74 4.47 11.37-5.63 15.02 1.5v2.87c-4.32-.44-8.86-1.75-12.96.26-.01-2.75-.96-4.55-4.06-3.84 3.85 1.71-.58 3.64-2.81 2.85-3.26-1.01-6.4.28-9.44 1.42-8.83-3.44-17.91 3.24-26.74-.72-7.67 3.71-14.86-2.06-21.59 2.35-1.07-7.39-9.13-3.55-14.24-4.17-4.04-.75-8.57.14-11.15 3.57-1.53-5.2-7.83-3.66-11.77-3.39-1.85-1.74-4.56-2.43-4.84.94-8.29 2.08-16.9-.1-25.21-.82-6.05-1.84 9.28 1.28 4.73-2.84Z"
        />
        <Path
            fill="#4b484c"
            d="M14.89 4.77c3.54.17 11.01-1.79 12.01 1.37-3.04 2.3-14.48 4.74-12.84 1.03 1.23-1.38-2.66-2.55.83-2.4Z"
        />
        <Path
            fill="#302e38"
            d="M73.93 4.72c4.88 1.05 9.52-1.26 14.99.32 4.55 4.12-10.78 1-4.73 2.84 8.31.72 16.92 2.9 25.21.82.28-3.37 2.99-2.68 4.84-.94 3.94-.27 10.24-1.81 11.77 3.39 2.58-3.43 7.11-4.32 11.15-3.57 5.11.62 13.17-3.22 14.24 4.17 6.73-4.41 13.92 1.36 21.59-2.35 8.83 3.96 17.91-2.72 26.74.72 3.04-1.14 6.18-2.43 9.44-1.42 2.23.79 6.66-1.14 2.81-2.85 3.1-.71 4.05 1.09 4.06 3.84 4.1-2.01 8.64-.7 12.96-.26v112c-1.43 2.84-6.47 8.28 0 6.62V229h-2.46c-4.31-1.97-7.98-4.83-10.32-9.05-3.91-7.92 7.86-.26 7.24-6.68-.27-2.2-.7-4.54 1.27-6.1-6.52.46 1.63-11.67-7.31-8.77-4.01 1.44-10.34 2.06-12.47-2.35 2.34.99 10.84-.24 6.02-3-4.77-3.64 2.06-9.72 4.97-12.69-2.12-.33-3.94-1.07-3.55-3.53-2.71 1.92-5.41 3.59-8.86 2.81-3.12 3.88 10.29 2.61-1.89 4.26-3.02 1.59-5.51-1.81-8.68-.04.2-4.56 6.69.35 5.02-4.77-4.78 1.24-6.68.35-3.85-4.08-4.17 2-11.7 3.33-13.2-2.15 2.31.85 4.29 2.43 6.66 3.14-.13-5.19 5.15-1.51 8.15-2.17 3.47-1.87.64-5.6.88-8.54-2.07-2.16-6.37-.79-8.52-3.43-6.04-1.82-11.17 3.23-16.96 4.28-1.61 1.89-1.19 4.62-2.27 6.77-2.99.48-2.06-4.12-3.2-5.96-1.39 1.31-7.58 6.31-2.67 6.07 5-.09-2.41 2.98-3.92.6-2.83 2.92-3.41 5.44 1.21 9.16 3.74-.56 12.09-4.38 11.47 2.39-2.26-3.08-4.91-1.71-5.72 1.65 1.73 1.1 9.16.34 5.66 2.9-3.92-.11-11.73 1.62-8.93-4.59-4.08-.94-7.63-2.24-10.93 1.54-7.11-5.18-16.04-2.23-23.3-1.21-3.42-.82-3.15-2.78-1.52-5.34-1.54-1.69-2.74-3.57-3.25-5.81-3.02 1.19-6.5 1.88-8.79 4.33 2.26 1.82 6.57 1.93 7.22 5.13-5.64-2-10.8 3.56-15.31-1.8-2.16 2.85-5.14 5.67-9.04 4.33-5.06-2.46-1.33 8.36-6.12 4.47-3.61 2.24-10.31-1.51-5.8-4.86 1.27 3.07 5.13-.52 1.42-1.19-3.87-4.18-11.31-4.57-14.36.39-6.92-2.06 3.77-11.2-5.7-10.34 4.41-5.25-5.12-9.33-8.69-5.58-.97-8.45-11.03.05-15.75-3.65-8.2-.12-16.44-.19-24.65.06-2.54.73-1.69 2.52-.5 4.15-4.45.76-8.72 2.73-10.87 6.87-2.44-3.12-7.83 1.94-4.29 3.97 1.09 1.37-1.89 2.65-2.54 3.88V6.96c2.63.29 7.97-1.88 6.42 2.3 2.25-1.9 4.64-3.55 7.64-2.09-1.64 3.71 9.8 1.27 12.84-1.03.5.3 1.49.9 1.98 1.21 3.1.25 6.48.11 8.53 2.99 9.96-3.87 20.83 1.5 30.82-2.01-.86-.18-2.58-.54-3.43-.72 3.7-4.11 6.41 3.9 10.53.78 5.04-2.24-4.9.15-1.4-3.67m-.6 14.42c.46 4.86 5.19-1.64 0 0m95.83 1.02c-1 4.64 4.64-1 0 0m-63.83 19.98c.46 4.86 5.19-1.64 0 0m48.91 9.16c-1.62 6.07 6.11-.86 0 0m5.09-.05c2.49 3.29 4.92-2.27 0 0m28.83-.09c-1 4.64 4.64-1 0 0m32.11 7.03c-1.24 5.33 4.85-.12 0 0m-42.06.89c-3.27 2.87 1.98 1.77 3.93 1.87-.66-1.72-2.17-2.37-3.93-1.87m-102.16.91c3 6.28 6.18 12.47 9.29 18.7-.07 4.78-6.53 3.2-7.34 8.14 6.15.18-.64 4.27 3.07 6.45-.51.42-3.56 1.57-1.17 1.63 4.73.61 4.27 5.7 6.17 8.88-4.08-.8-1.24 4-5.91 3.41 3.19.55 3.92 5.97 7.81 6.02-3 1.81-.88 6.04-1.95 8.89.27.52.82 1.56 1.09 2.08-1.52.52-2.5 1.35-1.15 2.75 3.26 2.17 6.71 4.81 10.91 5.23-1.72 1.32-2.06 1.43.39 2.89-1.53 2.35-2.83 4.92-3.26 7.71-2.94-.09-2.36 3.84-3.11 5.86-1.94 3-3.78 6.12-4.88 9.55-1.95-3.45-4.79 1.35-.9 1.62-3.73 5.65-6.02 12.23-9.26 18.17 9.55 1.79 26.15 1.68 34.95.01 9.98-19.5 20.7-38.89 29.24-58.98-8.94-19.9-19.18-39.45-29.15-58.94-11.61-.17-23.23-.04-34.84-.07m92.21 24.28c-.71 4.2 5.26-2.13 0 0m-24.27 45.72c2.93 4.02 3.83-3.77 0 0 .76-4.67-4.68.76 0 0m64.24 7.27c-.39 4.87 5.42-2.21 0 0m-10.98 1.06c-3.36.28-2.29 3.59.38 4.05 2.49 2.44 1.76-4.94-.38-4.05m13.97 12.73c-3.71 3.95 5.48.6 0 0m-6.89 19.14c.46 4.39 4.67-.87 0 0m-5.03 5.76c.33 2.62-4.2 3.96.01 4.73 3.94 2.04 2.5-3.91-.01-4.73m22.03 15.19c.45 4.85 5.19-1.64 0 0Z"
        />
        <Path
            fill="#302e38"
            d="M35.99 167.05c1.89.4 6.99-1.56 5.86 1.78-1.81 1.13-6.41 1.14-5.86-1.78Z"
        />
        <Path fill="#79767b" d="M73.33 19.14c5.19-1.64.46 4.86 0 0Z" />
        <Path fill="#878587" d="M169.16 20.16c4.64-1-1 4.64 0 0Z" />
        <Path fill="#747279" d="M105.33 40.14c5.19-1.64.46 4.86 0 0Z" />
        <Path fill="#8b8a90" d="M154.24 49.3c6.11-.86-1.62 6.07 0 0Z" />
        <Path fill="#8d839a" d="M159.33 49.25c4.92-2.27 2.49 3.29 0 0Z" />
        <Path fill="#89878f" d="M188.16 49.16c4.64-1-1 4.64 0 0Z" />
        <Path fill="#777580" d="M220.27 56.19c4.85-.12-1.24 5.33 0 0Z" />
        <Path
            fill="#827b86"
            d="M178.21 57.08c1.76-.5 3.27.15 3.93 1.87-1.95-.1-7.2 1-3.93-1.87Z"
        />
        <Path
            fill="#cdc9d4"
            d="M76.05 57.99c11.61.03 23.23-.1 34.84.07 9.97 19.49 20.21 39.04 29.15 58.94-8.54 20.09-19.26 39.48-29.24 58.98-11.65.02-23.3.05-34.95-.01 3.24-5.94 5.53-12.52 9.26-18.17.22-.41.67-1.22.9-1.62 1.1-3.43 2.94-6.55 4.88-9.55 2.13-.99 3.3 1.15 4.53 2.51-3.6 7.4-7.58 14.6-11.34 21.93 7.85-.26 15.77.51 23.59-.3 5.77-13.58 13.46-26.23 19.38-39.72 2.56-5.65 8.97-11.97 5.16-18.2-8.12-16.29-16.3-32.58-24.03-49.05-5.18-4.36-15.47-.7-22.44-1.57l-.86.03c7.58 17.62 16.66 34.53 25.13 51.73.66 1.41 1.57 3.13.65 4.65-4.84 8.46-8.62 17.47-13.39 25.99-1.63-.78-2.41-2.38-3.27-3.86.43-2.79 1.73-5.36 3.26-7.71 2.43-5.38 5.23-10.6 7.51-16.05-3.15-7.58-7.01-14.83-10.65-22.18-.56-6.25-9.56-3.98-10.17-9.72 2.94-2.21 3.99-5.35 1.39-8.42-3.11-6.23-6.29-12.42-9.29-18.7Z"
        />
        <Path
            fill="#574074"
            d="m84.88 62.26.86-.03c7.41 1.3 15.1-.02 22.44 1.57 7.73 16.47 15.91 32.76 24.03 49.05 3.81 6.23-2.6 12.55-5.16 18.2-5.92 13.49-13.61 26.14-19.38 39.72-7.82.81-15.74.04-23.59.3 3.76-7.33 7.74-14.53 11.34-21.93.71-1.46 1.3-2.98 1.85-4.51 4.77-8.52 8.55-17.53 13.39-25.99.92-1.52.01-3.24-.65-4.65-8.47-17.2-17.55-34.11-25.13-51.73Z"
        />
        <Path
            fill="#a28094"
            d="M85.74 62.23c6.97.87 17.26-2.79 22.44 1.57-7.34-1.59-15.03-.27-22.44-1.57Z"
        />
        <Path
            fill="#5c647f"
            d="M85.34 76.69c2.6 3.07 1.55 6.21-1.39 8.42.61 5.74 9.61 3.47 10.17 9.72-3.99 1.28-4.21 5.82-8.22 1.36 4.8.63.21-1.51 2.95-3.04-2.64-.41-5.24-1.04-7.78-1.87-3.71-2.18 3.08-6.27-3.07-6.45.81-4.94 7.27-3.36 7.34-8.14Z"
        />
        <Path fill="#83828f" d="M168.26 82.27c5.26-2.13-.71 4.2 0 0Z" />
        <Path
            fill="#40445b"
            d="M81.07 91.28c2.54.83 5.14 1.46 7.78 1.87-2.74 1.53 1.85 3.67-2.95 3.04 4.01 4.46 4.23-.08 8.22-1.36 3.64 7.35 7.5 14.6 10.65 22.18-2.28 5.45-5.08 10.67-7.51 16.05-2.45-1.46-2.11-1.57-.39-2.89-4.2-.42-7.65-3.06-10.91-5.23-1.35-1.4-.37-2.23 1.15-2.75 3.1-.63.95-4.64-1.09-2.08 1.07-2.85-1.05-7.08 1.95-8.89-3.89-.05-4.62-5.47-7.81-6.02 4.67.59 1.83-4.21 5.91-3.41-1.9-3.18-1.44-8.27-6.17-8.88-2.39-.06.66-1.21 1.17-1.63Z"
        />
        <Path
            fill="#81859b"
            d="M86.02 120.11c2.04-2.56 4.19 1.45 1.09 2.08-.27-.52-.82-1.56-1.09-2.08Z"
        />
        <Path fill="#636068" d="M229 128.05c-6.47 1.66-1.43-3.78 0-6.62v6.62Z" />
        <Path fill="#7b7685" d="M143.99 127.99c-4.68.76.76-4.67 0 0Z" />
        <Path fill="#797886" d="M143.99 127.99c3.83-3.77 2.93 4.02 0 0Z" />
        <Path fill="#858595" d="M208.23 135.26c5.42-2.21-.39 4.87 0 0Z" />
        <Path
            fill="#9f97a6"
            d="M197.25 136.32c2.14-.89 2.87 6.49.38 4.05-2.67-.46-3.74-3.77-.38-4.05Z"
        />
        <Path
            fill="#97919b"
            d="M90.89 146.63c.75-2.02.17-5.95 3.11-5.86.86 1.48 1.64 3.08 3.27 3.86-.55 1.53-1.14 3.05-1.85 4.51-1.23-1.36-2.4-3.5-4.53-2.51Z"
        />
        <Path fill="#827f88" d="M211.22 149.05c5.48.6-3.71 3.95 0 0Z" />
        <Path
            fill="#747581"
            d="M85.11 157.8c-3.89-.27-1.05-5.07.9-1.62-.23.4-.68 1.21-.9 1.62Z"
        />
        <Path
            fill="#2d2c35"
            d="M171.14 166.14c5.79-1.05 10.92-6.1 16.96-4.28 2.15 2.64 6.45 1.27 8.52 3.43-.24 2.94 2.59 6.67-.88 8.54-3 .66-8.28-3.02-8.15 2.17-2.37-.71-4.35-2.29-6.66-3.14 1.5 5.48 9.03 4.15 13.2 2.15-2.83 4.43-.93 5.32 3.85 4.08 1.67 5.12-4.82.21-5.02 4.77 3.17-1.77 5.66 1.63 8.68.04 12.18-1.65-1.23-.38 1.89-4.26 3.45.78 6.15-.89 8.86-2.81-.39 2.46 1.43 3.2 3.55 3.53-2.91 2.97-9.74 9.05-4.97 12.69 4.82 2.76-3.68 3.99-6.02 3 2.13 4.41 8.46 3.79 12.47 2.35 8.94-2.9.79 9.23 7.31 8.77-1.97 1.56-1.54 3.9-1.27 6.1.62 6.42-11.15-1.24-7.24 6.68-3.01 1.26-5.76-.98-6.3-3.94-2.48-4.55-15.9.86-5.86 1.18-3.4 5.76-7.37.19-8.23-4.08-5.31 1.62-10.08-2.02-15.33-2.24 2.23-3.49-4.74-4.43-2.79-.71 1.85 5.35-8.82-.48-10.58.72 2.23-4.99-3.67-5.55-7.16-6.94-.95 3.39 2.59 3.55 4.87 4.48 1.54 5.53-6.46 2.58-8.83 2.73-4.73 2.15-10.05 1.53-14.92.12-4.71.85-9.17 3.05-13.94 3.48-2.28-1.74-4.65-1.23-7.09-.17-4.84-1.49-9.82-2.63-14.92-2.36-3 4.01-10.16 4.26-12.05 9.75-2.53-3.1-12.48-4.58-5.28-8.48-4.83-6.65-13.01-.49-19.62-1.88-4.46-2.02-8.52 3.05-12.32-.39-3.21 1.67-10.68-.5-9.2 4.6-3.33 4.28-3.87-6.52-8.35-2.64-8.28-1.38-17.31-2.72-25.49-.09 1.66 2.32 8.98 6.38-.31 5.41C9.3 221.4 6 224.76 4.68 229H1.95c.34-1.64-.31-2.29-1.95-1.94v-42.59c.65-1.23 3.63-2.51 2.54-3.88-3.54-2.03 1.85-7.09 4.29-3.97 2.15-4.14 6.42-6.11 10.87-6.87-1.19-1.63-2.04-3.42.5-4.15 8.21-.25 16.45-.18 24.65-.06 4.72 3.7 14.78-4.8 15.75 3.65 3.57-3.75 13.1.33 8.69 5.58 9.47-.86-1.22 8.28 5.7 10.34 3.05-4.96 10.49-4.57 14.36-.39-.36.29-1.07.89-1.42 1.19-4.51 3.35 2.19 7.1 5.8 4.86 4.79 3.89 1.06-6.93 6.12-4.47 3.9 1.34 6.88-1.48 9.04-4.33 4.51 5.36 9.67-.2 15.31 1.8-.65-3.2-4.96-3.31-7.22-5.13 2.29-2.45 5.77-3.14 8.79-4.33.51 2.24 1.71 4.12 3.25 5.81-1.63 2.56-1.9 4.52 1.52 5.34 7.26-1.02 16.19-3.97 23.3 1.21 3.3-3.78 6.85-2.48 10.93-1.54-2.8 6.21 5.01 4.48 8.93 4.59 3.5-2.56-3.93-1.8-5.66-2.9.81-3.36 3.46-4.73 5.72-1.65.62-6.77-7.73-2.95-11.47-2.39-4.62-3.72-4.04-6.24-1.21-9.16 1.51 2.38 8.92-.69 3.92-.6-4.91.24 1.28-4.76 2.67-6.07 1.14 1.84.21 6.44 3.2 5.96 1.08-2.15.66-4.88 2.27-6.77m-135.15.91c-.55 2.92 4.05 2.91 5.86 1.78 1.13-3.34-3.97-1.38-5.86-1.78m136.9-.11c1.32 2.42 4.78 2.09 7.19 2.11-1.31-2.09-4.87-1.83-7.19-2.11Z"
        />
        <Path
            fill="#38313d"
            d="M172.89 166.94c2.32.28 5.88.02 7.19 2.11-2.41-.02-5.87.31-7.19-2.11Z"
        />
        <Path fill="#817e89" d="M204.33 168.19c4.67-.87.46 4.39 0 0Z" />
        <Path
            fill="#91929e"
            d="M199.3 173.95c2.51.82 3.95 6.77.01 4.73-4.21-.77.32-2.11-.01-4.73Z"
        />
        <Path
            fill="#a58b8c"
            d="M75.85 175.97c11.65.06 23.3.03 34.95.01-8.8 1.67-25.4 1.78-34.95-.01Z"
        />
        <Path
            fill="#717080"
            d="M87.35 184.72c3.71.67-.15 4.26-1.42 1.19.35-.3 1.06-.9 1.42-1.19Z"
        />
        <Path fill="#868087" d="M221.33 189.14c5.19-1.64.45 4.85 0 0Z" />
        <Path
            fill="#25232b"
            d="M159.97 203.94c3.49 1.39 9.39 1.95 7.16 6.94 1.76-1.2 12.43 4.63 10.58-.72-1.95-3.72 5.02-2.78 2.79.71 5.25.22 10.02 3.86 15.33 2.24.86 4.27 4.83 9.84 8.23 4.08-10.04-.32 3.38-5.73 5.86-1.18.54 2.96 3.29 5.2 6.3 3.94 2.34 4.22 6.01 7.08 10.32 9.05H4.68c1.32-4.24 4.62-7.6 7.84-10.5 9.29.97 1.97-3.09.31-5.41 8.18-2.63 17.21-1.29 25.49.09 4.48-3.88 5.02 6.92 8.35 2.64-1.48-5.1 5.99-2.93 9.2-4.6 3.8 3.44 7.86-1.63 12.32.39 6.61 1.39 14.79-4.77 19.62 1.88-7.2 3.9 2.75 5.38 5.28 8.48 1.89-5.49 9.05-5.74 12.05-9.75 5.1-.27 10.08.87 14.92 2.36 2.44-1.06 4.81-1.57 7.09.17 4.77-.43 9.23-2.63 13.94-3.48 4.87 1.41 10.19 2.03 14.92-.12 2.37-.15 10.37 2.8 8.83-2.73-2.28-.93-5.82-1.09-4.87-4.48Z"
        />
        <Path fill="#7e7f83" d="M0 227.06c1.64-.35 2.29.3 1.95 1.94H0v-1.94Z" />
    </Svg>
);
