<script setup lang="ts">
</script>

<template>
  <div class="wrapper">
    <div class="container">
      <div id="welcome">
        <h1>
          <span>比赛直播助手</span>
          计分板
        </h1>
      </div>
      <div id="middle-content">
        <div id="middle-left-content">
          <div id="learning-materials" class="rounded shadow">
            <h2>使用教程</h2>
            <a class="list-item-link disabled" href="/" target="_blank" rel="noreferrer">
              <svg fill="currentColor" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z" />
              </svg>
              <span>
                视频教程
                <span>(施工中)</span>
              </span>
            </a>
          </div>
          <a id="nx-repo" class="button-pill rounded shadow" href="https://github.com/tournament-kit/scoreboard"
            target="_blank" rel="noreferrer">
            <svg fill="currentColor" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            <span>
              这是一个开源项目
              <span> 查看源码 </span>
            </span>
          </a>
        </div>
        <div id="other-links">
          <RouterLink to="/manually" class="button-pill rounded shadow">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <span>
              手动模式
              <span> 手动输入对战双方信息 </span>
            </span>
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </RouterLink>
          <RouterLink to="/challonge" class="button-pill rounded shadow disabled">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
            <span>
              Challonge 模式
              <span>(施工中)</span>
            </span>
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </RouterLink>
        </div>
      </div>

      <p id="love">
        用
        <svg fill="currentColor" stroke="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
        发电
      </p>
    </div>
  </div>
</template>

<style scoped>
svg {
  display: block;
  vertical-align: middle;
  shape-rendering: auto;
  text-rendering: optimizeLegibility;
}

pre {
  background-color: rgba(55, 65, 81, 1);
  border-radius: 0.25rem;
  color: rgba(229, 231, 235, 1);
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    'Liberation Mono', 'Courier New', monospace;
  overflow: auto;
  padding: 0.5rem 0.75rem;
}

.shadow {
  box-shadow: 0 0 #0000, 0 0 #0000, 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);

  /* gray border */
  border: 1px solid rgb(241, 241, 241);
}

.rounded {
  border-radius: 1.5rem;
}

.wrapper {
  width: 100%;
}

.container {
  margin-left: auto;
  margin-right: auto;
  max-width: 768px;
  padding-bottom: 3rem;
  padding-left: 1rem;
  padding-right: 1rem;
  color: rgba(55, 65, 81, 1);
  width: 100%;
}

#welcome {
  margin-top: 2.5rem;
}

#welcome h1 {
  font-size: 3rem;
  font-weight: 500;
  letter-spacing: -0.025em;
  line-height: 1;
}

#welcome span {
  display: block;
  font-size: 1.875rem;
  font-weight: 300;
  line-height: 2.25rem;
  margin-bottom: 0.5rem;
}

#hero {
  align-items: center;
  background-color: hsla(214, 62%, 21%, 1);
  border: none;
  box-sizing: border-box;
  color: rgba(55, 65, 81, 1);
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 3.5rem;
}

#hero .text-container {
  color: rgba(255, 255, 255, 1);
  padding: 3rem 2rem;
}

#hero .text-container h2 {
  font-size: 1.5rem;
  line-height: 2rem;
  position: relative;
}

#hero .text-container h2 svg {
  color: hsla(162, 47%, 50%, 1);
  height: 2rem;
  left: -0.25rem;
  position: absolute;
  top: 0;
  width: 2rem;
}

#hero .text-container h2 span {
  margin-left: 2.5rem;
}

#hero .text-container a {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 0.75rem;
  color: rgba(55, 65, 81, 1);
  display: inline-block;
  margin-top: 1.5rem;
  padding: 1rem 2rem;
  text-decoration: inherit;
}

#middle-content {
  align-items: flex-start;
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 3.5rem;
}

#middle-content #middle-left-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

#learning-materials {
  padding: 2.5rem 2rem;
}

#learning-materials h2 {
  font-weight: 500;
  font-size: 1.25rem;
  letter-spacing: -0.025em;
  line-height: 1.75rem;
  padding-left: 1rem;
  padding-right: 1rem;
}

