/*
This is empty on purpose! Your code to build the resume will go here.
 */
const bio = {
  name: 'Fry Lock',
  role: 'Web Dev',
  contacts: {
    mobile: '555-555-555',
    email: 'mysweetemail@email.com',
    github: 'https://github.io',
    twitter: '@fry',
    location: 'Los Angeles'
  },
  welcomeMessage: 'Hello World!',
  skills: ['HTML', 'CSS', 'JavaScript', 'Webpack'],
  biopic: 'images/fry.jpg',

  display() {
    const formattedName = HTMLheaderName.replace('%data%', bio.name);
    const formattedRole = HTMLheaderRole.replace('%data%', bio.role);

    const formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
    const formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
    const formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
    const formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
    const formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);

    const formattedPicture = HTMLbioPic.replace('%data%', bio.biopic);
    const formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);

    //Name and Role
    $('#header').prepend(formattedName, formattedRole);
    //Header Contacts
    $('#topContacts, #footerContacts').append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);
    //BioPic and skills
    $('#header').append(formattedPicture, formattedWelcomeMsg, HTMLskillsStart);
    //Skills
    const formattedSkills = bio.skills.forEach(skill => {
      $('#header').append(HTMLskills.replace('%data%', skill));
    });
  }
};

const education = {
  schools: [
    {
      name: 'University of the World',
      location: 'Seattle',
      degree: 'Bachelors',
      dates: '2012',
      majors: ['Business', ' Pizza Tossing'],
      url: 'http://www.isunet.edu/'
    },
    {
      name: 'University of the Universe',
      location: 'Phoenix Arizona',
      degree: 'Masters',
      dates: '2017',
      majors: ['Computer Science', ' Pizza Delivery'],
      url: 'http://www.isunet.edu/'
    }
  ],
  onlineCourses: [
    {
      title: 'Frontend NanoDegree',
      school: 'Udacity',
      dates: 'June 16, 2017',
      url: 'https://www.udacity.com/'
    }
  ],

  display() {
    $('#education').append(HTMLschoolStart);

    education.schools.forEach(school => {
      $('.education-entry').append(HTMLschoolName.replace('%data%', `${school.name}`) + HTMLschoolDegree.replace('%data%', `${school.degree}`));
      $('.education-entry').append(HTMLschoolDates.replace('%data%', `${school.dates}`));
      $('.education-entry').append(HTMLschoolLocation.replace('%data%', `${school.location}`));
      $('.education-entry').append(HTMLschoolMajor.replace('%data%', `${school.majors}`));
    });

    education.onlineCourses.forEach(course => {
      $('.education-entry').append(HTMLonlineClasses);
      $('.education-entry').append(HTMLonlineTitle.replace('%data%', `${course.title}`) + HTMLonlineSchool.replace('%data%', `${course.school}`));
      $('.education-entry').append(HTMLonlineDates.replace('%data%', `${course.dates}`));
      $('.education-entry').append(HTMLonlineURL.replace('%data%', `${course.url}`));
    });
  }
};

const work = {
  jobs: [
    {
      employer: 'Pizza Universe',
      title: 'Delivery Specialist',
      location: 'New York',
      dates: '2007-20015',
      description: 'Bringing joy to you one pizza at a time.'
    },
    {
      employer: 'Pizza Universe',
      title: 'Manager',
      location: 'Miami',
      dates: '2015-current',
      description: 'Making Sure you get the pizza you deserve.'
    }
  ],

  display() {
    $('#workExperience').append(HTMLworkStart);

    work.jobs.forEach(job => {
      $('.work-entry').append(HTMLworkEmployer.replace('%data%', `${job.employer}` + HTMLworkTitle.replace('%data%', `${job.title}`)));
      $('.work-entry').append(HTMLworkDates.replace('%data%', `${job.dates}`));
      $('.work-entry').append(HTMLworkLocation.replace('%data%', `${job.location}`));
      $('.work-entry').append(HTMLworkDescription.replace('%data%', `${job.description}`));
    });
  }
};

const projects = {
  projects: [
    {
      title: 'Sample Project 1',
      dates: 'Aug 2016',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur doloremque blanditiis sequi omnis, rem, magnam, nostrum vero, deleniti iusto fugit commodi! Reiciendis qui perferendis, nemo consequuntur non voluptatum itaque earum.',
      images: ['/images/blue.jpg', '/images/197x148.gif', '/images/blue.jpg']
    },
    {
      title: 'Sample Project 2',
      dates: 'June 2017',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur doloremque blanditiis sequi omnis, rem, magnam, nostrum vero, deleniti iusto fugit commodi! Reiciendis qui perferendis, nemo consequuntur non voluptatum itaque earum.',
      images: ['/images/197x148.gif', '/images/blue.jpg', '/images/197x148.gif']
    }
  ],

  display() {
    $('#projects').append(HTMLprojectStart);

    projects.projects.forEach(project => {
      $('.project-entry').append(HTMLprojectTitle.replace('%data%', `${project.title}`));
      $('.project-entry').append(HTMLprojectDates.replace('%data%', `${project.dates}`));
      $('.project-entry').append(HTMLprojectDescription.replace('%data%', `${project.description}`));

      project.images.forEach(image => {
        $('.project-entry').append(HTMLprojectImage.replace('%data%', `${image}`));
      });
    });
  }
};

// $('#main').append(internationalizeButton);
$('#mapDiv').append(googleMap);

education.display();
bio.display();
work.display();
projects.display();
