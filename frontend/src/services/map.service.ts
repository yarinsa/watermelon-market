// https://maps.googleapis.com/maps/api/place/findplacefromtext/output?parameters

export const mapService = {
  getData,
};
const API_KEY = "AIzaSyAGGbA2_wVl6uF9SRQDO48b5pLAC95wxCc";

async function getData() {
  const url = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=mongolian%20grill&inputtype=textquery&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:2000@47.6918452,-122.2226413&key=${API_KEY}`;
  const answer = await fetch(url);
  console.log(answer);
}
