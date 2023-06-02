import React, { FC } from "react";
interface Props {
  height?: string;
}
export const LogoSqLite: FC<Props> = ({ height = "50" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="120"
      height="60"
      viewBox="0 0 24.576 12.291"
      preserveAspectRatio="xMidYMid"
    >
      <defs>
        <linearGradient
          x1="5.586"
          y1="2.286"
          x2="5.586"
          y2="8.117"
          id="A"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#97d9f6" offset="0%" />
          <stop stopColor="#0f80cc" offset="92.024%" />
          <stop stopColor="#0f80cc" offset="100%" />
        </linearGradient>
      </defs>
      <path
        d="M10.215 5.674c-.276 0-.5.082-.672.245s-.26.378-.26.64c0 .136.022.26.064.374s.11.22.198.315.268.225.535.4c.327.2.54.362.644.488a.62.62 0 0 1 .154.397c0 .185-.06.332-.186.443s-.293.166-.5.166c-.22 0-.4-.077-.574-.23s-.247-.357-.25-.612h-.102v.924h.102c.03-.088.074-.132.13-.132.027 0 .09.02.2.054.24.086.438.127.594.127.268 0 .496-.094.687-.284a.94.94 0 0 0 .286-.688c0-.208-.063-.393-.188-.554s-.366-.35-.728-.565c-.31-.187-.513-.34-.606-.458a.62.62 0 0 1-.141-.393.46.46 0 0 1 .17-.374c.113-.093.26-.14.445-.14.208 0 .38.062.518.186a.78.78 0 0 1 .24.518h.102v-.8h-.095c-.012.04-.022.067-.032.08s-.028.018-.055.018c-.033 0-.092-.014-.175-.04-.18-.06-.344-.09-.495-.09zm3.33 0c-.336 0-.64.08-.917.238a1.75 1.75 0 0 0-.656.658 1.76 1.76 0 0 0-.241.894 1.71 1.71 0 0 0 .42 1.137c.28.332.618.54 1.008.62.09.047.217.167.384.36.19.22.348.378.48.472a1.44 1.44 0 0 0 .422.209 1.66 1.66 0 0 0 .486.068c.212 0 .4-.037.57-.113l-.038-.093c-.097.035-.2.052-.31.052-.148 0-.297-.05-.447-.147s-.337-.285-.56-.56l-.218-.248c.428-.083.78-.29 1.053-.622a1.73 1.73 0 0 0 .411-1.134 1.7 1.7 0 0 0-.535-1.271c-.356-.345-.793-.52-1.312-.52zm2.08 0l.005.11c.224 0 .35.066.377.198.01.047.015.135.016.26l-.002 2.412c-.002.18-.028.295-.077.345s-.133.08-.254.093l-.005.11h2.23l.057-.547h-.102c-.03.15-.096.256-.202.316s-.295.09-.567.09h-.21c-.245 0-.386-.088-.424-.266a.56.56 0 0 1-.011-.114l.01-2.44c0-.18.023-.3.07-.36s.133-.092.257-.1l-.005-.11zm-2.044.132a1.13 1.13 0 0 1 .928.451c.24.3.358.714.358 1.237 0 .496-.12.892-.36 1.19a1.17 1.17 0 0 1-.96.447 1.12 1.12 0 0 1-.932-.461c-.238-.308-.356-.708-.356-1.2 0-.505.12-.9.36-1.212s.56-.452.964-.452zm5.13.52c-.054 0-.096.018-.127.055a.15.15 0 0 0-.03.136.24.24 0 0 0 .088.138c.047.04.098.06.152.06s.093-.02.122-.06.038-.085.027-.138-.04-.1-.084-.136-.094-.055-.147-.055zm1.47.37c-.092.356-.293.548-.6.58l.004.102h.36L19.94 8.58l.02.413c.035.167.145.252.327.252.264 0 .54-.16.83-.483l-.088-.075c-.21.212-.394.318-.556.318-.1 0-.16-.057-.184-.17a.43.43 0 0 1-.009-.097l.004-1.364h.55l-.005-.163h-.542v-.518zm2.122.454c-.307 0-.557.15-.75.445s-.253.625-.177.987a.85.85 0 0 0 .27.492c.136.116.31.173.515.173.192 0 .46-.05.572-.147s.217-.257.313-.474l-.077-.08c-.153.282-.462.424-.696.424-.32 0-.517-.176-.6-.526a1.279 1.279 0 0 1-.021-.143c.38-.06.67-.167.865-.322s.39-.32.354-.492a.4.4 0 0 0-.157-.245c-.083-.06-.3-.093-.42-.093zm-3.356.013l-.662.152v.118l.23-.03c.11 0 .176.05.197.15a.81.81 0 0 1 .013.139l-.007 1.082c-.002.15-.018.237-.052.263s-.123.04-.266.04l-.004.102h1.05l-.002-.102c-.146 0-.24-.01-.282-.034s-.07-.063-.082-.125c-.01-.045-.014-.122-.014-.23l.004-1.527h-.12zm3.188.2c.064 0 .126.025.188.073s.1.102.11.16c.06.288-.195.486-.77.597-.016-.2.02-.4.113-.572s.212-.26.358-.26z"
        fill="#003b57"
      />
      <path
        d="M8.324 1.954H2.63c-.382 0-.694.312-.694.694v6.28c0 .382.312.694.694.694h3.75c-.043-1.866.595-5.487 1.944-7.666z"
        fill="#0f80cc"
      />
      <path
        d="M8.117 2.156H2.63a.49.49 0 0 0-.491.491v5.82c1.243-.477 3.107-.888 4.397-.87.26-1.355 1.02-4 1.58-5.442z"
        fill="url(#A)"
      />
      <path
        d="M9.652 1.748c-.4-.348-.862-.208-1.328.205l-.207.202C7.32 3.002 6.58 4.568 6.35 5.764c.1.182.16.413.206.6l.03.124.03.14s-.007-.027-.036-.112l-.02-.055a.638.638 0 0 0-.012-.03c-.052-.12-.196-.376-.26-.487a12.165 12.165 0 0 0-.142.444c.183.334.294.907.294.907s-.01-.037-.056-.167c-.04-.115-.244-.47-.292-.554-.082.304-.115.51-.085.56.057.097.112.264.16.448a10.41 10.41 0 0 1 .183.922l.007.085A8.46 8.46 0 0 0 6.38 9.62c.036.433.103.805.19 1.005l.058-.032c-.126-.392-.178-.907-.155-1.5.034-.907.243-2 .628-3.14.65-1.72 1.555-3.1 2.382-3.76-.754.68-1.774 2.884-2.08 3.7-.342.914-.584 1.77-.73 2.593.252-.77 1.067-1.1 1.067-1.1s.4-.493.866-1.197l-.893.238-.288.128s.735-.448 1.366-.65c.867-1.366 1.812-3.307.86-4.155"
        fill="#003b57"
      />
    </svg>
  );
};
