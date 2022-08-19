import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface Props {
    size?: number;
}

export const Token1 = (props: Props) => (
    <Svg width={props.size || 32} height={props.size || 32} viewBox="0 0 231 231">
        <Path
            fill="#6a666b"
            d="M0 0h212.38c-2.54 3.51-5.48 5.12-9.59 3.5-4.91-.48-10.56 2.8-15.02-.19-1.91-.57-5.49 3.91-4.1-.32-10.33.61-20.32.98-30.46 1.33-10.35.1-20.7-1.26-31.08-.75-7.54-2.31-15.22-.46-22.54.96-16.84-2.4-34.88.59-51.7-.38-4.17-6.17-.05 5.61-6.72 3.24 3.88-4.87-1.4-3.05-4.82-2.34 1.23-4.54-5.23.6-8.01-.54-3.52-2.02-6.61 1.54-10.2-.56 5.87-5.68-9.36 3.48-4.7-1.55 1.06-1.52-3.16.21-3.51 1.48C8 5.46 6.02 3.61 4.45 2.44 2.75 3.45 1.44 4.97 0 6.3V0Z"
        />
        <Path
            fill="#504a4e"
            d="M212.38 0H231v3.07c-4.18-4.04-3.36 1.85-7.78.38-5.8 3.01-12.07-.04-17.64 3.57.27-1.88-1.43-2.67-2.79-3.52 4.11 1.62 7.05.01 9.59-3.5Z"
        />
        <Path
            fill="#2f2d36"
            d="M223.22 3.45c4.42 1.47 3.6-4.42 7.78-.38v223.88c-1.3.88-2.62 1.84-4.22 2.06 4.69-5.76.98-12.97-1.46-18.97 5.14.69.19-3.43-1.89-4.36-3.14.44-6.61.77-9.57 2.37.4-2.05 3.13-2.73 3.21-4.89-.92-1.18-4.27-2.84-2.48-4.34 3.82-.41 9.36-1.19 10.99-1.26-2.68 5.15 5.03-.38.74-1.71-4.24-.92-9.34 1.06-13.03-2.15-2.31-1.99-3.2 1.67-4.42 3.02-2.49-3.35-6.39-2.5-9.89-1.52 2.22 4.98 11.56 1.88 11.01 7.6-3.18-1.22-7.3 3.5-5.08-1.99-6.32 3.54 1 3.84 2.24 7.19-3.53.58-6.82-.74-9.36-3-2.43 1.96-2.81 4.8-1.82 7.64-1.48-.27-4.03.68-4.12-1.57 4.79.4-.22-4.72 0 0-2.22-3.35-9.58-1.3-9.43-6.3-1.94 1.38-3.79 6.11-6.16 2.96-2.53-4.11-7.4 2.79-9.47-1.52 3.87-1.18 7.88-1.42 11.86-1.87 1.77-1.47 6.24-4.36-2.24-2.78-5.28-1.34 6.49-9.41-3.98-5.19-4.15 1.63-15.21-1.63-12.81 5.82-3.06-1.5-5.57-2.76-5.64 1.69-3.2-4.56-8.37-3.24-13.17-2.92 2.38-3.14 9.76-2.23 2.32-3.19 3.01-4.97-3.42-3.72-5-.63-1.73 5.54-7.84 3.84-12.21 4.63 1.7-3.27 4.85-6.14 6.9-9.91 2.84 4.32 2.5-1.45 3.06-3.89-1.85.77-9.33-1.85-8.82 2.7 1.03.46 3.97.05 2.31 1.77-2.74 3.96-9.6 2.49-12.07 7.01-.87 1.35-2.41 1.66-2.83-.24-1.75 1.22-.49 4.06-2.03 5.66 4.98-.16 5 4.7.59 1.25 3.36 6.49-3.35 4.04-3.52 8.64-3.19 1.43-4.91-2.73-7.89-2.93-.02 1.63-.43 3.84-2.63 3.21-1.12-3.55 2.81-3.92 5.06-5.25-2.27-4.55-8.54-.24-6.29 3.97-4.91 4.46-2.88-7.78-8.11-4.19-1.8 3.36-5.81 5.43-9.29 2.8-1.86 7.9-6.82.43-7.66-3.88-6.97 2.84.31-5.37 3.6-4.2 1.32-2.49-5.14-2.72-5.85-5.82-3.58 2.78-11.76 2.54-17.47 1.62-4.91-.37-3-9.48-8.66-6.81-3.71.43-2.13 3.73.2 4.94-1.55 3.07-.79 6.53.62 9.5-6.75-2.3-2.76 5.62-6.03 7.35-1.49-2.37-1.75-5.23-2.45-7.88-4.92.33-10.03.19-14.7 1.94 6.63 3.56-1.13 7.49-5.18 4.24-3.62.9-7.95 2.51-10.75-1.12-3.27 1.99-1.33 5.18-.16 7.83-.92 2.52-3.73 3.7-5.87 5.06v-50.96c6.41-.89 2.77-9.93 11.31-5.02-1.49 2.31-5.41 1.09-5.99 4.16-1.54 3.07 2.16 1.21 2.21-.73 2.32-.43 9.2-1.77 4.69-4.1 5-5.03 10.07-10.03 15.02-15.12 8.38 2.52 17.06-1.76 25.35-3.27.42 2.32 1.4 4.42 3.15 6.02-.04-4.05 1.94-9.18 6.46-9.81 5.05-6.14 12.72-5.69 19.79-4.18.16 5.1-5.68 4.8-7.04 8.78 3.12 2.58 3.58 3.54-.77 2.16-.38 2.93 1.79 5.42 4.83 4.24 3.03 7.54-2.27 5.23-6.02 4.66.31 2.79 2.44 2.67 4.67 2.29 1.28 3.48 4.77 7.87-3 6.45-3.29 5.29 5.08 2.98 7.38 5.8-6.99 2.07-1.21 1.95 1.88 4.63-.04 3.91-5.9 1.59-5.03 5.58 4.82-1.23 9.06-1.13 13.66.75 2.22-4.93 5.34-.36 4.37 3.22-6.46.5 2.42 1.57 2.02 5.24-1.89.96-3.97.53-5.97.3-2.22 4.73 9.63 9.46 8.4 3.05 1.77-2.75 7.58 2.03 5.91-2.43-1.84-3.46 7.4-2.64 3.42-5.54-1.3-3.65-7.79.38-4.19-3.62-.75-2.19-6.19-1.04-8.76-.85 2.81-4.32 14.75-1.63 13.66-7.9 6.31.85 13.06 1.38 18.6 4.75 2.5-2.96 3.98-.67 5.47 1.59.03-2.42.27-4.83.56-7.23 3.08-.82 7.61 1.13 10.22-.83.52-9.82 2.42-23.84-.28-32.18-3-.1-5.98.06-8.97-.08-.32-12.01.58-24.07-.36-36.05l-.04-.75c.63-16.1.55-32.24.15-48.35-4.58-2.1-12.48-.25-18.54-.97-6.47-.58-14.95-3.6-20.58.73l-.53.53c-3.17-1.74.71-2.52-2.26-4.92 13.54-.13-6.48-3.21-1.98-9.25.7-2.22-.44-3.2-2.62-3.06 2.26-2 1.47-5.86 4.65-6.95 3.57-1.88-6.71-1-2.39-3.28-3.64-2.68 3.54-.64.09-2.99 1.09-1.73.49-3.55-.15-5.31 1.33-.5 5.18-1.77 1.9-2.63 3.73-2.66-2.98-.53-.16-3.43.53-3.24 10.75 1.34 7.82-4.29-2.72-3.28 5.88-1.54 2.54-6.62.13-2.39 2.17.3 3.31.59-5.32 4.53 9.05 4.83 8.81 3.29-2.61-1.81-6.19-1.36-8.81-3.29 1.08-2.82 3.73-1.1 5.83-.69 10.99.88 21.96 1.03 32.7-2.3-.9 4.9 7.24 3.1 6.82-.65 10.14-.35 20.13-.72 30.46-1.33-1.39 4.23 2.19-.25 4.1.32 4.46 2.99 10.11-.29 15.02.19 1.36.85 3.06 1.64 2.79 3.52 5.57-3.61 11.84-.56 17.64-3.57M61.36 175.22c-3.98 5.18 4.44.4 0 0m19.8 12.77c.55 1.41-.87 5 1.76 3.96 3.63-.19 1.03-5.34-1.76-3.96Z"
        />
        <Path
            fill="#3d3f4d"
            d="M0 6.3c1.44-1.33 2.75-2.85 4.45-3.86C6.02 3.61 8 5.46 9.93 3.88c2.5 2.41-1.78 7.22 2.39 7.84 2.66 1.83 6.28-3.6 7.7.08-2.31.84-4.82 1.11-6.99 2.31-.26 2.01 3.85 1.07 3.64 2.78-1.85.49-3.73.85-5.59 1.28 2.19 1.7 4.07 3.62 3.17 6.62 3.54 2.04 8.09.79 11.41-1.14-3.35-4.93 5.13-6.23 8.58-7.23-3.43.11-3.53-1.39-1.31-3.44.21 4.35 5.33-1.47 0 0 1.12-1.45 2.54-2.68 4.48-2.4.59-2.06 1.14-4.16 3.76-3.19 6.67 2.37 2.55-9.41 6.72-3.24 16.82.97 34.86-2.02 51.7.38 7.32-1.42 15-3.27 22.54-.96 10.38-.51 20.73.85 31.08.75.42 3.75-7.72 5.55-6.82.65-10.74 3.33-21.71 3.18-32.7 2.3-2.1-.41-4.75-2.13-5.83.69-1.14-.29-3.18-2.98-3.31-.59 3.34 5.08-5.26 3.34-2.54 6.62 2.93 5.63-7.29 1.05-7.82 4.29-2.82 2.9 3.89.77.16 3.43 3.28.86-.57 2.13-1.9 2.63.64 1.76 1.24 3.58.15 5.31 3.45 2.35-3.73.31-.09 2.99-4.32 2.28 5.96 1.4 2.39 3.28-3.18 1.09-2.39 4.95-4.65 6.95 2.18-.14 3.32.84 2.62 3.06-2.93-.62-5.83-1.45-8.76-2.09.88 1.42 1.83 2.79 2.75 4.17-5.66.1-12.18-.86-14.95-6.08 1.99.71 3.82 1.91 5.96 2.16.16-1.4-.44-6.8-2.13-3.64-3.32-4.39-15.98.45-11.76 4.85-4.79-4.12-8.51 1.63-12.32 3.91-3.82 1.21-4.65 5.82-8.5 7.04.39 2.02 4.11 1.55 5.75 2.8-1.67 2.87-6.45 5.61-2.21 8.49-6.56 2.03-9.5 8.47-14.75 12.38 3.59 1.33 5.91-3.53 9.09.83-5.88-.6.59 5.79-2.65 8.54-1.02 5.7-8.34-2.31-9.02 3.38 1.23 4.04-7.83 6.94-3.52 2.57-3.18-.35-4.47-1.63-2.03-4.13-4.04.76-1.09-1.81-.91-4-5.41 2.04-10.08-3.93-7.56-7.92 1.39 3.14 12.93-1.89 5.69-1.34 4.24-2.58-2.95-.89.2-4.54 2.53-4.37-3.92-1.61-5.78-.23.12-4.95-7.19-3.06-10.33-2.4-3.44-1.4-1.74 3.28-5.13 2.62v-67m33.22 79.94c-5.8 2.3 5.13 2.16 0 0Z"
        />
        <Path
            fill="#4e5263"
            d="M9.93 3.88c.35-1.27 4.57-3 3.51-1.48-4.66 5.03 10.57-4.13 4.7 1.55 3.59 2.1 6.68-1.46 10.2.56 2.78 1.14 9.24-4 8.01.54 3.42-.71 8.7-2.53 4.82 2.34-2.62-.97-3.17 1.13-3.76 3.19-1.94-.28-3.36.95-4.48 2.4-2.22 2.05-2.12 3.55 1.31 3.44-3.45 1-11.93 2.3-8.58 7.23-3.32 1.93-7.87 3.18-11.41 1.14.9-3-.98-4.92-3.17-6.62 1.86-.43 3.74-.79 5.59-1.28.21-1.71-3.9-.77-3.64-2.78 2.17-1.2 4.68-1.47 6.99-2.31-1.42-3.68-5.04 1.75-7.7-.08-4.17-.62.11-5.43-2.39-7.84Z"
        />
        <Path
            fill="#525159"
            d="M107.86 7.96c2.62 1.93 6.2 1.48 8.81 3.29.24 1.54-14.13 1.24-8.81-3.29Z"
        />
        <Path fill="#5a5f6a" d="M32.93 12.98c.21 4.35 5.33-1.47 0 0Z" />
        <Path
            fill="#34333f"
            d="M63.98 45.3c-4.22-4.4 8.44-9.24 11.76-4.85 1.69-3.16 2.29 2.24 2.13 3.64-2.14-.25-3.97-1.45-5.96-2.16 2.77 5.22 9.29 6.18 14.95 6.08-.92-1.38-1.87-2.75-2.75-4.17 2.93.64 5.83 1.47 8.76 2.09-4.5 6.04 15.52 9.12 1.98 9.25 2.97 2.4-.91 3.18 2.26 4.92-7.36 8-15.96 14.72-23.87 22.16 5.74 9.08 10.24 18.85 15.8 28.04 2.58-2.25 4.47-5.14 6.87-7.58.12 14.06.24 28.13.01 42.18-2.73.04-8.18.11-10.9.14-2.18 9.57-.79 22.89-.91 34.01 1.4-.11 2.78-.37 4.16-.64 15.93.09 31.84-.82 47.77-.36-.29 2.4-.53 4.81-.56 7.23-1.49-2.26-2.97-4.55-5.47-1.59-5.54-3.37-12.29-3.9-18.6-4.75 1.09 6.27-10.85 3.58-13.66 7.9 2.57-.19 8.01-1.34 8.76.85-3.6 4 2.89-.03 4.19 3.62 3.98 2.9-5.26 2.08-3.42 5.54 1.67 4.46-4.14-.32-5.91 2.43 1.23 6.41-10.62 1.68-8.4-3.05 2 .23 4.08.66 5.97-.3.4-3.67-8.48-4.74-2.02-5.24.97-3.58-2.15-8.15-4.37-3.22-4.6-1.88-8.84-1.98-13.66-.75-.87-3.99 4.99-1.67 5.03-5.58-3.09-2.68-8.87-2.56-1.88-4.63-2.3-2.82-10.67-.51-7.38-5.8 7.77 1.42 4.28-2.97 3-6.45-2.23.38-4.36.5-4.67-2.29 3.75.57 9.05 2.88 6.02-4.66-3.04 1.18-5.21-1.31-4.83-4.24 4.35 1.38 3.89.42.77-2.16 1.36-3.98 7.2-3.68 7.04-8.78-7.07-1.51-14.74-1.96-19.79 4.18-4.52.63-6.5 5.76-6.46 9.81-1.75-1.6-2.73-3.7-3.15-6.02-8.29 1.51-16.97 5.79-25.35 3.27-4.95 5.09-10.02 10.09-15.02 15.12 4.51 2.33-2.37 3.67-4.69 4.1-.05 1.94-3.75 3.8-2.21.73.58-3.07 4.5-1.85 5.99-4.16-8.54-4.91-4.9 4.13-11.31 5.02v-68.71c.72-3.32 1.82-6.9 0-10.05V73.3c3.39.66 1.69-4.02 5.13-2.62 3.14-.66 10.45-2.55 10.33 2.4 1.86-1.38 8.31-4.14 5.78.23-3.15 3.65 4.04 1.96-.2 4.54 7.24-.55-4.3 4.48-5.69 1.34-2.52 3.99 2.15 9.96 7.56 7.92-.18 2.19-3.13 4.76.91 4-2.44 2.5-1.15 3.78 2.03 4.13-4.31 4.37 4.75 1.47 3.52-2.57.68-5.69 8 2.32 9.02-3.38 3.24-2.75-3.23-9.14 2.65-8.54-3.18-4.36-5.5.5-9.09-.83 5.25-3.91 8.19-10.35 14.75-12.38-4.24-2.88.54-5.62 2.21-8.49-1.64-1.25-5.36-.78-5.75-2.8 3.85-1.22 4.68-5.83 8.5-7.04 3.81-2.28 7.53-8.03 12.32-3.91m14.34 68.95c2.52 3.27 4.94-2.27 0 0Z"
        />
        <Path
            fill="#414161"
            d="M97.64 59.57c5.63-4.33 14.11-1.31 20.58-.73-6.85.29-13.79-.45-20.58.73Z"
        />
        <Path
            fill="#d2ced6"
            d="M97.64 59.57c6.79-1.18 13.73-.44 20.58-.73 6.06.72 13.96-1.13 18.54.97-1.1 16.03-1.39 32.35-.15 48.35l.04.75c-.34 11.5-2.16 26.07.36 36.05 2.99.14 5.97-.02 8.97.08.01 10.72-.07 21.45.28 32.18-2.61 1.96-7.14.01-10.22.83-15.93-.46-31.84.45-47.77.36-.79-.16-2.38-.47-3.18-.63-.27-10.91-.05-21.83-.07-32.74 2.72-.03 8.17-.1 10.9-.14.23-14.05.11-28.12-.01-42.18-2.4 2.44-4.29 5.33-6.87 7.58-5.56-9.19-10.06-18.96-15.8-28.04 7.91-7.44 16.51-14.16 23.87-22.16l.53-.53m3.4 4.44C94.27 69.88 86.51 75.9 81 83.05c1.52 6 5.76 11.11 8.29 16.75 4.72-.13 7.13-5.83 10.73-8.24 2.56 18.87-.16 38.61 1.32 57.78-2.87.25-9.54-2.27-10.34.7-3.05 4.22.11 14.32-.86 20.26l-.33.89c.98 5.13 8.33-.28 11.19 1.77 12.93-.64 28.79 1.43 39.93-.97.29-7.66.04-15.33.03-22.99-1.58-.05-3.15.08-4.71.3-9.89.81-.46-15.81-5.25-19.29.03-3 .01-6.02 0-9.01l.96-.02c-.53-18.66 1.3-39.91-.92-56.95-.2-.18-.59-.56-.79-.75-9.52-.28-21.43-1.31-29.21.73Z"
        />
        <Path
            fill="#a3a0a5"
            d="M136.61 108.16c-1.24-16-.95-32.32.15-48.35.4 16.11.48 32.25-.15 48.35Z"
        />
        <Path
            fill="#947088"
            d="M101.04 64.01c7.78-2.04 19.69-1.01 29.21-.73-9.69 1.3-19.47.56-29.21.73Z"
        />
        <Path
            fill="#553e74"
            d="M130.25 63.28c.2.19.59.57.79.75-.08 18.99-.04 37.98-.04 56.97.01 2.99.03 6.01 0 9.01 2.31 5.56-5.43 22.88 5.25 19.29 1.56-.22 3.13-.35 4.71-.3.01 7.66.26 15.33-.03 22.99-16.98-.87-34.31 1.59-51.12-.8l.33-.89c4.18-6.17-.24-13.39.86-20.26 3.4-.29 7.09.69 10.34-.7 1.44-19.3.44-38.99.56-58.44-.47.17-1.41.5-1.88.66-3.6 2.41-6.01 8.11-10.73 8.24-2.53-5.64-6.77-10.75-8.29-16.75 5.51-7.15 13.27-13.17 20.04-19.04 9.74-.17 19.52.57 29.21-.73Z"
        />
        <Path
            fill="#a79ebc"
            d="M131.04 64.03c2.22 17.04.39 38.29.92 56.95l-.96.02c0-18.99-.04-37.98.04-56.97Z"
        />
        <Path fill="#7d8192" d="M33.22 86.24c5.13 2.16-5.8 2.3 0 0Z" />
        <Path
            fill="#9a8ba5"
            d="M100.02 91.56c.47-.16 1.41-.49 1.88-.66-.12 19.45.88 39.14-.56 58.44-1.48-19.17 1.24-38.91-1.32-57.78Z"
        />
        <Path fill="#89898d" d="M0 95.42c1.82 3.15.72 6.73 0 10.05V95.42Z" />
        <Path
            fill="#a7a1a9"
            d="M137.01 144.96c-2.52-9.98-.7-24.55-.36-36.05.94 11.98.04 24.04.36 36.05Z"
        />
        <Path fill="#9d9aaa" d="M78.32 114.25c4.94-2.27 2.52 3.27 0 0Z" />
        <Path
            fill="#9f91af"
            d="M131 130.01c4.79 3.48-4.64 20.1 5.25 19.29-10.68 3.59-2.94-13.73-5.25-19.29Z"
        />
        <Path
            fill="#6e6e75"
            d="M84.11 179.05c.12-11.12-1.27-24.44.91-34.01.02 10.91-.2 21.83.07 32.74.8.16 2.39.47 3.18.63-1.38.27-2.76.53-4.16.64Z"
        />
        <Path
            fill="#969198"
            d="M145.98 145.04c2.7 8.34.8 22.36.28 32.18-.35-10.73-.27-21.46-.28-32.18Z"
        />
        <Path
            fill="#9c7997"
            d="M91 150.04c.8-2.97 7.47-.45 10.34-.7-3.25 1.39-6.94.41-10.34.7Z"
        />
        <Path
            fill="#776286"
            d="M90.14 170.3c.97-5.94-2.19-16.04.86-20.26-1.1 6.87 3.32 14.09-.86 20.26Z"
        />
        <Path
            fill="#8d98ba"
            d="M89.81 171.19c16.81 2.39 34.14-.07 51.12.8-11.14 2.4-27 .33-39.93.97-2.86-2.05-10.21 3.36-11.19-1.77Z"
        />
        <Path fill="#97949a" d="M61.36 175.22c4.44.4-3.98 5.18 0 0Z" />
        <Path
            fill="#6d6771"
            d="M81.16 187.99c2.79-1.38 5.39 3.77 1.76 3.96-2.63 1.04-1.21-2.55-1.76-3.96Z"
        />
        <Path
            fill="#27242c"
            d="M127.06 190.67c-.51-4.55 6.97-1.93 8.82-2.7-.56 2.44-.22 8.21-3.06 3.89-2.05 3.77-5.2 6.64-6.9 9.91 4.37-.79 10.48.91 12.21-4.63 1.58-3.09 8.01-4.34 5 .63 7.44.96.06.05-2.32 3.19 4.8-.32 9.97-1.64 13.17 2.92.07-4.45 2.58-3.19 5.64-1.69-2.4-7.45 8.66-4.19 12.81-5.82 10.47-4.22-1.3 3.85 3.98 5.19 8.48-1.58 4.01 1.31 2.24 2.78-3.98.45-7.99.69-11.86 1.87 2.07 4.31 6.94-2.59 9.47 1.52 2.37 3.15 4.22-1.58 6.16-2.96-.15 5 7.21 2.95 9.43 6.3.09 2.25 2.64 1.3 4.12 1.57-.99-2.84-.61-5.68 1.82-7.64 2.54 2.26 5.83 3.58 9.36 3-1.24-3.35-8.56-3.65-2.24-7.19-2.22 5.49 1.9.77 5.08 1.99.55-5.72-8.79-2.62-11.01-7.6 3.5-.98 7.4-1.83 9.89 1.52 1.22-1.35 2.11-5.01 4.42-3.02 3.69 3.21 8.79 1.23 13.03 2.15 4.29 1.33-3.42 6.86-.74 1.71-1.63.07-7.17.85-10.99 1.26-1.79 1.5 1.56 3.16 2.48 4.34-.08 2.16-2.81 2.84-3.21 4.89 2.96-1.6 6.43-1.93 9.57-2.37 2.08.93 7.03 5.05 1.89 4.36 2.44 6 6.15 13.21 1.46 18.97-15.59 3.59-31.99-2.24-47.34 1.99h-10.99c-12.11-.97-24.31-2.57-36.44-.94-3.32-1.27-9.27 2.29-11.44-1.71-.57-1.72-1.83-.5-2.85.01-1.31.6-2.58 1.32-3.29 2.64H59.5c-2.36-3.18-9.64-2.17-13.05 0h-29.9c-3.89-3.85-10.13-1.24-15.12-2.05.15-1.46.77-3.27-1.43-3.19v-.62c2.14-1.36 4.95-2.54 5.87-5.06-1.17-2.65-3.11-5.84.16-7.83 2.8 3.63 7.13 2.02 10.75 1.12 4.05 3.25 11.81-.68 5.18-4.24 4.67-1.75 9.78-1.61 14.7-1.94.7 2.65.96 5.51 2.45 7.88 3.27-1.73-.72-9.65 6.03-7.35-1.41-2.97-2.17-6.43-.62-9.5-2.33-1.21-3.91-4.51-.2-4.94 5.66-2.67 3.75 6.44 8.66 6.81 5.71.92 13.89 1.16 17.47-1.62.71 3.1 7.17 3.33 5.85 5.82-3.29-1.17-10.57 7.04-3.6 4.2.84 4.31 5.8 11.78 7.66 3.88 3.48 2.63 7.49.56 9.29-2.8 5.23-3.59 3.2 8.65 8.11 4.19-2.25-4.21 4.02-8.52 6.29-3.97-2.25 1.33-6.18 1.7-5.06 5.25 2.2.63 2.61-1.58 2.63-3.21 2.98.2 4.7 4.36 7.89 2.93.17-4.6 6.88-2.15 3.52-8.64 4.41 3.45 4.39-1.41-.59-1.25 1.54-1.6.28-4.44 2.03-5.66.42 1.9 1.96 1.59 2.83.24 2.47-4.52 9.33-3.05 12.07-7.01 1.66-1.72-1.28-1.31-2.31-1.77Z"
        />
        <Path fill="#808086" d="M191.85 211.07c4.79.4-.22-4.72 0 0Z" />
        <Path
            fill="#403e45"
            d="M0 225.76c2.2-.08 1.58 1.73 1.43 3.19 4.99.81 11.23-1.8 15.12 2.05H0v-5.24Z"
        />
        <Path
            fill="#3e3a3e"
            d="M117.72 228.36c1.02-.51 2.28-1.73 2.85-.01 2.17 4 8.12.44 11.44 1.71 12.13-1.63 24.33-.03 36.44.94H119c1.06-1.54.77-2.55-1.28-2.64Z"
        />
        <Path
            fill="#444147"
            d="M226.78 229.01c1.6-.22 2.92-1.18 4.22-2.06V231h-51.56c15.35-4.23 31.75 1.6 47.34-1.99Z"
        />
        <Path fill="#575457" d="M46.45 231c3.41-2.17 10.69-3.18 13.05 0H46.45Z" />
        <Path
            fill="#858488"
            d="M114.43 231c.71-1.32 1.98-2.04 3.29-2.64 2.05.09 2.34 1.1 1.28 2.64h-4.57Z"
        />
    </Svg>
);
