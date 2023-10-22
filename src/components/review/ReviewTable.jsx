import React from "react";
import perf221 from "../../assets/images/perf221.png";
import Ellipse from "../../assets/images/Ellipse.png";
import Ellipse200 from "../../assets/images/Ellipse200.png";
import Ellipse201 from "../../assets/images/Ellipse201.png";
import { Stars, Tools, ToolsDark } from "../../assets/svgs/svg-icons";

const ReviewTable = ({ darkTheme }) => {
  const products = [
    {
      name: "Enchanted Elixir",
      img: perf221,
      userImage: Ellipse,
      userName: "Esther Howard",
      date: "9-12-2022",
      review:
        "I've received countless compliments from friends, family, and even strangers when I wear this perfume. It's as if it has a magnetic effect on people, drawing them in with its charm.",
      status: "Pending",
    },

    {
      name: "Enchanted Elixir",
      img: perf221,
      userImage: Ellipse200,
      userName: "Jenny Houston",
      date: "23-03-2022",
      review:
        "What I appreciate most about Celestial Essence is its longevity. Unlike some other fragrances that fade away within hours, this one stays with me throughout the day, constantly evolving and revealing different layers of its scent profile. It's a true testament to the quality of the ingredients used.",
      status: "Published",
    },

    {
      name: "Enchanted Elixir",
      img: perf221,
      userImage: Ellipse201,
      userName: "Esther Howard",
      date: "9-12-2022",
      review:
        "I've received countless compliments from friends, family, and even strangers when I wear this perfume. It's as if it has a magnetic effect on people, drawing them in with its charm.",
      status: "Flagged",
    },
  ];

  return (
    <div>
      <div className="mt-[4rem]">
        <table className="w-full dark:text-accent-5">
          <thead className="">
            <tr className="w-full border-y-[.0625rem] border-accent-5 dark:border-opacity-5 text-left text-[1rem] text-darker dark:text-accent-4 font-medium">
              <th className="h-[4.25rem] flex justify-content items-center  gap-[1rem]">
                Product
              </th>
              <th>Reviewer</th>
              <th>Review</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {products.map((order) => (
              <tr
                className="border-b-[0.0625rem] align-top dark:border-opacity-5 border-accent-5"
                key={order.review}
              >
                <td className="text-[.875rem] font-light py-[1rem]">
                  <div className="img-name flex items-center justify-start gap-[1rem]">
                    <div className="w-[3.5rem] h-[3.5rem] rounded-[.5rem] border-solid border-[.5px] border-darker">
                      <img
                        src={order.img}
                        alt="profile image"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="block">{order.name}</span>
                  </div>
                </td>
                <td className="py-[1rem]">
                  <div className="flex gap-[.5rem]">
                    <img
                      src={order.userImage}
                      alt="review-image"
                      className="h-[3.5rem] w-[3.5rem] rounded-full object-cover"
                    />
                    <div className="details flex flex-col gap-[.25rem]">
                      <span className="block text-[.875rem] font-light">
                        {order.userName}
                      </span>
                      <span className="block text-[.75rem] font-light opacity-[0.5]">
                        {order.date}
                      </span>
                    </div>
                  </div>
                </td>
                <td className="py-[1rem] text-[.875rem] font-light">
                  <div className="flex flex-col gap-[.5rem]">
                    <Stars />
                    <span className="block w-[20rem] text-[.75rem] font-light leading-[200%]">
                      {order.review}
                    </span>
                  </div>
                </td>
                <td className="py-[1rem] text-[.875rem] font-light">
                  <div className="flex gap-[.5rem]">
                    <button
                      className={
                        order.status === "Pending"
                          ? "px-[1rem] items-center justify-start border-solid border-[1px] border-pending-yellow text-pending-yellow rounded-[.9375rem] text-[.875rem]"
                          : order.status === "Published"
                          ? "px-[1rem] items-center justify-start border-solid border-[1px] border-unique-green text-unique-green rounded-[.9375rem] text-[.875rem]"
                          : order.status === "Flagged"
                          ? "px-[1rem] items-center justify-start border-solid border-[1px] border-red-down text-red-down rounded-[.9375rem] text-[.875rem]"
                          : ""
                      }
                    >
                      {order.status}
                    </button>
                    {darkTheme ? <ToolsDark /> : <Tools />}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReviewTable;
