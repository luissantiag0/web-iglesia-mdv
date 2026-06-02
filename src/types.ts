export interface Sermon {
  id: string;
  title: string;
  preacher: string;
  date: string;
  youtubeId: string;
  category: string;
}

export interface ChurchEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  description: string;
  location: string;
  image: string;
}

export interface Meeting {
  id: string;
  name: string;
  day: string;
  time: string;
  description: string;
  icon: string;
  location: string;
}

export interface ContactSubmission {
  name: string;
  email: string;
  phone: string;
  message: string;
}
