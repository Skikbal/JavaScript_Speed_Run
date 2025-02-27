/*
lets take example of flipkart serch ox when we are typing its not showing us suggestion product .
when we stop typing or paused for 300 or 400 miliseconds it makes an api call to fetch results.

if we make api call in every key stroke then it will make unnecessary api calls in backend which will put a lot of pressure in our server so to avoid this we used debouncing.

it helps us optimize how we make calls to certain events.
*/