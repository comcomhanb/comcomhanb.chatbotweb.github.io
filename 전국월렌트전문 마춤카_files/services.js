(function(n){function k(f){throw Error(f);}function o(f,i){var h,g,e;for(e in i)h=f[e],g=i[e],h!==g&&g!==t&&(f[e]=g);return f}function u(f,i,h){this.l=f||0;this.i=h;this.k=i;this.b=p}function y(f,i){function h(){e.removeChild(g);try{delete n[b]}catch(a){n[b]=t}}for(var g=document.createElement("script"),e=document.head||document.getElementsByTagName("head")[0],b="mapservices_"+(new Date).getTime(),d=new u(1E4,function(){i(p);h()});n[b];)b+="a";n[b]=function(a){d.stop();i(a);h()};g.charset="utf-8";
g.type="text/javascript";g.src=f+"&callback="+b;e.appendChild(g);d.start()}function z(f){var i=[],h;for(h in f)f[h]!==t&&(i[i.length]=encodeURIComponent(h)+"="+encodeURIComponent(f[h]));return i.join("&")}function r(f){return f instanceof m.Coords?f.toLatLng():f}function A(f,i,h){function g(a){var b=(new Date).getTime(),w=Math.max(2E3-(b-d),0);(new u(w,function(){i.page=a;h(i)})).start();d=b}var e=Number(f.page)||1,f=Number(f.totalCount),b,d,f=Math.min(f,45);b=Math.ceil(f/15);d=(new Date).getTime();
var a=this.hasNextPage=3>e&&e<b,w=this.hasPrevPage=1<e&&e<=b;this.first=1;this.current=e;this.last=b;this.perPage=15;this.nextPage=function(){a&&g(e+1)};this.prevPage=function(){w&&g(e-1)};this.gotoPage=function(a){a=Number(a);0<a&&a<=b&&e!==a&&g(a)};this.gotoFirst=function(a){a=Number(a);0<a&&a<=b&&e!==a&&g(1)};this.gotoLast=function(a){a=Number(a);0<a&&a<=b&&e!==a&&g(b)}}u.prototype={start:function(){return this.b!==p?C:this.b=(this.i?n.setInterval:n.setTimeout)(this.k,this.l)},stop:function(){this.b!==
p&&((this.i?n.clearInterval:n.clearTimeout)(this.b),this.b=p)}};var B=Array.isArray?Array.isArray:function(f){return"[object Array]"===Object.prototype.toString.call(f)},C=!1,t=void 0,p=null,l={OK:"OK",ERROR:"ERROR",ZERO_RESULT:"ZERO_RESULT",RESULT_NOT_FOUND:"ZERO_RESULT"},x={TM:"TM",KTM:"KTM",UTM:"UTM",CONGNAMUL:"CONGNAMUL",WGS84:"WGS84",BESSEL:"BESSEL",WTM:"WTM",WKTM:"WKTM",WUTM:"WUTM",WCONGNAMUL:"WCONGNAMUL"},j=("https:"==n.location.protocol?"https:":"http:")+"//apis.daum.net/maps/",D=j+"v3/search/",
E=j,m,s;(s=n.daum)&&(s=s.maps)?m=s:(k("daum.maps \ub124\uc784\uc2a4\ud398\uc774\uc2a4\ub97c \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4: Daum Maps Javascript Open API\ub97c \uba3c\uc800 \ub85c\ub4dc\ud558\uc2ed\uc2dc\uc624."),m=void 0);j=n;j=j.daum=j.daum||{};j=j.maps=j.maps||{};j=j.services=j.services||{};j.Status=l;j.ImageFilter={ONLY:"only",NOT:"not",ALL:"all"};j.SortBy={ACCURACY:0,POPULARITY:1,DISTANCE:2};j.Format={SIMPLE:"simple"};j.Coords=x;j.Places=function(f){function i(a){var b=D+a.c+".json?",
c,f,i;c={};var q,g;c.apikey=m.apikey;a.c===e.e?c.query=a.keyword:c.code=a.code;a.location&&(q=r(a.location),c.location=[q.getLat(),q.getLng()].join());a.bounds?(g=a.bounds,q=r(g.getSouthWest()),g=r(g.getNorthEast()),c.rect=[q.getLat(),q.getLng(),g.getLat(),g.getLng()].join()):a.radius&&(c.radius=a.radius);a.image&&(c.image=a.image);a.sort&&(c.sort=a.sort);c.page=Math.max(Math.min(Number(a.page)||1,3),1);c=z(c);f=(a.c===e.e?"KS":"CS")+c.replace(/^apikey=.*?=/,"").replace(/\w*?\=/g,"");(i=d[f])?h(i,
a):y(b+c,function(b){d[f]=b;h(b,a)})}function h(a,b){var c=b.callback,f,d,h;c&&(a?a.code?k(a.message+": "+a.dmessage+"("+(a.dcode||a.code)+")"):(d=a.channel,h=d.item,f=h.length?l.OK:l.ZERO_RESULT,h={places:h},d=d.info,c(f,h,new A(d,b,i))):c(l.ERROR))}function g(a){var d={location:b.getCenter()};a.useMapBounds&&(d.bounds=b.getBounds());return o(a,d)}var e={e:"keyword",j:"category"},b=f,d={};this.setMap=function(a){b=a};this.keywordSearch=function(a,d,c){!m.apikey&&k("Daum Maps API \ub97c \uc704\ud55c apikey \uac00 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4: apikey\uac00 \ud544\uc694\ud569\ub2c8\ub2e4.");
"object"===typeof a?(c=a,a=c.keyword,"function"===typeof d&&(c.callback=d)):(c=c||{},o(c,{keyword:a||"",callback:d}));a||k("\ub9e4\uac1c\ubcc0\uc218\uac00 \ub204\ub77d\ub418\uc5c8\uc2b5\ub2c8\ub2e4: keyword \ub97c \uc9c0\uc815\ud574\uc57c \ud569\ub2c8\ub2e4.");c.c=e.e;b&&(c=g(c));i(c)};this.categorySearch=function(a,d,c){!m.apikey&&k("Daum Maps API \ub97c \uc704\ud55c apikey \uac00 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4: apikey\uac00 \ud544\uc694\ud569\ub2c8\ub2e4.");"object"===typeof a?
(c=a,a=c.code,"function"===typeof d&&(c.callback=d)):(c=c||{},o(c,{code:a||"",callback:d}));a||k("\ub9e4\uac1c\ubcc0\uc218\uac00 \ub204\ub77d\ub418\uc5c8\uc2b5\ub2c8\ub2e4: category code\ub97c \uc9c0\uc815\ud574\uc57c \ud569\ub2c8\ub2e4.");c.c=e.j;b&&(c=g(c));i(c)}};j.Geocoder=function(){function f(b){var d=E+b.a+"?",a,f,c;a={};var v;a.apikey=m.apikey;b.a===h.f?(a.x=b.x,a.y=b.y,a.fromCoord=b.fromCoord,a.toCoord=b.toCoord):b.a===h.d?(a.q=b.addr,a.pageno=Math.max(Number(b.page)||1,1)):(v=r(b.coord),
a.x=v.getLng(),a.y=v.getLat(),a.inputCoordSystem="WGS84",b.format&&(a.format=b.format));a.output="json";a=z(a);f=g[b.a]+a.replace(/^apikey=.*?=/,"").replace(/\w*?\=/g,"");(c=e[f])?i(c,b):y(d+a,function(a){e[f]=a;i(a,b)})}function i(b,d){var a=d.callback,g,c,e;if(a)if(b)if(b.errorType)k(b.errorType+": "+b.message);else if(d.a===h.f)a(l.OK,b);else if(d.a===h.d)c=b.channel,e=c.item,g=e.length?l.OK:l.ZERO_RESULT,e={addr:e},c={page:d.page,totalCount:c.totalCount,count:c.result},a(g,e,new A(c,d,f));else if(d.a===
h.g)B(b)?g=b.length?l.OK:l.ZERO_RESULT:(g=!b.error?l.OK:l.RESULT_NOT_FOUND,b=[b]),a(g,b);else{if(d.a===h.h){c=function(a){a.roadAddress||(a.roadAddress={},o(a.roadAddress,a["new"]),delete a["new"]);a.jibunAddress||(a.jibunAddress={},o(a.jibunAddress,a.old),delete a.old)};if(B(b)){if(g=b.length?l.OK:l.ZERO_RESULT,g===l.OK){e=0;for(var i=b.length;e<i;e++)c(b[e])}}else g=!b.error?l.OK:l.RESULT_NOT_FOUND,g===l.OK&&c(b),b=[b];a(g,b)}}else a(l.ERROR)}var h={f:"transcoord",d:"addr2coord",g:"coord2addr",
h:"coord2detailaddr"},g={transcoord:"TRC",addr2coord:"A2C",coord2addr:"C2A",coord2detailaddr:"C2D"},e={};this.addr2coord=function(b,d,a){!m.apikey&&k("Daum Maps API \ub97c \uc704\ud55c apikey \uac00 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4: apikey\uac00 \ud544\uc694\ud569\ub2c8\ub2e4.");"object"===typeof b?(a=b,b=a.addr,"function"===typeof d&&(a.callback=d)):(a=a||{},o(a,{addr:b||"",callback:d}));b||k("\ub9e4\uac1c\ubcc0\uc218\uac00 \ub204\ub77d\ub418\uc5c8\uc2b5\ub2c8\ub2e4: \uc8fc\uc18c\ub97c \uc785\ub825\ud574\uc57c \ud569\ub2c8\ub2e4.");
a.a=h.d;f(a)};this.coord2addr=function(b,d,a){!m.apikey&&k("Daum Maps API \ub97c \uc704\ud55c apikey \uac00 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4: apikey\uac00 \ud544\uc694\ud569\ub2c8\ub2e4.");b instanceof m.LatLng?(a=a||{},o(a,{coord:b||p,callback:d})):"object"===typeof b&&(a=b,b=a.coord,"function"===typeof d&&(a.callback=d));b||k("\ub9e4\uac1c\ubcc0\uc218\uac00 \ub204\ub77d\ub418\uc5c8\uc2b5\ub2c8\ub2e4: \uc88c\ud45c\ub97c \uc785\ub825\ud574\uc57c \ud569\ub2c8\ub2e4.");a.a=h.g;f(a)};
this.transCoord=function(b,d,a,g,c){!m.apikey&&k("Daum Maps API \ub97c \uc704\ud55c apikey \uac00 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4: apikey\uac00 \ud544\uc694\ud569\ub2c8\ub2e4.");var e={};"object"===typeof b?(e=b,b=e.x,d=e.y,a=e.fromCoord,g=e.toCoord):(e.x=b||0,e.y=d||0,e.fromCoord=a||"",e.toCoord=g||"",e.callback=c);b||0!==b&&k("\ub9e4\uac1c\ubcc0\uc218\uac00 \ub204\ub77d\ub418\uc5c8\uc2b5\ub2c8\ub2e4: x \uc88c\ud45c\ub97c \uc785\ub825\ud574\uc57c \ud569\ub2c8\ub2e4.");d||0!==d&&
k("\ub9e4\uac1c\ubcc0\uc218\uac00 \ub204\ub77d\ub418\uc5c8\uc2b5\ub2c8\ub2e4: y \uc88c\ud45c\ub97c \uc785\ub825\ud574\uc57c \ud569\ub2c8\ub2e4.");x[a]||k("\ub9e4\uac1c\ubcc0\uc218\uac00 \ub204\ub77d\ub418\uc5c8\uc2b5\ub2c8\ub2e4: \uc785\ub825 \uc88c\ud45c\uacc4\uac00 \uc720\ud6a8\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.");x[g]||k("\ub9e4\uac1c\ubcc0\uc218\uac00 \ub204\ub77d\ub418\uc5c8\uc2b5\ub2c8\ub2e4: \ucd9c\ub825 \uc88c\ud45c\uacc4\uac00 \uc720\ud6a8\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.");e.a=h.f;
f(e)};this.coord2detailaddr=function(b,d,a){!m.apikey&&k("Daum Maps API \ub97c \uc704\ud55c apikey \uac00 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4: apikey\uac00 \ud544\uc694\ud569\ub2c8\ub2e4.");b instanceof m.LatLng?(a=a||{},o(a,{coord:b||p,callback:d})):"object"===typeof b&&(a=b,b=a.coord,"function"===typeof d&&(a.callback=d));b||k("\ub9e4\uac1c\ubcc0\uc218\uac00 \ub204\ub77d\ub418\uc5c8\uc2b5\ub2c8\ub2e4: \uc88c\ud45c\ub97c \uc785\ub825\ud574\uc57c \ud569\ub2c8\ub2e4.");a.a=h.h;f(a)}}})(window);
