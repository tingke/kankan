var hua = {
  common: function () {
    window.scrollReveal = new scrollReveal({
      reset: false,
      move: '50px',
      over: '0.66s',
      easing: 'linear',
      init: true,
    });

    $(document).ready(function () {
      var top = $('#header_inside').offset().top;
      //开始监控滚动栏scroll
      $(document).scroll(function () {
        //获取当前滚动栏scroll的高度并赋值
        var scrTop = $(window).scrollTop();
        //开始判断如果导航栏距离顶部的高度等于当前滚动栏的高度则开启悬浮
        if (scrTop >= 150) {
          $('#header_inside').addClass('fixed');
        } else {
          //否则清空悬浮
          $('#header_inside').removeClass('fixed');
        }
      });
    });

    $('.mobi_navBar').click(function () {
      $(this).toggleClass('current');
      if ($(this).hasClass('current')) {
        $('body').addClass('mobbody');
        $('.header .menu').addClass('mobmenu');
      } else {
        $('body').removeClass('mobbody');
        $('.header .menu').removeClass('mobmenu');
      }
    });
    $('.header .menu li').click(function () {
      $('body').removeClass('mobbody');
      $('.header .menu').removeClass('mobmenu');
      $('.mobi_navBar').removeClass('current');
    });
  },
  home: function () {
    var mySwiper = new Swiper('.swiper-container-page', {
      direction: 'vertical',
      mousewheel: true,
      on: {
        init: function () {
          swiperAnimateCache(this); //隐藏动画元素
          this.emit('slideChangeTransitionEnd'); //在初始化时触发一次slideChangeTransitionEnd事件
        },
        slideChangeTransitionEnd: function () {
          swiperAnimate(this);

          if (this.activeIndex > 0) {
            $('.menu .menuli' + this.activeIndex).each(function () {
              $(this).addClass('hover').siblings().removeClass('hover');
            });
          } else {
            /***************/

            var VideoBor = $('.swiper-container-page .swiper-slide:eq(0)');
            var VideoList = VideoBor.find('video').show();
            $('.menu li').each(function () {
              $(this).removeClass('hover');
            });
            /*****************/
            //history.pushState("", '', ' ');
            $('.swiper-slide-pro .section_tit_h3')
              .addClass('animated fadeInUp')
              .animate({ opacity: '1' }, '1500', function () {
                $('.swiper-slide-pro .aniimg')
                  .delay(1000)
                  .addClass('animated fadeInUp')
                  .animate({ opacity: '1' }, '1500', function () {
                    $('.swiper-slide-pro .ptxt')
                      .delay(1000)
                      .addClass('animated fadeInUp')
                      .animate({ opacity: '1' }, '1500', function () {})
                      .show();
                    $('.swiper-slide-pro .swiper-pagination-project')
                      .delay(200)
                      .addClass('animated')
                      .animate({ opacity: '1' }, '1500', function () {});
                  });
              });
          }

          $('.hidden').removeAttr('style').removeClass('animated fadeInUp');
          $('.swiper-slide-pro .ptxt')
            .removeAttr('style')
            .removeClass('animated')
            .css({ display: 'none' });
          $('.swiper-slide-pro .aniimg')
            .removeAttr('style')
            .removeClass('animated')
            .css({ opacity: '0' });
          $('.swiper-slide-pro .swiper-pagination-project')
            .removeClass('animated')
            .css({ opacity: '0' });
          if (this.activeIndex == 1) {
            history.pushState('', '', '#p1');
            var VideoBor = $('.swiper-container-page .swiper-slide:eq(0)');
            var VideoList = VideoBor.find('video').hide();
            $('.swiper-slide-pro .section_tit_h3')
              .addClass('animated fadeInUp')
              .animate({ opacity: '1' }, '1500', function () {
                $('.swiper-slide-pro .aniimg')
                  .delay(1000)
                  .addClass('animated fadeInUp')
                  .animate({ opacity: '1' }, '1500', function () {
                    $('.swiper-slide-pro .ptxt')
                      .delay(1000)
                      .addClass('animated fadeInUp')
                      .animate({ opacity: '1' }, '1500', function () {})
                      .show();
                    $('.swiper-slide-pro .swiper-pagination-project')
                      .delay(200)
                      .addClass('animated')
                      .animate({ opacity: '1' }, '1500', function () {});
                  });
              });
          }
          if (this.activeIndex == 2) {
            history.pushState('', '', '#p2');
            $('.nav_company .hidden')
              .removeClass('animated fadeInUp')
              .removeAttr('style')
              .each(function () {
                $(this).css({ opacity: '0' });
              });

            $('.swiper-slide-product .section_tit_h3')
              .addClass('animated fadeInUp')
              .animate({ opacity: '1' }, '1500', function () {
                $('.nav_product a:eq(0)')
                  .addClass('animated fadeInUp')
                  .animate({ opacity: '1' }, '1000', function () {
                    $('.nav_product a:eq(1)')
                      .addClass('animated fadeInUp')
                      .animate({ opacity: '1' }, '1000', function () {
                        $('.nav_product a:eq(2)')
                          .addClass('animated fadeInUp')
                          .animate({ opacity: '1' }, '1000', function () {
                            $('.swiper-slide-product .productimg')
                              .addClass('animated fadeInUp')
                              .animate({ opacity: '1' }, '1500', function () {});
                          });
                      });
                  });
              });
          }

          if (this.activeIndex == 3) {
            history.pushState('', '', '#p3');
            $('.swiper-slide-company .section_tit_h3')
              .addClass('animated fadeInUp')
              .animate({ opacity: '1' }, '1500', function () {
                $('.copany_info h3')
                  .addClass('animated fadeInUp')
                  .animate({ opacity: '1' }, '1000', function () {
                    $('.copany_info p')
                      .addClass('animated fadeInUp')
                      .animate({ opacity: '1' }, '1000', function () {
                        $('.nav_company a').each(function () {
                          $(this)
                            .delay('slow')
                            .addClass('animated fadeInUp')
                            .animate({ opacity: '1' }, '1000', function () {});
                        });
                      });
                  });
              });
          }

          if (this.activeIndex == 4) {
            history.pushState('', '', '#p4');
            $('.nav_company .hidden')
              .removeClass('animated fadeInUp')
              .removeAttr('style')
              .each(function () {
                $(this).css({ opacity: '0' });
              });

            $('.swiper-slide-contact .section_tit_h3')
              .addClass('animated fadeInUp')
              .animate({ opacity: '1' }, '1500', function () {
                $('.swiper-slide-contact .contact_item:eq(0)')
                  .addClass('animated fadeInUp')
                  .animate({ opacity: '1' }, '1000', function () {
                    $('.swiper-slide-contact .contact_item:eq(1)')
                      .addClass('animated fadeInUp')
                      .animate({ opacity: '1' }, '1000', function () {
                        $('.swiper-slide-contact .contact_item:eq(2)')
                          .addClass('animated fadeInUp')
                          .animate({ opacity: '1' }, '1000', function () {
                            $('.swiper-slide-contact .contact_map')
                              .addClass('animated fadeInUp')
                              .animate({ opacity: '1' }, '1000', function () {
                                $('.swiper-slide-contact .imgline')
                                  .addClass('animated fadeInUp')
                                  .animate({ opacity: '1' }, '1000', function () {
                                    $('.swiper-slide-contact .contact_wx')
                                      .addClass('animated fadeInUp')
                                      .animate({ opacity: '1' }, '1000', function () {
                                        $(
                                          '.swiper-slide-contact .social,.swiper-slide-contact .index_footer'
                                        )
                                          .addClass('animated fadeInUp')
                                          .animate({ opacity: '1' }, '1000', function () {});
                                      });
                                  });
                              });
                          });
                      });
                  });
              });
          }
        },
      },
    });

    var mySwiper_tab = new Swiper('.swiper-product-tab', {
      direction: 'vertical', // 垂直切换选项
      nested: true,
      resistanceRatio: 0,
      mousewheel: true,
      on: {
        slideChangeTransitionEnd: function () {
          swiperAnimate(this);
          $('.nav_product  a:eq(' + this.activeIndex + ')')
            .addClass('hover')
            .siblings()
            .removeClass('hover');

          //this.slides.eq(this.activeIndex).find('.ani').removeClass('ani');//动画只展示一次
        },
      },
    });

    $('.nav_product a').hover(function () {
      $(this).addClass('hover').siblings().removeClass('hover');
      var tabindex = $(this).index();
      mySwiper_tab.slideTo(tabindex, 0, false);
    });

    $(function () {
      $('body').vidbacking({
        masked: false,
      });

      $('.menuli').click(function () {
        var dataid = $(this).attr('data-id');
        mySwiper.emit('slideChangeTransitionEnd');
        mySwiper.slideTo(dataid, 1000, true); //切换到第一个slide，速度为1秒
        swiperAnimate(mySwiper);
        $(this).addClass('hover').siblings().removeClass('hover');
      });
    });

    var hash;
    hash = !window.location.hash ? '' : window.location.hash;
    if (hash.length > 0) {
      var dataid = $(hash).attr('data-id');
      //
      mySwiper.slideTo(dataid, 1000, true);
      // mySwiper.emit('slideChangeTransitionEnd');
      // swiperAnimate(mySwiper);
      $(hash).addClass('hover').siblings().removeClass('hover');
    }
  },
  homemob: function () {
    $('.mobi_navBar').click(function () {
      $(this).toggleClass('current');
      if ($(this).hasClass('current')) {
        $('body').addClass('mobbody');
        $('.header .menu').addClass('mobmenu');
      } else {
        $('body').removeClass('mobbody');
        $('.header .menu').removeClass('mobmenu');
      }
    });
    $('.header .menu li').click(function () {
      $('body').removeClass('mobbody');
      $('.header .menu').removeClass('mobmenu');
      $('.mobi_navBar').removeClass('current');
    });

    var mySwiper = new Swiper('.swiper-container-page', {
      direction: 'vertical',
      mousewheel: true,
      on: {
        init: function () {
          swiperAnimateCache(this); //隐藏动画元素
          this.emit('slideChangeTransitionEnd'); //在初始化时触发一次slideChangeTransitionEnd事件
        },
        slideChangeTransitionEnd: function () {
          swiperAnimate(this);

          if (this.activeIndex > 0) {
            $('.menu .menuli' + this.activeIndex).each(function () {
              $(this).addClass('hover').siblings().removeClass('hover');
            });
          } else {
            //history.pushState("", '', ' ');
            $('.menu .menuli').removeClass('hover');
            var VideoBor = $('.swiper-container-page .swiper-slide:eq(0)');
            var VideoList = VideoBor.find('video').show();
          }

          $('.hidden').removeAttr('style').removeClass('animated fadeInUp');
          $('.swiper-slide-pro .ptxt')
            .removeAttr('style')
            .removeClass('animated')
            .css({ display: 'none' });
          $('.swiper-slide-pro .aniimg')
            .removeAttr('style')
            .removeClass('animated')
            .css({ opacity: '0' });
          $('.swiper-slide-pro .swiper-pagination-projectmob')
            .removeAttr('style')
            .removeClass('animated')
            .css({ opacity: '0' });
          if (this.activeIndex == 1) {
            history.pushState('', '', '#p1');

            $('.nav_company .hidden')
              .removeClass('animated fadeInUp')
              .removeAttr('style')
              .each(function () {
                $(this).css({ opacity: '0' });
              });

            $('.swiper-slide-product .section_tit_h3')
              .addClass('animated fadeInUp')
              .animate({ opacity: '1' }, '1500', function () {
                $('.nav_product a:eq(0)')
                  .addClass('animated fadeInUp')
                  .animate({ opacity: '1' }, '1000', function () {
                    $('.nav_product a:eq(1)')
                      .addClass('animated fadeInUp')
                      .animate({ opacity: '1' }, '1000', function () {
                        $('.nav_product a:eq(2)')
                          .addClass('animated fadeInUp')
                          .animate({ opacity: '1' }, '1000', function () {
                            $('.swiper-slide-product .productimg')
                              .addClass('animated fadeInUp')
                              .animate({ opacity: '1' }, '1500', function () {});
                          });
                      });
                  });
              });
          }
          if (this.activeIndex == 2) {
            history.pushState('', '', '#p2');
            var VideoBor = $('.swiper-container-page .swiper-slide:eq(0)');
            var VideoList = VideoBor.find('video').hide();
            var VideoBor = $('.swiper-container-page .swiper-slide:eq(0)');
            var VideoList = VideoBor.find('video').hide();
            $('.swiper-slide-pro .section_tit_h3')
              .addClass('animated fadeInUp')
              .animate({ opacity: '1' }, '1500', function () {
                $('.swiper-slide-pro .aniimg')
                  .delay(1000)
                  .addClass('animated fadeInUp')
                  .animate({ opacity: '1' }, '1500', function () {
                    $('.swiper-slide-pro .ptxt')
                      .delay(1000)
                      .addClass('animated fadeInUp')
                      .animate({ opacity: '1' }, '1500', function () {})
                      .show();
                    $('.swiper-slide-pro .swiper-pagination-projectmob')
                      .delay(200)
                      .addClass('animated')
                      .animate({ opacity: '1' }, '1500', function () {});
                  });
              });
          }

          if (this.activeIndex == 3) {
            history.pushState('', '', '#p3');
            $('.swiper-slide-company .section_tit_h3')
              .addClass('animated fadeInUp')
              .animate({ opacity: '1' }, '1500', function () {
                $('.copany_info h3')
                  .addClass('animated fadeInUp')
                  .animate({ opacity: '1' }, '1000', function () {
                    $('.copany_info p')
                      .addClass('animated fadeInUp')
                      .animate({ opacity: '1' }, '1000', function () {
                        $('.nav_company a').each(function () {
                          $(this)
                            .delay('slow')
                            .addClass('animated fadeInUp')
                            .animate({ opacity: '1' }, '1000', function () {});
                        });
                      });
                  });
              });
          }

          if (this.activeIndex == 4) {
            history.pushState('', '', '#p4');
            $('.nav_company .hidden')
              .removeClass('animated fadeInUp')
              .removeAttr('style')
              .each(function () {
                $(this).css({ opacity: '0' });
              });

            $('.swiper-slide-contact .section_tit_h3')
              .addClass('animated fadeInUp')
              .animate({ opacity: '1' }, '1500', function () {
                $('.swiper-slide-contact .contact_item:eq(0)')
                  .addClass('animated fadeInUp')
                  .animate({ opacity: '1' }, '1000', function () {
                    $('.swiper-slide-contact .contact_item:eq(1)')
                      .addClass('animated fadeInUp')
                      .animate({ opacity: '1' }, '1000', function () {
                        $('.swiper-slide-contact .contact_item:eq(2)')
                          .addClass('animated fadeInUp')
                          .animate({ opacity: '1' }, '1000', function () {
                            $('.swiper-slide-contact .contact_map')
                              .addClass('animated fadeInUp')
                              .animate({ opacity: '1' }, '1000', function () {
                                $('.swiper-slide-contact .imgline')
                                  .addClass('animated fadeInUp')
                                  .animate({ opacity: '1' }, '1000', function () {
                                    $('.swiper-slide-contact .contact_wx')
                                      .addClass('animated fadeInUp')
                                      .animate({ opacity: '1' }, '1000', function () {
                                        $(
                                          '.swiper-slide-contact .social,.swiper-slide-contact .index_footer'
                                        )
                                          .addClass('animated fadeInUp')
                                          .animate({ opacity: '1' }, '1000', function () {});
                                      });
                                  });
                              });
                          });
                      });
                  });
              });
          }
        },
      },
    });

    var mySwiper_tab = new Swiper('.swiper-product-tab', {
      direction: 'vertical',
      nested: true,
      resistanceRatio: 0,
      on: {
        slideChangeTransitionEnd: function () {
          swiperAnimate(this);
          $('.nav_product  a:eq(' + this.activeIndex + ')')
            .addClass('hover')
            .siblings()
            .removeClass('hover');

          //this.slides.eq(this.activeIndex).find('.ani').removeClass('ani');//动画只展示一次
        },
      },
    });

    var swiper_project = new Swiper('.swiper-container-projectmob', {
      speed: 500,
      loop: true,
      autoHeight: true,
      freeMode: false,
      centeredSlides: true,
      slidesPerView: 1,
      spaceBetween: 0,
      watchSlidesProgress: true,
      pagination: {
        el: '.swiper-container-projectmob .swiper-pagination-projectmob',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span  class="' + className + '"><em></em></span>';
        },
      },
    });

    $('.nav_product  a').click(function () {
      $(this).addClass('hover').siblings().removeClass('hover');
      var tabindex = $(this).index();
      mySwiper_tab.slideTo(tabindex, 0, false);
    });

    $(function () {
      $('.menuli').click(function () {
        var dataid = $(this).attr('data-id');
        mySwiper.emit('slideChangeTransitionEnd');
        mySwiper.slideTo(dataid, 1000, true); //切换到第一个slide，速度为1秒
        swiperAnimate(mySwiper);
        $(this).addClass('hover').siblings().removeClass('hover');
      });
    });

    var hash;
    hash = !window.location.hash ? '' : window.location.hash;
    if (hash.length > 0) {
      var dataid = $(hash).attr('data-id');
      mySwiper.emit('slideChangeTransitionEnd');
      mySwiper.slideTo(dataid, 1000, true);
      swiperAnimate(mySwiper);
      $(hash).addClass('hover').siblings().removeClass('hover');
    }
  },
  carousel: function () {
    var mySwiper = new Swiper('.list-product-caseswiper', {
      loop: true, // 循环模式选项
      autoplay: {
        delay: 2000,
      },
      observer: true,
      observeParents: true,
      // 如果需要分页器
      pagination: {
        el: '.list-product-caseswiper .swiper-pagination-case',
        clickable: true,
      },
    });
  },
  mobios: function () {
    //IOS
  },
  android: function () {
    //android
  },
  subject: function () {
    $(window).scroll(function () {
      const galleryWrapperEl = $('.gallery-wrapper');
      const currentScroll = $(document).scrollTop();
      const windowHeight = $(window).height();

      if (currentScroll < galleryWrapperEl.offset().top - windowHeight) {
        $('.gallery-item').removeClass('active');
        galleryWrapperEl.css({
          transform: 'translateX(0)',
        });
      }
    });

    $('.gallery-item').click(function () {
      const isActive = $(this).hasClass('active');

      $('.gallery-item').removeClass('active');

      if (!isActive) {
        const width = $(this).width();
        $(this).addClass('active');
        $('.gallery-wrapper').css({
          transform: 'translateX(' + (2 - $(this).attr('data-index')) * (width + 10) + 'px)',
        });
      } else {
        $(this).removeClass('active');
        $('.gallery-wrapper').css({
          transform: 'translateX(0)',
        });
      }
    });
  },
};
function parseWords(attr) {
  const parsed = {};
  const words = attr.split(/[, ]+/);
  words.forEach(function (word, i) {
    switch (word) {
      case 'range':
        parsed.range = +words[i + 1];
        return;
      case 'ranges':
        parsed.ranges = words[i + 1];
        return;
      case 'opacity':
        parsed.opacity = +words[i + 1];
        return;
      case 'x':
        parsed.x = +words[i + 1];
        return;
      case 'y':
        parsed.y = +words[i + 1];
        return;
      case 'z':
        parsed.z = +words[i + 1];
        return;
      case 'width':
        parsed.width = +words[i + 1];
        return;
      case 'scale':
        parsed.scale = +words[i + 1];
        return;
      case 'rotateX':
        parsed.rotateX = +words[i + 1];
        return;
      case 'bezier':
        parsed.bezier = +words[i + 1];
        return;
      default:
        return;
    }
  });
  return parsed;
}

