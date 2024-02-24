import { Slider } from "qwik-slider";
import { component$ } from "@builder.io/qwik";
import { type DocumentHead, routeLoader$ } from "@builder.io/qwik-city";

import groupsJson from '../media/groups.json'
import type { Group } from '../types'

function getGroups(): Promise<Group[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(groupsJson.data);
    }, 500);
  });
}

export const useGroups = routeLoader$(async () => {
  // This code runs only on the server, after every navigation
  const groups = await getGroups()
  return groups 
});

export default component$(() => {
  const groups = useGroups();
  const sliderSettings = {
    scrollSpeed: 1,
    gap: 20,
    showScrollbar: false,
  }
  return (
    <>
      <main>
        <div class="pb-8 md:pb-28 static lg:relative z-10">
          <div class="pt-20 md:pt-24 pb-12 max-w-7xl mx-auto justify-between">
            <Slider {...sliderSettings}>
              <img
                class="w-full h-full object-cover object-center"
                src="https://assets.lapakgaming.com/lapakgaming/images/banner/202402/Ff5000-Banner.png?tr=w-1080%2Cq-75"
                alt="caption"
                width={1080}
                height={500}
                loading="eager"
                decoding="auto"
              />
              <img
                class="w-full h-full object-cover object-center"
                src="https://assets.lapakgaming.com/lapakgaming/images/banner/202402/Ff5000-Banner.png?tr=w-1080%2Cq-75"
                alt="caption"
                width={1080}
                height={500}
                loading="eager"
                decoding="auto"
              />
              <img
                class="w-full h-full object-cover object-center"
                src="https://assets.lapakgaming.com/lapakgaming/images/banner/202402/Ff5000-Banner.png?tr=w-1080%2Cq-75"
                alt="caption"
                width={1080}
                height={500}
                loading="eager"
                decoding="auto"
              />
            </Slider>
            <div data-testid="home-cardgame-section" class="container mx-auto px-4 lg:px-10">
              {groups.value.map((item, idx) => (
                <section class="mb-8 md:mb-10" key={`person-${idx}`}>
                  <h2 class="text-base md:text-xl font-bold pl-4 md:pl-6 border-l-4 border-l-blue-600 mb-4 md:mb-8">{item.title}</h2>

                  <div class="grid grid-cols-3 gap-3 md:grid-cols-5 md:gap-4 lg:grid-cols-6 lg:gap-6">
                    {item.categories.map((game, idx) => (
                      <div key={idx} class="bg-white shadow rounded-lg md:rounded-2xl p-1 md:p-2 hover:shadow-lg cursor-pointer transition-all">
                        <div class="w-full h-auto bg-gray-200 rounded-lg" style={{ aspectRatio: '1 / 1' }}>
                          <img src={game.imagePath} alt={game.name} width={300} height={300} loading="lazy" decoding="auto" class="rounded-lg" />
                        </div>
                        <p class="text-xs md:text-sm font-semibold text-gray-600 mt-1 md:mt-2 text-center" style={{ minHeight: '40px' }}>{game.name}</p>
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};