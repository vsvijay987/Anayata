import React, { useState } from "react";
import Link from "next/link";

import styles from "./Header.module.css";

const Header = ({ NextLink }: any) => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    return (
        <div className="flex absolute w-full items-center justify-between p-8 top-0 z-50">
            <Link href="/" passHref>
                <img
                    className="h-28"
                    src="output-onlinepngtools.png"
                    alt="anayata"
                />
            </Link>
            <nav>
                <section className="flex lg:hidden">
                    <div
                        className="space-y-2 flex flex-col text-primary"
                        onClick={() => setIsNavOpen(!isNavOpen)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </div>

                    <div
                        className={
                            isNavOpen ? styles.showMenuNav : styles.hideMenuNav
                        }
                    >
                        <div className="flex items-center justify-between w-full p-8 absolute top-0">
                            <Link href="/" passHref>
                                <img
                                    className="h-28"
                                    src="output-onlinepngtools.png"
                                    alt="anayata"
                                />
                            </Link>
                            <div
                                className="flex flex-col text-primary"
                                onClick={() => setIsNavOpen(false)}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-10 w-10"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="w-full px-4 ">
                            <ul className="font-link text-center space-y-10">
                                <li className=" text-xl font-bold text-secondary">
                                    <Link href="/">HOME</Link>
                                </li>

                                <li className="cursor-pointer text-xl font-bold  hover:text-secondary">
                                    <Link href="/">ARTICLES</Link>
                                </li>
                            </ul>
                            <div className=" mt-12 flex justify-evenly">
                                <Link href="#" passHref>
                                    <img
                                        alt="svgImg"
                                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzAiIGhlaWdodD0iMzAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iIzlmNGZhMyI+PHBhdGggZD0iTTE1MC41LDQ0LjUzNzI1Yy00Ljc0MDc1LDIuMDk5ODMgLTkuODM5ODMsMy41MDA5MiAtMTUuMjE4NDIsNC4xNjM4M2M1LjQ2ODE3LC0zLjI0NjUgOS42NzUsLTguNDI0NDIgMTEuNjQ5NDIsLTE0LjU0MTE3Yy01LjExNywyLjk5OTI1IC0xMC43ODU4Myw1LjIwMyAtMTYuODE2NTgsNi4zNjRjLTQuODE2LC01LjEwNjI1IC0xMS42ODUyNSwtOC4yNzM5MiAtMTkuMjk2MjUsLTguMjczOTJjLTE0LjYyLDAgLTI2LjQ3MDA4LDExLjc0NjE3IC0yNi40NzAwOCwyNi4yM2MwLDIuMDQ5NjcgMC4yNDAwOCw0LjA0NTU4IDAuNjkxNTgsNS45ODQxN2MtMjEuOTk0NSwtMS4xMDM2NyAtNDEuNTAyMTcsLTExLjU1OTgzIC01NC41NTI2NywtMjcuNDI2ODNjLTIuMjkzMzMsMy44NzcxNyAtMy41ODMzMyw4LjQxNzI1IC0zLjU4MzMzLDEzLjIwODE3YzAsOS4xMDUyNSA0LjY2MTkyLDE3LjEyMTE3IDExLjc3MTI1LDIxLjg0NGMtNC4zMzk0MiwtMC4xMzI1OCAtOC40MjQ0MiwtMS4zNDAxNyAtMTIuMDAwNTgsLTMuMjc1MTdjMCwwLjA3ODgzIDAsMC4xOTcwOCAwLDAuMzA4MTdjMCwxMi43MjQ0MiA5LjEyNjc1LDIzLjMyMDMzIDIxLjIyNDA4LDI1LjczMTkyYy0yLjIxMDkyLDAuNjA1NTggLTQuNTQ3MjUsMC45NDI0MiAtNi45NTUyNSwwLjk0MjQyYy0xLjcwOTI1LDAgLTMuMzc1NSwtMC4xOTM1IC00Ljk4OCwtMC40ODM3NWMzLjM2ODMzLDEwLjM5ODgzIDEzLjE0MDA4LDE3Ljk5OTA4IDI0LjcxNzgzLDE4LjIyNDgzYy05LjA1ODY3LDcuMDIzMzMgLTIwLjQ2OCwxMS4yMzAxNyAtMzIuODczNSwxMS4yMzAxN2MtMi4xNDI4MywwIC00LjIzOTA4LC0wLjEyMTgzIC02LjMxMDI1LC0wLjM3MjY3YzExLjcyMTA4LDcuNDIxMDggMjUuNjM4NzUsMTEuNzcxMjUgNDAuNTc3NjcsMTEuNzcxMjVjNDguNjc5NTgsMCA3NS4zMTA5MiwtMzkuOTc1NjcgNzUuMzEwOTIsLTc0LjY1NTE3YzAsLTEuMTM1OTIgLTAuMDM1ODMsLTIuMjY4MjUgLTAuMDg5NTgsLTMuMzg2MjVjNS4xOTU4MywtMy42NjkzMyA5LjY3NSwtOC4yOTkgMTMuMjExNzUsLTEzLjU4OCI+PC9wYXRoPjwvZz48L2c+PC9zdmc+"
                                    />
                                </Link>
                                <Link href="#">
                                    <a target="_blank">
                                        <img
                                            alt="svgImg"
                                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzAiIGhlaWdodD0iMzAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iIzlmNGZhMyI+PHBhdGggZD0iTTEzNy42LDIyLjkzMzMzaC0xMDMuMmMtNi4zMzUzMywwIC0xMS40NjY2Nyw1LjEzMTMzIC0xMS40NjY2NywxMS40NjY2N3YxMDMuMmMwLDYuMzM1MzMgNS4xMzEzMywxMS40NjY2NyAxMS40NjY2NywxMS40NjY2N2gxMDMuMmM2LjMzNTMzLDAgMTEuNDY2NjcsLTUuMTMxMzMgMTEuNDY2NjcsLTExLjQ2NjY3di0xMDMuMmMwLC02LjMzNTMzIC01LjEzMTMzLC0xMS40NjY2NyAtMTEuNDY2NjcsLTExLjQ2NjY3ek02Mi44MDI5MywxMjYuMTMzMzNoLTE2LjkxMzMzdi01NC40MjA4aDE2LjkxMzMzek01NC4xNzQyNyw2My45MzI0Yy01LjQ1MjQsMCAtOS44NjEzMywtNC40MjA0IC05Ljg2MTMzLC05Ljg2MTMzYzAsLTUuNDQwOTMgNC40MTQ2NywtOS44NTU2IDkuODYxMzMsLTkuODU1NmM1LjQzNTIsMCA5Ljg1NTYsNC40MjA0IDkuODU1Niw5Ljg1NTZjMCw1LjQ0MDkzIC00LjQyMDQsOS44NjEzMyAtOS44NTU2LDkuODYxMzN6TTEyNi4xNTYyNywxMjYuMTMzMzNoLTE2LjkwMTg3di0yNi40NjUwN2MwLC02LjMxMjQgLTAuMTE0NjcsLTE0LjQzMDggLTguNzg5MiwtMTQuNDMwOGMtOC44MDA2NywwIC0xMC4xNTM3Myw2Ljg3NDI3IC0xMC4xNTM3MywxMy45NzIxM3YyNi45MjM3M2gtMTYuOTAxODd2LTU0LjQyMDhoMTYuMjI1MzN2Ny40MzYxM2gwLjIyOTMzYzIuMjU4OTMsLTQuMjc3MDcgNy43NzQ0LC04Ljc4OTIgMTYuMDAxNzMsLTguNzg5MmMxNy4xMjU0NywwIDIwLjI5MDI3LDExLjI3MTczIDIwLjI5MDI3LDI1LjkyNjEzeiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+"
                                        />
                                    </a>
                                </Link>

                                <Link
                                    href="https://instagram.com/renaissance_labs?igshid=YmMyMTA2M2Y=
"
                                >
                                    <img
                                        alt="svgImg"
                                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzAiIGhlaWdodD0iMzAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iIzlmNGZhMyI+PHBhdGggZD0iTTU3LjMyMjE0LDE3LjJjLTIyLjEyNDkzLDAgLTQwLjEyMjE0LDE4LjAxMzg2IC00MC4xMjIxNCw0MC4xNDQ1M3Y1Ny4zMzMzM2MwLDIyLjEyNDkzIDE4LjAxMzg2LDQwLjEyMjE0IDQwLjE0NDUzLDQwLjEyMjE0aDU3LjMzMzMzYzIyLjEyNDkzLDAgNDAuMTIyMTQsLTE4LjAxMzg2IDQwLjEyMjE0LC00MC4xNDQ1M3YtNTcuMzMzMzNjMCwtMjIuMTI0OTMgLTE4LjAxMzg2LC00MC4xMjIxNCAtNDAuMTQ0NTMsLTQwLjEyMjE0ek0xMjYuMTMzMzMsNDAuMTMzMzNjMy4xNjQ4LDAgNS43MzMzMywyLjU2ODUzIDUuNzMzMzMsNS43MzMzM2MwLDMuMTY0OCAtMi41Njg1Myw1LjczMzMzIC01LjczMzMzLDUuNzMzMzNjLTMuMTY0OCwwIC01LjczMzMzLC0yLjU2ODUzIC01LjczMzMzLC01LjczMzMzYzAsLTMuMTY0OCAyLjU2ODUzLC01LjczMzMzIDUuNzMzMzMsLTUuNzMzMzN6TTg2LDUxLjZjMTguOTcxNiwwIDM0LjQsMTUuNDI4NCAzNC40LDM0LjRjMCwxOC45NzE2IC0xNS40Mjg0LDM0LjQgLTM0LjQsMzQuNGMtMTguOTcxNiwwIC0zNC40LC0xNS40Mjg0IC0zNC40LC0zNC40YzAsLTE4Ljk3MTYgMTUuNDI4NCwtMzQuNCAzNC40LC0zNC40ek04Niw2My4wNjY2N2MtMTIuNjY1NzMsMCAtMjIuOTMzMzMsMTAuMjY3NiAtMjIuOTMzMzMsMjIuOTMzMzNjMCwxMi42NjU3MyAxMC4yNjc2LDIyLjkzMzMzIDIyLjkzMzMzLDIyLjkzMzMzYzEyLjY2NTczLDAgMjIuOTMzMzMsLTEwLjI2NzYgMjIuOTMzMzMsLTIyLjkzMzMzYzAsLTEyLjY2NTczIC0xMC4yNjc2LC0yMi45MzMzMyAtMjIuOTMzMzMsLTIyLjkzMzMzeiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="hidden lg:block">
                    <div className="w-full">
                        <ul className="flex font-link">
                            <li className="lg:pr-12 text-xl font-bold text-secondary">
                                <Link href="/">HOME</Link>
                            </li>

                            <li className="cursor-pointer lg:pr-12 text-xl font-bold hover:text-secondary">
                                <Link href="#">ARTICLES</Link>
                            </li>
                        </ul>
                    </div>
                </section>
            </nav>
            <div className="hidden lg:flex w-48 justify-evenly">
                <a href="#" target="_blank" rel="noreferrer">
                    <img
                        alt="svgImg"
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzAiIGhlaWdodD0iMzAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iIzlmNGZhMyI+PHBhdGggZD0iTTE1MC41LDQ0LjUzNzI1Yy00Ljc0MDc1LDIuMDk5ODMgLTkuODM5ODMsMy41MDA5MiAtMTUuMjE4NDIsNC4xNjM4M2M1LjQ2ODE3LC0zLjI0NjUgOS42NzUsLTguNDI0NDIgMTEuNjQ5NDIsLTE0LjU0MTE3Yy01LjExNywyLjk5OTI1IC0xMC43ODU4Myw1LjIwMyAtMTYuODE2NTgsNi4zNjRjLTQuODE2LC01LjEwNjI1IC0xMS42ODUyNSwtOC4yNzM5MiAtMTkuMjk2MjUsLTguMjczOTJjLTE0LjYyLDAgLTI2LjQ3MDA4LDExLjc0NjE3IC0yNi40NzAwOCwyNi4yM2MwLDIuMDQ5NjcgMC4yNDAwOCw0LjA0NTU4IDAuNjkxNTgsNS45ODQxN2MtMjEuOTk0NSwtMS4xMDM2NyAtNDEuNTAyMTcsLTExLjU1OTgzIC01NC41NTI2NywtMjcuNDI2ODNjLTIuMjkzMzMsMy44NzcxNyAtMy41ODMzMyw4LjQxNzI1IC0zLjU4MzMzLDEzLjIwODE3YzAsOS4xMDUyNSA0LjY2MTkyLDE3LjEyMTE3IDExLjc3MTI1LDIxLjg0NGMtNC4zMzk0MiwtMC4xMzI1OCAtOC40MjQ0MiwtMS4zNDAxNyAtMTIuMDAwNTgsLTMuMjc1MTdjMCwwLjA3ODgzIDAsMC4xOTcwOCAwLDAuMzA4MTdjMCwxMi43MjQ0MiA5LjEyNjc1LDIzLjMyMDMzIDIxLjIyNDA4LDI1LjczMTkyYy0yLjIxMDkyLDAuNjA1NTggLTQuNTQ3MjUsMC45NDI0MiAtNi45NTUyNSwwLjk0MjQyYy0xLjcwOTI1LDAgLTMuMzc1NSwtMC4xOTM1IC00Ljk4OCwtMC40ODM3NWMzLjM2ODMzLDEwLjM5ODgzIDEzLjE0MDA4LDE3Ljk5OTA4IDI0LjcxNzgzLDE4LjIyNDgzYy05LjA1ODY3LDcuMDIzMzMgLTIwLjQ2OCwxMS4yMzAxNyAtMzIuODczNSwxMS4yMzAxN2MtMi4xNDI4MywwIC00LjIzOTA4LC0wLjEyMTgzIC02LjMxMDI1LC0wLjM3MjY3YzExLjcyMTA4LDcuNDIxMDggMjUuNjM4NzUsMTEuNzcxMjUgNDAuNTc3NjcsMTEuNzcxMjVjNDguNjc5NTgsMCA3NS4zMTA5MiwtMzkuOTc1NjcgNzUuMzEwOTIsLTc0LjY1NTE3YzAsLTEuMTM1OTIgLTAuMDM1ODMsLTIuMjY4MjUgLTAuMDg5NTgsLTMuMzg2MjVjNS4xOTU4MywtMy42NjkzMyA5LjY3NSwtOC4yOTkgMTMuMjExNzUsLTEzLjU4OCI+PC9wYXRoPjwvZz48L2c+PC9zdmc+"
                    />
                </a>
                <a href="#" target="_blank" rel="noreferrer">
                    <img
                        alt="svgImg"
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzAiIGhlaWdodD0iMzAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iIzlmNGZhMyI+PHBhdGggZD0iTTEzNy42LDIyLjkzMzMzaC0xMDMuMmMtNi4zMzUzMywwIC0xMS40NjY2Nyw1LjEzMTMzIC0xMS40NjY2NywxMS40NjY2N3YxMDMuMmMwLDYuMzM1MzMgNS4xMzEzMywxMS40NjY2NyAxMS40NjY2NywxMS40NjY2N2gxMDMuMmM2LjMzNTMzLDAgMTEuNDY2NjcsLTUuMTMxMzMgMTEuNDY2NjcsLTExLjQ2NjY3di0xMDMuMmMwLC02LjMzNTMzIC01LjEzMTMzLC0xMS40NjY2NyAtMTEuNDY2NjcsLTExLjQ2NjY3ek02Mi44MDI5MywxMjYuMTMzMzNoLTE2LjkxMzMzdi01NC40MjA4aDE2LjkxMzMzek01NC4xNzQyNyw2My45MzI0Yy01LjQ1MjQsMCAtOS44NjEzMywtNC40MjA0IC05Ljg2MTMzLC05Ljg2MTMzYzAsLTUuNDQwOTMgNC40MTQ2NywtOS44NTU2IDkuODYxMzMsLTkuODU1NmM1LjQzNTIsMCA5Ljg1NTYsNC40MjA0IDkuODU1Niw5Ljg1NTZjMCw1LjQ0MDkzIC00LjQyMDQsOS44NjEzMyAtOS44NTU2LDkuODYxMzN6TTEyNi4xNTYyNywxMjYuMTMzMzNoLTE2LjkwMTg3di0yNi40NjUwN2MwLC02LjMxMjQgLTAuMTE0NjcsLTE0LjQzMDggLTguNzg5MiwtMTQuNDMwOGMtOC44MDA2NywwIC0xMC4xNTM3Myw2Ljg3NDI3IC0xMC4xNTM3MywxMy45NzIxM3YyNi45MjM3M2gtMTYuOTAxODd2LTU0LjQyMDhoMTYuMjI1MzN2Ny40MzYxM2gwLjIyOTMzYzIuMjU4OTMsLTQuMjc3MDcgNy43NzQ0LC04Ljc4OTIgMTYuMDAxNzMsLTguNzg5MmMxNy4xMjU0NywwIDIwLjI5MDI3LDExLjI3MTczIDIwLjI5MDI3LDI1LjkyNjEzeiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+"
                    />
                </a>

                <a href="#" target="_blank" rel="noreferrer">
                    <img
                        alt="svgImg"
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzAiIGhlaWdodD0iMzAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iIzlmNGZhMyI+PHBhdGggZD0iTTU3LjMyMjE0LDE3LjJjLTIyLjEyNDkzLDAgLTQwLjEyMjE0LDE4LjAxMzg2IC00MC4xMjIxNCw0MC4xNDQ1M3Y1Ny4zMzMzM2MwLDIyLjEyNDkzIDE4LjAxMzg2LDQwLjEyMjE0IDQwLjE0NDUzLDQwLjEyMjE0aDU3LjMzMzMzYzIyLjEyNDkzLDAgNDAuMTIyMTQsLTE4LjAxMzg2IDQwLjEyMjE0LC00MC4xNDQ1M3YtNTcuMzMzMzNjMCwtMjIuMTI0OTMgLTE4LjAxMzg2LC00MC4xMjIxNCAtNDAuMTQ0NTMsLTQwLjEyMjE0ek0xMjYuMTMzMzMsNDAuMTMzMzNjMy4xNjQ4LDAgNS43MzMzMywyLjU2ODUzIDUuNzMzMzMsNS43MzMzM2MwLDMuMTY0OCAtMi41Njg1Myw1LjczMzMzIC01LjczMzMzLDUuNzMzMzNjLTMuMTY0OCwwIC01LjczMzMzLC0yLjU2ODUzIC01LjczMzMzLC01LjczMzMzYzAsLTMuMTY0OCAyLjU2ODUzLC01LjczMzMzIDUuNzMzMzMsLTUuNzMzMzN6TTg2LDUxLjZjMTguOTcxNiwwIDM0LjQsMTUuNDI4NCAzNC40LDM0LjRjMCwxOC45NzE2IC0xNS40Mjg0LDM0LjQgLTM0LjQsMzQuNGMtMTguOTcxNiwwIC0zNC40LC0xNS40Mjg0IC0zNC40LC0zNC40YzAsLTE4Ljk3MTYgMTUuNDI4NCwtMzQuNCAzNC40LC0zNC40ek04Niw2My4wNjY2N2MtMTIuNjY1NzMsMCAtMjIuOTMzMzMsMTAuMjY3NiAtMjIuOTMzMzMsMjIuOTMzMzNjMCwxMi42NjU3MyAxMC4yNjc2LDIyLjkzMzMzIDIyLjkzMzMzLDIyLjkzMzMzYzEyLjY2NTczLDAgMjIuOTMzMzMsLTEwLjI2NzYgMjIuOTMzMzMsLTIyLjkzMzMzYzAsLTEyLjY2NTczIC0xMC4yNjc2LC0yMi45MzMzMyAtMjIuOTMzMzMsLTIyLjkzMzMzeiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+"
                    />
                </a>
            </div>
        </div>
    );
};

export default Header;