function scrollAnimate(el, percent, start, end, bezierString) {
  if (percent < start.range) {
    const css = {};
    if (start.hasOwnProperty('opacity')) {
      css.opacity = start.opacity;
    }
    if (start.hasOwnProperty('x')) {
      css.transform = 'translate3d(' + start.x + 'rem, ' + start.y + 'rem, ' + start.z + 'rem)';
    }
    if (start.hasOwnProperty('width')) {
      css.width = start.width + '%';
    }
    if (start.hasOwnProperty('scale')) {
      css.transform = (css.transform || '') + ' scale(' + start.scale + ')';
    }
    if (start.hasOwnProperty('rotateX')) {
      css.transform = (css.transform || '') + ' rotateX(' + start.rotateX + 'deg)';
    }
    el.css(css);
  } else if (percent >= start.range && percent <= end.range) {
    const p = bezier(...(bezierString || '0,0,1,1').split(','))(
      (percent - start.range) / (end.range - start.range)
    );
    const css = {};
    if (end.hasOwnProperty('opacity')) {
      css.opacity = start.opacity + p * (end.opacity - start.opacity);
    }
    if (end.hasOwnProperty('x')) {
      css.transform =
        'translate3d(' +
        (start.x + p * (end.x - start.x)) +
        'rem, ' +
        (start.y + p * (end.y - start.y)) +
        'rem, ' +
        (start.z + p * (end.z - start.z)) +
        'rem)';
    }
    if (end.hasOwnProperty('width')) {
      css.width = start.width + p * (end.width - start.width) + '%';
    }
    if (end.hasOwnProperty('scale')) {
      css.transform =
        (css.transform || '') + ' scale(' + (start.scale + p * (end.scale - start.scale)) + ')';
    }
    if (start.hasOwnProperty('rotateX')) {
      css.transform =
        (css.transform || '') +
        ' rotateX(' +
        (start.rotateX + p * (end.rotateX - start.rotateX)) +
        'deg)';
    }
    el.css(css);
  } else {
    const css = {};
    if (end.hasOwnProperty('opacity')) {
      css.opacity = end.opacity;
    }
    if (end.hasOwnProperty('x')) {
      css.transform = 'translate3d(' + end.x + 'rem, ' + end.y + 'rem, ' + end.z + 'rem)';
    }
    if (end.hasOwnProperty('width')) {
      css.width = end.width + '%';
    }
    if (end.hasOwnProperty('scale')) {
      css.transform = (css.transform || '') + ' scale(' + end.scale + ')';
    }
    if (end.hasOwnProperty('rotateX')) {
      css.transform = (css.transform || '') + ' rotateX(' + end.rotateX + 'deg)';
    }

    el.css(css);
  }
}

