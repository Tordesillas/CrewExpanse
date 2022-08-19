import React from 'react';
import {StyleSheet, View} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {Colors} from '../../utils';

interface Props {
    color?: string;
}

export const CrewExpanse = (props: Props) => (
    <View style={styles.wrapper}>
        <Svg width={300} height={33.37} viewBox="0 0 1699 189">
            <Path
                d="M23.23 17.31C38.67 5.19 58.85 1.46 78.03.94c25.12-.01 50.24-.04 75.36.02-.09 8.51-.13 17.02.02 25.52-25.11.26-50.23-.02-75.34.14-12.4.74-25.74 3.43-34.88 12.51-8.43 8.62-10.63 21.21-10.88 32.82.13 11.9 2.33 24.85 10.99 33.69 9.37 9.27 23.03 11.99 35.73 12.55 25.53 0 51.07.06 76.6-.03-.06 8.58-.1 17.15.02 25.73-26.57-.08-53.15.04-79.73-.06-17.7-.88-36.1-4.25-50.77-14.8-10.83-7.64-18.51-19.28-21.9-32.04C1.52 91.45 1.35 85.61 0 79.98V59.23l.93 1.32c1.45-16.53 8.91-33.02 22.3-43.24ZM640.25 1.12c22.24-.56 44.48-.13 66.73-.25 29.9.15 59.81-.28 89.71.17-.27 8.52-.09 17.05-.1 25.57-40.52-.07-81.04 0-121.56-.04-1.65-.18-3.74.26-3.23 2.44.13 9.92-.37 19.87.28 29.77 37.75.4 75.52.01 113.28.2-.16 8.58.17 17.17-.17 25.75-36.41-.29-72.82-.01-109.23-.14-1.36.19-3.71-.53-4.09 1.36-.22 9.34.01 18.7-.11 28.05.03 1.68-.43 4.61 2.21 4.15 40.89.09 81.78.07 122.67.01-.11 8.58-.16 17.16.03 25.73-52.12-.1-104.24.06-156.36-.08-.14-47.56-.02-95.13-.06-142.69ZM172.94 40.36c27.31.21 54.63-.04 81.94.13 6.28.65 12.88 1.73 18.2 5.38 7.41 5.18 11.58 14.21 11.76 23.13.04 8.05-.07 16.11.05 24.16-9.7-.02-19.42.31-29.11-.18-.12-6.62.06-13.25-.07-19.86-.02-3.38-1.68-6.97-4.85-8.44-2.99-1.65-6.53-1.51-9.83-1.54-12.99.06-25.98-.06-38.97.06-.57 26.86-.01 53.75-.28 80.61-9.65.17-19.31-.06-28.96.12.06-34.52-.18-69.05.12-103.57ZM316.05 53.81c10.25-9.36 24.44-12.58 37.93-13.36 19.03-.02 38.05-.02 57.08-.01 9.48.63 19.78 3.07 26.17 10.66 5.44 5.87 6.79 14.21 6.93 21.91-.56 5.05-1.04 10.25-3.51 14.8-3.33 6.92-10.39 11.15-17.6 13.07-8.5 2.31-17.38 1.45-26.08 1.61-21.55.1-43.11-.21-64.65.16.99 5.87 4.39 11.54 9.64 14.55 4.64 3.38 10.54 3.79 16.08 4.06 26.87.14 53.75-.15 80.62.15-.03 7.5-.12 15.01.05 22.52-25.91-.15-51.82-.02-77.73-.06-12.69.32-25.87-1.5-37.08-7.79-8.78-4.83-15.69-12.9-19.1-22.32-2.5-6.94-3.53-14.36-3.23-21.72-.54-13.92 3.76-28.78 14.48-38.23m26.33 12.73c-5.04 2.73-8.14 7.74-10.02 12.99 1.88.33 3.79.47 5.71.43 23.34-.11 46.69.09 70.02-.09 6.81-.26 9.61-9.67 5.4-14.41-1.91-2.07-4.92-2.3-7.55-2.31-15.67.01-31.33.01-46.99 0-5.66.02-11.58.48-16.57 3.39ZM457.33 40.51c9.67-.08 19.34-.23 29 .09 2.27 26.18 4.22 52.33 6.85 78.47 10.15-3.78 19.86-8.67 29.75-13.07 1.79-.5 1.14-2.63 1.32-3.98-.05-20.54.01-41.09-.03-61.63 8.6.08 17.21.05 25.82.02 1.04.16 3.47-.45 3.22 1.4.28 21.39-.25 42.81.26 64.2 9.28 3.62 18.21 8.06 27.37 11.96 1.13.48 2.35.67 3.57.93 1.86-22.99 3.93-45.95 5.89-68.91.44-3.18.21-6.44 1.08-9.55 9.59.17 19.2-.37 28.77.28-2.37 19.35-3.66 38.79-5.75 58.16-1.17 15.01-3.02 29.96-4.07 44.96-8.47.06-16.93.01-25.4.04-3.16.09-5.81-1.94-8.65-3.01-12.5-5.45-24.93-11.09-37.47-16.43-15.08 5.91-29.72 13.22-44.75 19.35-9.06.06-18.15.3-27.2-.14-2.75-34.43-6.35-68.76-9.58-103.14ZM807.89 40.4c10.68.11 21.36-.04 32.04.07 1.39-.05 1.98 1.51 2.82 2.36 9.14 12.87 18.64 25.48 27.92 38.25 4.47.09 8.95.19 13.43.03 1.03.04 1.83-.37 2.4-1.23 9.71-13.13 19.28-26.36 29.1-39.41 10.94-.1 21.89.03 32.83-.08l-.4 1.48c-12.24 15.94-23.86 32.36-35.96 48.41-.93 1.04-1.44 2.66-.5 3.87 12.28 16.64 24.87 33.05 37.26 49.6-11.14.2-22.3.19-33.44-.01-9.43-12.65-19.04-25.17-28.46-37.82-.61-.74-1.27-1.43-1.98-2.04-4.72-.29-9.46-.12-14.18-.03-10.09 13.17-19.74 26.67-29.84 39.83-11.19.43-22.42.09-33.63.17 12.94-16.98 25.7-34.09 38.62-51.08-10.37-14.69-21.38-28.92-32.01-43.43-2.02-2.97-4.78-5.51-6.02-8.94ZM962.45 40.42c25.52.04 51.04 0 76.56.01 13.35.53 27.26 3.5 37.76 12.28 9.39 7.57 14.49 19.37 15.65 31.19 1.16 13.08-.02 27.14-7.38 38.41-5.81 9.08-15.35 15.3-25.56 18.36-8.87 2.67-18.2 3.46-27.42 3.2-13.6.14-27.22-.3-40.81.23.06 14.38.06 28.76 0 43.14-1.38 1.67-4.26 1.2-6.28 1.38-7.53-.71-15.13.81-22.59-.71.19-49.16.05-98.33.07-147.49m28.85 22.81c-.05 18.28.02 36.55-.03 54.83.07 1.17-.41 3.64 1.65 3.2 11.03.07 22.06 0 33.1.03 8.33-.17 17.35.92 24.91-3.38 7.42-3.63 11.25-11.97 11.83-19.89 1-9.07.37-19.23-5.54-26.65-4.9-5.86-12.81-8.26-20.24-8.19-15.23-.01-30.46-.11-45.68.05ZM1118.6 40.53c30.44-.23 60.89-.02 91.34-.1 7.61-.15 15.49.98 22.24 4.71 8.68 5.43 11.54 16.21 12 25.84v59.03c-.09 4.6.26 9.22-.3 13.81-34.99.12-69.98-.01-104.96.06-8.58.1-17.74-1.73-24.41-7.45-6.69-5.71-9.36-14.85-9.37-23.4-.15-8.67 2.25-18.02 8.9-24 6.96-6.31 16.84-8.11 25.96-7.88 25.09-.04 50.19.16 75.28-.1-.06-5.07.77-11.08-3.23-14.99-3.44-3.42-8.68-2.85-13.09-2.92-25.31.04-50.61-.03-75.91.04-1.44-.21-3.55.53-4.37-1.05-.12-7.2.09-14.4-.08-21.6m17.94 67.03c-1.78 3.34-1.22 7.42.43 10.7 1.9 1.82 4.29 3.08 7.01 2.99 18.01.09 36.03.01 54.05.04 5.67-.25 11.46.49 17.06-.37.31-5.56.3-11.18.01-16.74-4.26-.98-8.77-.17-13.12-.43-19.01 0-38.02.01-57.02-.01-3.19-.12-6.76.89-8.42 3.82ZM1266.46 40.41c29.2.06 58.39.02 87.59.02 7.3-.22 14.83.82 21.46 4.03 9.08 4.97 13.92 15.41 14.11 25.5.06 24.64-.12 49.28.09 73.92-9.56-.14-19.13.21-28.67-.17-.67-23.51-.01-47.12-.32-70.67-.1-2.55-.95-5.15-2.86-6.91-2.83-2.83-7.12-2.99-10.87-2.99-17.23.07-34.45-.08-51.68.08-.05 25.24-.04 50.48 0 75.71-.13 1.6.25 3.33-.38 4.84-9.51.25-19.03.01-28.54.11.17-34.49.03-68.98.07-103.47ZM1438.36 40.48c31.5-.16 63.01.09 94.52-.12-.01 7.49-.02 14.99.06 22.48-9.97.7-19.98.13-29.96.31h-58.94c-3.11-.07-7.05.49-8.41 3.72-3.29 5.24.81 13.6 7.33 13.05 23.01.04 46.01 0 69.02.02 8.16.16 16.81 2.37 22.71 8.33 5.86 5.92 8.03 14.54 7.95 22.66.12 8.46-1.98 17.43-7.85 23.8-5.7 6.38-14.51 8.93-22.82 9.15-34.77-.06-69.53.05-104.29-.06-.19-7.41-.07-14.83-.08-22.25 11.12-.64 22.27-.11 33.4-.28 21.33-.03 42.66.04 63.99-.03 4.17.34 8.85-2.63 8.69-7.17-.04-2.93.67-6.53-1.65-8.81-1.85-2.5-5.17-2.71-8.01-2.79-20.66.01-41.33-.01-61.99.01-8.7.18-17.76-1.38-25.05-6.38-5.74-3.82-9.18-10.31-10.41-16.96-1.31-9.69-.51-20.64 6.31-28.25 6.24-7.38 16.25-9.74 25.48-10.43ZM1567.59 56.81c10.9-12.01 27.73-16.11 43.4-16.39 14.68.03 29.35.01 44.03.02 6.03.06 12.14-.42 18.09.95 7.99 1.3 16 5.11 20.57 12.05 2.79 3.81 3.59 8.56 5.32 12.86v8.63c-1.27 5.05-1.82 10.46-4.89 14.84-5.91 9.33-17.71 12.46-28.13 12.69-26.3.08-52.6-.02-78.9.05.44 4.93 3.06 9.44 6.69 12.72 4.9 4.57 11.83 5.87 18.31 6.01 27.1.25 54.22-.27 81.31.26-.14 7.47-.08 14.95-.05 22.43-28.14-.16-56.28 0-84.41-.08-11.09-.46-22.31-2.87-31.95-8.54l.67-.21c-5.18-2.08-9.19-6.3-12.52-10.65-6.83-9.26-9.42-21.1-8.87-32.45-.55-12.53 2.81-25.71 11.33-35.19m32.3 8.36c-6.33 2.34-11.21 8-12.74 14.57 23.61.47 47.24.04 70.87.21 3.25 0 7.1.42 9.51-2.32 2.78-2.34 2.55-6.3 2.08-9.55-.88-3.29-4.43-4.94-7.61-4.88-15.67-.11-31.35 0-47.02-.06-5.08.05-10.33.06-15.09 2.03Z"
                fill={props.color || Colors.BLUE}
            />
        </Svg>
    </View>
);

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        alignItems: 'center',
        paddingVertical: 65
    }
});
