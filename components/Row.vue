<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    reverse: { type: Boolean, default: false },
    reverseXs: { type: Boolean, default: false },
    reverseSm: { type: Boolean, default: false },
    reverseMd: { type: Boolean, default: false },
    reverseLg: { type: Boolean, default: false },
    reverseXl: { type: Boolean, default: false },
    reverseXxl: { type: Boolean, default: false },
    startXs: { type: Boolean, default: false },
    centerXs: { type: Boolean, default: false },
    endXs: { type: Boolean, default: false },
    topXs: { type: Boolean, default: false },
    middleXs: { type: Boolean, default: false },
    bottomXs: { type: Boolean, default: false },
    aroundXs: { type: Boolean, default: false },
    betweenXs: { type: Boolean, default: false },
    startSm: { type: Boolean, default: false },
    centerSm: { type: Boolean, default: false },
    endSm: { type: Boolean, default: false },
    topSm: { type: Boolean, default: false },
    middleSm: { type: Boolean, default: false },
    bottomSm: { type: Boolean, default: false },
    aroundSm: { type: Boolean, default: false },
    betweenSm: { type: Boolean, default: false },
    startMd: { type: Boolean, default: false },
    centerMd: { type: Boolean, default: false },
    endMd: { type: Boolean, default: false },
    topMd: { type: Boolean, default: false },
    middleMd: { type: Boolean, default: false },
    bottomMd: { type: Boolean, default: false },
    aroundMd: { type: Boolean, default: false },
    betweenMd: { type: Boolean, default: false },
    startLg: { type: Boolean, default: false },
    centerLg: { type: Boolean, default: false },
    endLg: { type: Boolean, default: false },
    topLg: { type: Boolean, default: false },
    middleLg: { type: Boolean, default: false },
    bottomLg: { type: Boolean, default: false },
    aroundLg: { type: Boolean, default: false },
    betweenLg: { type: Boolean, default: false },
    steppedDown: { type: Boolean, default: false },
    steppedUp: { type: Boolean, default: false }
  },
  computed: {
    classes () {
      let c = this.reverse ? 'row reverse' : 'row '
      c += this.startXs ? ' start-xs' : (this.centerXs ? ' center-xs' : (this.endXs ? ' end-xs' : ''))
      c += this.startSm ? ' start-sm' : (this.centerSm ? ' center-sm' : (this.endSm ? ' end-sm' : ''))
      c += this.startMd ? ' start-md' : (this.centerMd ? ' center-md' : (this.endMd ? ' end-md' : ''))
      c += this.startLg ? ' start-lg' : (this.centerLg ? ' center-lg' : (this.endLg ? ' end-lg' : ''))
      c += this.topXs ? ' top-xs' : (this.middleXs ? ' middle-xs' : (this.bottomXs ? ' bottom-xs' : ''))
      c += this.topSm ? ' top-sm' : (this.middleSm ? ' middle-sm' : (this.bottomSm ? ' bottom-sm' : ''))
      c += this.topMd ? ' top-md' : (this.middleMd ? ' middle-md' : (this.bottomMd ? ' bottom-md' : ''))
      c += this.topLg ? ' top-lg' : (this.middleLg ? ' middle-lg' : (this.bottomLg ? ' bottom-lg' : ''))
      c += this.aroundXs ? ' around-xs' : (this.betweenXs ? ' between-xs' : '')
      c += this.aroundSm ? ' around-sm' : (this.betweenSm ? ' between-sm' : '')
      c += this.aroundMd ? ' around-md' : (this.betweenMd ? ' between-md' : '')
      c += this.aroundLg ? ' around-lg' : (this.betweenLg ? ' between-lg' : '')
      c += this.steppedUp ? ' stepped-up' : ''
      c += this.steppedDown ? ' stepped-down' : ''
      c += this.reverseXs ? '  reverse-xs' : ''
      c += this.reverseSm ? ' reverse-sm' : ''
      c += this.reverseMd ? ' reverse-md' : ''
      c += this.reverseLg ? ' reverse-lg' : ''
      c += this.reverseXl ? ' reverse-xl' : ''
      c += this.reverseXxl ? ' reverse-xxl' : ''
      return c
    }
  }
}
</script>