function scrollShow(container, percent) {
  container.find('[data-scroll]').each(function () {
    const el = $(this);
    const bezierString = el.data('scroll');
    const start = parseWords(el.data('scroll-start'));
    const end = parseWords(el.data('scroll-end'));
    scrollAnimate(el, percent, start, end, bezierString);
  });
}

function scrollHide(container, percent) {
  container.find('[data-scroll]').each(function () {
    const el = $(this);
    const hideStart = {
      range: 0,
      opacity: 1,
    };
    const hideEnd = {
      range: 1,
      opacity: 0,
    };
    if (el.data('scroll-final')) {
      const end = parseWords(el.data('scroll-end'));
      const final = parseWords(el.data('scroll-final'));

      if (final.hasOwnProperty('ranges')) {
        const ranges = (final.ranges || '0|1').split('|');
        hideStart.range = ranges[0];
        hideEnd.range = ranges[1];
      }

      if (final.hasOwnProperty('opacity')) {
        hideStart.opacity = end.opacity;
        hideEnd.opacity = final.opacity;
      }
      if (final.hasOwnProperty('width')) {
        hideStart.width = end.width;
        hideEnd.width = final.width;
      }
      if (final.hasOwnProperty('x')) {
        hideStart.x = end.x;
        hideStart.y = end.y;
        hideStart.z = end.z;
        hideEnd.x = final.x;
        hideEnd.y = final.y;
        hideEnd.z = final.z;
      }
      if (final.hasOwnProperty('scale')) {
        hideStart.scale = end.scale;
        hideEnd.scale = final.scale;
      }
      if (final.hasOwnProperty('rotateX')) {
        hideStart.rotateX = end.rotateX;
        hideEnd.rotateX = final.rotateX;
      }
    }

    scrollAnimate(el, percent, hideStart, hideEnd, '0,0,1,1');
  });
}