.list-item-link {
  align-items: center;
  border-radius: 0.75rem;
  display: flex;
  margin-top: 1rem;
  padding: 1rem;
  transition-property: background-color, border-color, color, fill, stroke,
    opacity, box-shadow, transform, filter, backdrop-filter,
    -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  width: 100%;
}

.list-item-link svg:first-child {
  margin-right: 1rem;
  height: 1.5rem;
  transition-property: background-color, border-color, color, fill, stroke,
    opacity, box-shadow, transform, filter, backdrop-filter,
    -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  width: 1.5rem;
}

.list-item-link>span {
  flex-grow: 1;
  font-weight: 400;
  transition-property: background-color, border-color, color, fill, stroke,
    opacity, box-shadow, transform, filter, backdrop-filter,
    -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.list-item-link>span>span {
  color: rgba(107, 114, 128, 1);
  display: block;
  flex-grow: 1;
  font-size: 0.75rem;
  font-weight: 300;
  line-height: 1rem;
  transition-property: background-color, border-color, color, fill, stroke,
    opacity, box-shadow, transform, filter, backdrop-filter,
    -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.list-item-link svg:last-child {
  height: 1rem;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  width: 1rem;
}

.list-item-link:hover {
  color: rgba(255, 255, 255, 1);
  background-color: hsla(162, 55%, 33%, 1);
}

.list-item-link:hover>span>span {
  color: rgba(243, 244, 246, 1);
}

.list-item-link:hover svg:last-child {
  transform: translateX(0.25rem);
}

.button-pill {
  padding: 1.5rem 2rem;
  margin-bottom: 2rem;
  transition-duration: 300ms;
  transition-property: background-color, border-color, color, fill, stroke,
    opacity, box-shadow, transform, filter, backdrop-filter,
    -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  align-items: center;
  display: flex;
}

.disabled {
  opacity: 0.6;
  pointer-events: none;
}

.button-pill svg {
  transition-property: background-color, border-color, color, fill, stroke,
    opacity, box-shadow, transform, filter, backdrop-filter,
    -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  flex-shrink: 0;
  width: 3rem;
}

.button-pill>span {
  letter-spacing: -0.025em;
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 1.75rem;
  padding-left: 1rem;
  padding-right: 1rem;
}

.button-pill span span {
  display: block;
  font-size: 0.875rem;
  font-weight: 300;
  line-height: 1.25rem;
}

.button-pill:hover svg,
.button-pill:hover {
  color: rgba(255, 255, 255, 1) !important;
}

.button-pill:hover {
  background-color: rgba(0, 122, 204, 1);
}

#commands {
  padding: 2.5rem 2rem;
  margin-top: 3.5rem;
}

#commands h2 {
  font-size: 1.25rem;
  font-weight: 400;
  letter-spacing: -0.025em;
  line-height: 1.75rem;
  padding-left: 1rem;
  padding-right: 1rem;
}

#commands p {
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.5rem;
  margin-top: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
}

details {
  align-items: center;
  display: flex;
  margin-top: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  width: 100%;
}

details pre>span {
  color: rgba(181, 181, 181, 1);
  display: block;
}

summary {
  border-radius: 0.5rem;
  display: flex;
  font-weight: 400;
  padding: 0.5rem;
  cursor: pointer;
  transition-property: background-color, border-color, color, fill, stroke,
    opacity, box-shadow, transform, filter, backdrop-filter,
    -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

summary:hover {
  background-color: rgba(243, 244, 246, 1);
}

summary svg {
  height: 1.5rem;
  margin-right: 1rem;
  width: 1.5rem;
}

#love {
  color: rgba(107, 114, 128, 1);
  font-size: 0.875rem;
  line-height: 1.25rem;
  margin-top: 3.5rem;
  opacity: 0.6;
  text-align: center;
}

#love svg {
  color: rgba(252, 165, 165, 1);
  width: 1.25rem;
  height: 1.25rem;
  display: inline;
  margin-top: -0.25rem;
}

@media screen and (min-width: 768px) {
  #hero {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  #hero .logo-container {
    display: flex;
  }

  #middle-content {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 4rem;
  }
}
</style>
