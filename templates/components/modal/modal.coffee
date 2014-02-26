# Add blanket if not already on page
if Array.prototype.slice.call(document.querySelectorAll('.modal__blanket')).length==0
  el.remove() for el in document.querySelectorAll('.modal__blanket')
  blanket = document.createElement 'div'
  blanket.setAttribute('class', 'modal__blanket')
  document.body.appendChild blanket

for trigger in document.querySelectorAll("[data-modal-target]")
  trigger.addEventListener 'click', (e) ->
    e.preventDefault()
    t = e.target || e.srcElement
    target = document.getElementById(t.getAttribute 'data-modal-target')
    if t.getAttribute('data-modal-offset')==''
      target.style.top = t.offsetTop-160+'px'
      target.addClass('on')
    else
      target.style.top = parseInt((window.height()-target.offsetHeight)/2)-document.body.getBoundingClientRect().top+'px'
      target.addClass('on')

    document.querySelector('.modal__blanket').toggleClass 'on'

for el in document.querySelectorAll('.modal__blanket,.modal__close')
  el.addEventListener 'click', (e) ->  
    e.preventDefault()
    modal.removeClass 'on' for modal in document.querySelectorAll('.modal__dialog')
    document.querySelector('.modal__blanket').toggleClass 'on'
