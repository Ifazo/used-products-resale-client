import React from "react";

const Blogs = () => {
  return (
    <>
      <div class="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div class="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
          <div>
            <h2 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              Blogs
            </h2>
          </div>
          <div class="mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
            <div>
              <a href="/" class="mt-2 block">
                <p class="text-xl font-semibold text-gray-900">
                  1. What are the different ways to manage a state in a React
                  application?
                </p>
                <p class="mt-3 text-base text-gray-500">
                  The Four Kinds of React State to Manage: 1. Local state, 2. Global
                  state, 3. Server state, 4. URL state.
                </p>
              </a>
            </div>

            <div>
              <a href="/" class="mt-2 block">
                <p class="text-xl font-semibold text-gray-900">
                  2. How does prototypical inheritance work ?
                </p>
                <p class="mt-3 text-base text-gray-500">
                  The prototype is itself an object, so the prototype will have
                  its own prototype, making what's called a prototype chain. The
                  chain ends when we reach a prototype that has null for its own
                  prototype.
                </p>
              </a>
            </div>

            <div>
              <a href="/" class="mt-2 block">
                <p class="text-xl font-semibold text-gray-900">
                  3. What is a unit test? Why should we write unit tests?
                </p>
                <p class="mt-3 text-base text-gray-500">
                  A unit test is a way of testing a unit - the smallest piece of
                  code that can be logically isolated in a system. In most
                  programming languages, that is a function, a subroutine, a
                  method or property.
                </p>
              </a>
            </div>

            <div>
              <a href="/" class="mt-2 block">
                <p class="text-xl font-semibold text-gray-900">
                  4. React vs. Angular vs. Vue ?
                </p>
                <p class="mt-3 text-base text-gray-500">
                  Vue provides higher customizability and hence is easier to
                  learn than Angular or React. Further, Vue has an overlap with
                  Angular and React with respect to their functionality like the
                  use of components. Hence, the transition to Vue from either of
                  the two is an easy option.
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
