window.UOMinjectGlobalNav = ->
  class UOMGlobalNavState
    constructor: ->
      @page = document.querySelector('.page-inner')
      @sitemap = document.querySelector('div[role="sitemap"]')
      @trigger = document.querySelector('.sitemap-label')
      @menutrigger = document.querySelector('.page-header-tools a[title="Menu"]')
      @searchtrigger = document.querySelector('.page-header-tools a[title="Search"]')
      @blanket = document.querySelector('.modal__blanket')

      @setupEvents()

    setupEvents: ->
      t = this
      if document.countSelector('div[role="navigation"]') == 1
        @localnav = document.querySelector('div[role="navigation"]')
        @localsitemaptrigger = @localnav.querySelector('.sitemap-link')

        @menutrigger.addEventListener 'click', (e) ->
          e.preventDefault()
          t.blanket.toggleClass 'on'
          t.trigger.removeClass 'active'
          t.page.removeClass 'global-active'
          t.localnav.removeClass 'global-active'
          t.sitemap.removeClass 'active'
          t.sitemap.addClass 'reveal'
          t.page.toggleClass 'active'
          t.localnav.toggleClass 'active'

        @localnav.querySelector('h2:first-child').addEventListener 'click', (e) ->
          e.preventDefault()
          if t.page.hasClass 'global-active'
            t.page.removeClass 'global-active'
            t.page.addClass 'active'
            t.localnav.removeClass 'global-active'
            t.localnav.addClass 'active'
            t.sitemap.removeClass 'active'
          else
            t.blanket.removeClass 'on'
            t.trigger.addClass 'active'
            t.page.removeClass 'global-active'
            t.localnav.removeClass 'global-active'
            t.sitemap.removeClass 'active'
            t.page.toggleClass 'active'
            t.localnav.toggleClass 'active'

        @trigger.addEventListener 'click', (e) ->
          e.preventDefault()
          t.blanket.addClass 'on'
          t.trigger.addClass 'active'
          t.page.addClass 'global-active'
          t.localnav.removeClass 'active'
          t.localnav.addClass 'global-active'
          t.sitemap.toggleClass 'active'

        @sitemap.querySelector('.close-button').addEventListener 'click', (e) ->
          e.preventDefault()
          t.page.removeClass 'global-active'
          t.page.addClass 'active'
          t.trigger.removeClass 'active'
          t.localnav.removeClass 'global-active'
          t.localnav.addClass 'active'
          t.sitemap.removeClass 'active'

        @localsitemaptrigger.addEventListener 'click', (e) ->
          e.preventDefault()
          t.trigger.addClass 'active'
          t.page.addClass 'global-active'
          t.localnav.removeClass 'active'
          t.localnav.addClass 'global-active'
          t.sitemap.toggleClass 'active'

      else
        @menutrigger.addEventListener 'click', (e) ->
          e.preventDefault()
          t.blanket.toggleClass 'on'
          t.trigger.addClass 'active'
          t.page.toggleClass 'global-active'
          t.sitemap.toggleClass 'active'

        @sitemap.querySelector('.close-button').addEventListener 'click', (e) ->
          e.preventDefault()
          t.blanket.removeClass 'on'
          t.trigger.addClass 'active'
          t.page.toggleClass 'global-active'
          t.sitemap.toggleClass 'active'

      @blanket.addEventListener 'click', (e) ->
        e.preventDefault()
        t.blanket.removeClass 'on'
        t.trigger.addClass 'active'
        t.page.removeClass 'global-active'
        t.page.removeClass 'active'
        if t.localnav
          t.localnav.removeClass 'global-active'
          t.localnav.removeClass 'active'
        t.sitemap.removeClass 'active'

      if @searchtrigger
        @searchtrigger.addEventListener 'click', (e) ->
          e.preventDefault()
          t.blanket.toggleClass 'on'
          t.trigger.addClass 'active'
          t.page.addClass 'global-active'
          if t.localnav
            t.localnav.removeClass 'active'
            t.localnav.addClass 'global-active'
          t.sitemap.addClass 'active'
          t.sitemap.querySelector('input[type="search"]').focus()

  # Move local nav outside page container
  if document.countSelector('div[role="navigation"]') == 1
    localnav = document.querySelector('div[role="navigation"]')

    sitemaplink = document.createElement 'a'
    sitemaplink.addClass 'sitemap-link'
    sitemaplink.appendChild document.createTextNode 'Browse University'
    sitemaplink.href = 'https://unimelb.edu.au/sitemap'
    localnav.appendChild sitemaplink

    localnav.removeClass('no-js')
    document.body.appendChild(localnav)

    for group in localnav.querySelectorAll('a')

      elements = []
      for node in group.parentNode.childNodes
        if node.nodeType==1 and !node.hasClass('sitemap-link') and node.nodeName != 'H2'
          elements.push node

      if elements.length > 1
        childgroup = elements[1]

        back = document.createElement 'li'
        back.addClass 'back'
        back.innerHTML = "<span>" + group.firstChild.data + "</span>"
        childgroup.insertBefore(back, childgroup.firstChild)

        childgroup.firstChild.addEventListener 'click', (e) ->
          e.preventDefault()
          this.parentNode.toggleClass 'hide'
          this.parentNode.toggleClass 'active'

        group.addClass('parent')
        childgroup.addClass('hide')
        group.addEventListener 'click', (e) ->
          e.preventDefault()
          this.parentNode.querySelector('ul').toggleClass 'hide'
          this.parentNode.querySelector('ul').toggleClass 'active'
          localnav.scrollTop = 0


  # Create global nav trigger
  trigger = document.querySelector('div.sitemap-label')
  unless trigger
    trigger = document.createElement('div')
    trigger.setAttribute('class', 'sitemap-label active')
    trigger.innerHTML = """
      <span>University Sitemap</span>
    """
    document.body.appendChild(trigger)

  # Create global nav
  nav = document.querySelector('[role="sitemap"]')
  unless nav
    nav = document.createElement('div')
    nav.setAttribute('role', 'sitemap')
    nav.innerHTML = """
      <a class="close-button" href="">Close</a>
      <a href="https://www.unimelb.edu.au" class="logo">University of Melbourne</a>
      <form action="http://search.unimelb.edu.au" method="get">
        <fieldset>
          <input data-required placeholder="Search" name="q" type="search" title="Please enter a keyword." />
          <input type="submit" value="Go" class="search-button">
        </fieldset>
      </form>
      <ul class="quicklinks">
        <li><a href="http://about.unimelb.edu.au/governance-and-leadership/faculties"><span class="icon faculties"></span> Faculties and Graduate Schools</a></li>
        <li><a href="http://library.unimelb.edu.au/"><span class="icon library"></span> Library</a></li>
        <li><a href="http://www.unimelb.edu.au/contact/"><span class="icon contact"></span> Contact us</a></li>
        <li><a href="http://maps.unimelb.edu.au/"><span class="icon maps"></span> Maps</a></li>
        <li><a href="http://www.campaign.unimelb.edu.au/"><span class="icon support"></span> Support the Campaign</a></li>
      </ul>
      <div>
        <div class="col-3">
          <div>
            <h2><a href="http://coursesearch.unimelb.edu.au/">Study at Melbourne</a></h2>
            <ul>
              <li><a href="http://coursesearch.unimelb.edu.au/undergrad">Undergraduate study</a></li>
              <li><a href="http://coursesearch.unimelb.edu.au/grad">Graduate study</a></li>
              <li><a href="http://futurestudents.unimelb.edu.au/">Future students</a></li>
              <li><a href="http://futurestudents.unimelb.edu.au/admissions">Admissions, fees &amp; applications</a></li>
              <li><a href="http://futurestudents.unimelb.edu.au/info/international">International students</a></li>
              <li><a href="http://www.unimelb.edu.au/campustour/">Campus tour</a></li>
            </ul>
          </div>
          <div>
            <h2><a href="http://about.unimelb.edu.au/">About us</a></h2>
            <ul>
              <li><a href="http://about.unimelb.edu.au/strategy-and-leadership">Strategy and leadership</a></li>
              <li><a href="http://about.unimelb.edu.au/tradition-of-excellence">Tradition of excellence</a></li>
              <li><a href="http://about.unimelb.edu.au/international-connections">International connections</a></li>
              <li><a href="http://about.unimelb.edu.au/campuses-and-facilities">Campuses and facilities</a></li>
              <li><a href="http://about.unimelb.edu.au/governance-and-leadership">Structure and governance</a></li>
              <li><a href="http://about.unimelb.edu.au/policy-and-publications">Policy and publications</a></li>
              <li><a href="http://hr.unimelb.edu.au/careers">Careers at Melbourne</a></li>
              <li><a href="http://newsroom.unimelb.edu.au">Newsroom</a></li>

            </ul>
          </div>
          <div>
            <h2><a href="http://unimelb.edu.au/research/">Research</a></h2>
            <ul>
              <li><a href="http://www.unimelb.edu.au/research/about-research-at-melbourne.html">About Research at Melbourne</a></li>
              <li><a href="http://ri.unimelb.edu.au/">Research institutes</a></li>
              <li><a href="http://www.unimelb.edu.au/research/research-institutes-centres.html">Research Centres</a></li>
              <li><a href="http://findanexpert.unimelb.edu.au/">Find an expert or supervisor</a></li>
              <li><a href="http://gradresearch.unimelb.edu.au/">Graduate researchers</a></li>
              <li><a href="https://pursuit.unimelb.edu.au/">Pursuit: our research showcase</a></li>
            </ul>
          </div>
        </div>
        <div class="col-3">
          <div>
            <h2><a href="http://unimelb.edu.au/engage/">Engagement</a></h2>
            <ul>
              <li><a href="http://events.unimelb.edu.au/">Events</a></li>
              <li><a href="http://engage.unimelb.edu.au/community-engagement">Community</a></li>
              <li><a href="http://engage.unimelb.edu.au/global-engagement">Global Engagement</a></li>
              <li><a href="http://businessconnect.unimelb.edu.au/">Business &amp; Industry</a></li>
              <li><a href="http://engage.unimelb.edu.au/cultural-engagement">Arts &amp; Culture</a></li>
              <li><a href="http://www.sport.unimelb.edu.au/facilities/index.html">Sports Facilities</a></li>
            </ul>
          </div>
          <div>
            <h2><a href="http://alumni.unimelb.edu.au/">Alumni &amp; friends</a></h2>
            <ul>
              <li><a href="http://alumni.unimelb.edu.au/benefits-services">Benefits &amp; services</a></li>
              <li><a href="http://www.campaign.unimelb.edu.au/">Giving</a></li>
              <li><a href="http://alumni.unimelb.edu.au/get-involved">Get involved</a></li>
              <li><a href="http://alumni.unimelb.edu.au/my-network">Networks</a></li>
              <li><a href="http://mag.alumni.unimelb.edu.au/?sl=1">3010: alumni magazine</a></li>
              <li><a href="http://alumni.unimelb.edu.au/news">News</a></li>
              <li><a href="http://alumni.online.unimelb.edu.au/s/1182/3col.aspx?sid=1182&gid=1&pgid=722">Events</a></li>
            </ul>
          </div>
          <div>
            <h2><a href="http://www.unimelb.edu.au/contact/">Contact &amp; Maps</a></h2>
            <ul>
              <li><a href="http://ask.unimelb.edu.au/app/contact">Contact us</a></li>
              <li><a href="http://ask.unimelb.edu.au">Enquiries</a></li>
              <li><a href="http://newsroom.melbourne.edu/">Media</a></li>
              <li><a href="http://findanexpert.unimelb.edu.au">Find an expert</a></li>
              <li><a href="http://maps.unimelb.edu.au/">Campus maps</a></li>
              <li><a href="http://pcs.unimelb.edu.au/traffic-and-parking/">Traffic, parking &amp; bicycles</a></li>
              <li><a href="http://directory.unimelb.edu.au/">Find a staff member</a></li>
            </ul>
          </div>
        </div>
      </div>
    """

    form = nav.querySelector('form')

    if /(MSIE [8|9].0)/g.test(navigator.userAgent)
      form.elements[1].value = 'Search'
      form.elements[1].addEventListener 'click', (e) ->
        this.select()

    form.addEventListener 'submit', (e) ->
      e.preventDefault()
      window.location = this.action + "#gsc.q=" + this.elements[1].value

    document.body.appendChild(nav)

    # Add link state behaviour
    navstate = new UOMGlobalNavState()