<style lang="scss">
  .row {
    width:calc(100% + var(--baseline));
    box-sizing: border-box;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 0;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right:vr(-0.5);
    margin-left:vr(-0.5);

  }

  .row.stepped-down {
    .col-xxs-6 {
      &:nth-child(even) {
        margin-top:vr(3);
      }
    }
    .col-xxs-4 {
      &:nth-child(3n+2) {
        margin-top:vr(3);
      }
      &:nth-child(3n+3) {
        margin-top:vr(6);
      }
    }
    .col-xxs-3 {
      &:nth-child(4n+2) {
        margin-top:vr(3);
      }
      &:nth-child(4n+3) {
        margin-top:vr(6);
      }
      &:nth-child(4n+4) {
        margin-top:vr(9);
      }
    }
    @include breakpoint(xs) {
      .col-xs-6 {
        &:nth-child(even) {
          margin-top:vr(3);
        }
      }
      .col-xs-4 {
        &:nth-child(3n+2) {
          margin-top:vr(3);
        }
        &:nth-child(3n+3) {
          margin-top:vr(6);
        }
      }
      .col-xs-3 {
        &:nth-child(4n+2) {
          margin-top:vr(3);
        }
        &:nth-child(4n+3) {
          margin-top:vr(6);
        }
        &:nth-child(4n+4) {
          margin-top:vr(9);
        }
      }
    }
    @include breakpoint(sm) {
      .col-sm-6 {
        &:nth-child(even) {
          margin-top:vr(3);
        }
      }
      .col-sm-4 {
        &:nth-child(3n+2) {
          margin-top:vr(3);
        }
        &:nth-child(3n+3) {
          margin-top:vr(6);
        }
      }
      .col-sm-3 {
        &:nth-child(4n+2) {
          margin-top:vr(3);
        }
        &:nth-child(4n+3) {
          margin-top:vr(6);
        }
        &:nth-child(4n+4) {
          margin-top:vr(9);
        }
      }
    }
    @include breakpoint(md) {
      .col-md-6 {
        &:nth-child(even) {
          margin-top:vr(3);
        }
      }
      .col-md-4 {
        &:nth-child(3n+2) {
          margin-top:vr(3);
        }
        &:nth-child(3n+3) {
          margin-top:vr(6);
        }
      }
      .col-md-3 {
        &:nth-child(4n+2) {
          margin-top:vr(3);
        }
        &:nth-child(4n+3) {
          margin-top:vr(6);
        }
        &:nth-child(4n+4) {
          margin-top:vr(9);
        }
      }
    }
    @include breakpoint(lg) {
      .col-lg-6 {
        &:nth-child(even) {
          margin-top:vr(3);
        }
      }
      .col-lg-4 {
        &:nth-child(3n+2) {
          margin-top:vr(3);
        }
        &:nth-child(3n+3) {
          margin-top:vr(6);
        }
      }
      .col-lg-3 {
        &:nth-child(4n+2) {
          margin-top:vr(3);
        }
        &:nth-child(4n+3) {
          margin-top:vr(6);
        }
        &:nth-child(4n+4) {
          margin-top:vr(9);
        }
      }
    }
    @include breakpoint(xl) {
      .col-xl-6 {
        &:nth-child(even) {
          margin-top:vr(3);
        }
      }
      .col-xl-4 {
        &:nth-child(3n+2) {
          margin-top:vr(3);
        }
        &:nth-child(3n+3) {
          margin-top:vr(6);
        }
      }
      .col-xl-3 {
        &:nth-child(4n+2) {
          margin-top:vr(3);
        }
        &:nth-child(4n+3) {
          margin-top:vr(6);
        }
        &:nth-child(4n+4) {
          margin-top:vr(9);
        }
      }
    }
    @include breakpoint(xxl) {
      .col-xxl-6 {
        &:nth-child(even) {
          margin-top:vr(3);
        }
      }
      .col-xxl-4 {
        &:nth-child(3n+2) {
          margin-top:vr(3);
        }
        &:nth-child(3n+3) {
          margin-top:vr(6);
        }
      }
      .col-xxl-3 {
        &:nth-child(4n+2) {
          margin-top:vr(3);
        }
        &:nth-child(4n+3) {
          margin-top:vr(6);
        }
        &:nth-child(4n+4) {
          margin-top:vr(9);
        }
      }
    }
    @include breakpoint(xxxl) {
      .col-xxxl-6 {
        &:nth-child(even) {
          margin-top:vr(3);
        }
      }
      .col-xxxl-4 {
        &:nth-child(3n+2) {
          margin-top:vr(3);
        }
        &:nth-child(3n+3) {
          margin-top:vr(6);
        }
      }
      .col-xxxl-3 {
        &:nth-child(4n+2) {
          margin-top:vr(3);
        }
        &:nth-child(4n+3) {
          margin-top:vr(6);
        }
        &:nth-child(4n+4) {
          margin-top:vr(9);
        }
      }
    }
  }

  .row.stepped-up {
    .col-xxs-6 {
      &:nth-child(1) {
          margin-top:vr(3);
        }
        &:nth-child(2n+4) {
          margin-top:vr(-3);
        }
    }
    .col-xxs-4 {
      &:nth-child(1) {
          margin-top:vr(6);
        }
        &:nth-child(2) {
          margin-top:vr(3);
        }
        &:nth-child(3n+4) {
          margin-top:0;
        }
        &:nth-child(3n+5) {
          margin-top:vr(-3);
        }
        &:nth-child(3n+6) {
          margin-top:vr(-6);
        }
    }
    .col-xxs-3 {
      &:nth-child(4n+3) {
        margin-top:vr(3);
      }
      &:nth-child(4n+2) {
        margin-top:vr(6);
      }
      &:nth-child(4n+1) {
        margin-top:vr(9);
      }
    }
    @include breakpoint(xs) {
      .col-xs-6 {
        &:nth-child(1) {
          margin-top:vr(3);
        }
        &:nth-child(2n+4) {
          margin-top:vr(-3);
        }
      }
      .col-xs-4 {
        &:nth-child(1) {
          margin-top:vr(6);
        }
        &:nth-child(2) {
          margin-top:vr(3);
        }
        &:nth-child(3n+4) {
          margin-top:0;
        }
        &:nth-child(3n+5) {
          margin-top:vr(-3);
        }
        &:nth-child(3n+6) {
          margin-top:vr(-6);
        }
      }
      .col-xs-3 {
        &:nth-child(4n+3) {
          margin-top:vr(3);
        }
        &:nth-child(4n+2) {
          margin-top:vr(6);
        }
        &:nth-child(4n+1) {
          margin-top:vr(9);
        }
      }
    }
    @include breakpoint(sm) {
      .col-sm-6 {
        &:nth-child(1) {
          margin-top:vr(3);
        }
        &:nth-child(2n+4) {
          margin-top:vr(-3);
        }
      }
      .col-sm-4 {
        &:nth-child(1) {
          margin-top:vr(6);
        }
        &:nth-child(2) {
          margin-top:vr(3);
        }
        &:nth-child(3n+4) {
          margin-top:0;
        }
        &:nth-child(3n+5) {
          margin-top:vr(-3);
        }
        &:nth-child(3n+6) {
          margin-top:vr(-6);
        }
      }
      .col-sm-3 {
        &:nth-child(4n+3) {
          margin-top:vr(3);
        }
        &:nth-child(4n+2) {
          margin-top:vr(6);
        }
        &:nth-child(4n+1) {
          margin-top:vr(9);
        }
      }
    }
    @include breakpoint(md) {
      .col-md-6 {
        &:nth-child(1) {
          margin-top:vr(3);
        }
        &:nth-child(2n+4) {
          margin-top:vr(-3);
        }
      }
      .col-md-4 {
        &:nth-child(1) {
          margin-top:vr(6);
        }
        &:nth-child(2) {
          margin-top:vr(3);
        }
        &:nth-child(3n+4) {
          margin-top:0;
        }
        &:nth-child(3n+5) {
          margin-top:vr(-3);
        }
        &:nth-child(3n+6) {
          margin-top:vr(-6);
        }
      }
      .col-md-3 {
        &:nth-child(4n+3) {
          margin-top:vr(3);
        }
        &:nth-child(4n+2) {
          margin-top:vr(6);
        }
        &:nth-child(4n+1) {
          margin-top:vr(9);
        }
      }
    }
    @include breakpoint(lg) {
      .col-lg-6 {
        &:nth-child(1) {
          margin-top:vr(3);
        }
        &:nth-child(2n+4) {
          margin-top:vr(-3);
        }
      }
      .col-lg-4 {
        &:nth-child(1) {
          margin-top:vr(6);
        }
        &:nth-child(2) {
          margin-top:vr(3);
        }
        &:nth-child(3n+4) {
          margin-top:0;
        }
        &:nth-child(3n+5) {
          margin-top:vr(-3);
        }
        &:nth-child(3n+6) {
          margin-top:vr(-6);
        }
      }
      .col-lg-3 {
        &:nth-child(4n+3) {
          margin-top:vr(3);
        }
        &:nth-child(4n+2) {
          margin-top:vr(6);
        }
        &:nth-child(4n+1) {
          margin-top:vr(9);
        }
      }
    }
    @include breakpoint(xl) {
      .col-xl-6 {
        &:nth-child(1) {
          margin-top:vr(3);
        }
        &:nth-child(2n+4) {
          margin-top:vr(-3);
        }
      }
      .col-xl-4 {
        &:nth-child(1) {
          margin-top:vr(6);
        }
        &:nth-child(2) {
          margin-top:vr(3);
        }
        &:nth-child(3n+4) {
          margin-top:0;
        }
        &:nth-child(3n+5) {
          margin-top:vr(-3);
        }
        &:nth-child(3n+6) {
          margin-top:vr(-6);
        }
      }
      .col-xl-3 {
        &:nth-child(4n+3) {
          margin-top:vr(3);
        }
        &:nth-child(4n+2) {
          margin-top:vr(6);
        }
        &:nth-child(4n+1) {
          margin-top:vr(9);
        }
      }
    }
    @include breakpoint(xxl) {
      .col-xxl-6 {
        &:nth-child(1) {
          margin-top:vr(3);
        }
        &:nth-child(2n+4) {
          margin-top:vr(-3);
        }
      }
      .col-xxl-4 {
        &:nth-child(1) {
          margin-top:vr(6);
        }
        &:nth-child(2) {
          margin-top:vr(3);
        }
        &:nth-child(3n+4) {
          margin-top:0;
        }
        &:nth-child(3n+5) {
          margin-top:vr(-3);
        }
        &:nth-child(3n+6) {
          margin-top:vr(-6);
        }
      }
      .col-xxl-3 {
        &:nth-child(4n+3) {
          margin-top:vr(3);
        }
        &:nth-child(4n+2) {
          margin-top:vr(6);
        }
        &:nth-child(4n+1) {
          margin-top:vr(9);
        }
      }
    }
    @include breakpoint(xxxl) {
      .col-xxxl-6 {
        &:nth-child(1) {
          margin-top:vr(3);
        }
        &:nth-child(2n+4) {
          margin-top:vr(-3);
        }
      }
      .col-xxxl-4 {
        &:nth-child(1) {
          margin-top:vr(6);
        }
        &:nth-child(2) {
          margin-top:vr(3);
        }
        &:nth-child(3n+4) {
          margin-top:0;
        }
        &:nth-child(3n+5) {
          margin-top:vr(-3);
        }
        &:nth-child(3n+6) {
          margin-top:vr(-6);
        }
      }
      .col-xxxl-3 {
        &:nth-child(4n+3) {
          margin-top:vr(3);
        }
        &:nth-child(4n+2) {
          margin-top:vr(6);
        }
        &:nth-child(4n+1) {
          margin-top:vr(9);
        }
      }
    }
  }



  

  .row.reverse {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: reverse;
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse;
  }


  .start-xs {
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    
  }

  .center-xs {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    
  }

  .end-xs {
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    
  }

  .top-xs {
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
  }

  .middle-xs {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .bottom-xs {
    -webkit-box-align: end;
    -ms-flex-align: end;
    align-items: flex-end;
  }

  .around-xs {
    -ms-flex-pack: distribute;
    justify-content: space-around;
  }

  .between-xs {
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }

  .first-xs {
    -webkit-box-ordinal-group: 0;
    -ms-flex-order: -1;
    order: -1;
  }

  .last-xs {
    -webkit-box-ordinal-group: 2;
    -ms-flex-order: 1;
    order: 1;
  }
  @include breakpoint(xs) {
    .row.reverse-xs {
      -webkit-box-orient: horizontal;
      -webkit-box-direction: reverse;
      -ms-flex-direction: row-reverse;
      flex-direction: row-reverse;
    }
  }
  @include breakpoint(sm) {
    .row.reverse-sm {
      -webkit-box-orient: horizontal;
      -webkit-box-direction: reverse;
      -ms-flex-direction: row-reverse;
      flex-direction: row-reverse;
    }

    .start-sm {
      -webkit-box-pack: start;
      -ms-flex-pack: start;
      justify-content: flex-start;
      
    }

    .center-sm {
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      
    }

    .end-sm {
      -webkit-box-pack: end;
      -ms-flex-pack: end;
      justify-content: flex-end;
      
    }

    .top-sm {
      -webkit-box-align: start;
      -ms-flex-align: start;
      align-items: flex-start;
    }

    .middle-sm {
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
    }

    .bottom-sm {
      -webkit-box-align: end;
      -ms-flex-align: end;
      align-items: flex-end;
    }

    .around-sm {
      -ms-flex-pack: distribute;
      justify-content: space-around;
    }

    .between-sm {
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
    }

    .first-sm {
      -webkit-box-ordinal-group: 0;
      -ms-flex-order: -1;
      order: -1;
    }

    .last-sm {
      -webkit-box-ordinal-group: 2;
      -ms-flex-order: 1;
      order: 1;
    }
  }

  @include breakpoint(md) {
    .row.reverse-md {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: reverse;
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse;
  }


    .start-md {
      -webkit-box-pack: start;
      -ms-flex-pack: start;
      justify-content: flex-start;
      
    }

    .center-md {
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      
    }

    .end-md {
      -webkit-box-pack: end;
      -ms-flex-pack: end;
      justify-content: flex-end;
      
    }

    .top-md {
      -webkit-box-align: start;
      -ms-flex-align: start;
      align-items: flex-start;
    }

    .middle-md {
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
    }

    .bottom-md {
      -webkit-box-align: end;
      -ms-flex-align: end;
      align-items: flex-end;
    }

    .around-md {
      -ms-flex-pack: distribute;
      justify-content: space-around;
    }

    .between-md {
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
    }

    .first-md {
      -webkit-box-ordinal-group: 0;
      -ms-flex-order: -1;
      order: -1;
    }

    .last-md {
      -webkit-box-ordinal-group: 2;
      -ms-flex-order: 1;
      order: 1;
    }
  }

  @include breakpoint(lg) {
    .row.reverse-lg {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: reverse;
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse;
  }

    .start-lg {
      -webkit-box-pack: start;
      -ms-flex-pack: start;
      justify-content: flex-start;
      
    }

    .center-lg {
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      
    }

    .end-lg {
      -webkit-box-pack: end;
      -ms-flex-pack: end;
      justify-content: flex-end;
      
    }

    .top-lg {
      -webkit-box-align: start;
      -ms-flex-align: start;
      align-items: flex-start;
    }

    .middle-lg {
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
    }

    .bottom-lg {
      -webkit-box-align: end;
      -ms-flex-align: end;
      align-items: flex-end;
    }

    .around-lg {
      -ms-flex-pack: distribute;
      justify-content: space-around;
    }

    .between-lg {
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
    }

    .first-lg {
      -webkit-box-ordinal-group: 0;
      -ms-flex-order: -1;
      order: -1;
    }

    .last-lg {
      -webkit-box-ordinal-group: 2;
      -ms-flex-order: 1;
      order: 1;
    }
  }

  @include breakpoint(xl) {
    .row.reverse-xl {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: reverse;
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse;
  }

    .start-xl {
      -webkit-box-pack: start;
      -ms-flex-pack: start;
      justify-content: flex-start;
      
    }

    .center-xl {
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      
    }

    .end-xl {
      -webkit-box-pack: end;
      -ms-flex-pack: end;
      justify-content: flex-end;
      
    }

    .top-xl {
      -webkit-box-align: start;
      -ms-flex-align: start;
      align-items: flex-start;
    }

    .middle-xl {
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
    }

    .bottom-xl {
      -webkit-box-align: end;
      -ms-flex-align: end;
      align-items: flex-end;
    }

    .around-xl {
      -ms-flex-pack: distribute;
      justify-content: space-around;
    }

    .between-xl {
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
    }

    .first-xl {
      -webkit-box-ordinal-group: 0;
      -ms-flex-order: -1;
      order: -1;
    }

    .last-xl {
      -webkit-box-ordinal-group: 2;
      -ms-flex-order: 1;
      order: 1;
    }
  }

  @include breakpoint(xxl) {
    .row.reverse-xxl {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: reverse;
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse;
  }

    .start-xxl {
      -webkit-box-pack: start;
      -ms-flex-pack: start;
      justify-content: flex-start;
      
    }

    .center-xxl {
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      
    }

    .end-xxl {
      -webkit-box-pack: end;
      -ms-flex-pack: end;
      justify-content: flex-end;
      
    }

    .top-xxl {
      -webkit-box-align: start;
      -ms-flex-align: start;
      align-items: flex-start;
    }

    .middle-xxl {
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
    }

    .bottom-xxl {
      -webkit-box-align: end;
      -ms-flex-align: end;
      align-items: flex-end;
    }

    .around-xxl {
      -ms-flex-pack: distribute;
      justify-content: space-around;
    }

    .between-xxl {
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
    }

    .first-xxl {
      -webkit-box-ordinal-group: 0;
      -ms-flex-order: -1;
      order: -1;
    }

    .last-xxl {
      -webkit-box-ordinal-group: 2;
      -ms-flex-order: 1;
      order: 1;
    }
  }
</style>
