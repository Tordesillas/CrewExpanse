import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {Colors} from '../../utils';

interface Props {
    size?: number;
    color?: string;
}

export const Cogs = (props: Props) => (
    <Svg width={props.size || 32} height={props.size || 32} viewBox="0 0 444 444">
        <Path
            d="M346.905 116.188c2.73-5.822 3.027-12.361.84-18.408-3.441-9.508-12.541-15.896-22.643-15.896-2.783 0-5.539.486-8.191 1.445-12.484 4.518-18.967 18.35-14.449 30.834 3.439 9.508 12.539 15.896 22.641 15.896 2.783 0 5.539-.488 8.193-1.447 6.047-2.19 10.881-6.602 13.609-12.424zM164.308 264.797c-3.26 0-6.488.57-9.594 1.693-7.082 2.564-12.744 7.732-15.939 14.553-3.197 6.82-3.545 14.477-.982 21.561 4.029 11.137 14.688 18.617 26.52 18.617 3.26 0 6.488-.568 9.594-1.693 14.621-5.291 22.213-21.49 16.922-36.111-4.031-11.137-14.689-18.62-26.521-18.62z"
        />
        <Path
            d="M207.407 201.038c-13.627-6.385-28.102-9.623-43.021-9.623-39.264 0-75.394 22.961-92.047 58.496-23.764 50.711-1.842 111.303 48.869 135.068 13.629 6.387 28.104 9.625 43.023 9.625 39.264 0 75.395-22.961 92.047-58.494 23.764-50.715 1.842-111.307-48.871-135.072zm-25.335 141.058a52.053 52.053 0 0 1-17.76 3.125c-21.904 0-41.631-13.844-49.088-34.451-4.744-13.111-4.1-27.285 1.818-39.912 5.916-12.625 16.396-22.189 29.508-26.936a52.081 52.081 0 0 1 17.758-3.125c21.904 0 41.633 13.846 49.088 34.453 9.793 27.065-4.26 57.051-31.324 66.846z"
        />
        <Path
            d="M164.308 240.797a52.085 52.085 0 0 0-17.758 3.125c-13.111 4.746-23.592 14.311-29.508 26.936-5.918 12.627-6.563 26.801-1.818 39.912 7.457 20.607 27.184 34.451 49.088 34.451a52.057 52.057 0 0 0 17.76-3.125c27.064-9.795 41.117-39.781 31.324-66.846-7.455-20.607-27.184-34.453-49.088-34.453zm9.597 78.731a28.091 28.091 0 0 1-9.594 1.693c-11.832 0-22.49-7.48-26.52-18.617-2.563-7.084-2.215-14.74.982-21.561 3.195-6.82 8.857-11.988 15.939-14.553a28.14 28.14 0 0 1 9.594-1.693c11.832 0 22.49 7.482 26.52 18.619 5.292 14.622-2.299 30.821-16.921 36.112z"
            fill={props.color || Colors.VERY_DARK_BLUE}
        />
        <Path
            d="m304.044 287.366-14.352-.654a126.05 126.05 0 0 0-3.816-24.926l13.535-4.896c6.232-2.256 9.457-9.135 7.201-15.367-2.254-6.232-9.133-9.453-15.367-7.201l-13.533 4.896a126.052 126.052 0 0 0-13.016-21.596l10.607-9.684c4.895-4.469 5.242-12.059.773-16.953-4.467-4.895-12.057-5.242-16.953-.773l-10.586 9.662a124.724 124.724 0 0 0-20.322-14.953l6.084-12.984c2.813-6 .229-13.146-5.771-15.959-6.002-2.811-13.148-.229-15.959 5.773l-6.084 12.982a123.95 123.95 0 0 0-24.496-6.078l.65-14.287c.303-6.619-4.82-12.23-11.441-12.533-6.627-.303-12.232 4.82-12.533 11.441l-.652 14.322a124.874 124.874 0 0 0-24.938 3.818l-4.887-13.51c-2.254-6.232-9.133-9.455-15.365-7.203-6.232 2.254-9.457 9.135-7.203 15.367l4.91 13.572a126.823 126.823 0 0 0-21.563 13.033l-9.73-10.662c-4.467-4.895-12.057-5.242-16.953-.773-4.895 4.467-5.242 12.057-.773 16.953l9.709 10.639a124.956 124.956 0 0 0-14.979 20.281l-13.006-6.096c-6.002-2.811-13.145-.227-15.957 5.775-2.813 6-.227 13.145 5.773 15.957l12.984 6.084a124.696 124.696 0 0 0-6.051 24.498l-14.316-.654c-6.627-.305-12.232 4.82-12.535 11.441-.303 6.621 4.82 12.232 11.441 12.533l14.35.654a126.124 126.124 0 0 0 3.816 24.926l-13.535 4.898c-6.232 2.254-9.455 9.135-7.201 15.367 1.767 4.883 6.375 7.92 11.285 7.92 1.355 0 2.734-.232 4.082-.719l13.535-4.898a125.925 125.925 0 0 0 13.016 21.596l-10.609 9.684c-4.894 4.467-5.24 12.059-.773 16.953a11.966 11.966 0 0 0 8.867 3.91 11.96 11.96 0 0 0 8.086-3.137l10.586-9.662a124.654 124.654 0 0 0 20.324 14.953l-6.084 12.984c-2.813 6-.229 13.145 5.773 15.957a11.962 11.962 0 0 0 5.084 1.137c4.512 0 8.834-2.555 10.875-6.91l6.082-12.98a123.88 123.88 0 0 0 24.496 6.078l-.65 14.285c-.301 6.621 4.82 12.232 11.441 12.533.186.01.371.014.555.014 6.377 0 11.686-5.02 11.979-11.455l.652-14.32a124.835 124.835 0 0 0 24.936-3.82l4.889 13.51c1.768 4.885 6.375 7.92 11.285 7.92 1.355 0 2.734-.23 4.082-.719 6.232-2.256 9.457-9.135 7.201-15.367l-4.91-13.57a126.796 126.796 0 0 0 21.561-13.031l9.734 10.66a11.962 11.962 0 0 0 8.865 3.91c2.889 0 5.785-1.037 8.088-3.139 4.895-4.469 5.238-12.059.772-16.953l-9.711-10.637a124.902 124.902 0 0 0 14.98-20.281l13.004 6.096a11.95 11.95 0 0 0 5.084 1.137 12 12 0 0 0 10.873-6.91c2.813-6 .229-13.145-5.771-15.957l-12.986-6.086a124.693 124.693 0 0 0 6.051-24.494l14.318.652c.188.01.371.014.557.014 6.375 0 11.684-5.02 11.979-11.453.299-6.621-4.822-12.233-11.443-12.535zm-47.765 48.744c-16.652 35.533-52.783 58.494-92.047 58.494-14.92 0-29.395-3.238-43.023-9.625-50.711-23.766-72.633-84.357-48.869-135.068 16.652-35.535 52.783-58.496 92.047-58.496 14.92 0 29.395 3.238 43.021 9.623 50.712 23.765 72.634 84.357 48.871 135.072z"
            fill={props.color || Colors.VERY_DARK_BLUE}
        />
        <Path
            d="M383.665 133.415c7.33-15.643 8.131-33.203 2.252-49.447-5.877-16.246-17.729-29.229-33.371-36.559-8.678-4.068-17.895-6.131-27.393-6.131-25.002 0-48.01 14.621-58.613 37.25-7.33 15.643-8.131 33.203-2.254 49.447 5.879 16.244 17.729 29.229 33.371 36.557 8.68 4.068 17.898 6.131 27.395 6.131 25.004 0 48.01-14.621 58.613-37.248zm-42.203 17.765a47.95 47.95 0 0 1-16.359 2.879c-20.176 0-38.344-12.752-45.209-31.73-9.02-24.928 3.922-52.547 28.852-61.568a47.938 47.938 0 0 1 16.357-2.877c20.176 0 38.344 12.752 45.211 31.732 4.369 12.074 3.773 25.129-1.676 36.758-5.449 11.626-15.102 20.437-27.176 24.806z"
            fill={props.color || Colors.BLUE}
        />
        <Path
            d="M370.314 89.616c-6.867-18.98-25.035-31.732-45.211-31.732-5.576 0-11.078.967-16.357 2.877-24.93 9.021-37.871 36.641-28.852 61.568 6.865 18.979 25.033 31.73 45.209 31.73a47.95 47.95 0 0 0 16.359-2.879c12.074-4.369 21.727-13.18 27.176-24.807 5.449-11.628 6.045-24.683 1.676-36.757zm-67.852 24.547c-4.518-12.484 1.965-26.316 14.449-30.834a24.024 24.024 0 0 1 8.191-1.445c10.102 0 19.201 6.389 22.643 15.896 2.188 6.047 1.891 12.586-.84 18.408-2.728 5.822-7.563 10.234-13.609 12.424a24.046 24.046 0 0 1-8.193 1.447c-10.102 0-19.201-6.389-22.641-15.896z"
            fill={props.color || Colors.VERY_DARK_BLUE}
        />
        <Path
            d="m419.622 98.266-6.188-.281a89.144 89.144 0 0 0-4.949-22.184 89.1 89.1 0 0 0-10.389-20.213l4.57-4.172c4.895-4.469 5.242-12.059.773-16.953-4.467-4.894-12.057-5.242-16.953-.773l-4.57 4.172a89.171 89.171 0 0 0-19.186-12.186 88.625 88.625 0 0 0-21.641-6.949l.281-6.18c.303-6.621-4.82-12.232-11.441-12.535-6.603-.296-12.23 4.82-12.533 11.441l-.283 6.207c-15.359 1.412-29.92 6.816-42.338 15.379l-4.23-4.635c-4.469-4.895-12.057-5.238-16.953-.773-4.895 4.469-5.24 12.059-.773 16.953l4.213 4.613a88.005 88.005 0 0 0-12.225 19.146 89.167 89.167 0 0 0-6.945 21.639l-6.184-.281c-6.633-.313-12.232 4.822-12.535 11.441-.301 6.621 4.822 12.232 11.443 12.533l6.182.281a89.233 89.233 0 0 0 15.34 42.397l-4.572 4.174c-4.895 4.467-5.24 12.059-.771 16.953a11.967 11.967 0 0 0 8.865 3.908c2.889 0 5.785-1.037 8.088-3.137l4.57-4.174a89.189 89.189 0 0 0 19.185 12.186 88.583 88.583 0 0 0 21.643 6.949l-.283 6.182c-.301 6.621 4.822 12.232 11.441 12.533.188.01.371.014.557.014 6.375 0 11.686-5.02 11.978-11.455l.283-6.207c15.359-1.412 29.92-6.816 42.336-15.379l4.232 4.635a11.962 11.962 0 0 0 8.865 3.91c2.889 0 5.787-1.037 8.088-3.139 4.895-4.469 5.238-12.059.77-16.953l-4.209-4.611a87.994 87.994 0 0 0 12.223-19.145 89.254 89.254 0 0 0 6.945-21.639l6.184.281c.188.01.373.014.557.014 6.377 0 11.686-5.02 11.979-11.453.302-6.62-4.821-12.231-11.44-12.534zm-121.965 66.266c-15.643-7.328-27.492-20.313-33.371-36.557-5.877-16.244-5.076-33.805 2.254-49.447 10.604-22.629 33.611-37.25 58.613-37.25 9.498 0 18.715 2.063 27.393 6.131 15.642 7.33 27.494 20.313 33.371 36.559 5.879 16.244 5.078 33.805-2.252 49.447-10.603 22.627-33.609 37.248-58.613 37.248-9.496 0-18.715-2.063-27.395-6.131z"
            fill={props.color || Colors.VERY_DARK_BLUE}
        />
    </Svg>
);
