(function () {
  var PHONE = "37455266277";
  var rooms = {
    "deluxe-twin": {
      name: "Deluxe Twin",
      image: "images/twin.jpg",
      text: "Two single beds, a lit headboard, air conditioning, a wardrobe, and a kettle. Soundproofing, a minibar, and tea and coffee are part of the deluxe rooms."
    },
    "classic-triple": {
      name: "Classic Triple",
      image: "images/triple.jpg",
      text: "Two twin beds and a sofa, with a balcony on the classic triple. A quiet-street or city outlook, a private entrance on some layouts, and a marble bathroom."
    }
  };

  var icons = {
    bed: '<svg viewBox="0 0 32 32"><path d="M4 22V14h18a6 6 0 0 1 6 6v2H4z"/><path d="M4 22v4M28 22v4M8 14V10h8v4"/></svg>',
    bell: '<svg viewBox="0 0 32 32"><path d="M8 22h16l-1.5-6a6.5 6.5 0 0 0-13 0L8 22z"/><path d="M14 25a2 2 0 0 0 4 0"/></svg>',
    fork: '<svg viewBox="0 0 32 32"><path d="M12 6v8M16 6v8M20 6c0 5-4 6-4 8v12M12 14h8"/></svg>',
    leaf: '<svg viewBox="0 0 32 32"><path d="M8 24c8-2 14-10 16-16-8 1-16 8-16 16z"/><path d="M12 20c2-2 5-5 8-8"/></svg>',
    photo: '<svg viewBox="0 0 32 32"><rect x="5" y="8" width="22" height="16"/><circle cx="12" cy="14" r="2"/><path d="M5 20l6-5 4 4 4-3 8 6"/></svg>'
  };

  function el(html) {
    return html;
  }

  function roomCards() {
    return Object.keys(rooms).map(function (id) {
      var r = rooms[id];
      return (
        '<article class="room">' +
          '<img src="' + r.image + '" alt="' + r.name + ' at Opera Avenue Hotel" width="1024" height="768">' +
          '<div class="room-body">' +
            '<h3>' + r.name + '</h3>' +
            '<p>' + r.text + '</p>' +
            '<div class="room-actions">' +
              '<a class="btn btn-line" href="/booking?room=' + id + '" data-nav>Book</a>' +
              '<a class="btn btn-line" href="/rooms/' + id + '" data-nav>Details</a>' +
            '</div>' +
          '</div>' +
        '</article>'
      );
    }).join("");
  }

  function home() {
    return el(
      '<section class="hero" style="background-image:url(images/hero.jpg)">' +
        '<div class="hero-copy">' +
          '<div class="script">Opera Avenue Hotel</div>' +
          '<h1 class="city">Yerevan</h1>' +
          '<div class="hero-meta">' +
            '<span>29 Tumanyan Street, Yerevan, 1234 Armenia</span>' +
            '<a href="tel:+37455266277">+374 55 266 277</a>' +
            '<a href="/contacts" data-nav>Contacts</a>' +
          '</div>' +
        '</div>' +
      '</section>' +
      '<nav class="quick" aria-label="Explore">' +
        '<a href="/rooms" data-nav>' + icons.bed + 'Rooms</a>' +
        '<a href="/practical" data-nav>' + icons.bell + 'Services</a>' +
        '<a href="/dining" data-nav>' + icons.fork + 'Dining<br>and bar</a>' +
        '<a href="/terrace" data-nav>' + icons.leaf + 'Terrace</a>' +
        '<a href="/gallery" data-nav>' + icons.photo + 'Photographs</a>' +
      '</nav>' +
      '<section class="band">' +
        '<h2 class="kicker">A four-star house beside the opera</h2>' +
        '<p class="lead">Opera Avenue Hotel stands at 29 Tumanyan Street, about two minutes on foot from the Armenian National Opera and Ballet Theatre and a short walk from Northern Avenue. Eighteen rooms, breakfast in the house, a terrace and garden, and a desk that stays open through the night.</p>' +
      '</section>' +
      '<section class="section">' +
        '<div class="section-head"><h2 class="kicker">Rooms</h2><p>Large and deluxe doubles, twin rooms, and a classic triple with a balcony. The photographs show the twin and triple layouts in the house.</p></div>' +
        '<div class="rooms">' + roomCards() + '</div>' +
      '</section>' +
      '<section class="section" style="padding-top:0">' +
        '<div class="section-head"><h2 class="kicker">The stay</h2></div>' +
        '<div class="offers">' +
          '<article class="offer"><img src="images/breakfast.jpg" alt="Breakfast buffet at Opera Avenue Hotel"><h3>Breakfast</h3><p>A buffet in the marble breakfast room. Breakfast is part of the stay.</p></article>' +
          '<article class="offer"><img src="images/reception.jpg" alt="Reception desk of Opera Avenue Hotel"><h3>A night desk</h3><p>Check-in from 14:00, check-out until 12:00, and a front desk that is open 24 hours.</p></article>' +
          '<article class="offer"><img src="images/opera.jpg" alt="Armenian National Opera and Ballet Theatre"><h3>Two minutes to the stage</h3><p>The Opera House is about 200 metres away. Republic Square, the Cascade, and the National Gallery are a short walk further.</p></article>' +
        '</div>' +
      '</section>' +
      '<section class="split">' +
        '<img src="images/reception.jpg" alt="Marble reception at Opera Avenue Hotel">' +
        '<div class="split-copy">' +
          '<h3>Marble, quiet rooms, and the avenue outside</h3>' +
          '<p>The reception is lined in pale marble. Rooms are air-conditioned and non-smoking, with free Wi-Fi through the house and free parking on site. Some deluxe rooms include a spa bath. Pets are accepted on request, and a charge may apply.</p>' +
          '<a class="btn btn-line" href="/about" data-nav>About the hotel</a>' +
        '</div>' +
      '</section>' +
      '<section class="split reverse">' +
        '<img src="images/opera.jpg" alt="Facade of the Yerevan Opera House">' +
        '<div class="split-copy">' +
          '<h3>Yerevan, from Tumanyan Street</h3>' +
          '<p>Northern Avenue is a few steps away. The National Assembly is about 625 metres, the National Gallery about 740, the Cascade about 800, and Republic Square under a kilometre. Zvartnots Airport is the city’s international gate.</p>' +
          '<a class="btn btn-line" href="/experiences" data-nav>Experiences</a>' +
        '</div>' +
      '</section>' +
      '<section class="section">' +
        '<div class="facts">' +
          '<div class="fact"><b>18</b><span>rooms, about 44 guests</span></div>' +
          '<div class="fact"><b>14:00</b><span>check-in, until midnight</span></div>' +
          '<div class="fact"><b>12:00</b><span>check-out</span></div>' +
          '<div class="fact"><b>8.2</b><span>Ostrovok, 37 reviews</span></div>' +
        '</div>' +
      '</section>' +
      '<aside class="promo" id="promo">' +
        '<img src="images/breakfast.jpg" alt="">' +
        '<div>' +
          '<button class="x" type="button" id="promo-x" aria-label="Close">×</button>' +
          '<strong>Breakfast in the house</strong>' +
          '<p>Cold cuts, cheese, bread, and hot dishes are set out in the breakfast room.</p>' +
          '<a href="/dining" data-nav>See dining</a>' +
        '</div>' +
      '</aside>'
    );
  }

  function about() {
    return (
      '<article class="page">' +
        '<h1>About the hotel</h1>' +
        '<p class="deck">Opera Avenue Hotel is a four-star hotel at 29 Tumanyan Street in Yerevan, also listed as Tumanyan 29. The official house site also gives 42 Mesrop Mashtots Avenue.</p>' +
        '<div class="split" style="margin-bottom:36px">' +
          '<img src="images/reception.jpg" alt="Reception of Opera Avenue Hotel">' +
          '<div class="split-copy">' +
            '<h3>Eighteen rooms in the centre</h3>' +
            '<p>The hotel has 18 rooms and 18 bathrooms, around 30 beds, and space for about 44 guests. Languages spoken at the house are Armenian and Russian. This website is in English for guests planning a stay.</p>' +
            '<p>Facilities published by the hotel include free Wi-Fi, free on-site parking, breakfast, a 24-hour front desk, concierge, a tour desk, currency exchange, an ATM, family rooms, air conditioning, room service, a shared kitchen, terrace, garden, outdoor dining, a bar, and a coffee house.</p>' +
          '</div>' +
        '</div>' +
        '<div class="prose">' +
          '<p>Also listed: a minimarket, barber and beauty shop, car hire, daily housekeeping, ironing, dry cleaning at an extra charge, a safety deposit box, smoke alarms, CCTV, and 24-hour security. A shuttle and grocery delivery are available at an extra charge. Extra beds and cots are not offered.</p>' +
          '<p>Public ratings: Ostrovok shows 8.2 out of 10 from 37 reviews, with location at 8.7, Wi-Fi at 9, and cleanliness at 8.8. A maps listing shows about 3.9 out of 5 from 82 ratings. This site does not publish guest quotations.</p>' +
        '</div>' +
      '</article>'
    );
  }

  function roomsPage() {
    return (
      '<article class="page">' +
        '<h1>Rooms</h1>' +
        '<p class="deck">Eighteen non-smoking rooms. The house lists large and deluxe doubles, deluxe and large twins, a budget twin, and a classic triple with a balcony. Deluxe rooms may include a spa bath. Kitchens in some rooms have a fridge, dishwasher, microwave, and kitchenware.</p>' +
        '<div class="rooms">' + roomCards() + '</div>' +
        '<div class="list">' +
          '<div><strong>Deluxe double</strong><span>Queen or king bed, shower, and on some rooms a spa bath. Garden, city, or quiet-street view. Minibar, soundproofing, tea and coffee.</span></div>' +
          '<div><strong>Deluxe twin</strong><span>Two single beds. The same deluxe fittings as the double rooms.</span></div>' +
          '<div><strong>Large double or twin</strong><span>A larger layout, offered as a double or as twins.</span></div>' +
          '<div><strong>Classic triple</strong><span>Two twin beds and a sofa, with a balcony.</span></div>' +
          '<div><strong>Budget twin</strong><span>A simpler twin. Ask the desk which rooms are open for your dates.</span></div>' +
        '</div>' +
        '<a class="btn btn-line" href="/booking" data-nav>Book</a>' +
      '</article>'
    );
  }

  function roomDetail(id) {
    var r = rooms[id];
    if (!r) return notFound();
    return (
      '<article class="page">' +
        '<p class="kicker" style="text-align:left">Rooms</p>' +
        '<h1>' + r.name + '</h1>' +
        '<p class="deck">' + r.text + '</p>' +
        '<img src="' + r.image + '" alt="' + r.name + '" style="width:100%;max-height:560px;object-fit:cover;margin-bottom:18px">' +
        '<img src="images/bath.jpg" alt="Marble bathroom" style="width:min(480px,100%);margin-bottom:24px">' +
        '<p class="prose">Private bathroom, air conditioning, and free Wi-Fi. The hotel does not add cots or extra beds. Tell the desk if you are travelling with a pet — pets are accepted on request and a charge may apply.</p>' +
        '<a class="btn btn-line" href="/booking?room=' + id + '" data-nav>Book this room</a>' +
      '</article>'
    );
  }

  function offers() {
    return (
      '<article class="page">' +
        '<h1>Offers</h1>' +
        '<p class="deck">The hotel does not publish a fixed rate card on this site. A public listing has shown stays from about 6,900 rubles. Ask the desk for the rate on your dates.</p>' +
        '<div class="offers">' +
          '<article class="offer"><img src="images/breakfast.jpg" alt="Breakfast"><h3>Breakfast included</h3><p>The morning buffet is part of the stay, served in the hotel breakfast room.</p></article>' +
          '<article class="offer"><img src="images/opera.jpg" alt="Opera House"><h3>Beside the Opera</h3><p>Stay on Tumanyan Street and walk to the theatre. The desk can help with the evening plan.</p></article>' +
          '<article class="offer"><img src="images/triple.jpg" alt="Triple room"><h3>Room for three</h3><p>The classic triple has two twins, a sofa, and a balcony. Extra beds are not added to other rooms.</p></article>' +
        '</div>' +
      '</article>'
    );
  }

  function terrace() {
    return (
      '<article class="page">' +
        '<h1>Terrace and garden</h1>' +
        '<p class="deck">In place of a spa, the house opens onto a terrace and garden, with outdoor dining when the weather allows.</p>' +
        '<div class="split">' +
          '<img src="images/reception.jpg" alt="Interior of Opera Avenue Hotel">' +
          '<div class="split-copy">' +
            '<h3>Outside the rooms</h3>' +
            '<p>The hotel lists a terrace, a garden, outdoor dining, a bar, and a coffee house. There is no pool and no spa circuit on the published facilities list. Some deluxe bathrooms have a spa bath inside the room.</p>' +
            '<p>A shared kitchen is available in the house, along with a minibar and room service.</p>' +
          '</div>' +
        '</div>' +
      '</article>'
    );
  }

  function dining() {
    return (
      '<article class="page">' +
        '<h1>Dining</h1>' +
        '<p class="deck">Breakfast is served in the hotel. Through the day there is a coffee house and a bar, and outdoor dining on the terrace.</p>' +
        '<img src="images/breakfast.jpg" alt="Breakfast selection" style="width:100%;max-height:520px;object-fit:cover;margin-bottom:20px">' +
        '<div class="prose">' +
          '<p>The breakfast table includes cold cuts, cheese, bread, fruit, and hot dishes from chafing dishes. Children’s meals are listed among the hotel services. There is no separate fine-dining restaurant on the published facilities list.</p>' +
        '</div>' +
      '</article>'
    );
  }

  function celebrations() {
    return (
      '<article class="page">' +
        '<h1>Celebrations</h1>' +
        '<p class="deck">Opera Avenue is an 18-room hotel, not a ballroom house. Small family gatherings can be arranged with the desk. Larger evenings belong in the city around the hotel.</p>' +
        '<div class="prose">' +
          '<p>The concierge and tour desk can suggest a table nearby, a car, or a private arrival. The Opera House is about 200 metres away, which makes the hotel a practical base for a performance night.</p>' +
          '<p>Write to the desk with the date, the number of guests, and what you need. The team will say what the house can host and what should be booked in the city.</p>' +
        '</div>' +
        '<a class="btn btn-line" href="/contacts" data-nav>Contact the desk</a>' +
      '</article>'
    );
  }

  function experiences() {
    return (
      '<article class="page">' +
        '<h1>Experiences</h1>' +
        '<p class="deck">Distances published for the hotel. Times are a walk on level streets in the centre.</p>' +
        '<img src="images/opera.jpg" alt="Yerevan Opera House" style="width:100%;max-height:480px;object-fit:cover;margin-bottom:12px">' +
        '<div class="list">' +
          '<div><strong>Opera House</strong><span>About 142–200 metres, roughly two minutes on foot.</span></div>' +
          '<div><strong>Northern Avenue</strong><span>A few steps from the hotel, as the house describes it.</span></div>' +
          '<div><strong>National Assembly</strong><span>About 625 metres.</span></div>' +
          '<div><strong>National Gallery</strong><span>About 740 metres.</span></div>' +
          '<div><strong>Cascade</strong><span>About 800 metres.</span></div>' +
          '<div><strong>Republic Square</strong><span>About 850 metres.</span></div>' +
        '</div>' +
      '</article>'
    );
  }

  function gallery() {
    var shots = [
      ["images/hero.jpg", "Armenian National Opera and Ballet Theatre"],
      ["images/reception.jpg", "Reception"],
      ["images/twin.jpg", "Deluxe twin"],
      ["images/triple.jpg", "Classic triple"],
      ["images/breakfast.jpg", "Breakfast"],
      ["images/bath.jpg", "Marble bathroom"],
      ["images/opera.jpg", "Opera House facade"]
    ];
    return (
      '<article class="page">' +
        '<h1>Photographs</h1>' +
        '<p class="deck">Rooms, breakfast, and the reception of Opera Avenue Hotel, and the Opera House a short walk away.</p>' +
        '<div class="gallery">' +
          shots.map(function (s) {
            return '<button type="button" class="shot" data-src="' + s[0] + '"><img src="' + s[0] + '" alt="' + s[1] + '"></button>';
          }).join("") +
        '</div>' +
      '</article>'
    );
  }

  function practical() {
    return (
      '<article class="page">' +
        '<h1>Practical</h1>' +
        '<p class="deck">House rules and services taken from the hotel’s own pages and public listings.</p>' +
        '<div class="list">' +
          '<div><strong>Check-in</strong><span>From 14:00, until 00:00.</span></div>' +
          '<div><strong>Check-out</strong><span>Until 12:00. The rules page also notes departure from 10:00.</span></div>' +
          '<div><strong>Breakfast</strong><span>Included, served in the hotel.</span></div>' +
          '<div><strong>Internet</strong><span>Free Wi-Fi throughout the hotel.</span></div>' +
          '<div><strong>Parking</strong><span>Free parking on site.</span></div>' +
          '<div><strong>Pets</strong><span>On request. A charge may apply.</span></div>' +
          '<div><strong>Extra beds</strong><span>Cots and extra beds are not provided.</span></div>' +
          '<div><strong>Smoking</strong><span>Non-smoking rooms.</span></div>' +
          '<div><strong>Families</strong><span>Family rooms are available. Children’s meals are listed.</span></div>' +
          '<div><strong>Paid extras</strong><span>Shuttle, dry cleaning, and grocery delivery.</span></div>' +
        '</div>' +
      '</article>'
    );
  }

  function contacts() {
    return (
      '<article class="page">' +
        '<h1>Contacts</h1>' +
        '<p class="deck">29 Tumanyan Street, Tumanyan 29, Yerevan 1234, Armenia.</p>' +
        '<div class="list">' +
          '<div><strong>Phone</strong><span><a href="tel:+37455266277">+374 55 266 277</a></span></div>' +
          '<div><strong>Email</strong><span><a href="mailto:operaavenuehotel@gmail.com">operaavenuehotel@gmail.com</a></span></div>' +
          '<div><strong>WhatsApp</strong><span><a href="https://wa.me/37455266277" target="_blank" rel="noopener">Message the desk</a></span></div>' +
          '<div><strong>Web</strong><span><a href="https://www.operaavenuehotel.am/" target="_blank" rel="noopener">operaavenuehotel.am</a></span></div>' +
        '</div>' +
        '<iframe class="map" title="Map of Opera Avenue Hotel" src="https://www.openstreetmap.org/export/embed.html?bbox=44.505%2C40.181%2C44.521%2C40.189&amp;layer=mapnik&amp;marker=40.185157%2C44.513154"></iframe>' +
      '</article>'
    );
  }

  function booking(query) {
    var selected = "";
    var params = new URLSearchParams(query || "");
    if (params.get("room") && rooms[params.get("room")]) selected = params.get("room");
    var options = '<option value="">Any room</option>' +
      Object.keys(rooms).map(function (id) {
        return '<option value="' + id + '"' + (id === selected ? " selected" : "") + '>' + rooms[id].name + '</option>';
      }).join("") +
      '<option value="deluxe-double">Deluxe double</option>' +
      '<option value="large">Large double or twin</option>' +
      '<option value="budget-twin">Budget twin</option>';
    return (
      '<article class="page">' +
        '<h1>Book</h1>' +
        '<p class="deck">The request opens in WhatsApp for +374 55 266 277. The hotel confirms the room and the rate. Nothing is charged on this page.</p>' +
        '<form class="form" id="book">' +
          '<label>Arrival<input type="date" name="in" required></label>' +
          '<label>Departure<input type="date" name="out" required></label>' +
          '<label>Room<select name="room">' + options + '</select></label>' +
          '<label>Guests<input type="number" name="guests" min="1" max="4" value="2" required></label>' +
          '<label>Name<input type="text" name="name" required></label>' +
          '<label class="wide">Note<textarea name="note" rows="3"></textarea></label>' +
          '<div><button class="btn btn-line" type="submit">Send on WhatsApp</button></div>' +
          '<p class="status" id="book-status"></p>' +
        '</form>' +
      '</article>'
    );
  }

  function notFound() {
    return '<article class="page"><h1>Page not found</h1><p class="deck">This address is not on the site.</p><a class="btn btn-line" href="/" data-nav>Home</a></article>';
  }

  var routes = {
    "/": home,
    "/about": about,
    "/rooms": roomsPage,
    "/offers": offers,
    "/terrace": terrace,
    "/dining": dining,
    "/celebrations": celebrations,
    "/experiences": experiences,
    "/gallery": gallery,
    "/practical": practical,
    "/contacts": contacts
  };

  var view = document.getElementById("view");
  var header = document.getElementById("header");
  var galleryShots = [];
  var galleryIndex = 0;

  var FILE = location.protocol === "file:";

  function routeState() {
    if (FILE) {
      var raw = (location.hash || "#/").replace(/^#/, "");
      if (!raw || raw === "/") return { path: "/", search: "" };
      if (raw.charAt(0) !== "/") raw = "/" + raw;
      var q = raw.indexOf("?");
      if (q === -1) return { path: raw.replace(/\/$/, "") || "/", search: "" };
      return { path: raw.slice(0, q).replace(/\/$/, "") || "/", search: raw.slice(q) };
    }
    var p = location.pathname.replace(/\/$/, "");
    if (!p || /index\.html$/i.test(p)) p = "/";
    return { path: p, search: location.search };
  }

  function pathOf() {
    return routeState().path;
  }

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var revealObserver = null;

  function paintHeader() {
    var homeTop = pathOf() === "/" && window.scrollY < 40;
    header.classList.toggle("is-solid", !homeTop);
    if (reduceMotion) return;
    var hero = document.querySelector(".hero");
    if (!hero) return;
    hero.style.backgroundPosition = "center calc(50% + " + Math.round(window.scrollY * 0.28) + "px)";
  }

  function reveal() {
    if (revealObserver) revealObserver.disconnect();
    var nodes = view.querySelectorAll(".quick a, .band, .section-head, .room, .offer, .story, .split, .fact, .page > h1, .page > .deck, .page > .prose, .page > img, .list div, .gallery button, .form");
    if (!nodes.length || reduceMotion) return;
    revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in");
        revealObserver.unobserve(entry.target);
      });
    }, { threshold: 0.16, rootMargin: "0px 0px -48px 0px" });
    nodes.forEach(function (node) {
      var delay = 0;
      var parent = node.parentElement;
      if (parent) {
        var group = parent.querySelectorAll(".quick a, .room, .offer, .story, .fact, .list div, .gallery button");
        for (var i = 0; i < group.length; i++) {
          if (group[i] === node) {
            delay = Math.min(i, 5) * 90;
            break;
          }
        }
      }
      node.classList.add("reveal");
      if (delay) node.style.transitionDelay = delay + "ms";
      revealObserver.observe(node);
    });
  }

  function render() {
    var path = pathOf();
    var html;
    if (routes[path]) html = routes[path]();
    else if (path.indexOf("/rooms/") === 0) html = roomDetail(path.slice(7));
    else if (path === "/booking") html = booking(routeState().search);
    else html = notFound();
    view.innerHTML = html;
    document.title = path === "/" ? "Opera Avenue Hotel — Yerevan" : "Opera Avenue Hotel — " + (view.querySelector("h1") ? view.querySelector("h1").textContent : "Yerevan");
    paintHeader();
    window.scrollTo(0, 0);
    bindPage();
  }

  function go(url) {
    var target = url.charAt(0) === "#" ? url.slice(1) : url;
    if (target.charAt(0) !== "/") target = "/" + target;
    closeMenu();
    if (FILE) {
      if (location.hash === "#" + target) render();
      else location.hash = target;
      return;
    }
    history.pushState({}, "", target);
    render();
  }

  function closeMenu() {
    document.getElementById("menu").hidden = true;
    document.body.style.overflow = "";
  }

  document.addEventListener("click", function (e) {
    var a = e.target.closest("a[data-nav]");
    if (!a) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    var href = a.getAttribute("href") || "";
    if (href.charAt(0) === "#") href = href.slice(1);
    if (href.charAt(0) !== "/") return;
    e.preventDefault();
    go(href);
  });

  window.addEventListener("popstate", render);
  window.addEventListener("hashchange", function () {
    if (FILE) render();
  });
  window.addEventListener("scroll", paintHeader, { passive: true });

  document.getElementById("open-menu").addEventListener("click", function () {
    document.getElementById("menu").hidden = false;
    document.body.style.overflow = "hidden";
  });
  document.getElementById("close-menu").addEventListener("click", closeMenu);

  var chat = document.getElementById("chat");
  function toggleChat() { chat.hidden = !chat.hidden; }
  document.getElementById("open-chat").addEventListener("click", toggleChat);
  document.getElementById("chat-fab").addEventListener("click", toggleChat);

  var cookie = document.getElementById("cookie");
  var promoSeen = false;
  function syncPromo() {
    var promo = document.getElementById("promo");
    if (!promo) return;
    promo.hidden = !cookie.hidden || promoSeen;
  }
  try {
    if (!localStorage.getItem("opera-cookie")) cookie.hidden = false;
    else cookie.hidden = true;
  } catch (err) {
    cookie.hidden = true;
  }
  document.getElementById("cookie-ok").addEventListener("click", function () {
    try { localStorage.setItem("opera-cookie", "1"); } catch (err) {}
    cookie.hidden = true;
    syncPromo();
  });

  function bindPage() {
    var promoX = document.getElementById("promo-x");
    if (promoX) promoX.addEventListener("click", function () {
      promoSeen = true;
      document.getElementById("promo").hidden = true;
    });
    syncPromo();
    reveal();
    galleryShots = Array.prototype.map.call(document.querySelectorAll(".shot"), function (b) {
      return b.getAttribute("data-src");
    });
    document.querySelectorAll(".shot").forEach(function (b, i) {
      b.addEventListener("click", function () { openShot(i); });
    });
    var form = document.getElementById("book");
    if (form) {
      var today = new Date().toISOString().slice(0, 10);
      form.in.min = today;
      form.out.min = today;
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var status = document.getElementById("book-status");
        if (form.out.value <= form.in.value) {
          status.textContent = "Departure must be after arrival.";
          return;
        }
        var roomName = form.room.options[form.room.selectedIndex].text;
        var text = [
          "Opera Avenue Hotel",
          "Name: " + form.name.value.trim(),
          "Arrival: " + form.in.value,
          "Departure: " + form.out.value,
          "Room: " + roomName,
          "Guests: " + form.guests.value,
          form.note.value.trim() ? "Note: " + form.note.value.trim() : ""
        ].filter(Boolean).join("\n");
        var href = "https://wa.me/" + PHONE + "?text=" + encodeURIComponent(text);
        if (navigator.clipboard) navigator.clipboard.writeText(text).catch(function () {});
        window.open(href, "_blank", "noopener");
        status.textContent = "WhatsApp should open with your request. The text is also copied.";
      });
    }
  }

  var box = document.createElement("div");
  box.className = "lightbox";
  box.hidden = true;
  box.innerHTML = '<button class="lightbox-x" type="button" aria-label="Close">×</button><button class="lightbox-nav prev" type="button" aria-label="Previous">‹</button><img alt=""><button class="lightbox-nav next" type="button" aria-label="Next">›</button>';
  document.body.appendChild(box);
  function openShot(i) {
    galleryIndex = i;
    box.querySelector("img").src = galleryShots[i];
    box.hidden = false;
  }
  box.querySelector(".lightbox-x").addEventListener("click", function () { box.hidden = true; });
  box.querySelector(".prev").addEventListener("click", function () {
    galleryIndex = (galleryIndex - 1 + galleryShots.length) % galleryShots.length;
    box.querySelector("img").src = galleryShots[galleryIndex];
  });
  box.querySelector(".next").addEventListener("click", function () {
    galleryIndex = (galleryIndex + 1) % galleryShots.length;
    box.querySelector("img").src = galleryShots[galleryIndex];
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      box.hidden = true;
      chat.hidden = true;
      closeMenu();
    }
  });

  render();
})();
