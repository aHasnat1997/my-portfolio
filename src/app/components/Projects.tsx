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
    <section id="projects" className="max-section py-20">
      <h2 className='text-6xl font-semibold text-center pb-14'>My Projects</h2>

      <div className="space-y-14">
        {
          projectData.map((project, i) => <div
            key={i}
            className={`w-full flex items-start ${i % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}
          >
            <div className={`w-1/2 h-72 overflow-hidden bg-slate-50 rounded-xl`}>
              <Image
                alt={project.title + ' ' + 'project image'}
                src={project.thumpImage}
                width={500}
                height={500}
                className="w-full"
              />
            </div>
            <div className={`w-1/2 relative`}>
              <h3 className={`text-4xl font-semibold mb-4 ${i % 2 === 0 ? 'text-start' : 'text-end'}`}>{project.title}</h3>
              <div className={`w-[34rem] backdrop-blur-sm bg-card/50 p-8 rounded-xl absolute ${i % 2 === 0 ? 'left-0' : 'right-0'}`}>
                <p className="text-justify">{project.shortDes}</p>
              </div>
            </div>
          </div>)
        }
      </div>

    </section>
  );
}

export default Projects;