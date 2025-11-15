import React from "react";
import { Link } from "react-router-dom";
import icon_lerMAIS from "../../assets/icon_lerMAIS.svg";

const BlogMiniatura = ({
  linkToBlog,
  tipoBlog,
  tempo_leitura_blog,
  titulo_blog,
  resumo_blog,
  url_img_capa_blog,
}) => {
  return (
    <article className="h-fit w-full items-start bg-white">
      <div
        className="h-[300px] w-full bg-cover bg-center md:h-[221px]"
        style={{
          backgroundImage: `url(${url_img_capa_blog})`,
        }}
      ></div>
      <section className="text-[rgb(0,0,0)]">
        <div className="flex flex-row">
          <div className="inline h-fit w-fit bg-[rgb(210,210,210)] p-2 px-4 text-[rgb(0,0,0)]">
            {tipoBlog}
          </div>
          <span>{`${tempo_leitura_blog} minuto${tempo_leitura_blog > 1 ? `s` : ``} de leitura`}</span>
        </div>
        <h2>{titulo_blog}</h2>
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
