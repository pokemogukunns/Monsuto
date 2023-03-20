<h1 align="center">
  MS Database
</h1>

Monster Strike is a japanese mobile game.
Database created for the only purpose of making **easier** finding monsters by its properties, like id, abilities, strike shots, etc.

All content were scraped and crawled from **[here](https://monster-strike-enjp.fandom.com/wiki/Monster_Strike_Wiki)**
<br>
The scraper and crawler used to get data for the database can be found **[here](https://github.com/RodrigoFreitas-L/ms_crawler_scraper)**

<br>

<h1 align="center">
  Is it up anywhere?
</h1>

The plan was to host it on heroku, but since it's not free anymore, now it's on Railway, you can find it [here](https://ms-db.up.railway.app/) for now.

<h1 align="center">
  Running local
</h1>

You can run it locally if wanted, everything you need is at [this repository](https://github.com/RodrigoFreitas-L/ms_db)

<h2 align="center">
  Setup
</h2>

Clone [this repository](https://github.com/RodrigoFreitas-L/ms_db)
<br>
<br>
Install [Docker Desktop](https://www.docker.com/) or:
<br>
<pre><code>npm install -g docker</code></pre>
Go to the cloned folder
and run one of the following:
<pre><code>docker compose up</code></pre>
<pre><code>docker compose up -d (to start detached from container)</code></pre>
This one in specific build images before starting the containers:
<pre><code>docker compose up --build</code></pre>


Now, to access it, just type in your browser:
<pre><code>localhost:3000</pre></code>

To end the application:
<pre><code>docker compose down</code></pre>
