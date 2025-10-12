import { StaticImageData } from "next/image";

export interface linkTypes {
  name: String;
  link: String;
}
export interface legalTypes {
  name: String;
  link: String;
}
export interface testimonialTypes {
  id: number;
  name: String;
  text: String;
  testimonial: String;
  dog: StaticImageData;
}
