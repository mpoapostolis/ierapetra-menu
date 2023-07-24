import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const { locale } = router;
  return (
    <div className="w-screen h-screen grid place-items-center ">
      <picture>
        <img src="/logo.png" className="w-96 h-96" alt="logo" />
      </picture>
      <div className="flex w-full  items-center justify-center">
        <div className="container  grid gap-4 text-center">
          <label className="text-2xl text-left border-white border-opacity-20 text-gray-600">
            ΕΛΛΗΝΙΚΑ / ENGLISH
          </label>

          <select
            value={locale}
            onChange={(evt) => {
              const locale = evt.currentTarget.value;
              router.push("/", "/", { locale });
            }}
            className="cursor-pointer text-center text-4xl appearance-none block px-3 py-4 w-full  text-white font-bold bg-transparent  border outline-none"
          >
            <option
              className=" text-white uppercase  bg-black text-2xl "
              value="en"
            >
              🇬🇧 &nbsp;{" "}
              {(locale === "el" ? "ΑΓΓΛΙΚΑ" : `English`).toUpperCase()}
            </option>
            <option
              className="text-white uppercase  bg-black text-2xl "
              value="el"
            >
              🇬🇷 &nbsp;{(locale === "el" ? "ΕΛΛΗΝΙΚΑ" : `Greek`).toUpperCase()}
            </option>
          </select>

          <Link
            href="/library"
            className="text-4xl uppercase hover:bg-white hover:bg-opacity-10 transition duration-100 py-4 font-bold text-white w-full border"
          >
            {(locale === "el"
              ? "ΧΑΡΤΗΣ ΒΙΒΛΙΟΘΗΚΗΣ"
              : `LIBRARY MAP`
            ).toUpperCase()}
          </Link>

          <Link
            href="/quiz"
            className="text-4xl uppercase hover:bg-white hover:bg-opacity-10 transition duration-100 py-4 font-bold text-white w-full border"
          >
            {(locale === "el"
              ? "ΠΑΙΧΝΙΔΙ ΕΡΩΤΗΣΕΩΝ"
              : `QUIZ GAME`
            ).toUpperCase()}
          </Link>

          <Link
            href="/memory"
            className="text-4xl uppercase hover:bg-white hover:bg-opacity-10 transition duration-100 py-4 font-bold text-white w-full border"
          >
            {(locale === "el"
              ? "ΠΑΙΧΝΙΔΙ ΜΝΗΜΗΣ"
              : `MEMORY GAME`
            ).toUpperCase()}
          </Link>
          <Link
            href="/painting"
            className="text-4xl uppercase hover:bg-white hover:bg-opacity-10 transition duration-100 py-4 font-bold text-white w-full border"
          >
            {(locale === "el"
              ? "ΠΑΙΧΝΙΔΙ ΖΩΓΡΑΦΙΚΗΣ"
              : `PAINTING GAME`
            ).toUpperCase()}
          </Link>
        </div>
      </div>
    </div>
  );
}
