function DynaTraceCls() {
    var d = this;
    this.version = '335';
    d._aa = (window.location.protocol == 'https:') ? '//0' : ['ja','va','sc','ript',':vo','id(0)'].join('');
    d._ba = !(window.addEventListener);
    d._ca = 0;
    d._da = '';
    d._ea = [];
    d._fa = [];
    d._ga = [];
    d._ha = function() {
        return new Date().getTime();
    };
    d._ia = function(qf) {
        return document.getElementsByTagName(qf);
    };
    d._ja = function() {
        var rf = null;
        if (!d._ka) {
            rf = d._la._ma;
            d._la._ma = null;
        }
        else {
            rf = d._ka._la._ma;
            d._ka._la._ma = null;
        }
        return rf;
    };
    d._na = function() {
        if (d._oa) {
            return;
        }
        try {
            d._pa._na();
            d._qa._na();
            d._oa = true;
        }
        catch(e) {
        }
    };
    d._ra = function(sf, tf, uf, vf) {
        var wf = '';
        if (!sf) {
            wf = d._sa._ta(tf);
        }
        else {
            wf = d._sa._ua();
        }
        if (wf.length > 0) {
            var xf = new d._va();
            if (d._wa.reportUrl) {
                xf.monitorUrl = d._wa.reportUrl;
            }
            if (sf) {
                xf.a('PV', 1);
            }
            d._xa('Dom Ready time: ' + d.getDomReadyTime());
            xf.a('url', d._qa._ya(document.location.toString()));
            xf.a('title', d._qa._ya(document.title));
            xf.a('frames', d._ca);
            xf.a('pId', d._za);
            xf.a('fId', d._Aa);
            xf.a('pFId', d._da);
            xf.a('rId', d._wa.requestId);
            xf.a('actions', d._qa._ya(wf));
            xf.a('domR', d.getDomReadyTime());
            xf.a('dtV', d.version);
            if (d._sa._Ba()) {
                xf.a('unload', 'xhr');
            }
            xf.a('ttfb', d._la._Ca());
            for (var i = 0; i < d._fa.length; i++) {
                try {
                    d._fa[i](xf);
                }
                catch(e) {
                    d._xa('Error calling loadEndListener: ' + e);
                }
            }
            var yf = null;
            if (uf) {
                yf = function(zf) {
                    d._qa.setLatencyCookie(zf / 2);
                };
            }
            d._Da._Ea(xf, yf, vf);
        }
    };
    d.sls = function() {
        if (!d._Fa) {
            return;
        }
        if (!d._ka) {
            d._la._ma = d._ha();
        }
        else {
            d._ka._la._ma = d._ha();
        }
    };
    d.sle = function() {
        if (!d._Fa) {
            return;
        }
        d._Ga();
    };
    d._Ha = function() {
        d._ra(false, true, false, true);
        var ua = d._pa._Ia();
        if (ua) {
            d._sa._Ja(ua.name, ua.type, ua.time);
        } else {
            d._sa._Ja(null, null, null);
        }
        if (navigator.vendor && (navigator.vendor.search('Apple') >= 0)) {
            if (window.frames) {
                for (var i = 0; i < window.frames.length; i++) {
                    try {
                        if (window.frames[i].dT_) {
                            window.frames[i].dT_._Ha();
                        }
                    }
                    catch(err) {
                    }
                }
            }
        }
        d._Ka();
        d._La();
    };
    d._La = function() {
        if (d._Ma) {
            return;
        }
        d._Na.remove(d._Aa);
        d._Ma = true;
    };
    d._Oa = function() {
        d._Na.add(d._Aa);
        d._sa._Pa('_load_', '_load_', d._la._Qa());
        if (d._la._Ra) {
            d._sa._Sa('_load_', '_ttfb_', d._la._Qa(), d._la._Ta());
        }
    };
    d._Ga = function() {
        if (!d._Ua) {
            d._sa._Va('_load_');
            d._Wa();
            d._Ua = true;
        }
    };
    d._Xa = function() {
        if (!d._Ya) {
            d._Ya = 2;
        }
        else {
            d._Ya++;
        }
    };
    d._Wa = function() {
        if (d._wa.checkImagesEnabled) {
            d._Za();
        }
    };
    d._$a = function() {
        if (!d._ab) {
            if (document.readyState == 'complete') {
                d._wa.checkScriptsTimeout = 0;
                d._wa.checkImagesTimeout = 0;
                if (!d._bb) {
                    d._bb = true;
                    setTimeout(d._$a, 3000);
                }
                else {
                    d._ra(false, true, true, false);
                }
            }
            else {
                setTimeout(d._$a, 3000);
            }
        }
    };
    d.signalOnLoadBegin = function() {
        if (!d._cb) {
            d._cb = true;
            d._sa._Pa("_onload_", "_load_");
        }
    };
    d._db = function() {
        if (!d._ab) {
            d.signalOnLoadBegin();
            d._ab = true;
            d._eb._fb();
            setTimeout(d._gb, 0);
        }
    };
    d.signalOnLoadEnd = function() {
        if (d._Ya) {
            d._xa('Decrementing loadEndMarkers: ' + d._Ya);
            d._Ya--;
            if (d._Ya > 0) {
                return;
            }
        }
        d._hb();
    };
    d._gb = function() {
        if (!d._ib) {
            d._ib = true;
            d._jb();
            for (var i = 0; i < d._ea.length; i++) {
                try {
                    d._ea[i]();
                }
                catch(e) {
                }
            }
            d.signalOnLoadEnd();
        }
    };
    d._hb = function() {
        d._eb._fb();
        d._wa.checkImagesTimeout = 0;
        d._wa.checkScriptsTimeout = 0;
        var Af = d._la._kb();
        var Bf = d._la._lb();
        if (Af && Bf) {
            d._sa._Va("_onload_", Af, Bf);
        }
        else {
            d._sa._Va("_onload_");
        }
        d._Wa();
        if (!d._mb) {
            d._Ga();
        }
    };
    d._nb = function(Cf) {
        var Df = d._ha() - Cf._ob + d._wa.checkScriptsTimeout;
        if (Df > d._wa.checkScriptsThreshold) {
            var Ef = "Script '" + Cf.src + "' took about ";
            if (d._wa.checkScriptsTimeout <= 50) {
                Ef += parseInt(Df / 10, 10) / 100;
            }
            else {
                Ef += parseInt(Df / 100, 10) / 10;
            }
            d.pw(Ef + "s to load!");
        }
        Cf._ob = -1;
    };
    d._pb = function(e) {
        d._nb(e.target);
    };
    d._qb = function() {
        if (window.event.srcElement.readyState == 'complete') {
            d._nb(window.event.srcElement);
        }
    };
    d._rb = function() {
        d._sb(function(Ff) {
            Ff._tb = true;
        });
    };
    d._ub = function(Gf) {
        d._vb = 0;
        d._wb = 0;
        d._xb = false;
        d._sb(function(Hf) {
            if (!Hf._tb) {
                if (d._ba) {
                    if (Hf.complete) {
                        return;
                    }
                }
                else {
                    if (Hf.naturalWidth > 0) {
                        return;
                    }
                }
                d._yb(Hf, function(If, Jf) {
                    d._wb++;
                    if (d._xb && (d._wb === d._vb)) {
                        Gf();
                    }
                });
                d._vb++;
            }
        });
        if (d._wb === d._vb) {
            Gf();
        }
        else {
            d._xb = true;
        }
    };
    d._sb = function(Kf) {
        var Lf = 0;
        var Mf = d._ia("img");
        for (var i = 0; i < Mf.length; i++) {
            if (Mf[i].src != "") {
                Lf += Kf(Mf[i]);
            }
        }
        var Nf = d._ia("input");
        for (i = 0; i < Nf.length; i++) {
            if ((Nf[i].type == 'image') && (Nf[i].src != "")) {
                Lf += Kf(Nf[i]);
            }
        }
        return Lf;
    };
    d._zb = function(Of, Pf) {
        if (Of._ob && (Of._ob > 0)) {
            var Qf = d._ha() - Of._ob + d._wa.checkImagesTimeout;
            if ((d._wa.checkImagesThreshold > 0) && (Qf > d._wa.checkImagesThreshold)) {
                var Rf = "Image '" + Of.src + "'";
                var Sf = "";
                if (d._wa.checkImagesTimeout <= 50) {
                    Sf = parseInt(Qf / 10, 10) / 100;
                }
                else {
                    Sf = parseInt(Qf / 100, 10) / 10;
                }
                Sf += "s";
                if (Pf) {
                    d.pe(Rf + " failed to load (after " + Sf + ")");
                }
                else {
                    d.pw(Rf + "took about " + Sf + " to load!");
                }
            }
            else if (Pf) {
                d.pe("Image '" + Of.src + "' failed to load ");
            }
        }
        Of._ob = -1;
    };
    d._Ab = function(Tf) {
        if (Tf) {
            if (Tf.target) {
                d._Bb(Tf.target, false);
            }
            else if (Tf.srcElement) {
                d._Bb(Tf.srcElement, false);
            }
        }
        else {
            d._Bb(window.event.srcElement, false);
        }
    };
    d._Cb = function(e, e1, e2) {
        if (e) {
            if (e.target) {
                d._Bb(e.target, true);
            }
            else if (e.srcElement) {
                d._Bb(e.srcElement, true);
            }
        }
        else {
            d._Bb(window.event.srcElement, true);
        }
    };
    d._Db = function() {
        var Uf = d._ia("script");
        for (var i = 0; i < Uf.length; i++) {
            if ((Uf[i].src != "") && (Uf[i].src != d._aa) && !Uf[i]._ob) {
                Uf[i]._ob = d._ha();
                if (!d._ba) {
                    d._qa._Eb(Uf[i], 'load', d._pb);
                }
                else {
                    d._qa._Eb(Uf[i], 'readystatechange', d._qb);
                }
            }
        }
        if (d._wa.checkScriptsTimeout > 0) {
            setTimeout(d._Db, d._wa.checkScriptsTimeout);
        }
    };
    d._yb = function(Vf, Wf) {
        d._Bb = Wf;
        d._qa._Eb(Vf, 'load', d._Ab);
        d._qa._Eb(Vf, 'error', d._Cb);
        if (!d._ba) {
            var Xf = Vf.src;
            Vf.src = "";
            Vf.src = Xf;
        }
        else {
            Vf.src = Vf.src;
        }
    };
    d._Za = function() {
        var Yf = d._ia("img");
        var Zf = d._ha();
        for (var i = 0; i < Yf.length; i++) {
            if ((Yf[i].src != "") && !Yf[i]._ob) {
                if (d._ba) {
                    if (Yf[i].complete) {
                        Yf[i]._ob = 0;
                        continue;
                    }
                }
                else {
                    if (Yf[i].naturalWidth > 0) {
                        Yf[i]._ob = 0;
                        continue;
                    }
                }
                Yf[i]._ob = Zf;
                d._yb(Yf[i], d._zb);
            }
        }
        var $f = d._ia("input");
        for (i = 0; i < $f.length; i++) {
            if (($f[i].type == 'image') && ($f[i].src != "") && !$f[i]._ob) {
                $f[i]._ob = Zf;
                d._yb($f[i]);
            }
        }
        if (d._wa.checkImagesTimeout > 0) {
            setTimeout(d._Za, d._wa.checkImagesTimeout);
        }
    };
    d._Ka = function() {
    };
    d._Fb = function() {
        d._qa._Eb(window, 'beforeunload', d._Ha);
        if (window.opera) {
            d._qa._Eb(window, 'unload', d._Ha);
        }
        d._qa._Eb(window, 'unload', d._na);
        if (d._ba) {
            d._qa._Eb(document, 'readystatechange', d._Gb);
        }
        else {
            d._qa._Eb(window, 'load', d._db);
            setTimeout(d._$a, 3000);
        }
    };
    d._Gb = function() {
        if (document.readyState == 'complete') {
            d._db();
        }
    };
    d._Hb = 'dtCookie';
    d._Ib = false;
    d._Jb = function() {
        d._Ib = false;
        d._ra(false, false, true, false);
    };
    d._Kb = function() {
        if (!d._Ib) {
            setTimeout(d._Jb, 5000);
            d._Ib = true;
        }
    };
    d._Lb = function(ag, bg) {
        var cg = d._ha();
        var dg = d._sa._Sa(bg, ag, cg, cg, -1, null);
        if (dg) {
            d._Kb();
        }
    };
    d.getDomReadyTime = function() {
        var p = d._qa.getPerformance();
        if (p && p.timing) {
            if (p.timing.domComplete && p.timing.domComplete > 0) {
                return p.timing.domComplete;
            } else if (p.timing.domContentLoaded && p.timing.domContentLoaded > 0) {
                return p.timing.domContentLoaded;
            }
        }
        return d._Mb;
    };
    d._Nb = function() {
        if (d._ba) {
            var p = d._qa.getPerformance();
            if (typeof p != 'undefined' && p.timing) {
            } else {
                document.write('<script id="_dTL_" defer src="' + d._aa + '"></script' + '>');
                var eg = document.getElementById('_dTL_');
                eg.onreadystatechange = function() {
                    if (eg.readyState == "complete") {
                        d._Mb = new Date().getTime();
                        eg.onreadystatechange = null;
                    }
                };
            }
        }
        else {
            document.addEventListener('DOMContentLoaded', function() {
                d._Mb = new Date().getTime();
            }, false);
        }
    };
    d._Ob = function() {
        try {
            if (parent && (parent != self) && parent.dT_) {
                return parent.dT_._Ob();
            }
        }
        catch(err) {
        }
        return d;
    };
    d._fb = function() {
        var fg = d._qa._Pb(d._Hb);
        if (!fg) {
            d._xa('No session id. page coming from cache?');
            d._Qb = true;
        }
        if (fg == 'blocked') {
            d._xa('Session id: blocked!');
        }
        else if (!d._Fa) {
            d._wa._fb();
            if (!d._wa.requestId) {
                d._wa.requestId = d._qa.getRID(d._wa.ridPath);
            }
            d._Fa = true;
            d._Da.init(d._qa);
            d._Aa = 'G_' + d._ha().toString();
            try {
                if (parent && (parent != self) && parent.dT_) {
                    d._Rb = parent.dT_;
                    d._ka = parent.dT_._Ob();
                }
            }
            catch(err) {
            }
            if (!d._ka) {
                d._za = d._Aa;
                d._Sb = document.title;
            }
            else {
                d._za = d._ka._za;
                d._Sb = d._ka._Sb;
                d._da = d._Rb._Aa;
                d._Rb._ca++;
            }
            var gg = (d._Rb ? d._Rb._sa : null);
            d._sa._fb(d._qa, gg, d._Aa, d._eb, d._Kb, d._ra, d._Na);
            d._pa.init(d._wa, d._qa, d._Aa, d._ba);
            d._eb._fb(d._qa, d._pa, d._Lb, d._ba);
            d._Fb();
            d._la._fb(d._qa, d._wa.nottfb, d._ba);
            if (d._wa._Tb) {
                d._Db();
            }
            if (d._wa.checkImagesEnabled) {
                d._Za();
            }
            d._Nb();
            d._Oa();
        }
    };
    d.isc = function() {
        return true;
    };
    d.cfg = function(hg) {
        if (!d._Fa) {
            return;
        }
        return d._wa[hg];
    };
    d._Ub = function(ig) {
        if (!d._Fa) {
            return;
        }
        d._ea.push(ig);
    };
    d._Vb = function(jg) {
        if (!d._Fa) {
            return;
        }
        d._fa.push(jg);
    };
    d._Wb = function(kg) {
        d._ga.push(kg);
    };
    d._jb = function() {
        d._xa('Trigger instrumentation');
        if (d._Fa) {
            d._pa._Xb();
            for (var i = 0; i < d._ga.length; i++) {
                d._ga[i]();
            }
        }
    };
    d._Yb = function(lg, mg) {
        if (!d._Fa) {
            return;
        }
        if (d._sa._Zb()) {
            d._sa._$b();
        } else {
            var ua = d._pa._Ia();
            if (ua) {
                if (mg >= 3) {
                    d._sa._ac(ua.name, ua.type, ua.time);
                    if (d._wa.xhrImages) {
                        d._rb();
                    }
                }
            }
            else if (d._sa._bc()) {
                if (mg >= 1) {
                    d._sa._$b('XHR', 'xhr');
                    if (d._wa.xhrImages) {
                        d._rb();
                    }
                }
            }
        }
    };
    d._cc = function() {
        if (d._dc) {
            d._dc = false;
            d._ec();
        }
    };
    d._fc = function() {
        if (d._sa._Zb() && !d._dc) {
            d._dc = true;
            d._sa._Zb()._gc++;
        }
    };
    d._ec = function() {
        if (!d._Fa) {
            return;
        }
        var ng = d._sa._hc();
        if (ng > 1) {
            d._sa._ic();
        }
        else {
            if (d._wa.xhrImages) {
                d._ub(function() {
                    d._sa._ic();
                });
            }
            else {
                d._sa._ic();
            }
            return true;
        }
        return false;
    };
    d._jc = function() {
        if (!d._Fa) {
            return;
        }
        d._sa._jc();
    };
    d._kc = function() {
        if (!d._Fa) {
            return;
        }
        d._sa._kc();
    };
    d._lc = function(og, pg, qg) {
        if (!d._Fa) {
            return;
        }
        return d._pa._lc(og, pg, qg);
    };
    d._mc = function(ui) {
        if (!d._Fa) {
            return;
        }
        d._pa._mc(ui);
    };
    d.ea = function(rg, sg, tg, ug) {
        if (!d._Fa) {
            return;
        }
        d._sa._Pa.apply(d._sa, arguments);
    };
    d.la = function(vg, wg, xg) {
        if (!d._Fa) {
            return;
        }
        d._sa._Va.apply(d._sa, arguments);
    };
    d.pe = function(yg) {
        if (!d._Fa) {
            return;
        }
        d._Lb(yg, '_error_');
    };
    d.pw = function(zg) {
        if (!d._Fa) {
            return;
        }
        d._Lb(zg, '_warning_');
    };
    d.pl = function(Ag) {
        if (!d._Fa) {
            return;
        }
        d._Lb(Ag, '_log_');
    };
    d.tp = function() {
        if (!d._Fa) {
            return;
        }
        return!d._ka;
    };
    d.slem = function() {
        if (!d._Fa) {
            return;
        }
        d._mb = true;
    };
    d.dbg = function(e) {
        d._qa._nc('dtUseDebugAgent', e);
    };
}
if (typeof window.dT_ != 'undefined') {
    if (typeof console != 'undefined') {
        console.log('WARNING: dynaTrace agent does already exist on this page! Is it injected multiple times?');
    }
} else {
    window.dT_ = new DynaTraceCls();
}
(function() {
    var u = {};
    u._oc = (typeof window.XMLHttpRequest != 'undefined') ? window.XMLHttpRequest : null;
    u._pc = (typeof window.ActiveXObject != 'undefined') ? window.ActiveXObject : null;
    u._qc = 'dtLatC';
    u._ba = !(window.addEventListener);
    u._rc = [];
    u._sc = (navigator.appName == 'Safari' || navigator.userAgent.indexOf('Safari') != -1);
    u._tc = (typeof window.opera != 'undefined');
    u._uc = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
    u._vc = function(Bg) {
        if (!Bg) {
            return null;
        }
        Bg = Bg.replace(/^\s+/, '');
        for (var i = Bg.length - 1; i >= 0; i--) {
            if (/\S/.test(Bg.charAt(i))) {
                Bg = Bg.substring(0, i + 1);
                break;
            }
        }
        return Bg;
    };
    u._ya = function(Cg) {
        Cg = encodeURIComponent(Cg);
        var Dg = "";
        var i = 0;
        while (i < Cg.length) {
            var Eg = Cg.charAt(i++);
            if (Eg == '!') {
                Dg += '%21';
            }
            else if (Eg == '~') {
                Dg += '%7E';
            }
            else if (Eg == '*') {
                Dg += '%2A';
            }
            else if (Eg == '(') {
                Dg += '%28';
            }
            else if (Eg == ')') {
                Dg += '%29';
            }
            else if (Eg == '\'') {
                Dg += '%27';
            }
            else {
                Dg += Eg;
            }
        }
        return Dg;
    };
    u._nc = function(Fg, Gg) {
        document.cookie = Fg + '=' + Gg + ';path=/' + ((u._wc) ? ";domain=" + u._wc : "");
    };
    u.getPerformance = function() {
        if (!u._xc) {
            if (typeof window.performance != 'undefined') {
                u._xc = window.performance;
            }
            else if (typeof window.msPerformance != 'undefined') {
                u._xc = window.msPerformance;
            }
            else if (typeof window.mozPerformance != 'undefined') {
                u._xc = window.mozPerformance;
            }
        }
        return u._xc;
    };
    u._Pb = function(Hg) {
        var Ig = document.cookie.split(';');
        var Jg;
        for (var i = 0; i < Ig.length; i++) {
            Jg = Ig[i].split('=');
            if (Jg[0].search(Hg) >= 0) {
                return Jg[1];
            }
        }
        return null;
    };
    u.getRID = function(Kg) {
        var Lg = Kg ? Kg : window.location.pathname;
        var Mg = window.location.search;
        if (Mg && Mg.length > 0) {
            if (Mg.charAt(0) == '?') {
                Mg = Mg.substring(1);
            }
        }
        return 'RID_' + u._yc(Lg, Mg);
    };
    u._yc = function(Ng, Og) {
        var Pg = 1;
        Pg = 31 * Pg + u._zc(Ng);
        Pg = 31 * Pg + u._zc(Og);
        Pg = Pg & Pg;
        return Pg;
    };
    u._zc = function(s) {
        var Qg = 0;
        if (s) {
            var Rg = s.length;
            for (var i = 0; i < Rg; i++) {
                Qg = Qg * 31 + s.charCodeAt(i);
                Qg = Qg & Qg;
            }
        }
        return Qg;
    };
    u._Ac = function() {
    };
    u.trace = function(Sg) {
        u._Ac();
        if (u._Bc) {
            u._Bc._xa(Sg);
            return;
        }
    };
    u._xa = function(Tg) {
        u._Ac();
        if (u._Bc) {
            u._Bc._xa(Tg);
            return;
        } else if ((typeof console) != 'undefined' && console.log) {
            console.log(Tg);
        }
    };
    u._Eb = function(Ug, Vg, Wg) {
        if (u._ba) {
            Ug.attachEvent('on' + Vg, Wg);
        }
        else {
            Ug.addEventListener(Vg, Wg, false);
        }
        u._rc.push({_Cc:Ug,_Dc:Vg,_Ec:Wg});
    };
    u._na = function() {
        var i;
        for (i = 0; i < u._rc.length; i++) {
            var li = u._rc[i];
            u._Fc(li._Cc, li._Dc, li._Ec);
        }
        u._rc = null;
    };
    u._Fc = function(Xg, Yg, Zg) {
        if (u._ba) {
            Xg.detachEvent('on' + Yg, Zg);
        }
        else {
            Xg.removeEventListener(Yg, Zg, false);
        }
    };
    u.getXHR = function() {
        var $g = null;
        if (!u._oc) {
            var ax = ['Msxml2.XMLHTTP.6.0','Msxml2.XMLHTTP.3.0','Msxml2.XMLHTTP','Microsoft.XMLHTTP'];
            for (var i = 0; i < ax.length && !$g; i++) {
                try {
                    $g = new u._pc(ax[i]);
                }
                catch(e) {
                }
            }
        }
        else {
            $g = new u._oc();
        }
        return $g;
    };
    u.setLatencyCookie = function(ah, bh) {
        var ch = u._qc;
        if (bh) {
            ch += bh;
        }
        var dh = u._Pb(ch);
        var eh = 0;
        var fh = [];
        var gh = 0;
        if (dh && (dh.length > 0)) {
            var hh = dh.split('|');
            if (hh.length > 1) {
                gh = hh.length - 1;
            }
            if (gh > 9) {
                gh = 9;
            }
            for (var i = 1; i <= gh; i++) {
                eh += parseFloat(hh[i]);
                fh[i + 1] = hh[i];
            }
        }
        eh += ah;
        gh++;
        fh[0] = parseInt(eh / gh, 10);
        fh[1] = ah;
        u._nc(ch, fh.join('|'));
    };
    if (!dT_._qa) {
        dT_._qa = u;
        dT_._xa = u._xa;
    }
})();
(function() {
    var d = {};
    d._Gc = 0;
    d.t = dT_._qa._vc;
    d._Hc = function(ih) {
        if (ih) {
            parts = ih.split('/');
            if (parts.length > 0) {
                return d.t(parts[parts.length - 1]);
            }
        }
        return null;
    };
    d._Ic = d._Hc(window.location.href);
    d._ia = function(jh) {
        return document.getElementsByTagName(jh);
    };
    d._Jc = function() {
        var a = arguments;
        for (var i = 0; i < a.length; i++) {
            var v = a[i];
            if (v && d.t(v)) {
                return d.t(v);
            }
        }
        return null;
    };
    d._Kc = function(o) {
        if (o.childNodes) {
            var kh = null;
            for (var i = 0; i < o.childNodes.length; i++) {
                d._Gc++;
                var lh = d._Lc(o.childNodes[i]);
                d._Gc--;
                if (lh) {
                    if (kh) {
                        return null;
                    } else {
                        kh = lh;
                    }
                }
            }
            if (kh) {
                return kh;
            }
        }
        return null;
    };
    d._Mc = function(mh) {
        if (mh) {
            parts = mh.split('/');
            if (parts.length > 0) {
                return parts[parts.length - 1].split('.')[0];
            }
        }
        return null;
    };
    d._Lc = function(o) {
        d._qa._xa('o.type= ' + o.type + ' o.nodeName=' + o.nodeName);
        if (!o || d._Gc > 20) {
            return null;
        }
        if (o.attributes) {
            var nh = o.attributes["data-dtName"];
            if (nh && nh.value) {
                return nh.value;
            }
        }
        var r = d.t(d._Kc(o));
        if (r) {
            return r;
        }
        var on = o.nodeName;
        var ot = o.type ? o.type.toUpperCase() : o.type;
        if (on == 'INPUT' && ot != 'HIDDEN') {
            var s = (ot && (ot == 'BUTTON' || ot == 'SUBMIT' || ot == 'RESET')) ? o.value : null;
            return d._Jc(s, o.name, o.title, o.alt, o.id, d._Hc(o.src), o.className, 'input: ' + ot);
        }
        else if (on == 'BUTTON') {
            return d._Jc(o.textContent, o.innerText, o.name, o.title, o.alt, o.id, o.className, 'button');
        }
        else if (on == 'IMG') {
            return d._Jc(o.name, o.title, o.alt, o.id, d._Mc(o.src));
        }
        else if (on == 'FORM') {
            return d._Jc(o.name, o.id, o.action, 'FORM');
        }
        else if (on == 'A') {
            return d._Jc(o.textContent, o.innerText, o.title, o.id, d._Hc(o.href), o.className, 'Link');
        } else if (on == 'HTML' || on == 'BODY') {
            return 'Page: ' + d._Ic;
        } else {
            if (!o.childNodes || o.childNodes.length <= 1) {
                r = d._Jc(o.textContent, o.innerText, o.data, o.wholeText);
            }
            if (r) {
                return r;
            }
            r = d._Jc(o.title, o.id, o.className);
            if (r) {
                return r;
            }
        }
        if (d._Gc && d._Gc > 0) {
            return null;
        } else {
            return on;
        }
    };
    d._Nc = function(oh) {
        if (oh) {
            d._mc(oh);
        }
    };
    d._Oc = function(ph) {
        return function(e) {
            d._Pc(ph, e || window.event);
        };
    };
    d._Qc = function(c) {
        var qh = [
            [13,'<RETURN>'],
            [9,'<TAB>'],
            [8,'<BACKSPACE>'],
            [127,'<DELETE>'],
            [27,'<ESCAPE>'],
            [33,'<PAGE UP>'],
            [34,'<PAGE DOWN>'],
            [116,'<F5>']
        ];
        for (var i = 0; i < qh.length; i++) {
            if (qh[i][0] == c) {
                return qh[i][1];
            }
        }
        var r = String.fromCharCode(c);
        if (r >= 'a' && r <= 'z' || r >= 'A' && r <= 'Z' || r >= '0' && r <= '9') {
            return r;
        }
        return c;
    };
    d._Rc = function(e) {
        var ev = e || window.event;
        var t = 'keypress ' + d._Qc(ev.keyCode ? ev.keyCode : ev.charCode);
        d._Pc(t, ev);
    };
    d._Pc = function(rh, e) {
        var sh = null;
        if (e.target) {
            sh = e.target;
        }
        else if (e.srcElement) {
            sh = e.srcElement;
        }
        var th = d._lc(sh, rh, 'detection');
        setTimeout(function() {
            d._Nc(th);
        }, 30);
    };
    d._Sc = [];
    d._Tc = function(o) {
        if (d._Uc) {
            if (!o._Vc && o.mouseup) {
                if (typeof o.onmouseup == 'function') {
                    o._Vc = o.onmouseup;
                }
                o.onmouseup = function() {
                    var ui = d._lc(this, 'click', 'mouseup wrapper');
                    var uh = null;
                    if (this._Vc) {
                        uh = this._Vc.apply(this, arguments);
                    }
                    setTimeout(function() {
                        d._mc(ui);
                    }, 30);
                    return uh;
                };
                if (d._Wc) {
                    o.onmouseup.toString = function() {
                        if (o._Vc) {
                            return o._Vc.toString();
                        }
                    };
                }
            }
        }
        if (d._Xc) {
            if (o.onclick && !o._Yc) {
                o._Yc = o.onclick;
                o.onclick = function() {
                    var ui = d._lc(this, 'click', 'click wrapper');
                    var vh = null;
                    if (this._Yc) {
                        vh = this._Yc.apply(this, arguments);
                    }
                    setTimeout(function() {
                        d._mc(ui);
                    }, 0);
                    return vh;
                };
                if (d._Wc) {
                    o.onclick.toString = function() {
                        if (o._Yc) {
                            return o._Yc.toString();
                        }
                    };
                }
            }
        }
    };
    d._Zc = function(o) {
        if (d._$c) {
            if (o.onblur && !o._ad) {
                o._ad = o.onblur;
                o.onblur = function() {
                    var ui = d._lc(this, 'blur', 'blur wrapper');
                    var wh = null;
                    if (this._ad) {
                        wh = this._ad.apply(this, arguments);
                    }
                    setTimeout(function() {
                        d._mc(ui);
                    }, 30);
                    return wh;
                };
            }
        }
    };
    d._bd = function(o) {
        if (d._cd) {
            if (o.onchange && !o._dd) {
                o._dd = o.onchange;
                o.onchange = function() {
                    var ui = d._lc(this, 'change', 'change wrapper');
                    var xh = null;
                    if (this._dd) {
                        xh = this._dd.apply(this, arguments);
                    }
                    setTimeout(function() {
                        d._mc(ui);
                    }, 30);
                    return xh;
                };
            }
        }
    };
    d._ed = function(o) {
        var h = false;
        if (o.onclick) {
            h = true;
            d._Tc(o);
        }
        if (o.onblur) {
            h = true;
            d._Zc(o);
        }
        if (o.onchange) {
            h = true;
            d._bd(o);
        }
        if (h) {
            d._Sc.push(o);
        }
    };
    d._Xb = function() {
        if (d._Xc || d._Uc || d._$c || d._cd) {
            if (typeof document.createTreeWalker == 'function') {
                var yh = document.createTreeWalker(document, NodeFilter.SHOW_ALL, null, false);
                while (yh.nextNode()) {
                    d._ed(yh.currentNode);
                }
            }
            else {
                var zh = document.getElementsByTagName('*');
                for (var i = 0; i < zh.length; i++) {
                    d._ed(zh[i]);
                }
            }
        }
        else {
        }
    };
    d._fd = function(s) {
        if (s) {
            var r = '';
            for (var i = 0; i < s.length; i++) {
                if (s.charAt(i) != '\n' && s.charAt(i) != '\r' && s.charAt(i) != '\t') {
                    r += s.charAt(i);
                }
            }
            s = r;
        }
        return s;
    };
    d._Ia = function() {
        if (d._gd) {
            var ui = d._gd;
            var ua = {};
            var an = d._fd(d._Lc(ui._hd));
            if (an.length > 200) {
                an = an.substring(0, 197) + '...';
            }
            ua.name = ui._id + ' on "' + an + '"';
            ua.time = ui._jd;
            ua.type = ui._id;
            return ua;
        }
        else {
            return null;
        }
    };
    d._lc = function(Ah, Bh, Ch) {
        var ui = {};
        ui._hd = Ah;
        ui._id = Bh;
        ui._jd = new Date().getTime();
        ui._kd = Ch;
        if (!d._gd) {
            d._gd = ui;
        }
        else {
            var Dh = d._gd;
            while (Dh._ld) {
                Dh = Dh._ld;
            }
            Dh._ld = ui;
            ui._md = Dh;
        }
        return ui;
    };
    d._mc = function(Eh) {
        var Fh = d._gd;
        while (Fh._ld && (Fh !== Eh)) {
            Fh = Fh._ld;
        }
        if (Fh === Eh) {
            Fh.htmlObj = null;
            if (Fh._md) {
                Fh._md._ld = Fh._ld;
            }
            else {
                d._gd = Fh._ld;
            }
            if (Fh._ld) {
                Fh._ld._md = Fh._md;
            }
        }
    };
    d._nd = function(Gh, Hh, Ih) {
        var c = false;
        if (Ih && d._wa._od) {
            for (var i = 0; i < d._wa._od.length; i++) {
                if (d._wa._od[i] == Ih) {
                    c = true;
                }
            }
        }
        if (!c) {
            d._qa._Eb(document, Gh, Hh);
        }
        else {
            d._qa._xa('Detection deactivated for ' + Gh + '!');
        }
    };
    d.init = function(Jh, Kh, Lh, Mh) {
        d._wa = Jh;
        d._qa = Kh;
        d._Aa = Lh;
        d._ba = Mh;
        d._Xc = true;
        d._Uc = true;
        d._Wc = true;
        d._$c = true;
        d._cd = true;
        var i = 0;
        if (d._wa._pd) {
            for (i = 0; i < d._wa._pd.length; i++) {
                var f = d._wa._pd[i];
                if (f == 'clk') {
                    d._Xc = false;
                }
                else if (f == 'mup') {
                    d._Uc = false;
                }
                else if (f == 'tos') {
                    d._Wc = false;
                }
                else if (f == 'blr') {
                    d._$c = false;
                }
                else if (f == 'chg') {
                    d._cd = false;
                }
                else {
                    d._qa._xa('Invalid config flag for doNotInstrument parameter: ' + f);
                }
            }
        }
        d._nd('click', d._Oc('click'), 'clk');
        d._nd('mousedown', d._Oc('click'), 'mdw');
        d._nd('mouseup', d._Oc('click'), 'mup');
        d._nd('dblclick', d._Oc('dblclick'), 'dcl');
        d._nd('keydown', d._Rc, 'kyd');
        d._nd('keyup', d._Rc, 'kyu');
        d._nd('scroll', d._Oc('scroll'), 'scr');
        if (d._wa.ade) {
            var Nh = d._wa.ade.split(',');
            if (Nh && Nh.length > 0) {
                i = 0;
                for (i = 0; i < Nh.length; i++) {
                    d._nd(Nh[i], d._Oc(Nh[i]), null);
                }
            }
        }
    };
    d._na = function() {
        for (var i = 0; i < d._Sc.length; i++) {
            var o = d._Sc[i];
            if (o.onclick) {
                o.onclick.toString = null;
            }
            o.onclick = null;
            o._Yc = null;
            if (o.mouseup) {
                o.mouseup.toString = null;
            }
            o.mouseup = null;
            o._qd = null;
            o.onchange = null;
            o._dd = null;
            o.onblur = null;
            o._ad = null;
        }
        d._Sc = null;
    };
    if (!dT_._pa) {
        dT_._pa = d;
    }
})();
(function() {
    var m = {};
    m._rd = [];
    m._sd = [];
    m._td = function() {
        return new Date().getTime();
    };
    m._ud = function(Oh, Ph, Qh, Rh, Sh, Th) {
        var Uh = {_vd:Qh,_wd:Rh,_id:Oh,_xd:Ph,_yd:Sh,next:Th,_zd:null,_Ad:null,_Bd:null,_Cd:null,_Dd:null,_Ed:null,add:function(Vh) {
            if (Vh && Vh._xd) {
                if (!Uh.next) {
                    Uh.next = [];
                }
                Uh.next.push(Vh);
            }
            else {
            }
        },toString:function() {
            var s = [];
            s.push('Action (type: ');
            s.push(Uh._id);
            s.push(', name:');
            s.push(Uh._xd);
            s.push(', start:');
            s.push(Uh._vd);
            s.push(', stop:');
            s.push(Uh._wd);
            s.push(', domNodes: ');
            s.push(Uh._yd);
            s.push(', sendNextPreview: ');
            s.push(Uh._zd);
            s.push(', previewCountMax: ');
            s.push(Uh._Ad);
            s.push((Uh.next ? (', subactions: ' + Uh.next.length) : ''));
            s.push(')');
            return s.join('');
        }};
        if (!m._sd[Uh._xd]) {
            m._sd[Uh._xd] = 1;
        }
        else {
            m._sd[Uh._xd]++;
            Uh._Dd = Uh._xd;
            Uh._Ed = m._sd[Uh._xd];
            Uh._xd += '#' + Uh._Ed;
        }
        return Uh;
    };
    m._Fd = function(Wh, Xh) {
        if (Wh._Cd) {
            var Yh = [];
            var Zh = [];
            Zh[0] = '0';
            Zh[1] = Wh._Cd;
            Zh[2] = Wh._Bd;
            Yh[0] = Zh.join('|');
            Yh[1] = m._Gd(Wh, 1, Xh);
            return Yh.join(',');
        }
        else {
            return m._Gd(Wh, 1, Xh);
        }
    };
    m._Gd = function($h, ai, bi) {
        if (!$h._yd) {
            $h._yd = document.getElementsByTagName('*').length;
        }
        var ci = [];
        if ($h.next && ($h.next.length > 0)) {
            for (var i = 0; i < $h.next.length; i++) {
                ci[i + 1] = m._Gd($h.next[i], ai + 1, bi);
            }
            if (bi) {
                var di = $h.next[$h.next.length - 1];
                if (!di._wd) {
                    $h._wd = undefined;
                }
                else if ($h._wd && di._wd > $h._wd) {
                    $h._wd = di._wd;
                }
            }
        }
        var ei = [];
        ei[0] = ai.toString();
        ei[1] = m._qa._ya($h._Dd ? $h._Dd : $h._xd);
        ei[2] = $h._Ed ? $h._Ed : '-';
        ei[3] = m._qa._ya($h._id);
        ei[4] = $h._vd;
        ei[5] = $h._wd ? $h._wd : 0;
        ei[6] = $h._yd;
        if ((ai == 1) && $h._Hd) {
            ei[7] = $h._Hd;
        }
        ci[0] = ei.join('|');
        if (ci.length > 1) {
            return ci.join(',');
        }
        return ci[0];
    };
    m._Id = function(fi) {
        m._Jd = null;
        if (m._Kd) {
            m._Jd = m._Kd._Ld;
            if (m._Jd) {
                fi._Cd = m._Jd._xd;
                if (m._Jd._Hd) {
                    m._Jd._Hd++;
                }
                else {
                    m._Jd._Hd = 1;
                }
                var gi = m._Kd;
                while (gi._Kd && gi._Kd._Ld) {
                    gi = gi._Kd;
                }
            }
        }
    };
    m._ua = function() {
        return m._Fd(m._Ld, false);
    };
    m._ta = function(hi) {
        var ii = '';
        if (m._Md) {
            if (m._Md._Nd) {
                ii = 'd|' + m._Md._xd + '|' + m._Md._id + '|' + m._Md._Aa + '|' + m._Md._vd + '|' + m._Md._Od + '|' + m._Md._Pd;
            } else {
                ii = 's|' + m._Md._xd + '|' + m._Md._id + '|' + m._Md._Aa + '|' + m._Md._vd;
            }
            m._Md = null;
        }
        var ji = 0;
        if (hi) {
            ji = m._rd.length;
            m._Ld = null;
        }
        else {
            if (m._Ld) {
                ji = m._rd.length - 1;
            }
            else {
                ji = m._rd.length;
            }
        }
        if (ji > 0) {
            for (var i = 0; i < ji; i++) {
                var ki = m._Fd(m._rd[i], true);
                if (ki.length > 0) {
                    if (ii.length > 0) {
                        ii += ',';
                    }
                    ii += ki;
                }
                else {
                    break;
                }
            }
            m._rd = [];
            if (m._Ld) {
                m._rd.push(m._Ld);
            }
        }
        return ii;
    };
    m._Sa = function(mi, ni, oi, pi, qi) {
        var ri = m._ud(mi, ni, oi, pi, qi, null);
        if (m._Qd) {
            m._Rd(ri);
            return false;
        }
        else {
            m._Id(ri);
            m._rd.push(ri);
            return true;
        }
    };
    m._Rd = function(si) {
        if (!m._Qd) {
            throw 'Current action is not defined!';
        }
        else {
            si._Aa = m._Aa;
            m._Qd.add(si);
        }
    };
    m._Sd = function() {
        var ti = m._qa._Pb('dtSa');
        m._qa._xa('Resetting source action: ' + ti);
        m._qa._nc('dtSa', '-');
        if (ti && ti != '-') {
            var vi = ti.split('|');
            if (vi.length == 7) {
                var a = {_Nd:vi[0] == 'true',_id:vi[1],_xd:vi[2],_vd:vi[3],_Aa:vi[4],_Od:vi[5],_Pd:vi[6]};
                if (!document.referrer || (a._Od == m._qa._ya(document.referrer)) || (a._Od == m._qa._ya(document.location))) {
                    m._Md = a;
                    m._Td = a;
                }
                else {
                }
            }
        }
    };
    m._bc = function() {
        return m._Qd;
    };
    m._Zb = function() {
        return m._Ud;
    };
    m._ac = function(wi, xi, yi) {
        m._Ud = m._Pa(wi, xi, yi);
        m._Ud._gc = 1;
    };
    m._$b = function(zi, Ai, Bi) {
        if (m._Ud) {
            m._Ud._gc++;
        }
        else if (m._Qd) {
            m._Ud = m._Pa(zi, Ai, Bi);
            m._Ud._gc = 1;
        }
    };
    m._ic = function() {
        var Ci = 0;
        if (m._Ud) {
            m._Ud._gc--;
            Ci = m._Ud._gc;
            if (Ci <= 0) {
                setTimeout(function() {
                    m._Va(m._Ud._xd);
                    m._Ud = null;
                    m._Kb();
                }, 0);
            }
        }
        return Ci;
    };
    m._hc = function() {
        return m._Ud ? m._Ud._gc : 0;
    };
    m._Zb = function() {
        return m._Ud;
    };
    m._Pa = function(Di, Ei, Fi) {
        m._eb._fb();
        if (!Fi) {
            Fi = m._td();
        }
        var Gi = m._ud(Ei, Di, Fi, null, null, null);
        if (!m._Ld) {
            m._Vd(Gi);
            m._Wd(Gi);
        }
        else if (m._Qd) {
            if (!m._Qd.next) {
                m._Qd.next = [];
            }
            m._Qd.add(Gi);
            m._Vd(Gi);
            if (m._Ld._zd > Gi._vd + 10000) {
                m._Ld._zd = Gi._vd + 10000;
            }
        }
        return m._Qd;
    };
    m._Va = function(Hi, Ii, Ji) {
        if (!Ii) {
            Ii = m._td();
        }
        var ca = m._Ld;
        while (ca) {
            ca = ca.next;
        }
        var Ki = null;
        if (m._Ld) {
            var Li = m._Ld;
            while (true) {
                if ((Li._Dd && (Li._Dd == Hi)) || (Li._xd == Hi)) {
                    Li._wd = Ii;
                    if (Ji) {
                        Li._vd = Ji;
                    }
                    Li._yd = document.getElementsByTagName('*').length;
                }
                else if (!Li._wd) {
                    Ki = Li;
                }
                if (Li.next && (Li.next.length > 0)) {
                    Li = Li.next[Li.next.length - 1];
                }
                else {
                    break;
                }
            }
            if (!Ki) {
                m._Td = null;
                if (m._Jd) {
                    if (parent && (m._Kd._Ld == m._Jd)) {
                        m._Ld._Bd = 'S';
                    }
                    else {
                        m._Ld._Bd = 'A';
                    }
                    m._Jd = null;
                }
                m._Ld = null;
                m._Kb();
            }
        }
        m._Vd(Ki);
    };
    m._Vd = function(Mi) {
        if (m._Qd != Mi) {
            m._Qd = Mi;
            if (Mi) {
                m._Na.change(m._Aa, Mi._xd);
            }
            else {
            }
        }
    };
    m._Wd = function(Ni) {
        m._Id(Ni);
        m._Ld = Ni;
        m._Qd = Ni;
        m._rd.push(Ni);
        Ni._zd = Ni._vd + 10000;
        Ni._Ad = 100;
        setTimeout(m._Xd, 5000);
    };
    m._Xd = function() {
        if (m._Ld) {
            if (m._Ld._Ad > 0) {
                if (m._td() > m._Ld._zd) {
                    m._Ld._zd += 60000;
                    m._Jb(true, true, true, false);
                    m._Ld._Ad--;
                }
                setTimeout(m._Xd, 1000);
            }
        }
    };
    m._Yd = function() {
        var s = document.location.href;
        var p = s.indexOf('#');
        if (p >= 0) {
            s = s.substr(0, p);
        }
        return s;
    };
    m._Ja = function(Oi, Pi, Qi) {
        if (!m._Zd && Oi && Pi && Qi) {
            m._qa._nc('dtSa', 'true|' + m._qa._ya(Pi) + '|' + m._qa._ya(Oi) + '|' + Qi + '|' + m._Aa + '|' + m._qa._ya(m._Yd()) + '|' + m._qa._ya(document.title));
        }
        else {
            var Ri = m._Td;
            var x = m._Zd;
            dT_._xa('Original source action: ' + Ri + ' in xhr: ' + x);
            if (x && Ri) {
                m._qa._nc('dtSa', 'false|' + Ri._id + '|' + Ri._xd + '|' + m._td() + '|' + Ri._Aa + '|' + m._qa._ya(m._Yd()) + '|' + m._qa._ya(document.title));
                m._Td = null;
            } else if (m._Qd && m._Qd._xd != '_load_') {
                m._qa._nc('dtSa', 'false|' + m._qa._ya(m._Qd._id) + '|' + m._qa._ya(m._Qd._xd) + '|' + m._td() + '|' + m._Aa + '|' + m._qa._ya(m._Yd()) + '|' + m._qa._ya(document.title));
            }
        }
    };
    m._jc = function() {
        m._Zd = true;
    };
    m._kc = function() {
        setTimeout(function() {
            m._Zd = false;
        }, 0);
    };
    m._Ba = function() {
        return m._Zd;
    };
    m._fb = function(Si, Ti, Ui, Vi, Wi, Xi, Yi) {
        m._qa = Si;
        m._Kd = Ti;
        m._Aa = Ui;
        m._eb = Vi;
        m._Kb = Wi;
        m._Jb = Xi;
        m._Na = Yi;
        m._Sd();
    };
    if (!dT_._sa) {
        dT_._sa = m;
    }
})();
(function() {
    var c = {};
    c.requestId = null;
    c.responseId = "0";
    c.checkScriptsTimeout = false;
    c.checkImagesEnabled = false;
    c.nottfb = false;
    c.ridPath = null;
    c.xhrImages = false;
    c.reportUrl = 'dynaTraceMonitor';
    c._qa = dT_._qa;
    c._$d = function(Zi, $i) {
        if (Zi == 'rid') {
            c.requestId = $i;
        }
        else if (Zi == 'rpid') {
            c.responseId = $i;
        }
        else if (Zi == 'ridPath') {
            c.ridPath = $i;
        }
        else if (Zi == 'domain') {
            c._qa._wc = $i;
        }
        else if (Zi == 'reportUrl') {
            c.reportUrl = decodeURIComponent($i);
        }
        else if (Zi == 'scriptcheck') {
            var p = $i.split(',');
            c.checkScriptsThreshold = parseInt(p[0], 10);
            if (p.length > 1) {
                c.checkScriptsTimeout = parseInt(p[1], 10);
            }
            else {
                c.checkScriptsTimeout = 100;
            }
            c._Tb = true;
        }
        else if (Zi == 'imagecheck') {
            var v = $i.split(',');
            c.checkImagesThreshold = parseInt(v[0], 10);
            if (v.length > 1) {
                c.checkImagesTimeout = parseInt(v[1], 10);
            }
            else {
                c.checkImagesTimeout = 100;
            }
            c.checkImagesEnabled = true;
        }
        else if (Zi == 'nottfb') {
            c.nottfb = true;
        }
        else if (Zi == 'xhrimages') {
            c.xhrImages = true;
        } else if (Zi == 'doNotDetect') {
            var aj = $i.split(',');
            c._od = aj;
        } else if (Zi == 'doNotInstrument') {
            var bj = $i.split(',');
            c._pd = bj;
        }
        else {
            c[Zi] = $i;
        }
    };
    c._ae = function(cj) {
        if (cj) {
            var dj = cj.split('|');
            for (var i = 0; i < dj.length; i++) {
                var p = dj[i].indexOf('=');
                if (p == -1) {
                    c._$d(dj[i], true);
                }
                else {
                    var ej = dj[i].substring(0, p);
                    var fj = dj[i].substring(p + 1, dj[i].length);
                    c._$d(ej, fj);
                }
            }
        }
    };
    c._fb = function() {
        var gj = document.getElementsByTagName('script');
        if (gj.length > 0) {
            var hj;
            for (var j = gj.length - 1; j >= 0; j--) {
                hj = gj[j];
                if ((hj.src.search('dtagent') >= 0) && hj.attributes) {
                    var ij = hj.attributes.getNamedItem('data-dtconfig');
                    if (ij && ij.nodeValue) {
                        configStr = ij.nodeValue;
                    }
                    break;
                }
            }
        }
        c._ae(configStr);
    };
    if (!dT_._wa) {
        dT_._wa = c;
    }
})();
(function() {
    dT_._va = function() {
        var m = this;
        m.monitorUrl = null;
        m._be = ['dynaTraceMonitor','?'];
        m.a = function(k, v) {
            m._be.push(k);
            m._be.push('=');
            m._be.push(v);
            m._be.push('&');
        };
        m.getRequest = function() {
            if (m.monitorUrl) {
                m._be[0] = m.monitorUrl;
            }
            return m._be.join('');
        };
    };
})();
(function() {
    var m = {};
    m._qa = null;
    m._Ea = function(jj, kj, lj) {
        var mj = m._qa.getXHR();
        var nj = new Date().getTime();
        var u = m._qa;
        mj.onreadystatechange = function() {
            if (mj.readyState == 4) {
                if (mj.status == 200) {
                    var oj = new Date().getTime() - nj;
                    if (kj) {
                        kj(oj);
                    }
                }
                else {
                }
            }
        };
        jj.a('time', nj);
        var pj = !(lj && (m._qa._sc || m._qa._tc));
        mj.open('POST', jj.getRequest(), pj);
        mj.send(null);
    };
    m.init = function(qj) {
        m._qa = qj;
    };
    if (!dT_._Da) {
        dT_._Da = m;
    }
})();
(function() {
    var t = {};
    t._ce = new Date().getTime();
    t._de = new Date().getTime();
    t._ee = escape(document.URL.split('#')[0]);
    t._fe = escape(document.referrer);
    t._kb = function() {
        if (t._ge) {
            return t._ge.loadEventEnd;
        }
        else {
            return 0;
        }
    };
    t._lb = function() {
        if (t._ge) {
            return t._ge.loadEventStart;
        }
        else {
            return 0;
        }
    };
    t._Ta = function() {
        return t._de;
    };
    t._Qa = function() {
        return t._ce;
    };
    t._Ca = function() {
        var rj;
        if (t._ge) {
            rj = t._kd + " DNS:" + (t._ge.domainLookupEnd - t._ge.domainLookupStart);
        }
        else {
            rj = t._kd;
        }
        return rj;
    };
    t._he = function() {
        t._ce = t._de;
        var sj = t._qa.getPerformance();
        if (sj && sj.timing) {
            t._ge = sj.timing;
            t._Ra = 'webtiming';
            var tj = t._ge.navigationStart || t._ge.fetchStart || t._ge.requestStart || undefined;
            if (tj !== undefined) {
                t._ce = tj;
                if (sj.navigation) {
                    t._kd = 'webtiming ' + sj.navigation.type;
                }
                else {
                    t._kd = 'webtiming';
                }
            }
        }
        else if ((typeof chrome != 'undefined') && chrome.loadTimes && chrome.loadTimes()) {
            t._Ra = 'chrome';
            if (chrome.loadTimes().requestTime > 0) {
                t._ce = parseInt(chrome.loadTimes().requestTime * 1000, 10);
                t._kd = 'chrome ' + chrome.loadTimes().navigationType + ' rT';
            }
            else if (chrome.loadTimes().startLoadTime > 0) {
                t._ce = parseInt(chrome.loadTimes().startLoadTime * 1000, 10);
                t._kd = 'chrome ' + chrome.loadTimes().navigationType + ' sLT';
            }
        }
    };
    t._fb = function(uj, vj, wj) {
        t._qa = uj;
        t._ie = vj;
        t._ba = wj;
        if (!vj) {
            t._he();
        }
    };
    if (!dT_._la) {
        dT_._la = t;
    }
})();
(function() {
    var h = {};
    h._je = function(xj, yj, zj) {
        if (!h._ke) {
            h._ke = true;
            var Aj = null;
            try {
                if (typeof(xj) == 'object') {
                    if (xj.srcElement) {
                        if (xj.srcElement.outerHTML && (xj.srcElement.outerHTML.length < 200)) {
                            Aj = document.URL.split('#')[0] + "[-]: Error at '" + xj.srcElement.outerHTML + "'";
                        }
                        else {
                            Aj = document.URL.split('#')[0] + "[-]: Error at tag: '" + xj.srcElement.tagName + "'";
                        }
                    }
                    else {
                        Aj = 'unknown error';
                    }
                }
                else {
                    Aj = yj + '[' + zj + ']: ' + xj;
                }
                if (Aj) {
                    var ua = h._pa._Ia();
                    if (ua) {
                        Aj += ', user action: ' + ua.name;
                    }
                    h._le(Aj, '_error_');
                }
            }
            catch(e) {
            }
            if (h._me && h._me != h._je) {
                h._me(xj, yj, zj);
            }
            h._ke = false;
        }
        else {
        }
        return false;
    };
    h._ne = function() {
        if (h._ba) {
            h._le(event.type + ':' + event.errorUrl + '[' + event.errorLine + '] Code: ' + event.errorCode + ': ' + event.errorMessage, '_error_');
        }
        else {
            if (window.onerror != h._je) {
                h._le('window.onerror is overwritten - JavaScript error probably lost!', '_warning_');
                h._fb();
            }
        }
    };
    h._fb = function(Bj, Cj, Dj, Ej) {
        if (Bj) {
            h._qa = Bj;
        }
        if (Cj) {
            h._pa = Cj;
        }
        if (Dj) {
            h._le = Dj;
        }
        h._ba = Ej;
        if (!h._oe) {
            h._qa._Eb(window, 'error', h._ne);
            h._oe = true;
        }
        if (!h._ba && (window.onerror != h._je)) {
            if (window.onerror) {
                h._me = window.onerror;
            }
            window.onerror = h._je;
        }
        h._qa._Eb(window, 'unload', function() {
            window.onerror = null;
        });
    };
    if (!dT_._eb) {
        dT_._eb = h;
    }
})();
(function() {
    var p = {};
    p._pe = 'dtPC';
    p._qa = dT_._qa;
    p._qe = function(Fj) {
        var f = Fj.split('_');
        var t = parseInt(f[1], 10);
        var Gj = new Date().getTime();
        return(t + 1000 * 60 * 15 > Gj);
    };
    p._Pb = function() {
        var Hj = [];
        var Ij = p._qa._Pb(p._pe);
        if (Ij && Ij != '') {
            var Jj = Ij.split('|');
            for (var i = 0; i < Jj.length; i++) {
                var Kj = Jj[i].split('#');
                if (Kj.length == 2 && Kj[0] && Kj[1]) {
                    var Lj = Kj[0];
                    if (p._qe(Lj)) {
                        Hj.push({_Aa:Lj,_re:Kj[1]});
                    }
                }
            }
        }
        return Hj;
    };
    p._nc = function(Mj) {
        var c;
        if (Mj) {
            var Nj = [];
            for (var i = 0; i < Mj.length; i++) {
                if (i > 0) {
                    Nj.push('|');
                }
                Nj.push(Mj[i]._Aa);
                Nj.push('#');
                Nj.push(Mj[i]._re);
            }
            c = Nj.join('');
        }
        else {
            c = '';
        }
        p._qa._nc(p._pe, c);
    };
    p.add = function(Oj, Pj) {
        var Qj = p._Pb();
        if (!Pj) {
            Pj = '_load_';
        }
        var Rj = {_Aa:Oj,_re:p._qa._ya(Pj)};
        Qj.push(Rj);
        p._nc(Qj);
    };
    p.replace = function(Sj, Tj) {
        var Uj = [
            {_Aa:Sj,_re:p._qa._ya(Tj)}
        ];
        p._nc(Uj);
    };
    p.change = function(Vj, Wj) {
        var Xj = p._Pb();
        var Yj = false;
        for (var i = 0; i < Xj.length; i++) {
            if (Xj[i]._Aa == Vj) {
                Xj[i]._re = p._qa._ya(Wj);
                Yj = true;
            }
        }
        if (Yj) {
            p._nc(Xj);
        }
        else {
            p.add(Vj, Wj);
        }
    };
    p.remove = function(Zj) {
        var $j = p._Pb();
        if ($j.length > 0) {
            var ak = [];
            for (var i = 0; i < $j.length; i++) {
                if ($j[i]._Aa != Zj) {
                    ak.push($j[i]);
                }
            }
            p._nc(ak);
        }
    };
    if (!dT_._Na) {
        dT_._Na = p;
    }
})();
if (dT_._xa) {
}
dT_._fb();
(function() {
    var d = {};
    d._se = false;
    d._te = false;
    d._ue = function(bk, ck, dk) {
        dT_._Yb('dojo xhr' + dk, 3);
        var ek;
        if ((bk.sync === undefined) || !bk.sync) {
            ek = ck.call(this, bk);
            var fk = ek.callback;
            var gk = bk.url;
            ek.callback = function(hk) {
                dT_._jc();
                var ik = fk.apply(this, arguments);
                dT_._kc();
                dT_._ec();
                return ik;
            };
            var jk = ek.errback;
            ek.errback = function(kk) {
                try {
                    dT_._jc();
                    var lk = jk.apply(this, arguments);
                    return lk;
                } finally {
                    dT_._kc();
                    dT_._ec();
                }
            };
            var mk = ek.cancel;
            ek.cancel = function() {
                dT_._jc();
                var nk = mk.apply(this, arguments);
                dT_._kc();
                dT_._ec();
                return nk;
            };
            return ek;
        }
        else {
            ek = ck.apply(this, arguments);
            dT_._ec();
            return ek;
        }
    };
    d.init = function() {
        if (!d._te && (typeof dojo != 'undefined') && dojo) {
            var ok = dojo.connect;
            dojo.connect = function(pk, qk, rk, sk, tk) {
                if ((qk != 'onclick') && (qk != 'click')) {
                    return ok.apply(this, arguments);
                }
                if (rk && !sk) {
                    sk = rk;
                    rk = null;
                }
                var uk = function() {
                    var vk = dT_._lc(pk, 'click', 'dojo');
                    var wk;
                    if (typeof sk == 'string') {
                        if (rk) {
                            wk = rk[sk].apply(rk, arguments);
                        }
                        else {
                            wk = rk[sk].apply(dojo.global, arguments);
                        }
                    }
                    else {
                        if (rk) {
                            wk = sk.apply(rk, arguments);
                        }
                        else {
                            wk = sk.apply(this, arguments);
                        }
                    }
                    dT_._mc(vk);
                    if (vk._Ae) {
                        userinput._Ae._gc--;
                        if (vk._Ae._gc === 0) {
                            dT_._ec(vk._Ae._xd);
                        }
                    }
                    return wk;
                };
                return ok.call(this, pk, qk, rk, uk, tk);
            };
            var xk = dojo.xhrGet;
            dojo.xhrGet = function(yk) {
                return d._ue.call(this, yk, xk, 'Get');
            };
            var zk = dojo.rawXhrPost;
            dojo.rawXhrPost = function(Ak) {
                return d._ue.call(this, Ak, zk, 'RawPost');
            };
            var Bk = dojo.xhrPost;
            dojo.xhrPost = function(Ck) {
                return d._ue.call(this, Ck, Bk, 'Post');
            };
            var Dk = dojo.rawXhrPut;
            dojo.rawXhrPut = function(Ek) {
                return d._ue.call(this, Ek, Dk, 'RawPut');
            };
            var Fk = dojo.xhrDelete;
            dojo.xhrDelete = function(Gk) {
                return d._ue.call(this, Gk, Fk, 'Delete');
            };
            dT_._Xa();
            var Hk = dojo.loaded;
            dojo.loaded = function() {
                var Ik;
                if (!d._se) {
                    d._se = true;
                    dT_.signalOnLoadBegin();
                    Ik = Hk.apply(this, arguments);
                    dT_.signalOnLoadEnd();
                }
                else {
                    Ik = Hk.apply(this, arguments);
                }
                dT_._cc();
                return Ik;
            };
            dojo.addOnLoad(function() {
                dT_._xa("   dojo.loaded!!!!");
            });
            var Jk = dojo.addOnLoad;
            dojo.ready = dojo.addOnLoad = function() {
                dT_._fc();
                var Kk = Jk.apply(this, arguments);
                return Kk;
            };
            d._te = true;
            dT_._jb();
        }
    };
    d._Je = function() {
        if (dT_._Ke) {
            dT_._Ke.init();
        }
    };
    var Lk = dT_.cfg('dojo.xhr');
    if (Lk) {
        dT_._Ke = d;
        dT_.initDojo = d._Je;
        dT_._Ub(function() {
            dT_.initDojo();
        });
    } else {
        dT_.initDojo = function() {
            dT_._xa('Dojo is disabled!');
        };
    }
})();
(function() {
    var f = {};
    f._Le = false;
    f._Me = function(Mk, Nk, Ok) {
        dT_._Yb('ice.jsfXhr', 3);
        f._Ne(Mk, Nk, Ok);
    };
    f._Oe = function() {
        dT_._jc();
        var Pk = f._Pe.apply(this, arguments);
        dT_._kc();
        dT_._ec();
        return Pk;
    };
    f._Qe = function() {
        if (f._Re()) {
            if (jsf.ajax.request != f._Me) {
                f._Ne = jsf.ajax.request;
                jsf.ajax.request = f._Me;
            }
            if (jsf.ajax.response != f._Oe) {
                f._Pe = jsf.ajax.response;
                jsf.ajax.response = f._Oe;
            }
        } else if (f._Se()) {
            if (!f._Te) {
                f._Te = Ice.Ajax.RequestProxy;
                Ice.Ajax.RequestProxy = function(Qk, b) {
                    dT_._Yb('ice.1.8.ajax', 3);
                    var Rk = new f._Te(Qk, b);
                    var Sk = Rk.responseCallback;
                    Rk.responseCallback = function() {
                        dT_._jc();
                        var Tk = Sk.apply(this, arguments);
                        dT_._kc();
                        if (Qk.readyState == 4) {
                            dT_._ec();
                        }
                        return Tk;
                    };
                    return Rk;
                };
            }
        }
    };
    f._Re = function() {
        return!!((typeof jsf != 'undefined') && (typeof jsf.ajax != 'undefined'));
    };
    f._Se = function() {
        return!!(typeof container != 'undefined' && container.bridge != 'undefined');
    };
    f.init = function() {
        if (!f._Le) {
            if (f._Re() || f._Se()) {
                dT_._Wb(f._Qe);
                f._Le = true;
                dT_._jb();
            } else {
            }
        } else {
        }
    };
    var Uk = dT_.cfg('icefaces.ajax');
    if (Uk) {
        dT_._xa('DynaTraceIceFacesHook.Initializing');
        dT_._Ub(function() {
            f.init();
        });
    }
})();
(function() {
    var j = {};
    j._Ue = function(Vk) {
        dT_._Yb('jQuery.ajax', 3);
        if ((Vk.async === undefined) || Vk.async) {
            var Wk = Vk.complete;
            Vk.complete = function(Xk, Yk) {
                if (Yk != "success") {
                    dT_.pw('jQuery reported "' + Yk + '"');
                }
                dT_._jc();
                var Zk;
                if (Wk) {
                    if (typeof Wk == 'function') {
                        Zk = Wk.apply(this, arguments);
                    } else if (Wk.length) {
                        for (var i = 0; i < Wk.length; i++) {
                            Wk[i].apply(this, arguments);
                        }
                    }
                }
                dT_._kc();
                dT_._ec();
                return Zk;
            };
            j._We(Vk);
        }
        else {
            j._We(Vk);
            dT_._ec();
        }
    };
    j._Xe = function($k, al) {
        if ($k) {
            var bl = function(e) {
                var cl = null;
                if (e.currentTarget) {
                    cl = dT_._lc(e.currentTarget, al, 'jquery');
                }
                else if (e.srcElement) {
                    cl = dT_._lc(e.srcElement, al, 'jquery');
                }
                var bl = $k.apply(this, arguments);
                if (cl) {
                    if (cl._Ae) {
                        userinput._Ae._gc--;
                        if (cl._Ae._gc === 0) {
                            dT_._ec(cl._Ae._xd);
                            dT_._jb();
                        }
                    }
                    setTimeout(function() {
                        dT_._mc(cl);
                    }, 10);
                }
                return bl;
            };
            bl._Ye = true;
            return bl;
        } else {
            return $k;
        }
    };
    j._Ze = function(dl, el) {
        var fl = dl[el];
        if (fl) {
            for (var i = 0; i < fl.length; i++) {
                if (fl[i].handler && !fl[i].handler._Ye) {
                    fl[i].handler = j._Xe(fl[i].handler, el);
                }
            }
        }
    };
    j._$e = function(gl, hl, il) {
        var jl = j._af.apply(this, arguments);
        if (typeof jl != 'undefined' && jl) {
            if (hl == 'events') {
                j._Ze(jl, 'click');
                j._Ze(jl, 'mousedown');
                j._Ze(jl, 'keydown');
                j._Ze(jl, 'autocomplete');
            }
        }
        return jl;
    };
    j.init = function() {
        if (!j._bf && (typeof(jQuery) != 'undefined') && jQuery) {
            j._bf = true;
            dT_._jb();
            j._We = jQuery.ajax;
            jQuery.ajax = j._Ue;
            j._af = jQuery.data;
            jQuery.data = j._$e;
        }
    };
    var kl = dT_.cfg('jquery.ajax');
    if (kl) {
        dT_._xa('Initializing jquery');
        dT_._Ub(function() {
            j.init();
        });
    }
})();
(function() {
    var t = {};
    t._cf = null;
    t._df = function(ll, ml) {
        var nl = ml.mem + ll.toLowerCase();
        for (var i = ml.pos; i < nl.length; i++) {
            var c = ml._ef.charAt(ml.pos);
            if ((nl.charAt(i) === c) || (c === '?')) {
                ml.pos++;
                if (ml.pos === ml._ef.length) {
                    ml.pos = 0;
                    if (ml._ff) {
                        ml._ff++;
                    }
                    else {
                        ml._ff = 1;
                    }
                }
            }
            else {
                if (ml.pos > 0) {
                    i -= ml.pos;
                    ml.pos = 0;
                }
            }
        }
        if (ml.pos > 0) {
            ml.mem = nl.substr(nl.length - ml.pos, ml.pos);
        }
        else {
            ml.mem = "";
        }
    };
    t._gf = function() {
        var ol = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
        var i;
        if (t._cf) {
            var ql = ol.nextNode();
            while (ql) {
                if (ql.nodeValue.charAt(0) !== '\n') {
                    for (i = 0; i < t._cf.length; i++) {
                        t._df(ql.nodeValue, t._cf[i]);
                    }
                }
                ql = ol.nextNode();
            }
            for (i = 0; i < t._cf.length; i++) {
                if (t._cf[i]._hf) {
                    if (!t._cf[i]._ff) {
                        t._if(t._cf[i]);
                    }
                    else {
                        if (!t._cf[i]._Ed || (t._cf[i]._ff < t._cf[i]._Ed)) {
                            t._if(t._cf[i]);
                        }
                    }
                }
                else {
                    if (t._cf[i]._ff) {
                        if (!t._cf[i]._Ed || (t._cf[i]._ff >= t._cf[i]._Ed)) {
                            t._if(t._cf[i]);
                        }
                    }
                }
            }
        }
    };
    t._if = function(rl) {
        var sl = "Text verification failed - '" + rl._ef + "' ";
        if (rl._ff) {
            sl += "appeared " + rl._ff + " time" + ((rl._ff > 1) ? "s!" : "!");
        }
        else {
            sl += "did not appear!";
        }
        if (rl._id === 'warning') {
            dT_.pw(sl);
        }
        else if (rl._id === 'info') {
            dT_.pl(sl);
        }
        else {
            dT_.pe(sl);
        }
    };
    t._fb = function(tl, ul, vl, wl) {
        var xl = {};
        xl._ef = tl;
        xl._id = wl;
        xl._hf = vl;
        if (ul !== undefined) {
            xl._Ed = parseInt(ul, 10);
        }
        xl.pos = 0;
        xl.mem = "";
        if (!t._cf) {
            t._cf = [];
        }
        t._cf.push(xl);
        t._gf();
    };
    var yl = dT_.cfg('textcheck');
    if (yl) {
        dT_._xa('Initializing textcheck');
        var zl = yl.split(',');
        dT_._Ub(function() {
            dT_._xa('Initializing textcheck plugin: ' + yl);
            t._fb(zl[0], zl[1], zl[2], zl[3]);
        });
    }
})();
(function() {
    var b = {};
    b._jf = -1;
    b._kf = 0;
    b._lf = 0;
    b._mf = '';
    b._nf = 'dtLatCT';
    b.getInfo = function() {
        if (b._kf && b._lf) {
            return b._kf + '_' + b._lf;
        }
        else {
            return null;
        }
    };
    b._he = function() {
        b._kf++;
        var Al = dT_._qa.getXHR();
        var Bl = b._mf + 'dtbwimg_';
        Bl += b._kf;
        Bl += '.jpg';
        if (Al) {
            Al.onreadystatechange = function() {
                if (Al.readyState == 4) {
                    var Cl = new Date().getTime();
                    b._lf = Cl - b._of;
                    if (b._kf > 0) {
                        if (b._kf >= 6 || b._lf > 100) {
                            dT_._qa._nc(b._nf, Cl + '|' + b._kf + '|' + b._lf);
                        }
                        else {
                            window.setTimeout(b._he, 100);
                        }
                    }
                    else {
                        dT_._qa.setLatencyCookie(b._lf);
                        window.setTimeout(b._he, 100);
                    }
                }
            };
        }
        b._of = new Date().getTime();
        Al.open('GET', Bl, true);
        Al.send(null);
    };
    b._pf = function() {
        var Dl = dT_._qa._Pb(b._nf);
        if (Dl) {
            var ps = Dl.split('|');
            var El = ps[0];
            if ((new Date().getTime() - El) < b._jf) {
                if (ps.length > 1) {
                    b._kf = ps[1];
                    b._lf = ps[2];
                }
                return;
            }
        }
        window.setTimeout(b._he, 100);
    };
    var Fl = dT_.cfg('bandwidth');
    if (Fl && dT_.tp()) {
        b._jf = parseInt(Fl, 10) * 1000;
        var Gl = dT_.cfg('reportUrl');
        if (Gl) {
            var p = Gl.lastIndexOf("/");
            if (p >= 0) {
                b._mf = Gl.substring(0, p + 1);
            }
        }
        dT_._xa('Initializing bandwidth check: ' + b._jf + ', basurl: ' + b._mf);
        dT_._Vb(function(Hl) {
            Hl.a('bw', b.getInfo());
        });
        b._pf();
    }
})();