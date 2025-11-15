import React from "react";
import sobre2 from "../../assets/sobre2.png";

const PostBlogPage = ({ tipo_blog, titulo_blog, nome_autor_blog, blocks }) => {
  return (
    <>
      <div className="flex h-fit w-full flex-col items-center justify-center bg-gradient-to-b from-[#f5f5f5] to-[#fefefe] px-[24px] py-10 md:px-[34px] lg:px-[44px]">
        <section id="section1">
          <div className="mt-28">
            <h6 className="m-0">Blog</h6>
            <p className="m-2 inline h-fit w-fit bg-gray-500">{tipo_blog}</p>
          </div>

          <div>
            <h1 className="m-0">{titulo_blog}</h1>
            <div className="mt-8 flex items-center justify-between">
              <img
                src={sobre2}
                className="h-[60px] w-[60px] rounded-full"
                alt="foto do autor que escreveu o blog"
              />
              <div>
                <p className="m-0 font-bold">{nome_autor_blog}</p>
              </div>
            </div>
          </div>
        </section>
        <main>
          {blocks.map((block, index) => {
            switch (block.type) {
              case "heading":
                return <h2 key={index}>{block.content}</h2>;
              case "paragraph":
                return <p key={index}>{block.content}</p>;
              case "image":
                return <img key={index} src={block.src} alt={block.alt} />;
              default:
                return null;
            }
          })}
        </main>
      </div>
    </>
  );
};

export default PostBlogPage;
