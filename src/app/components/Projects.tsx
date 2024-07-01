import { Button } from "@/components/ui/button";
import Image from "next/image";

function Projects() {
  const projectData = [
    {
      title: 'Example Project 1',
      shortDes: 'A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.',
      thumpImage: 'https://unbounce.com/photos/indochino-full.jpg'
    },
    {
      title: 'Example Project 2',
      shortDes: 'A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.',
      thumpImage: 'https://unbounce.com/photos/indochino-full.jpg'
    },
    {
      title: 'Example Project 3',
      shortDes: 'A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.',
      thumpImage: 'https://unbounce.com/photos/indochino-full.jpg'
    },
    {
      title: 'Example Project 4',
      shortDes: 'A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.',
      thumpImage: 'https://unbounce.com/photos/indochino-full.jpg'
    },
    {
      title: 'Example Project 5',
      shortDes: 'A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.',
      thumpImage: 'https://unbounce.com/photos/indochino-full.jpg'
    },
    {
      title: 'Example Project 6',
      shortDes: 'A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.',
      thumpImage: 'https://unbounce.com/photos/indochino-full.jpg'
    }
  ];

  return (
    <section id="projects" className="max-section pt-36 pb-20">
      <h2 className='text-6xl font-semibold text-center pb-14'>My Projects</h2>
      <div className="w-full no-scrollbar space-y-24 mt-14">
        {
          projectData.map((project, i) => <div
            key={i}
            className='sticky rounded-xl top-[12rem]'
          >
            <div
              className={`w-full bg-card rounded-2xl flex items-start ${i % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}
              style={{
                position: 'relative',
                top: `calc(-5vh + ${i * 25}px)`,
              }}
            >
              <div className={`w-1/2 h-96 overflow-hidden rounded-2xl`}>
                <Image
                  alt={project.title + ' ' + 'project image'}
                  src={project.thumpImage}
                  width={500}
                  height={500}
                  className="w-full"
                />
              </div>
              <div className={`w-1/2 h-full relative p-6`}>
                <h3 className={`text-4xl font-semibold mb-4 ${i % 2 === 0 ? 'text-start' : 'text-end'}`}>{project.title}</h3>
                <div className={`w-[42rem] h-40 mt-6 backdrop-blur-sm bg-white/10 p-8 rounded-xl absolute ${i % 2 === 0 ? 'left-8' : 'right-8'}`}>
                  <p className="text-justify line-clamp-4">{project.shortDes}</p>
                </div>
                <div className={`absolute top-72 ${i % 2 === 0 ? 'left-8' : 'right-8'}`}>
                  <Button variant={'outline'}>View Details</Button>
                </div>
              </div>
            </div>
          </div>)
        }
      </div>
    </section>
  );
}

export default Projects;