function handleSection(className) {
  const currentScroll = $(document).scrollTop();
  const windowHeight = $(window).height();
  const el = $(className);
  const height = el.height();
  const offsetTop = el.offset().top;
  const start = offsetTop - windowHeight <= 0 ? 0 : offsetTop - windowHeight;
  const end = offsetTop + height - windowHeight <= 0 ? 0 : offsetTop + height - windowHeight;
  const endHeight = offsetTop + height < windowHeight ? offsetTop + height : windowHeight;

  if (currentScroll >= start && currentScroll <= offsetTop + height - windowHeight) {
    // 从入屏到出屏的进度百分比
    const percent = (currentScroll - start) / height;
    scrollShow(el, percent);
  }

  if (currentScroll >= end && currentScroll <= offsetTop + height) {
    const percent = (currentScroll - end) / endHeight;
    scrollHide(el, percent);
  }
}
function debounce(func, wait, immediate) {
  var timeout, args, context, timestamp, result;
  if (wait === null) wait = 100;

  function later() {
    var last = Date.now() - timestamp;

    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
        context = args = null;
      }
    }
  }

  var debounced = function () {
    context = this;
    args = arguments;
    timestamp = Date.now();
    var callNow = immediate && !timeout;
    if (!timeout) timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
      context = args = null;
    }

    return result;
  };

  debounced.clear = function () {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
  };

  debounced.flush = function () {
    if (timeout) {
      result = func.apply(context, args);
      context = args = null;

      clearTimeout(timeout);
      timeout = null;
    }
  };

  return debounced;
}
