import React from "react";
import { Link } from "react-router-dom";
import icon_lerMAIS from "../../assets/icon_lerMAIS.svg";
import UseStrapiURL from "../../hooks/UseStrapiURL";

import capa_blog_loading from "../../assets/capa_blog_loading.webp";

const BlogMiniatura = ({
  linkToBlog,
  tipoBlog,
  array_calc_tempo_leitura_blog,
  titulo_blog,
  resumo_blog,
  url_img_capa_blog,
}) => {
  const BASE_URL = UseStrapiURL();
  let temImagemDoStrapi =
    typeof url_img_capa_blog === "string" && url_img_capa_blog.trim() !== "";
  return (
    <article className="h-fit w-full items-start bg-transparent transition-all duration-700 hover:scale-90">
      <div
        className="h-[300px] w-full bg-cover bg-center md:h-[221px]"
        style={{
          // AQUI É O SEGREDO:
          backgroundImage: temImagemDoStrapi
            ? `url(${BASE_URL}${url_img_capa_blog})` // imagem do Strapi
            : `url(${capa_blog_loading})`, // ← imagem importada local
        }}
      ></div>

      <section className="mt-2 mb-4 flex flex-col gap-2 bg-transparent text-[rgb(0,0,0)]">
        <div className="flex flex-row justify-between text-sm text-black">
          <div className="inline h-fit w-fit bg-[rgb(210,210,210)] p-0.5 text-[rgb(0,0,0)]">
            {tipoBlog}
          </div>
          <span className="text-sm font-medium">{`${array_calc_tempo_leitura_blog} minuto${array_calc_tempo_leitura_blog > 1 ? `s` : ``} de leitura`}</span>
        </div>
        <h2 className="font-bold">{titulo_blog}</h2>
        <p>{resumo_blog}</p>
      </section>
      <Link
        to={linkToBlog}
        className="flex items-center font-semibold text-black hover:underline"
      >
        {"Leia mais "}
        <img src={icon_lerMAIS} alt="icone ler mais" />
      </Link>
    </article>
  );
};

export default BlogMiniatura;
