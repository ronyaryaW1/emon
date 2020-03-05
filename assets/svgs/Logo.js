import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { COLOR_BASE_PRIMARY_LIGHT } from '../../app/styles';

const SvgLogo = props => {
    const strokeWidth = props.active ? 1.4 : 0.7;
    return (
        <Svg height={67} width={192} viewBox="0 0 192 67" {...props}>
            <Path
                d="M131.7 19.6C130.567 19.6667 129.75 19.8 129.25 20C128.75 20.2 128.4 20.5833 128.2 21.15C128.033 21.7167 127.95 22.6333 127.95 23.9V48.7C127.95 49.9667 128.033 50.8833 128.2 51.45C128.4 52.0167 128.75 52.4 129.25 52.6C129.783 52.8 130.6 52.9333 131.7 53V54C129.867 53.9 127.25 53.85 123.85 53.85C120.283 53.85 117.65 53.9 115.95 54V53C117.15 52.9333 118.017 52.8 118.55 52.6C119.117 52.4 119.5 52.0167 119.7 51.45C119.9 50.8833 120 49.9667 120 48.7V22.55L107.95 54.05H107.15L93.65 21.85V45.8C93.65 47.7667 93.75 49.2167 93.95 50.15C94.15 51.05 94.5833 51.7167 95.25 52.15C95.9167 52.55 97 52.8333 98.5 53V54C97.2 53.9 95.4 53.85 93.1 53.85C91.2667 53.85 89.8167 53.9 88.75 54V53C89.85 52.8333 90.65 52.55 91.15 52.15C91.6833 51.75 92.0333 51.1167 92.2 50.25C92.4 49.3833 92.5 48.1 92.5 46.4V23.9C92.5 22.6333 92.4 21.7167 92.2 21.15C92.0333 20.5833 91.6833 20.2 91.15 20C90.65 19.8 89.85 19.6667 88.75 19.6V18.6C89.8167 18.7 91.2667 18.75 93.1 18.75C96.1667 18.75 98.8 18.7 101 18.6L111.1 42.95L120.3 18.75H123.85C127.25 18.75 129.867 18.7 131.7 18.6V19.6ZM146.51 27.45C150.343 27.45 153.343 28.55 155.51 30.75C157.677 32.9167 158.76 36.3667 158.76 41.1C158.76 45.8333 157.677 49.2833 155.51 51.45C153.343 53.6167 150.343 54.7 146.51 54.7C142.71 54.7 139.71 53.6167 137.51 51.45C135.343 49.2833 134.26 45.8333 134.26 41.1C134.26 36.3667 135.343 32.9167 137.51 30.75C139.71 28.55 142.71 27.45 146.51 27.45ZM146.51 28.45C145.077 28.45 143.927 29.5 143.06 31.6C142.227 33.6667 141.81 36.8333 141.81 41.1C141.81 45.3667 142.227 48.5333 143.06 50.6C143.927 52.6667 145.077 53.7 146.51 53.7C147.977 53.7 149.127 52.6833 149.96 50.65C150.793 48.5833 151.21 45.4 151.21 41.1C151.21 36.8 150.777 33.6167 149.91 31.55C149.077 29.4833 147.943 28.45 146.51 28.45ZM180.482 27.45C183.015 27.45 184.848 28.1 185.982 29.4C186.548 30.0333 186.948 30.85 187.182 31.85C187.415 32.85 187.532 34.2 187.532 35.9V49.35C187.532 50.7167 187.765 51.6667 188.232 52.2C188.732 52.7 189.565 52.95 190.732 52.95V54C187.398 53.8667 185.198 53.8 184.132 53.8C183.132 53.8 180.965 53.8667 177.632 54V52.95C178.632 52.95 179.332 52.7 179.732 52.2C180.132 51.6667 180.332 50.7167 180.332 49.35V33.8C180.332 32.4333 180.098 31.4 179.632 30.7C179.198 30 178.398 29.65 177.232 29.65C175.865 29.65 174.698 30.2167 173.732 31.35C172.765 32.45 172.282 33.8167 172.282 35.45V49.35C172.282 50.7167 172.482 51.6667 172.882 52.2C173.282 52.7 173.982 52.95 174.982 52.95V54C171.915 53.8667 169.848 53.8 168.782 53.8C167.782 53.8 165.482 53.8667 161.882 54V52.95C163.082 52.95 163.915 52.7 164.382 52.2C164.848 51.6667 165.082 50.7167 165.082 49.35V33.6C165.082 32.0667 164.848 30.95 164.382 30.25C163.915 29.55 163.082 29.2 161.882 29.2V28.15C162.948 28.25 163.982 28.3 164.982 28.3C167.948 28.3 170.382 28.0667 172.282 27.6V32.1C173.782 29 176.515 27.45 180.482 27.45Z"
                fill="white"
                stroke={COLOR_BASE_PRIMARY_LIGHT}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
            />
        </Svg>
    );
};

export default SvgLogo;
