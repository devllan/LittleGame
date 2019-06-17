!function(e) {
    Array.prototype.map || (Array.prototype.map = function(e, r) {
            var a, o, i;
            if (null == this)
                throw new TypeError(" this is null or not defined");
            var n = Object(this)
                , t = n.length >>> 0;
            if ("function" != typeof e)
                throw new TypeError(e + " is not a function");
            for (r && (a = r),
                     o = Array(t),
                     i = 0; t > i; ) {
                var l, c;
                i in n && (l = n[i],
                    c = e.call(a, l, i, n),
                    o[i] = c),
                    i++
            }
            return o
        }
    );
    var r = e.detect = function() {
        var e = function() {}
            , r = {
            browser_parsers: [{
                regex: "^(Opera)/(\\d+)\\.(\\d+) \\(Nintendo Wii",
                family_replacement: "Wii",
                manufacturer: "Nintendo"
            }, {
                regex: "(SeaMonkey|Camino)/(\\d+)\\.(\\d+)\\.?([ab]?\\d+[a-z]*)",
                family_replacement: "Camino",
                other: !0
            }, {
                regex: "(Pale[Mm]oon)/(\\d+)\\.(\\d+)\\.?(\\d+)?",
                family_replacement: "Pale Moon (Firefox Variant)",
                other: !0
            }, {
                regex: "(Fennec)/(\\d+)\\.(\\d+)\\.?([ab]?\\d+[a-z]*)",
                family_replacement: "Firefox Mobile"
            }, {
                regex: "(Fennec)/(\\d+)\\.(\\d+)(pre)",
                family_replacment: "Firefox Mobile"
            }, {
                regex: "(Fennec)/(\\d+)\\.(\\d+)",
                family_replacement: "Firefox Mobile"
            }, {
                regex: "Mobile.*(Firefox)/(\\d+)\\.(\\d+)",
                family_replacement: "Firefox Mobile"
            }, {
                regex: "(Namoroka|Shiretoko|Minefield)/(\\d+)\\.(\\d+)\\.(\\d+(?:pre)?)",
                family_replacement: "Firefox ($1)"
            }, {
                regex: "(Firefox)/(\\d+)\\.(\\d+)(a\\d+[a-z]*)",
                family_replacement: "Firefox Alpha"
            }, {
                regex: "(Firefox)/(\\d+)\\.(\\d+)(b\\d+[a-z]*)",
                family_replacement: "Firefox Beta"
            }, {
                regex: "(Firefox)-(?:\\d+\\.\\d+)?/(\\d+)\\.(\\d+)(a\\d+[a-z]*)",
                family_replacement: "Firefox Alpha"
            }, {
                regex: "(Firefox)-(?:\\d+\\.\\d+)?/(\\d+)\\.(\\d+)(b\\d+[a-z]*)",
                family_replacement: "Firefox Beta"
            }, {
                regex: "(Namoroka|Shiretoko|Minefield)/(\\d+)\\.(\\d+)([ab]\\d+[a-z]*)?",
                family_replacement: "Firefox ($1)"
            }, {
                regex: "(Firefox).*Tablet browser (\\d+)\\.(\\d+)\\.(\\d+)",
                family_replacement: "MicroB",
                tablet: !0
            }, {
                regex: "(MozillaDeveloperPreview)/(\\d+)\\.(\\d+)([ab]\\d+[a-z]*)?"
            }, {
                regex: "(Flock)/(\\d+)\\.(\\d+)(b\\d+?)",
                family_replacement: "Flock",
                other: !0
            }, {
                regex: "(RockMelt)/(\\d+)\\.(\\d+)\\.(\\d+)",
                family_replacement: "Rockmelt",
                other: !0
            }, {
                regex: "(Navigator)/(\\d+)\\.(\\d+)\\.(\\d+)",
                family_replacement: "Netscape"
            }, {
                regex: "(Navigator)/(\\d+)\\.(\\d+)([ab]\\d+)",
                family_replacement: "Netscape"
            }, {
                regex: "(Netscape6)/(\\d+)\\.(\\d+)\\.(\\d+)",
                family_replacement: "Netscape"
            }, {
                regex: "(MyIBrow)/(\\d+)\\.(\\d+)",
                family_replacement: "My Internet Browser",
                other: !0
            }, {
                regex: "(Opera Tablet).*Version/(\\d+)\\.(\\d+)(?:\\.(\\d+))?",
                family_replacement: "Opera Tablet",
                tablet: !0
            }, {
                regex: "(Opera)/.+Opera Mobi.+Version/(\\d+)\\.(\\d+)",
                family_replacement: "Opera Mobile"
            }, {
                regex: "Opera Mobi",
                family_replacement: "Opera Mobile"
            }, {
                regex: "(Opera Mini)/(\\d+)\\.(\\d+)",
                family_replacement: "Opera Mini"
            }, {
                regex: "(Opera Mini)/att/(\\d+)\\.(\\d+)",
                family_replacement: "Opera Mini"
            }, {
                regex: "(Opera)/9.80.*Version/(\\d+)\\.(\\d+)(?:\\.(\\d+))?",
                family_replacement: "Opera"
            }, {
                regex: "(webOSBrowser)/(\\d+)\\.(\\d+)",
                family_replacement: "webOS"
            }, {
                regex: "(webOS)/(\\d+)\\.(\\d+)",
                family_replacement: "webOS"
            }, {
                regex: "(wOSBrowser).+TouchPad/(\\d+)\\.(\\d+)",
                family_replacement: "webOS TouchPad"
            }, {
                regex: "(luakit)",
                family_replacement: "LuaKit",
                other: !0
            }, {
                regex: "(Lightning)/(\\d+)\\.(\\d+)([ab]?\\d+[a-z]*)",
                family_replacement: "Lightning",
                other: !0
            }, {
                regex: "(Firefox)/(\\d+)\\.(\\d+)\\.(\\d+(?:pre)?) \\(Swiftfox\\)",
                family_replacement: "Swiftfox",
                other: !0
            }, {
                regex: "(Firefox)/(\\d+)\\.(\\d+)([ab]\\d+[a-z]*)? \\(Swiftfox\\)",
                family_replacement: "Swiftfox",
                other: !0
            }, {
                regex: "rekonq",
                family_replacement: "Rekonq",
                other: !0
            }, {
                regex: "(conkeror|Conkeror)/(\\d+)\\.(\\d+)\\.?(\\d+)?",
                family_replacement: "Conkeror",
                other: !0
            }, {
                regex: "(konqueror)/(\\d+)\\.(\\d+)\\.(\\d+)",
                family_replacement: "Konqueror",
                other: !0
            }, {
                regex: "(WeTab)-Browser",
                family_replacement: "WeTab",
                other: !0
            }, {
                regex: "(Comodo_Dragon)/(\\d+)\\.(\\d+)\\.(\\d+)",
                family_replacement: "Comodo Dragon",
                other: !0
            }, {
                regex: "(YottaaMonitor)",
                family_replacement: "Yottaa Monitor",
                other: !0
            }, {
                regex: "(Kindle)/(\\d+)\\.(\\d+)",
                family_replacement: "Kindle"
            }, {
                regex: "(Symphony) (\\d+).(\\d+)",
                family_replacement: "Symphony",
                other: !0
            }, {
                regex: "Minimo",
                family_replacement: "Minimo",
                other: !0
            }, {
                regex: "(CrMo)/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+)",
                family_replacement: "Chrome Mobile"
            }, {
                regex: "(CriOS)/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+)",
                family_replacement: "Chrome Mobile iOS"
            }, {
                regex: "(Chrome)/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+) Mobile",
                family_replacement: "Chrome Mobile"
            }, {
                regex: "(chromeframe)/(\\d+)\\.(\\d+)\\.(\\d+)",
                family_replacement: "Chrome Frame"
            }, {
                regex: "(UC Browser)(\\d+)\\.(\\d+)\\.(\\d+)",
                family_replacement: "UC Browser",
                other: !0
            }, {
                regex: "(SLP Browser)/(\\d+)\\.(\\d+)",
                family_replacement: "Tizen Browser",
                other: !0
            }, {
                regex: "(Epiphany)/(\\d+)\\.(\\d+).(\\d+)",
                family_replacement: "Epiphany",
                other: !0
            }, {
                regex: "(SE 2\\.X) MetaSr (\\d+)\\.(\\d+)",
                family_replacement: "Sogou Explorer",
                other: !0
            }, {
                regex: "(Pingdom.com_bot_version_)(\\d+)\\.(\\d+)",
                family_replacement: "PingdomBot",
                other: !0
            }, {
                regex: "(facebookexternalhit)/(\\d+)\\.(\\d+)",
                family_replacement: "FacebookBot"
            }, {
                regex: "(Twitterbot)/(\\d+)\\.(\\d+)",
                family_replacement: "TwitterBot"
            }, {
                regex: "(AdobeAIR|Chromium|FireWeb|Jasmine|ANTGalio|Midori|Fresco|Lobo|PaleMoon|Maxthon|Lynx|OmniWeb|Dillo|Camino|Demeter|Fluid|Fennec|Shiira|Sunrise|Chrome|Flock|Netscape|Lunascape|WebPilot|NetFront|Netfront|Konqueror|SeaMonkey|Kazehakase|Vienna|Iceape|Iceweasel|IceWeasel|Iron|K-Meleon|Sleipnir|Galeon|GranParadiso|Opera Mini|iCab|NetNewsWire|ThunderBrowse|Iron|Iris|UP\\.Browser|Bunjaloo|Google Earth|Raven for Mac)/(\\d+)\\.(\\d+)\\.(\\d+)"
            }, {
                regex: "(Bolt|Jasmine|IceCat|Skyfire|Midori|Maxthon|Lynx|Arora|IBrowse|Dillo|Camino|Shiira|Fennec|Phoenix|Chrome|Flock|Netscape|Lunascape|Epiphany|WebPilot|Opera Mini|Opera|NetFront|Netfront|Konqueror|Googlebot|SeaMonkey|Kazehakase|Vienna|Iceape|Iceweasel|IceWeasel|Iron|K-Meleon|Sleipnir|Galeon|GranParadiso|iCab|NetNewsWire|Iron|Space Bison|Stainless|Orca|Dolfin|BOLT|Minimo|Tizen Browser|Polaris)/(\\d+)\\.(\\d+)"
            }, {
                regex: "(iRider|Crazy Browser|SkipStone|iCab|Lunascape|Sleipnir|Maemo Browser) (\\d+)\\.(\\d+)\\.(\\d+)"
            }, {
                regex: "(iCab|Lunascape|Opera|Android|Jasmine|Polaris|BREW) (\\d+)\\.(\\d+)\\.?(\\d+)?"
            }, {
                regex: "(Android) Donut",
                v2_replacement: "2",
                v1_replacement: "1"
            }, {
                regex: "(Android) Eclair",
                v2_replacement: "1",
                v1_replacement: "2"
            }, {
                regex: "(Android) Froyo",
                v2_replacement: "2",
                v1_replacement: "2"
            }, {
                regex: "(Android) Gingerbread",
                v2_replacement: "3",
                v1_replacement: "2"
            }, {
                regex: "(Android) Honeycomb",
                v1_replacement: "3"
            }, {
                regex: "(IEMobile)[ /](\\d+)\\.(\\d+)",
                family_replacement: "IE Mobile"
            }, {
                regex: "(MSIE) (\\d+)\\.(\\d+).*XBLWP7",
                family_replacement: "IE Large Screen"
            }, {
                regex: "(Firefox)/(\\d+)\\.(\\d+)\\.(\\d+)"
            }, {
                regex: "(Firefox)/(\\d+)\\.(\\d+)(pre|[ab]\\d+[a-z]*)?"
            }, {
                regex: "(Obigo)InternetBrowser",
                other: !0
            }, {
                regex: "(Obigo)\\-Browser",
                other: !0
            }, {
                regex: "(Obigo|OBIGO)[^\\d]*(\\d+)(?:.(\\d+))?",
                other: !0
            }, {
                regex: "(MAXTHON|Maxthon) (\\d+)\\.(\\d+)",
                family_replacement: "Maxthon",
                other: !0
            }, {
                regex: "(Maxthon|MyIE2|Uzbl|Shiira)",
                v1_replacement: "0",
                other: !0
            }, {
                regex: "(PLAYSTATION) (\\d+)",
                family_replacement: "PlayStation",
                manufacturer: "Sony"
            }, {
                regex: "(PlayStation Portable)[^\\d]+(\\d+).(\\d+)",
                manufacturer: "Sony"
            }, {
                regex: "(BrowseX) \\((\\d+)\\.(\\d+)\\.(\\d+)",
                other: !0
            }, {
                regex: "(POLARIS)/(\\d+)\\.(\\d+)",
                family_replacement: "Polaris",
                other: !0
            }, {
                regex: "(Embider)/(\\d+)\\.(\\d+)",
                family_replacement: "Polaris",
                other: !0
            }, {
                regex: "(BonEcho)/(\\d+)\\.(\\d+)\\.(\\d+)",
                family_replacement: "Bon Echo",
                other: !0
            }, {
                regex: "(iPod).+Version/(\\d+)\\.(\\d+)\\.(\\d+)",
                family_replacement: "Mobile Safari",
                manufacturer: "Apple"
            }, {
                regex: "(iPod).*Version/(\\d+)\\.(\\d+)",
                family_replacement: "Mobile Safari",
                manufacturer: "Apple"
            }, {
                regex: "(iPod)",
                family_replacement: "Mobile Safari",
                manufacturer: "Apple"
            }, {
                regex: "(iPhone).*Version/(\\d+)\\.(\\d+)\\.(\\d+)",
                family_replacement: "Mobile Safari",
                manufacturer: "Apple"
            }, {
                regex: "(iPhone).*Version/(\\d+)\\.(\\d+)",
                family_replacement: "Mobile Safari",
                manufacturer: "Apple"
            }, {
                regex: "(iPhone)",
                family_replacement: "Mobile Safari",
                manufacturer: "Apple"
            }, {
                regex: "(iPad).*Version/(\\d+)\\.(\\d+)\\.(\\d+)",
                family_replacement: "Mobile Safari",
                tablet: !0,
                manufacturer: "Apple"
            }, {
                regex: "(iPad).*Version/(\\d+)\\.(\\d+)",
                family_replacement: "Mobile Safari",
                tablet: !0,
                manufacturer: "Apple"
            }, {
                regex: "(iPad)",
                family_replacement: "Mobile Safari",
                tablet: !0,
                manufacturer: "Apple"
            }, {
                regex: "(AvantGo) (\\d+).(\\d+)",
                other: !0
            }, {
                regex: "(Avant)",
                v1_replacement: "1",
                other: !0
            }, {
                regex: "^(Nokia)",
                family_replacement: "Nokia Services (WAP) Browser",
                manufacturer: "Nokia"
            }, {
                regex: "(NokiaBrowser)/(\\d+)\\.(\\d+).(\\d+)\\.(\\d+)",
                manufacturer: "Nokia"
            }, {
                regex: "(NokiaBrowser)/(\\d+)\\.(\\d+).(\\d+)",
                manufacturer: "Nokia"
            }, {
                regex: "(NokiaBrowser)/(\\d+)\\.(\\d+)",
                manufacturer: "Nokia"
            }, {
                regex: "(BrowserNG)/(\\d+)\\.(\\d+).(\\d+)",
                family_replacement: "NokiaBrowser",
                manufacturer: "Nokia"
            }, {
                regex: "(Series60)/5\\.0",
                v2_replacement: "0",
                v1_replacement: "7",
                family_replacement: "NokiaBrowser",
                manufacturer: "Nokia"
            }, {
                regex: "(Series60)/(\\d+)\\.(\\d+)",
                family_replacement: "Nokia OSS Browser",
                manufacturer: "Nokia"
            }, {
                regex: "(S40OviBrowser)/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+)",
                family_replacement: "Nokia Series 40 Ovi Browser",
                manufacturer: "Nokia"
            }, {
                regex: "(Nokia)[EN]?(\\d+)",
                manufacturer: "Nokia"
            }, {
                regex: "(PlayBook).+RIM Tablet OS (\\d+)\\.(\\d+)\\.(\\d+)",
                family_replacement: "Blackberry WebKit",
                tablet: !0,
                manufacturer: "Nokia"
            }, {
                regex: "(Black[bB]erry).+Version/(\\d+)\\.(\\d+)\\.(\\d+)",
                family_replacement: "Blackberry WebKit",
                manufacturer: "RIM"
            }, {
                regex: "(Black[bB]erry)\\s?(\\d+)",
                family_replacement: "Blackberry",
                manufacturer: "RIM"
            }, {
                regex: "(OmniWeb)/v(\\d+)\\.(\\d+)",
                other: !0
            }, {
                regex: "(Blazer)/(\\d+)\\.(\\d+)",
                family_replacement: "Palm Blazer",
                manufacturer: "Palm"
            }, {
                regex: "(Pre)/(\\d+)\\.(\\d+)",
                family_replacement: "Palm Pre",
                manufacturer: "Palm"
            }, {
                regex: "(Links) \\((\\d+)\\.(\\d+)",
                other: !0
            }, {
                regex: "(QtWeb) Internet Browser/(\\d+)\\.(\\d+)",
                other: !0
            }, {
                regex: "(Silk)/(\\d+)\\.(\\d+)(?:\\.([0-9\\-]+))?",
                other: !0,
                tablet: !0
            }, {
                regex: "(AppleWebKit)/(\\d+)\\.?(\\d+)?\\+ .* Version/\\d+\\.\\d+.\\d+ Safari/",
                family_replacement: "WebKit Nightly"
            }, {
                regex: "(Version)/(\\d+)\\.(\\d+)(?:\\.(\\d+))?.*Safari/",
                family_replacement: "Safari"
            }, {
                regex: "(Safari)/\\d+"
            }, {
                regex: "(OLPC)/Update(\\d+)\\.(\\d+)",
                other: !0
            }, {
                regex: "(OLPC)/Update()\\.(\\d+)",
                v1_replacement: "0",
                other: !0
            }, {
                regex: "(SEMC\\-Browser)/(\\d+)\\.(\\d+)",
                other: !0
            }, {
                regex: "(Teleca)",
                family_replacement: "Teleca Browser",
                other: !0
            }, {
                regex: "Trident(.*)rv.(\\d+)\\.(\\d+)",
                family_replacement: "IE"
            }, {
                regex: "(MSIE) (\\d+)\\.(\\d+)",
                family_replacement: "IE"
            }],
            os_parsers: [{
                regex: "(Android) (\\d+)\\.(\\d+)(?:[.\\-]([a-z0-9]+))?"
            }, {
                regex: "(Android)\\-(\\d+)\\.(\\d+)(?:[.\\-]([a-z0-9]+))?"
            }, {
                regex: "(Android) Donut",
                os_v2_replacement: "2",
                os_v1_replacement: "1"
            }, {
                regex: "(Android) Eclair",
                os_v2_replacement: "1",
                os_v1_replacement: "2"
            }, {
                regex: "(Android) Froyo",
                os_v2_replacement: "2",
                os_v1_replacement: "2"
            }, {
                regex: "(Android) Gingerbread",
                os_v2_replacement: "3",
                os_v1_replacement: "2"
            }, {
                regex: "(Android) Honeycomb",
                os_v1_replacement: "3"
            }, {
                regex: "(Silk-Accelerated=[a-z]{4,5})",
                os_replacement: "Android"
            }, {
                regex: "(Windows Phone 6\\.5)"
            }, {
                regex: "(Windows (?:NT 5\\.2|NT 5\\.1))",
                os_replacement: "Windows XP"
            }, {
                regex: "(XBLWP7)",
                os_replacement: "Windows Phone OS"
            }, {
                regex: "(Windows NT 6\\.1)",
                os_replacement: "Windows 7"
            }, {
                regex: "(Windows NT 6\\.0)",
                os_replacement: "Windows Vista"
            }, {
                regex: "(Windows 98|Windows XP|Windows ME|Windows 95|Windows CE|Windows 7|Windows NT 4\\.0|Windows Vista|Windows 2000)"
            }, {
                regex: "(Windows NT 6\\.2)",
                os_replacement: "Windows 8"
            }, {
                regex: "(Windows Phone 8)",
                os_replacement: "Windows Phone 8"
            }, {
                regex: "(Windows NT 5\\.0)",
                os_replacement: "Windows 2000"
            }, {
                regex: "(Windows Phone OS) (\\d+)\\.(\\d+)"
            }, {
                regex: "(Windows ?Mobile)",
                os_replacement: "Windows Mobile"
            }, {
                regex: "(WinNT4.0)",
                os_replacement: "Windows NT 4.0"
            }, {
                regex: "(Win98)",
                os_replacement: "Windows 98"
            }, {
                regex: "(Tizen)/(\\d+)\\.(\\d+)",
                other: !0
            }, {
                regex: "(Mac OS X) (\\d+)[_.](\\d+)(?:[_.](\\d+))?",
                manufacturer: "Apple"
            }, {
                regex: "(?:PPC|Intel) (Mac OS X)",
                manufacturer: "Apple"
            }, {
                regex: "(CPU OS|iPhone OS) (\\d+)_(\\d+)(?:_(\\d+))?",
                os_replacement: "iOS",
                manufacturer: "Apple"
            }, {
                regex: "(iPhone|iPad|iPod); Opera",
                os_replacement: "iOS",
                manufacturer: "Apple"
            }, {
                regex: "(iPad); Opera",
                tablet: !0,
                manufacturer: "Apple"
            }, {
                regex: "(iPhone|iPad|iPod).*Mac OS X.*Version/(\\d+)\\.(\\d+)",
                os_replacement: "iOS",
                manufacturer: "Apple"
            }, {
                regex: "(CrOS) [a-z0-9_]+ (\\d+)\\.(\\d+)(?:\\.(\\d+))?",
                os_replacement: "Chrome OS"
            }, {
                regex: "(Debian)-(\\d+)\\.(\\d+)\\.(\\d+)(?:\\.(\\d+))?",
                other: !0
            }, {
                regex: "(Linux Mint)(?:/(\\d+))?",
                other: !0
            }, {
                regex: "(Mandriva)(?: Linux)?/(\\d+)\\.(\\d+)\\.(\\d+)(?:\\.(\\d+))?",
                other: !0
            }, {
                regex: "(Symbian[Oo][Ss])/(\\d+)\\.(\\d+)",
                os_replacement: "Symbian OS"
            }, {
                regex: "(Symbian/3).+NokiaBrowser/7\\.3",
                os_replacement: "Symbian^3 Anna"
            }, {
                regex: "(Symbian/3).+NokiaBrowser/7\\.4",
                os_replacement: "Symbian^3 Belle"
            }, {
                regex: "(Symbian/3)",
                os_replacement: "Symbian^3"
            }, {
                regex: "(Series 60|SymbOS|S60)",
                os_replacement: "Symbian OS"
            }, {
                regex: "(MeeGo)",
                other: !0
            }, {
                regex: "Symbian [Oo][Ss]",
                os_replacement: "Symbian OS"
            }, {
                regex: "(Black[Bb]erry)[0-9a-z]+/(\\d+)\\.(\\d+)\\.(\\d+)(?:\\.(\\d+))?",
                os_replacement: "BlackBerry OS",
                manufacturer: "RIM"
            }, {
                regex: "(Black[Bb]erry).+Version/(\\d+)\\.(\\d+)\\.(\\d+)(?:\\.(\\d+))?",
                os_replacement: "BlackBerry OS",
                manufacturer: "RIM"
            }, {
                regex: "(RIM Tablet OS) (\\d+)\\.(\\d+)\\.(\\d+)",
                os_replacement: "BlackBerry Tablet OS",
                tablet: !0,
                manufacturer: "RIM"
            }, {
                regex: "(Play[Bb]ook)",
                os_replacement: "BlackBerry Tablet OS",
                tablet: !0,
                manufacturer: "RIM"
            }, {
                regex: "(Black[Bb]erry)",
                os_replacement: "Blackberry OS",
                manufacturer: "RIM"
            }, {
                regex: "(webOS|hpwOS)/(\\d+)\\.(\\d+)(?:\\.(\\d+))?",
                os_replacement: "webOS"
            }, {
                regex: "(SUSE|Fedora|Red Hat|PCLinuxOS)/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+)",
                other: !0
            }, {
                regex: "(SUSE|Fedora|Red Hat|Puppy|PCLinuxOS|CentOS)/(\\d+)\\.(\\d+)\\.(\\d+)",
                other: !0
            }, {
                regex: "(Ubuntu|Kindle|Bada|Lubuntu|BackTrack|Red Hat|Slackware)/(\\d+)\\.(\\d+)"
            }, {
                regex: "(Windows|OpenBSD|FreeBSD|NetBSD|Ubuntu|Kubuntu|Android|Arch Linux|CentOS|WeTab|Slackware)"
            }, {
                regex: "(Linux|BSD)",
                other: !0
            }],
            mobile_os_families: ["Windows Phone 6.5", "Windows CE", "Symbian OS"],
            device_parsers: [{
                regex: "HTC ([A-Z][a-z0-9]+) Build",
                device_replacement: "HTC $1",
                manufacturer: "HTC"
            }, {
                regex: "HTC ([A-Z][a-z0-9 ]+) \\d+\\.\\d+\\.\\d+\\.\\d+",
                device_replacement: "HTC $1",
                manufacturer: "HTC"
            }, {
                regex: "HTC_Touch_([A-Za-z0-9]+)",
                device_replacement: "HTC Touch ($1)",
                manufacturer: "HTC"
            }, {
                regex: "USCCHTC(\\d+)",
                device_replacement: "HTC $1 (US Cellular)",
                manufacturer: "HTC"
            }, {
                regex: "Sprint APA(9292)",
                device_replacement: "HTC $1 (Sprint)",
                manufacturer: "HTC"
            }, {
                regex: "HTC ([A-Za-z0-9]+ [A-Z])",
                device_replacement: "HTC $1",
                manufacturer: "HTC"
            }, {
                regex: "HTC-([A-Za-z0-9]+)",
                device_replacement: "HTC $1",
                manufacturer: "HTC"
            }, {
                regex: "HTC_([A-Za-z0-9]+)",
                device_replacement: "HTC $1",
                manufacturer: "HTC"
            }, {
                regex: "HTC ([A-Za-z0-9]+)",
                device_replacement: "HTC $1",
                manufacturer: "HTC"
            }, {
                regex: "(ADR[A-Za-z0-9]+)",
                device_replacement: "HTC $1",
                manufacturer: "HTC"
            }, {
                regex: "(HTC)",
                manufacturer: "HTC"
            }, {
                regex: "SonyEricsson([A-Za-z0-9]+)/",
                device_replacement: "Ericsson $1",
                other: !0,
                manufacturer: "Sony"
            }, {
                regex: "Android[\\- ][\\d]+\\.[\\d]+\\; [A-Za-z]{2}\\-[A-Za-z]{2}\\; WOWMobile (.+) Build"
            }, {
                regex: "Android[\\- ][\\d]+\\.[\\d]+\\.[\\d]+; [A-Za-z]{2}\\-[A-Za-z]{2}\\; (.+) Build"
            }, {
                regex: "Android[\\- ][\\d]+\\.[\\d]+\\-update1\\; [A-Za-z]{2}\\-[A-Za-z]{2}\\; (.+) Build"
            }, {
                regex: "Android[\\- ][\\d]+\\.[\\d]+\\; [A-Za-z]{2}\\-[A-Za-z]{2}\\; (.+) Build"
            }, {
                regex: "Android[\\- ][\\d]+\\.[\\d]+\\.[\\d]+; (.+) Build"
            }, {
                regex: "NokiaN([0-9]+)",
                device_replacement: "Nokia N$1",
                manufacturer: "Nokia"
            }, {
                regex: "Nokia([A-Za-z0-9\\v-]+)",
                device_replacement: "Nokia $1",
                manufacturer: "Nokia"
            }, {
                regex: "NOKIA ([A-Za-z0-9\\-]+)",
                device_replacement: "Nokia $1",
                manufacturer: "Nokia"
            }, {
                regex: "Nokia ([A-Za-z0-9\\-]+)",
                device_replacement: "Nokia $1",
                manufacturer: "Nokia"
            }, {
                regex: "Lumia ([A-Za-z0-9\\-]+)",
                device_replacement: "Lumia $1",
                manufacturer: "Nokia"
            }, {
                regex: "Symbian",
                device_replacement: "Nokia",
                manufacturer: "Nokia"
            }, {
                regex: "(PlayBook).+RIM Tablet OS",
                device_replacement: "Blackberry Playbook",
                tablet: !0,
                manufacturer: "RIM"
            }, {
                regex: "(Black[Bb]erry [0-9]+);",
                manufacturer: "RIM"
            }, {
                regex: "Black[Bb]erry([0-9]+)",
                device_replacement: "BlackBerry $1",
                manufacturer: "RIM"
            }, {
                regex: "(Pre)/(\\d+)\\.(\\d+)",
                device_replacement: "Palm Pre",
                manufacturer: "Palm"
            }, {
                regex: "(Pixi)/(\\d+)\\.(\\d+)",
                device_replacement: "Palm Pixi",
                manufacturer: "Palm"
            }, {
                regex: "(Touchpad)/(\\d+)\\.(\\d+)",
                device_replacement: "HP Touchpad",
                manufacturer: "HP"
            }, {
                regex: "HPiPAQ([A-Za-z0-9]+)/(\\d+).(\\d+)",
                device_replacement: "HP iPAQ $1",
                manufacturer: "HP"
            }, {
                regex: "Palm([A-Za-z0-9]+)",
                device_replacement: "Palm $1",
                manufacturer: "Palm"
            }, {
                regex: "Treo([A-Za-z0-9]+)",
                device_replacement: "Palm Treo $1",
                manufacturer: "Palm"
            }, {
                regex: "webOS.*(P160UNA)/(\\d+).(\\d+)",
                device_replacement: "HP Veer",
                manufacturer: "HP"
            }, {
                regex: "(Kindle Fire)",
                manufacturer: "Amazon"
            }, {
                regex: "(Kindle)",
                manufacturer: "Amazon"
            }, {
                regex: "(Silk)/(\\d+)\\.(\\d+)(?:\\.([0-9\\-]+))?",
                device_replacement: "Kindle Fire",
                tablet: !0,
                manufacturer: "Amazon"
            }, {
                regex: "(iPad) Simulator;",
                manufacturer: "Apple"
            }, {
                regex: "(iPad);",
                manufacturer: "Apple"
            }, {
                regex: "(iPod);",
                manufacturer: "Apple"
            }, {
                regex: "(iPhone) Simulator;",
                manufacturer: "Apple"
            }, {
                regex: "(iPhone);",
                manufacturer: "Apple"
            }, {
                regex: "Nexus\\ ([A-Za-z0-9\\-]+)",
                device_replacement: "Nexus $1"
            }, {
                regex: "acer_([A-Za-z0-9]+)_",
                device_replacement: "Acer $1",
                manufacturer: "Acer"
            }, {
                regex: "acer_([A-Za-z0-9]+)_",
                device_replacement: "Acer $1",
                manufacturer: "Acer"
            }, {
                regex: "Amoi\\-([A-Za-z0-9]+)",
                device_replacement: "Amoi $1",
                other: !0,
                manufacturer: "Amoi"
            }, {
                regex: "AMOI\\-([A-Za-z0-9]+)",
                device_replacement: "Amoi $1",
                other: !0,
                manufacturer: "Amoi"
            }, {
                regex: "Asus\\-([A-Za-z0-9]+)",
                device_replacement: "Asus $1",
                manufacturer: "Asus"
            }, {
                regex: "ASUS\\-([A-Za-z0-9]+)",
                device_replacement: "Asus $1",
                manufacturer: "Asus"
            }, {
                regex: "BIRD\\-([A-Za-z0-9]+)",
                device_replacement: "Bird $1",
                other: !0
            }, {
                regex: "BIRD\\.([A-Za-z0-9]+)",
                device_replacement: "Bird $1",
                other: !0
            }, {
                regex: "BIRD ([A-Za-z0-9]+)",
                device_replacement: "Bird $1",
                other: !0
            }, {
                regex: "Dell ([A-Za-z0-9]+)",
                device_replacement: "Dell $1",
                manufacturer: "Dell"
            }, {
                regex: "DoCoMo/2\\.0 ([A-Za-z0-9]+)",
                device_replacement: "DoCoMo $1",
                other: !0
            }, {
                regex: "([A-Za-z0-9]+)\\_W\\;FOMA",
                device_replacement: "DoCoMo $1",
                other: !0
            }, {
                regex: "([A-Za-z0-9]+)\\;FOMA",
                device_replacement: "DoCoMo $1",
                other: !0
            }, {
                regex: "vodafone([A-Za-z0-9]+)",
                device_replacement: "Huawei Vodafone $1",
                other: !0
            }, {
                regex: "i\\-mate ([A-Za-z0-9]+)",
                device_replacement: "i-mate $1",
                other: !0
            }, {
                regex: "Kyocera\\-([A-Za-z0-9]+)",
                device_replacement: "Kyocera $1",
                other: !0
            }, {
                regex: "KWC\\-([A-Za-z0-9]+)",
                device_replacement: "Kyocera $1",
                other: !0
            }, {
                regex: "Lenovo\\-([A-Za-z0-9]+)",
                device_replacement: "Lenovo $1",
                manufacturer: "Lenovo"
            }, {
                regex: "Lenovo\\_([A-Za-z0-9]+)",
                device_replacement: "Lenovo $1",
                manufacturer: "Levovo"
            }, {
                regex: "LG/([A-Za-z0-9]+)",
                device_replacement: "LG $1",
                manufacturer: "LG"
            }, {
                regex: "LG-LG([A-Za-z0-9]+)",
                device_replacement: "LG $1",
                manufacturer: "LG"
            }, {
                regex: "LGE-LG([A-Za-z0-9]+)",
                device_replacement: "LG $1",
                manufacturer: "LG"
            }, {
                regex: "LGE VX([A-Za-z0-9]+)",
                device_replacement: "LG $1",
                manufacturer: "LG"
            }, {
                regex: "LG ([A-Za-z0-9]+)",
                device_replacement: "LG $1",
                manufacturer: "LG"
            }, {
                regex: "LGE LG\\-AX([A-Za-z0-9]+)",
                device_replacement: "LG $1",
                manufacturer: "LG"
            }, {
                regex: "LG\\-([A-Za-z0-9]+)",
                device_replacement: "LG $1",
                manufacturer: "LG"
            }, {
                regex: "LGE\\-([A-Za-z0-9]+)",
                device_replacement: "LG $1",
                manufacturer: "LG"
            }, {
                regex: "LG([A-Za-z0-9]+)",
                device_replacement: "LG $1",
                manufacturer: "LG"
            }, {
                regex: "(KIN)\\.One (\\d+)\\.(\\d+)",
                device_replacement: "Microsoft $1"
            }, {
                regex: "(KIN)\\.Two (\\d+)\\.(\\d+)",
                device_replacement: "Microsoft $1"
            }, {
                regex: "(Motorola)\\-([A-Za-z0-9]+)",
                manufacturer: "Motorola"
            }, {
                regex: "MOTO\\-([A-Za-z0-9]+)",
                device_replacement: "Motorola $1",
                manufacturer: "Motorola"
            }, {
                regex: "MOT\\-([A-Za-z0-9]+)",
                device_replacement: "Motorola $1",
                manufacturer: "Motorola"
            }, {
                regex: "Philips([A-Za-z0-9]+)",
                device_replacement: "Philips $1",
                manufacturer: "Philips"
            }, {
                regex: "Philips ([A-Za-z0-9]+)",
                device_replacement: "Philips $1",
                manufacturer: "Philips"
            }, {
                regex: "SAMSUNG-([A-Za-z0-9\\-]+)",
                device_replacement: "Samsung $1",
                manufacturer: "Samsung"
            }, {
                regex: "SAMSUNG\\; ([A-Za-z0-9\\-]+)",
                device_replacement: "Samsung $1",
                manufacturer: "Samsung"
            }, {
                regex: "Softbank/1\\.0/([A-Za-z0-9]+)",
                device_replacement: "Softbank $1",
                other: !0
            }, {
                regex: "Softbank/2\\.0/([A-Za-z0-9]+)",
                device_replacement: "Softbank $1",
                other: !0
            }, {
                regex: "(hiptop|avantgo|plucker|xiino|blazer|elaine|up.browser|up.link|mmp|smartphone|midp|wap|vodafone|o2|pocket|mobile|pda)",
                device_replacement: "Generic Smartphone"
            }, {
                regex: "^(1207|3gso|4thp|501i|502i|503i|504i|505i|506i|6310|6590|770s|802s|a wa|acer|acs\\-|airn|alav|asus|attw|au\\-m|aur |aus |abac|acoo|aiko|alco|alca|amoi|anex|anny|anyw|aptu|arch|argo|bell|bird|bw\\-n|bw\\-u|beck|benq|bilb|blac|c55/|cdm\\-|chtm|capi|comp|cond|craw|dall|dbte|dc\\-s|dica|ds\\-d|ds12|dait|devi|dmob|doco|dopo|el49|erk0|esl8|ez40|ez60|ez70|ezos|ezze|elai|emul|eric|ezwa|fake|fly\\-|fly\\_|g\\-mo|g1 u|g560|gf\\-5|grun|gene|go.w|good|grad|hcit|hd\\-m|hd\\-p|hd\\-t|hei\\-|hp i|hpip|hs\\-c|htc |htc\\-|htca|htcg)",
                device_replacement: "Generic Feature Phone"
            }, {
                regex: "^(htcp|htcs|htct|htc\\_|haie|hita|huaw|hutc|i\\-20|i\\-go|i\\-ma|i230|iac|iac\\-|iac/|ig01|im1k|inno|iris|jata|java|kddi|kgt|kgt/|kpt |kwc\\-|klon|lexi|lg g|lg\\-a|lg\\-b|lg\\-c|lg\\-d|lg\\-f|lg\\-g|lg\\-k|lg\\-l|lg\\-m|lg\\-o|lg\\-p|lg\\-s|lg\\-t|lg\\-u|lg\\-w|lg/k|lg/l|lg/u|lg50|lg54|lge\\-|lge/|lynx|leno|m1\\-w|m3ga|m50/|maui|mc01|mc21|mcca|medi|meri|mio8|mioa|mo01|mo02|mode|modo|mot |mot\\-|mt50|mtp1|mtv |mate|maxo|merc|mits|mobi|motv|mozz|n100|n101|n102|n202|n203|n300|n302|n500|n502|n505|n700|n701|n710|nec\\-|nem\\-|newg|neon)",
                device_replacement: "Generic Feature Phone"
            }, {
                regex: "^(netf|noki|nzph|o2 x|o2\\-x|opwv|owg1|opti|oran|ot\\-s|p800|pand|pg\\-1|pg\\-2|pg\\-3|pg\\-6|pg\\-8|pg\\-c|pg13|phil|pn\\-2|pt\\-g|palm|pana|pire|pock|pose|psio|qa\\-a|qc\\-2|qc\\-3|qc\\-5|qc\\-7|qc07|qc12|qc21|qc32|qc60|qci\\-|qwap|qtek|r380|r600|raks|rim9|rove|s55/|sage|sams|sc01|sch\\-|scp\\-|sdk/|se47|sec\\-|sec0|sec1|semc|sgh\\-|shar|sie\\-|sk\\-0|sl45|slid|smb3|smt5|sp01|sph\\-|spv |spv\\-|sy01|samm|sany|sava|scoo|send|siem|smar|smit|soft|sony|t\\-mo|t218|t250|t600|t610|t618|tcl\\-|tdg\\-|telm|tim\\-|ts70|tsm\\-|tsm3|tsm5|tx\\-9|tagt)",
                device_replacement: "Generic Feature Phone"
            }, {
                regex: "^(talk|teli|topl|tosh|up.b|upg1|utst|v400|v750|veri|vk\\-v|vk40|vk50|vk52|vk53|vm40|vx98|virg|vite|voda|vulc|w3c |w3c\\-|wapj|wapp|wapu|wapm|wig |wapi|wapr|wapv|wapy|wapa|waps|wapt|winc|winw|wonu|x700|xda2|xdag|yas\\-|your|zte\\-|zeto|aste|audi|avan|blaz|brew|brvw|bumb|ccwa|cell|cldc|cmd\\-|dang|eml2|fetc|hipt|http|ibro|idea|ikom|ipaq|jbro|jemu|jigs|keji|kyoc|kyok|libw|m\\-cr|midp|mmef|moto|mwbp|mywa|newt|nok6|o2im|pant|pdxg|play|pluc|port|prox|rozo|sama|seri|smal|symb|treo|upsi|vx52|vx53|vx60|vx61|vx70|vx80|vx81|vx83|vx85|wap\\-|webc|whit|wmlb|xda\\-|xda\\_)",
                device_replacement: "Generic Feature Phone"
            }, {
                regex: "(bot|borg|google(^tv)|yahoo|slurp|msnbot|msrbot|openbot|archiver|netresearch|lycos|scooter|altavista|teoma|gigabot|baiduspider|blitzbot|oegp|charlotte|furlbot|http%20client|polybot|htdig|ichiro|mogimogi|larbin|pompos|scrubby|searchsight|seekbot|semanticdiscovery|silk|snappy|speedy|spider|voila|vortex|voyager|zao|zeal|fast\\-webcrawler|converacrawler|dataparksearch|findlinks)",
                device_replacement: "Spider"
            }],
            mobile_browser_families: ["Firefox Mobile", "Opera Mobile", "Opera Mini", "Mobile Safari", "webOS", "IE Mobile", "Playstation Portable", "Nokia", "Blackberry", "Palm", "Silk", "Android", "Maemo", "Obigo", "Netfront", "AvantGo", "Teleca", "SEMC-Browser", "Bolt", "Iris", "UP.Browser", "Symphony", "Minimo", "Bunjaloo", "Jasmine", "Dolfin", "Polaris", "BREW", "Chrome Mobile", "Chrome Mobile iOS", "UC Browser", "Tizen Browser"]
        };
        e.parsers = ["device_parsers", "browser_parsers", "os_parsers", "mobile_os_families", "mobile_browser_families"],
            e.types = ["browser", "os", "device"],
            e.regexes = r || function() {
                var r = {};
                return e.parsers.map(function(e) {
                    r[e] = []
                }),
                    r
            }(),
            e.families = function() {
                var r = {};
                return e.types.map(function(e) {
                    r[e] = []
                }),
                    r
            }();
        var a = Array.prototype
            , o = (Object.prototype,
            Function.prototype,
            a.forEach);
        a.indexOf;
        var i = function(e, r) {
            for (var a = {}, o = 0; r.length > o && !(a = r[o](e)); o++)
                ;
            return a
        }
            , n = function(e, r) {
            t(e, function(e) {
                t(r, function(r) {
                    delete e[r]
                })
            })
        }
            , t = forEach = function(e, r, a) {
            if (null != e)
                if (o && e.forEach === o)
                    e.forEach(r, a);
                else if (e.length === +e.length)
                    for (var i = 0, n = e.length; n > i; i++)
                        r.call(a, e[i], i, e);
                else
                    for (var t in e)
                        _.has(e, t) && r.call(a, e[t], t, e)
        }
            , l = function(e) {
            return !(!e || void 0 === e || null == e)
        }
            , c = function(e) {
            var r = "";
            return e = e || {},
            l(e) && l(e.major) && (r += e.major,
            l(e.minor) && (r += "." + e.minor,
            l(e.patch) && (r += "." + e.patch))),
                r
        }
            , d = function(e) {
            e = e || {};
            var r = c(e);
            return r && (r = " " + r),
                e && l(e.family) ? e.family + r : ""
        };
        return e.parse = function(r) {
            var a = function(r) {
                return e.regexes[r + "_parsers"].map(function(e) {
                    function a(r) {
                        var a = r.match(o);
                        if (!a)
                            return null;
                        var t = {};
                        return t.family = (i ? i.replace("$1", a[1]) : a[1]) || "other",
                            t.major = parseInt(n ? n : a[2]) || null,
                            t.minor = a[3] ? parseInt(a[3]) : null,
                            t.patch = a[4] ? parseInt(a[4]) : null,
                            t.tablet = e.tablet,
                            t.man = e.manufacturer || null,
                            t
                    }
                    var o = RegExp(e.regex)
                        , i = e[("browser" === r ? "family" : r) + "_replacement"]
                        , n = e.major_version_replacement;
                    return a
                })
            }
                , o = function() {}
                , t = a("browser")
                , m = a("os")
                , p = a("device")
                , s = new o;
            s.source = r,
                s.browser = i(r, t),
                l(s.browser) ? (s.browser.name = d(s.browser),
                    s.browser.version = c(s.browser)) : s.browser = {},
                s.os = i(r, m),
                l(s.os) ? (s.os.name = d(s.os),
                    s.os.version = c(s.os)) : s.os = {},
                s.device = i(r, p),
                l(s.device) ? (s.device.name = d(s.device),
                    s.device.version = c(s.device)) : s.device = {
                    tablet: !1,
                    family: "Other"
                };
            var g = {};
            return e.regexes.mobile_browser_families.map(function(e) {
                g[e] = !0
            }),
                e.regexes.mobile_os_families.map(function(e) {
                    g[e] = !0
                }),
                s.device.type = "Spider" === s.browser.family ? "Spider" : s.browser.tablet || s.os.tablet || s.device.tablet ? "Tablet" : g.hasOwnProperty(s.browser.family) ? "Mobile" : "Desktop",
                s.device.manufacturer = s.browser.man || s.os.man || s.device.man || null,
                n([s.browser, s.os, s.device], ["tablet", "man"]),
                s
        }
            ,
            e
    }();
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = r),
        exports.detect = r) : e.detect = r,
    "function" == typeof define && define.amd && define(function() {
        return r
    })
}(window);
(function() {
        var t = this
            , e = e || {};
        return e.game = null,
            e.WEBGL_RENDERER = 0,
            e.CANVAS_RENDERER = 1,
            e.VERSION = "v2.2.9",
            e._UID = 0,
            "undefined" != typeof Float32Array ? (e.Float32Array = Float32Array,
                e.Uint16Array = Uint16Array,
                e.Uint32Array = Uint32Array,
                e.ArrayBuffer = ArrayBuffer) : (e.Float32Array = Array,
                e.Uint16Array = Array),
            e.PI_2 = 2 * Math.PI,
            e.RAD_TO_DEG = 180 / Math.PI,
            e.DEG_TO_RAD = Math.PI / 180,
            e.RETINA_PREFIX = "@2x",
            e.DisplayObject = function() {
                this.position = new e.Point(0,0),
                    this.scale = new e.Point(1,1),
                    this.pivot = new e.Point(0,0),
                    this.rotation = 0,
                    this.alpha = 1,
                    this.visible = !0,
                    this.hitArea = null,
                    this.renderable = !1,
                    this.parent = null,
                    this.stage = null,
                    this.worldAlpha = 1,
                    this.worldTransform = new e.Matrix,
                    this.worldPosition = new e.Point(0,0),
                    this.worldScale = new e.Point(1,1),
                    this.worldRotation = 0,
                    this._sr = 0,
                    this._cr = 1,
                    this.filterArea = null,
                    this._bounds = new e.Rectangle(0,0,1,1),
                    this._currentBounds = null,
                    this._mask = null,
                    this._cacheAsBitmap = !1,
                    this._cacheIsDirty = !1
            }
            ,
            e.DisplayObject.prototype.constructor = e.DisplayObject,
            e.DisplayObject.prototype.destroy = function() {
                if (this.children) {
                    for (var t = this.children.length; t--; )
                        this.children[t].destroy();
                    this.children = []
                }
                this.hitArea = null,
                    this.parent = null,
                    this.stage = null,
                    this.worldTransform = null,
                    this.filterArea = null,
                    this._bounds = null,
                    this._currentBounds = null,
                    this._mask = null,
                    this.renderable = !1,
                    this._destroyCachedSprite()
            }
            ,
            Object.defineProperty(e.DisplayObject.prototype, "worldVisible", {
                get: function() {
                    var t = this;
                    do {
                        if (!t.visible)
                            return !1;
                        t = t.parent
                    } while (t);return !0
                }
            }),
            Object.defineProperty(e.DisplayObject.prototype, "mask", {
                get: function() {
                    return this._mask
                },
                set: function(t) {
                    this._mask && (this._mask.isMask = !1),
                        this._mask = t,
                    this._mask && (this._mask.isMask = !0)
                }
            }),
            Object.defineProperty(e.DisplayObject.prototype, "filters", {
                get: function() {
                    return this._filters
                },
                set: function(t) {
                    if (t) {
                        for (var i = [], s = 0; s < t.length; s++)
                            for (var n = t[s].passes, r = 0; r < n.length; r++)
                                i.push(n[r]);
                        this._filterBlock = {
                            target: this,
                            filterPasses: i
                        }
                    }
                    this._filters = t,
                    this.blendMode && this.blendMode === e.blendModes.MULTIPLY && (this.blendMode = e.blendModes.NORMAL)
                }
            }),
            Object.defineProperty(e.DisplayObject.prototype, "cacheAsBitmap", {
                get: function() {
                    return this._cacheAsBitmap
                },
                set: function(t) {
                    this._cacheAsBitmap !== t && (t ? this._generateCachedSprite() : this._destroyCachedSprite(),
                        this._cacheAsBitmap = t)
                }
            }),
            e.DisplayObject.prototype.updateTransform = function(t) {
                if (t || this.parent || this.game) {
                    var i = this.parent;
                    t ? i = t : this.parent || (i = this.game.world);
                    var s, n, r, o, a, h, l = i.worldTransform, u = this.worldTransform;
                    this.rotation % e.PI_2 ? (this.rotation !== this.rotationCache && (this.rotationCache = this.rotation,
                        this._sr = Math.sin(this.rotation),
                        this._cr = Math.cos(this.rotation)),
                        s = this._cr * this.scale.x,
                        n = this._sr * this.scale.x,
                        r = -this._sr * this.scale.y,
                        o = this._cr * this.scale.y,
                        a = this.position.x,
                        h = this.position.y,
                    (this.pivot.x || this.pivot.y) && (a -= this.pivot.x * s + this.pivot.y * r,
                        h -= this.pivot.x * n + this.pivot.y * o),
                        u.a = s * l.a + n * l.c,
                        u.b = s * l.b + n * l.d,
                        u.c = r * l.a + o * l.c,
                        u.d = r * l.b + o * l.d,
                        u.tx = a * l.a + h * l.c + l.tx,
                        u.ty = a * l.b + h * l.d + l.ty) : (s = this.scale.x,
                        o = this.scale.y,
                        a = this.position.x - this.pivot.x * s,
                        h = this.position.y - this.pivot.y * o,
                        u.a = s * l.a,
                        u.b = s * l.b,
                        u.c = o * l.c,
                        u.d = o * l.d,
                        u.tx = a * l.a + h * l.c + l.tx,
                        u.ty = a * l.b + h * l.d + l.ty),
                        this.worldAlpha = this.alpha * i.worldAlpha,
                        this.worldPosition.set(u.tx, u.ty),
                        this.worldScale.set(Math.sqrt(u.a * u.a + u.b * u.b), Math.sqrt(u.c * u.c + u.d * u.d)),
                        this.worldRotation = Math.atan2(-u.c, u.d),
                        this._currentBounds = null,
                    this.transformCallback && this.transformCallback.call(this.transformCallbackContext, u, l)
                }
            }
            ,
            e.DisplayObject.prototype.displayObjectUpdateTransform = e.DisplayObject.prototype.updateTransform,
            e.DisplayObject.prototype.getBounds = function(t) {
                return t = t,
                    e.EmptyRectangle
            }
            ,
            e.DisplayObject.prototype.getLocalBounds = function() {
                return this.getBounds(e.identityMatrix)
            }
            ,
            e.DisplayObject.prototype.setStageReference = function(t) {
                this.stage = t
            }
            ,
            e.DisplayObject.prototype.preUpdate = function() {}
            ,
            e.DisplayObject.prototype.generateTexture = function(t, i, s) {
                var n = this.getLocalBounds()
                    , r = new e.RenderTexture(0 | n.width,0 | n.height,s,i,t);
                return e.DisplayObject._tempMatrix.tx = -n.x,
                    e.DisplayObject._tempMatrix.ty = -n.y,
                    r.render(this, e.DisplayObject._tempMatrix),
                    r
            }
            ,
            e.DisplayObject.prototype.updateCache = function() {
                this._generateCachedSprite()
            }
            ,
            e.DisplayObject.prototype.toGlobal = function(t) {
                return this.displayObjectUpdateTransform(),
                    this.worldTransform.apply(t)
            }
            ,
            e.DisplayObject.prototype.toLocal = function(t, e) {
                return e && (t = e.toGlobal(t)),
                    this.displayObjectUpdateTransform(),
                    this.worldTransform.applyInverse(t)
            }
            ,
            e.DisplayObject.prototype._renderCachedSprite = function(t) {
                this._cachedSprite.worldAlpha = this.worldAlpha,
                    t.gl ? e.Sprite.prototype._renderWebGL.call(this._cachedSprite, t) : e.Sprite.prototype._renderCanvas.call(this._cachedSprite, t)
            }
            ,
            e.DisplayObject.prototype._generateCachedSprite = function() {
                this._cacheAsBitmap = !1;
                var t = this.getLocalBounds();
                if (this.updateTransform(),
                    this._cachedSprite)
                    this._cachedSprite.texture.resize(1 | t.width, 1 | t.height);
                else {
                    var i = new e.RenderTexture(1 | t.width,1 | t.height);
                    this._cachedSprite = new e.Sprite(i),
                        this._cachedSprite.worldTransform = this.worldTransform
                }
                var s = this._filters;
                this._filters = null,
                    this._cachedSprite.filters = s,
                    e.DisplayObject._tempMatrix.tx = -t.x,
                    e.DisplayObject._tempMatrix.ty = -t.y,
                    this._cachedSprite.texture.render(this, e.DisplayObject._tempMatrix, !0),
                    this._cachedSprite.anchor.x = -(t.x / t.width),
                    this._cachedSprite.anchor.y = -(t.y / t.height),
                    this._filters = s,
                    this._cacheAsBitmap = !0
            }
            ,
            e.DisplayObject.prototype._destroyCachedSprite = function() {
                this._cachedSprite && (this._cachedSprite.texture.destroy(!0),
                    this._cachedSprite = null)
            }
            ,
            e.DisplayObject.prototype._renderWebGL = function(t) {
                t = t
            }
            ,
            e.DisplayObject.prototype._renderCanvas = function(t) {
                t = t
            }
            ,
            Object.defineProperty(e.DisplayObject.prototype, "x", {
                get: function() {
                    return this.position.x
                },
                set: function(t) {
                    this.position.x = t
                }
            }),
            Object.defineProperty(e.DisplayObject.prototype, "y", {
                get: function() {
                    return this.position.y
                },
                set: function(t) {
                    this.position.y = t
                }
            }),
            e.DisplayObjectContainer = function() {
                e.DisplayObject.call(this),
                    this.children = []
            }
            ,
            e.DisplayObjectContainer.prototype = Object.create(e.DisplayObject.prototype),
            e.DisplayObjectContainer.prototype.constructor = e.DisplayObjectContainer,
            Object.defineProperty(e.DisplayObjectContainer.prototype, "width", {
                get: function() {
                    return this.scale.x * this.getLocalBounds().width
                },
                set: function(t) {
                    var e = this.getLocalBounds().width;
                    0 !== e ? this.scale.x = t / e : this.scale.x = 1,
                        this._width = t
                }
            }),
            Object.defineProperty(e.DisplayObjectContainer.prototype, "height", {
                get: function() {
                    return this.scale.y * this.getLocalBounds().height
                },
                set: function(t) {
                    var e = this.getLocalBounds().height;
                    0 !== e ? this.scale.y = t / e : this.scale.y = 1,
                        this._height = t
                }
            }),
            e.DisplayObjectContainer.prototype.addChild = function(t) {
                return this.addChildAt(t, this.children.length)
            }
            ,
            e.DisplayObjectContainer.prototype.addChildAt = function(t, e) {
                if (e >= 0 && e <= this.children.length)
                    return t.parent && t.parent.removeChild(t),
                        t.parent = this,
                        this.children.splice(e, 0, t),
                    this.stage && t.setStageReference(this.stage),
                        t;
                throw new Error(t + "addChildAt: The index " + e + " supplied is out of bounds " + this.children.length)
            }
            ,
            e.DisplayObjectContainer.prototype.swapChildren = function(t, e) {
                if (t !== e) {
                    var i = this.getChildIndex(t)
                        , s = this.getChildIndex(e);
                    if (0 > i || 0 > s)
                        throw new Error("swapChildren: Both the supplied DisplayObjects must be a child of the caller.");
                    this.children[i] = e,
                        this.children[s] = t
                }
            }
            ,
            e.DisplayObjectContainer.prototype.getChildIndex = function(t) {
                var e = this.children.indexOf(t);
                if (-1 === e)
                    throw new Error("The supplied DisplayObject must be a child of the caller");
                return e
            }
            ,
            e.DisplayObjectContainer.prototype.setChildIndex = function(t, e) {
                if (0 > e || e >= this.children.length)
                    throw new Error("The supplied index is out of bounds");
                var i = this.getChildIndex(t);
                this.children.splice(i, 1),
                    this.children.splice(e, 0, t)
            }
            ,
            e.DisplayObjectContainer.prototype.getChildAt = function(t) {
                if (0 > t || t >= this.children.length)
                    throw new Error("getChildAt: Supplied index " + t + " does not exist in the child list, or the supplied DisplayObject must be a child of the caller");
                return this.children[t]
            }
            ,
            e.DisplayObjectContainer.prototype.removeChild = function(t) {
                var e = this.children.indexOf(t);
                if (-1 !== e)
                    return this.removeChildAt(e)
            }
            ,
            e.DisplayObjectContainer.prototype.removeChildAt = function(t) {
                var e = this.getChildAt(t);
                return this.stage && e.removeStageReference(),
                    e.parent = void 0,
                    this.children.splice(t, 1),
                    e
            }
            ,
            e.DisplayObjectContainer.prototype.removeChildren = function(t, e) {
                var i = t || 0
                    , s = "number" == typeof e ? e : this.children.length
                    , n = s - i;
                if (n > 0 && s >= n) {
                    for (var r = this.children.splice(i, n), o = 0; o < r.length; o++) {
                        var a = r[o];
                        this.stage && a.removeStageReference(),
                            a.parent = void 0
                    }
                    return r
                }
                if (0 === n && 0 === this.children.length)
                    return [];
                throw new Error("removeChildren: Range Error, numeric values are outside the acceptable range")
            }
            ,
            e.DisplayObjectContainer.prototype.updateTransform = function() {
                if (this.visible && (this.displayObjectUpdateTransform(),
                    !this._cacheAsBitmap))
                    for (var t = 0; t < this.children.length; t++)
                        this.children[t].updateTransform()
            }
            ,
            e.DisplayObjectContainer.prototype.displayObjectContainerUpdateTransform = e.DisplayObjectContainer.prototype.updateTransform,
            e.DisplayObjectContainer.prototype.getBounds = function() {
                if (0 === this.children.length)
                    return e.EmptyRectangle;
                for (var t, i, s, n = 1 / 0, r = 1 / 0, o = -(1 / 0), a = -(1 / 0), h = !1, l = 0, u = this.children.length; u > l; l++) {
                    var c = this.children[l];
                    c.visible && (h = !0,
                        t = this.children[l].getBounds(),
                        n = n < t.x ? n : t.x,
                        r = r < t.y ? r : t.y,
                        i = t.width + t.x,
                        s = t.height + t.y,
                        o = o > i ? o : i,
                        a = a > s ? a : s)
                }
                if (!h)
                    return e.EmptyRectangle;
                var d = this._bounds;
                return d.x = n,
                    d.y = r,
                    d.width = o - n,
                    d.height = a - r,
                    d
            }
            ,
            e.DisplayObjectContainer.prototype.getLocalBounds = function() {
                var t = this.worldTransform;
                this.worldTransform = e.identityMatrix;
                for (var i = 0, s = this.children.length; s > i; i++)
                    this.children[i].updateTransform();
                var n = this.getBounds();
                return this.worldTransform = t,
                    n
            }
            ,
            e.DisplayObjectContainer.prototype.setStageReference = function(t) {
                this.stage = t;
                for (var e = 0; e < this.children.length; e++)
                    this.children[e].setStageReference(t)
            }
            ,
            e.DisplayObjectContainer.prototype.removeStageReference = function() {
                for (var t = 0; t < this.children.length; t++)
                    this.children[t].removeStageReference();
                this.stage = null
            }
            ,
            e.DisplayObjectContainer.prototype._renderWebGL = function(t) {
                if (this.visible && !(this.alpha <= 0)) {
                    if (this._cacheAsBitmap)
                        return void this._renderCachedSprite(t);
                    var e;
                    if (this._mask || this._filters) {
                        for (this._filters && (t.spriteBatch.flush(),
                            t.filterManager.pushFilter(this._filterBlock)),
                             this._mask && (t.spriteBatch.stop(),
                                 t.maskManager.pushMask(this.mask, t),
                                 t.spriteBatch.start()),
                                 e = 0; e < this.children.length; e++)
                            this.children[e]._renderWebGL(t);
                        t.spriteBatch.stop(),
                        this._mask && t.maskManager.popMask(this._mask, t),
                        this._filters && t.filterManager.popFilter(),
                            t.spriteBatch.start()
                    } else
                        for (e = 0; e < this.children.length; e++)
                            this.children[e]._renderWebGL(t)
                }
            }
            ,
            e.DisplayObjectContainer.prototype._renderCanvas = function(t) {
                if (this.visible !== !1 && 0 !== this.alpha) {
                    if (this._cacheAsBitmap)
                        return void this._renderCachedSprite(t);
                    this._mask && t.maskManager.pushMask(this._mask, t);
                    for (var e = 0; e < this.children.length; e++)
                        this.children[e]._renderCanvas(t);
                    this._mask && t.maskManager.popMask(t)
                }
            }
            ,
            e.Sprite = function(t) {
                e.DisplayObjectContainer.call(this),
                    this.anchor = new e.Point,
                    this.texture = t || e.Texture.emptyTexture,
                    this._width = 0,
                    this._height = 0,
                    this.tint = 16777215,
                    this.cachedTint = -1,
                    this.tintedTexture = null,
                    this.blendMode = e.blendModes.NORMAL,
                    this.shader = null,
                this.texture.baseTexture.hasLoaded && this.onTextureUpdate(),
                    this.renderable = !0
            }
            ,
            e.Sprite.prototype = Object.create(e.DisplayObjectContainer.prototype),
            e.Sprite.prototype.constructor = e.Sprite,
            Object.defineProperty(e.Sprite.prototype, "width", {
                get: function() {
                    return this.scale.x * this.texture.frame.width
                },
                set: function(t) {
                    this.scale.x = t / this.texture.frame.width,
                        this._width = t
                }
            }),
            Object.defineProperty(e.Sprite.prototype, "height", {
                get: function() {
                    return this.scale.y * this.texture.frame.height
                },
                set: function(t) {
                    this.scale.y = t / this.texture.frame.height,
                        this._height = t
                }
            }),
            e.Sprite.prototype.setTexture = function(t, e) {
                void 0 !== e && this.texture.baseTexture.destroy(),
                    this.texture = t,
                    this.texture.valid = !0
            }
            ,
            e.Sprite.prototype.onTextureUpdate = function() {
                this._width && (this.scale.x = this._width / this.texture.frame.width),
                this._height && (this.scale.y = this._height / this.texture.frame.height)
            }
            ,
            e.Sprite.prototype.getBounds = function(t) {
                var e = this.texture.frame.width
                    , i = this.texture.frame.height
                    , s = e * (1 - this.anchor.x)
                    , n = e * -this.anchor.x
                    , r = i * (1 - this.anchor.y)
                    , o = i * -this.anchor.y
                    , a = t || this.worldTransform
                    , h = a.a
                    , l = a.b
                    , u = a.c
                    , c = a.d
                    , d = a.tx
                    , p = a.ty
                    , f = -(1 / 0)
                    , m = -(1 / 0)
                    , g = 1 / 0
                    , y = 1 / 0;
                if (0 === l && 0 === u) {
                    if (0 > h) {
                        h *= -1;
                        var v = s;
                        s = -n,
                            n = -v
                    }
                    if (0 > c) {
                        c *= -1;
                        var v = r;
                        r = -o,
                            o = -v
                    }
                    g = h * n + d,
                        f = h * s + d,
                        y = c * o + p,
                        m = c * r + p
                } else {
                    var x = h * n + u * o + d
                        , _ = c * o + l * n + p
                        , b = h * s + u * o + d
                        , w = c * o + l * s + p
                        , T = h * s + u * r + d
                        , S = c * r + l * s + p
                        , C = h * n + u * r + d
                        , P = c * r + l * n + p;
                    g = g > x ? x : g,
                        g = g > b ? b : g,
                        g = g > T ? T : g,
                        g = g > C ? C : g,
                        y = y > _ ? _ : y,
                        y = y > w ? w : y,
                        y = y > S ? S : y,
                        y = y > P ? P : y,
                        f = x > f ? x : f,
                        f = b > f ? b : f,
                        f = T > f ? T : f,
                        f = C > f ? C : f,
                        m = _ > m ? _ : m,
                        m = w > m ? w : m,
                        m = S > m ? S : m,
                        m = P > m ? P : m
                }
                var A = this._bounds;
                return A.x = g,
                    A.width = f - g,
                    A.y = y,
                    A.height = m - y,
                    this._currentBounds = A,
                    A
            }
            ,
            e.Sprite.prototype._renderWebGL = function(t, e) {
                if (this.visible && !(this.alpha <= 0) && this.renderable) {
                    var i = this.worldTransform;
                    if (e && (i = e),
                    this._mask || this._filters) {
                        var s = t.spriteBatch;
                        this._filters && (s.flush(),
                            t.filterManager.pushFilter(this._filterBlock)),
                        this._mask && (s.stop(),
                            t.maskManager.pushMask(this.mask, t),
                            s.start()),
                            s.render(this);
                        for (var n = 0; n < this.children.length; n++)
                            this.children[n]._renderWebGL(t);
                        s.stop(),
                        this._mask && t.maskManager.popMask(this._mask, t),
                        this._filters && t.filterManager.popFilter(),
                            s.start()
                    } else {
                        t.spriteBatch.render(this);
                        for (var n = 0; n < this.children.length; n++)
                            this.children[n]._renderWebGL(t, i)
                    }
                }
            }
            ,
            e.Sprite.prototype._renderCanvas = function(t, i) {
                if (!(!this.visible || 0 === this.alpha || !this.renderable || this.texture.crop.width <= 0 || this.texture.crop.height <= 0)) {
                    var s = this.worldTransform;
                    if (i && (s = i),
                    this.blendMode !== t.currentBlendMode && (t.currentBlendMode = this.blendMode,
                        t.context.globalCompositeOperation = e.blendModesCanvas[t.currentBlendMode]),
                    this._mask && t.maskManager.pushMask(this._mask, t),
                        this.texture.valid) {
                        var n = this.texture.baseTexture.resolution / t.resolution;
                        t.context.globalAlpha = this.worldAlpha,
                        t.smoothProperty && t.scaleMode !== this.texture.baseTexture.scaleMode && (t.scaleMode = this.texture.baseTexture.scaleMode,
                            t.context[t.smoothProperty] = t.scaleMode === e.scaleModes.LINEAR);
                        var r = this.texture.trim ? this.texture.trim.x - this.anchor.x * this.texture.trim.width : this.anchor.x * -this.texture.frame.width
                            , o = this.texture.trim ? this.texture.trim.y - this.anchor.y * this.texture.trim.height : this.anchor.y * -this.texture.frame.height;
                        t.roundPixels ? (t.context.setTransform(s.a, s.b, s.c, s.d, s.tx * t.resolution | 0, s.ty * t.resolution | 0),
                            r |= 0,
                            o |= 0) : t.context.setTransform(s.a, s.b, s.c, s.d, s.tx * t.resolution, s.ty * t.resolution);
                        var a = this.texture.crop.width
                            , h = this.texture.crop.height;
                        if (r /= n,
                            o /= n,
                        16777215 !== this.tint)
                            (this.texture.requiresReTint || this.cachedTint !== this.tint) && (this.tintedTexture = e.CanvasTinter.getTintedTexture(this, this.tint),
                                this.cachedTint = this.tint),
                                t.context.drawImage(this.tintedTexture, 0, 0, a, h, r, o, a / n, h / n);
                        else {
                            var l = this.texture.crop.x
                                , u = this.texture.crop.y;
                            t.context.drawImage(this.texture.baseTexture.source, l, u, a, h, r, o, a / n, h / n)
                        }
                    }
                    for (var c = 0; c < this.children.length; c++)
                        this.children[c]._renderCanvas(t);
                    this._mask && t.maskManager.popMask(t)
                }
            }
            ,
            e.Sprite.fromFrame = function(t) {
                var i = e.TextureCache[t];
                if (!i)
                    throw new Error('The frameId "' + t + '" does not exist in the texture cache' + this);
                return new e.Sprite(i)
            }
            ,
            e.Sprite.fromImage = function(t, i, s) {
                var n = e.Texture.fromImage(t, i, s);
                return new e.Sprite(n)
            }
            ,
            e.SpriteBatch = function(t) {
                e.DisplayObjectContainer.call(this),
                    this.textureThing = t,
                    this.ready = !1
            }
            ,
            e.SpriteBatch.prototype = Object.create(e.DisplayObjectContainer.prototype),
            e.SpriteBatch.prototype.constructor = e.SpriteBatch,
            e.SpriteBatch.prototype.initWebGL = function(t) {
                this.fastSpriteBatch = new e.WebGLFastSpriteBatch(t),
                    this.ready = !0
            }
            ,
            e.SpriteBatch.prototype.updateTransform = function() {
                this.displayObjectUpdateTransform()
            }
            ,
            e.SpriteBatch.prototype._renderWebGL = function(t) {
                !this.visible || this.alpha <= 0 || !this.children.length || (this.ready || this.initWebGL(t.gl),
                this.fastSpriteBatch.gl !== t.gl && this.fastSpriteBatch.setContext(t.gl),
                    t.spriteBatch.stop(),
                    t.shaderManager.setShader(t.shaderManager.fastShader),
                    this.fastSpriteBatch.begin(this, t),
                    this.fastSpriteBatch.render(this),
                    t.spriteBatch.start())
            }
            ,
            e.SpriteBatch.prototype._renderCanvas = function(t) {
                if (this.visible && !(this.alpha <= 0) && this.children.length) {
                    var e = t.context;
                    e.globalAlpha = this.worldAlpha,
                        this.displayObjectUpdateTransform();
                    for (var i = this.worldTransform, s = !0, n = 0; n < this.children.length; n++) {
                        var r = this.children[n];
                        if (r.visible) {
                            var o = r.texture
                                , a = o.frame;
                            if (e.globalAlpha = this.worldAlpha * r.alpha,
                            r.rotation % (2 * Math.PI) === 0)
                                s && (e.setTransform(i.a, i.b, i.c, i.d, i.tx, i.ty),
                                    s = !1),
                                    e.drawImage(o.baseTexture.source, a.x, a.y, a.width, a.height, r.anchor.x * (-a.width * r.scale.x) + r.position.x + .5 | 0, r.anchor.y * (-a.height * r.scale.y) + r.position.y + .5 | 0, a.width * r.scale.x, a.height * r.scale.y);
                            else {
                                s || (s = !0),
                                    r.displayObjectUpdateTransform();
                                var h = r.worldTransform;
                                t.roundPixels ? e.setTransform(h.a, h.b, h.c, h.d, 0 | h.tx, 0 | h.ty) : e.setTransform(h.a, h.b, h.c, h.d, h.tx, h.ty),
                                    e.drawImage(o.baseTexture.source, a.x, a.y, a.width, a.height, r.anchor.x * -a.width + .5 | 0, r.anchor.y * -a.height + .5 | 0, a.width, a.height)
                            }
                        }
                    }
                }
            }
            ,
            e.hex2rgb = function(t) {
                return [(t >> 16 & 255) / 255, (t >> 8 & 255) / 255, (255 & t) / 255]
            }
            ,
            e.rgb2hex = function(t) {
                return (255 * t[0] << 16) + (255 * t[1] << 8) + 255 * t[2]
            }
            ,
            e.canUseNewCanvasBlendModes = function() {
                if (void 0 === document)
                    return !1;
                var t = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABAQMAAADD8p2OAAAAA1BMVEX/"
                    , i = "AAAACklEQVQI12NgAAAAAgAB4iG8MwAAAABJRU5ErkJggg=="
                    , s = new Image;
                s.src = t + "AP804Oa6" + i;
                var n = new Image;
                n.src = t + "/wCKxvRF" + i;
                var r = e.CanvasPool.create(this, 6, 1)
                    , o = r.getContext("2d");
                if (o.globalCompositeOperation = "multiply",
                    o.drawImage(s, 0, 0),
                    o.drawImage(n, 2, 0),
                    !o.getImageData(2, 0, 1, 1))
                    return !1;
                var a = o.getImageData(2, 0, 1, 1).data;
                return e.CanvasPool.remove(this),
                255 === a[0] && 0 === a[1] && 0 === a[2]
            }
            ,
            e.getNextPowerOfTwo = function(t) {
                if (t > 0 && 0 === (t & t - 1))
                    return t;
                for (var e = 1; t > e; )
                    e <<= 1;
                return e
            }
            ,
            e.isPowerOfTwo = function(t, e) {
                return t > 0 && 0 === (t & t - 1) && e > 0 && 0 === (e & e - 1)
            }
            ,
            e.CanvasPool = {
                create: function(t, i, s) {
                    var n, r = e.CanvasPool.getFirst();
                    if (-1 === r) {
                        var o = {
                            parent: t,
                            canvas: document.createElement("canvas")
                        };
                        e.CanvasPool.pool.push(o),
                            n = o.canvas
                    } else
                        e.CanvasPool.pool[r].parent = t,
                            n = e.CanvasPool.pool[r].canvas;
                    return void 0 !== i && (n.width = i,
                        n.height = s),
                        n
                },
                getFirst: function() {
                    for (var t = e.CanvasPool.pool, i = 0; i < t.length; i++)
                        if (null === t[i].parent)
                            return i;
                    return -1
                },
                remove: function(t) {
                    for (var i = e.CanvasPool.pool, s = 0; s < i.length; s++)
                        i[s].parent === t && (i[s].parent = null)
                },
                removeByCanvas: function(t) {
                    for (var i = e.CanvasPool.pool, s = 0; s < i.length; s++)
                        i[s].canvas === t && (i[s].parent = null)
                },
                getTotal: function() {
                    for (var t = e.CanvasPool.pool, i = 0, s = 0; s < t.length; s++)
                        null !== t[s].parent && i++;
                    return i
                },
                getFree: function() {
                    for (var t = e.CanvasPool.pool, i = 0, s = 0; s < t.length; s++)
                        null === t[s].parent && i++;
                    return i
                }
            },
            e.CanvasPool.pool = [],
            e.initDefaultShaders = function() {}
            ,
            e.CompileVertexShader = function(t, i) {
                return e._CompileShader(t, i, t.VERTEX_SHADER)
            }
            ,
            e.CompileFragmentShader = function(t, i) {
                return e._CompileShader(t, i, t.FRAGMENT_SHADER)
            }
            ,
            e._CompileShader = function(t, e, i) {
                var s = e;
                Array.isArray(e) && (s = e.join("\n"));
                var n = t.createShader(i);
                return t.shaderSource(n, s),
                    t.compileShader(n),
                    t.getShaderParameter(n, t.COMPILE_STATUS) ? n : (window.console.log(t.getShaderInfoLog(n)),
                        null)
            }
            ,
            e.compileProgram = function(t, i, s) {
                var n = e.CompileFragmentShader(t, s)
                    , r = e.CompileVertexShader(t, i)
                    , o = t.createProgram();
                return t.attachShader(o, r),
                    t.attachShader(o, n),
                    t.linkProgram(o),
                t.getProgramParameter(o, t.LINK_STATUS) || window.console.log("Could not initialise shaders"),
                    o
            }
            ,
            e.PixiShader = function(t) {
                this._UID = e._UID++,
                    this.gl = t,
                    this.program = null,
                    this.fragmentSrc = ["precision lowp float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform sampler2D uSampler;", "void main(void) {", "   gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor ;", "}"],
                    this.textureCount = 0,
                    this.firstRun = !0,
                    this.dirty = !0,
                    this.attributes = [],
                    this.init()
            }
            ,
            e.PixiShader.prototype.constructor = e.PixiShader,
            e.PixiShader.prototype.init = function() {
                var t = this.gl
                    , i = e.compileProgram(t, this.vertexSrc || e.PixiShader.defaultVertexSrc, this.fragmentSrc);
                t.useProgram(i),
                    this.uSampler = t.getUniformLocation(i, "uSampler"),
                    this.projectionVector = t.getUniformLocation(i, "projectionVector"),
                    this.offsetVector = t.getUniformLocation(i, "offsetVector"),
                    this.dimensions = t.getUniformLocation(i, "dimensions"),
                    this.aVertexPosition = t.getAttribLocation(i, "aVertexPosition"),
                    this.aTextureCoord = t.getAttribLocation(i, "aTextureCoord"),
                    this.colorAttribute = t.getAttribLocation(i, "aColor"),
                -1 === this.colorAttribute && (this.colorAttribute = 2),
                    this.attributes = [this.aVertexPosition, this.aTextureCoord, this.colorAttribute];
                for (var s in this.uniforms)
                    this.uniforms[s].uniformLocation = t.getUniformLocation(i, s);
                this.initUniforms(),
                    this.program = i
            }
            ,
            e.PixiShader.prototype.initUniforms = function() {
                this.textureCount = 1;
                var t, e = this.gl;
                for (var i in this.uniforms) {
                    t = this.uniforms[i];
                    var s = t.type;
                    "sampler2D" === s ? (t._init = !1,
                    null !== t.value && this.initSampler2D(t)) : "mat2" === s || "mat3" === s || "mat4" === s ? (t.glMatrix = !0,
                        t.glValueLength = 1,
                        "mat2" === s ? t.glFunc = e.uniformMatrix2fv : "mat3" === s ? t.glFunc = e.uniformMatrix3fv : "mat4" === s && (t.glFunc = e.uniformMatrix4fv)) : (t.glFunc = e["uniform" + s],
                        "2f" === s || "2i" === s ? t.glValueLength = 2 : "3f" === s || "3i" === s ? t.glValueLength = 3 : "4f" === s || "4i" === s ? t.glValueLength = 4 : t.glValueLength = 1)
                }
            }
            ,
            e.PixiShader.prototype.initSampler2D = function(t) {
                if (t.value && t.value.baseTexture && t.value.baseTexture.hasLoaded) {
                    var e = this.gl;
                    if (e.activeTexture(e["TEXTURE" + this.textureCount]),
                        e.bindTexture(e.TEXTURE_2D, t.value.baseTexture._glTextures[e.id]),
                        t.textureData) {
                        var i = t.textureData
                            , s = i.magFilter ? i.magFilter : e.LINEAR
                            , n = i.minFilter ? i.minFilter : e.LINEAR
                            , r = i.wrapS ? i.wrapS : e.CLAMP_TO_EDGE
                            , o = i.wrapT ? i.wrapT : e.CLAMP_TO_EDGE
                            , a = i.luminance ? e.LUMINANCE : e.RGBA;
                        if (i.repeat && (r = e.REPEAT,
                            o = e.REPEAT),
                            e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, !!i.flipY),
                            i.width) {
                            var h = i.width ? i.width : 512
                                , l = i.height ? i.height : 2
                                , u = i.border ? i.border : 0;
                            e.texImage2D(e.TEXTURE_2D, 0, a, h, l, u, a, e.UNSIGNED_BYTE, null)
                        } else
                            e.texImage2D(e.TEXTURE_2D, 0, a, e.RGBA, e.UNSIGNED_BYTE, t.value.baseTexture.source);
                        e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, s),
                            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, n),
                            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, r),
                            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, o)
                    }
                    e.uniform1i(t.uniformLocation, this.textureCount),
                        t._init = !0,
                        this.textureCount++
                }
            }
            ,
            e.PixiShader.prototype.syncUniforms = function() {
                this.textureCount = 1;
                var t, i = this.gl;
                for (var s in this.uniforms)
                    t = this.uniforms[s],
                        1 === t.glValueLength ? t.glMatrix === !0 ? t.glFunc.call(i, t.uniformLocation, t.transpose, t.value) : t.glFunc.call(i, t.uniformLocation, t.value) : 2 === t.glValueLength ? t.glFunc.call(i, t.uniformLocation, t.value.x, t.value.y) : 3 === t.glValueLength ? t.glFunc.call(i, t.uniformLocation, t.value.x, t.value.y, t.value.z) : 4 === t.glValueLength ? t.glFunc.call(i, t.uniformLocation, t.value.x, t.value.y, t.value.z, t.value.w) : "sampler2D" === t.type && (t._init ? (i.activeTexture(i["TEXTURE" + this.textureCount]),
                            t.value.baseTexture._dirty[i.id] ? e.instances[i.id].updateTexture(t.value.baseTexture) : i.bindTexture(i.TEXTURE_2D, t.value.baseTexture._glTextures[i.id]),
                            i.uniform1i(t.uniformLocation, this.textureCount),
                            this.textureCount++) : this.initSampler2D(t))
            }
            ,
            e.PixiShader.prototype.destroy = function() {
                this.gl.deleteProgram(this.program),
                    this.uniforms = null,
                    this.gl = null,
                    this.attributes = null
            }
            ,
            e.PixiShader.defaultVertexSrc = ["attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "attribute vec4 aColor;", "uniform vec2 projectionVector;", "uniform vec2 offsetVector;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "const vec2 center = vec2(-1.0, 1.0);", "void main(void) {", "   gl_Position = vec4( ((aVertexPosition + offsetVector) / projectionVector) + center , 0.0, 1.0);", "   vTextureCoord = aTextureCoord;", "   vColor = vec4(aColor.rgb * aColor.a, aColor.a);", "}"],
            e.PixiFastShader = function(t) {
                this._UID = e._UID++,
                    this.gl = t,
                    this.program = null,
                    this.fragmentSrc = ["precision lowp float;", "varying vec2 vTextureCoord;", "varying float vColor;", "uniform sampler2D uSampler;", "void main(void) {", "   gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor ;", "}"],
                    this.vertexSrc = ["attribute vec2 aVertexPosition;", "attribute vec2 aPositionCoord;", "attribute vec2 aScale;", "attribute float aRotation;", "attribute vec2 aTextureCoord;", "attribute float aColor;", "uniform vec2 projectionVector;", "uniform vec2 offsetVector;", "uniform mat3 uMatrix;", "varying vec2 vTextureCoord;", "varying float vColor;", "const vec2 center = vec2(-1.0, 1.0);", "void main(void) {", "   vec2 v;", "   vec2 sv = aVertexPosition * aScale;", "   v.x = (sv.x) * cos(aRotation) - (sv.y) * sin(aRotation);", "   v.y = (sv.x) * sin(aRotation) + (sv.y) * cos(aRotation);", "   v = ( uMatrix * vec3(v + aPositionCoord , 1.0) ).xy ;", "   gl_Position = vec4( ( v / projectionVector) + center , 0.0, 1.0);", "   vTextureCoord = aTextureCoord;", "   vColor = aColor;", "}"],
                    this.textureCount = 0,
                    this.init()
            }
            ,
            e.PixiFastShader.prototype.constructor = e.PixiFastShader,
            e.PixiFastShader.prototype.init = function() {
                var t = this.gl
                    , i = e.compileProgram(t, this.vertexSrc, this.fragmentSrc);
                t.useProgram(i),
                    this.uSampler = t.getUniformLocation(i, "uSampler"),
                    this.projectionVector = t.getUniformLocation(i, "projectionVector"),
                    this.offsetVector = t.getUniformLocation(i, "offsetVector"),
                    this.dimensions = t.getUniformLocation(i, "dimensions"),
                    this.uMatrix = t.getUniformLocation(i, "uMatrix"),
                    this.aVertexPosition = t.getAttribLocation(i, "aVertexPosition"),
                    this.aPositionCoord = t.getAttribLocation(i, "aPositionCoord"),
                    this.aScale = t.getAttribLocation(i, "aScale"),
                    this.aRotation = t.getAttribLocation(i, "aRotation"),
                    this.aTextureCoord = t.getAttribLocation(i, "aTextureCoord"),
                    this.colorAttribute = t.getAttribLocation(i, "aColor"),
                -1 === this.colorAttribute && (this.colorAttribute = 2),
                    this.attributes = [this.aVertexPosition, this.aPositionCoord, this.aScale, this.aRotation, this.aTextureCoord, this.colorAttribute],
                    this.program = i
            }
            ,
            e.PixiFastShader.prototype.destroy = function() {
                this.gl.deleteProgram(this.program),
                    this.uniforms = null,
                    this.gl = null,
                    this.attributes = null
            }
            ,
            e.StripShader = function(t) {
                this._UID = e._UID++,
                    this.gl = t,
                    this.program = null,
                    this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "uniform float alpha;", "uniform sampler2D uSampler;", "void main(void) {", "   gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y)) * alpha;", "}"],
                    this.vertexSrc = ["attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "uniform mat3 translationMatrix;", "uniform vec2 projectionVector;", "uniform vec2 offsetVector;", "varying vec2 vTextureCoord;", "void main(void) {", "   vec3 v = translationMatrix * vec3(aVertexPosition , 1.0);", "   v -= offsetVector.xyx;", "   gl_Position = vec4( v.x / projectionVector.x -1.0, v.y / -projectionVector.y + 1.0 , 0.0, 1.0);", "   vTextureCoord = aTextureCoord;", "}"],
                    this.init()
            }
            ,
            e.StripShader.prototype.constructor = e.StripShader,
            e.StripShader.prototype.init = function() {
                var t = this.gl
                    , i = e.compileProgram(t, this.vertexSrc, this.fragmentSrc);
                t.useProgram(i),
                    this.uSampler = t.getUniformLocation(i, "uSampler"),
                    this.projectionVector = t.getUniformLocation(i, "projectionVector"),
                    this.offsetVector = t.getUniformLocation(i, "offsetVector"),
                    this.colorAttribute = t.getAttribLocation(i, "aColor"),
                    this.aVertexPosition = t.getAttribLocation(i, "aVertexPosition"),
                    this.aTextureCoord = t.getAttribLocation(i, "aTextureCoord"),
                    this.attributes = [this.aVertexPosition, this.aTextureCoord],
                    this.translationMatrix = t.getUniformLocation(i, "translationMatrix"),
                    this.alpha = t.getUniformLocation(i, "alpha"),
                    this.program = i
            }
            ,
            e.StripShader.prototype.destroy = function() {
                this.gl.deleteProgram(this.program),
                    this.uniforms = null,
                    this.gl = null,
                    this.attribute = null
            }
            ,
            e.PrimitiveShader = function(t) {
                this._UID = e._UID++,
                    this.gl = t,
                    this.program = null,
                    this.fragmentSrc = ["precision mediump float;", "varying vec4 vColor;", "void main(void) {", "   gl_FragColor = vColor;", "}"],
                    this.vertexSrc = ["attribute vec2 aVertexPosition;", "attribute vec4 aColor;", "uniform mat3 translationMatrix;", "uniform vec2 projectionVector;", "uniform vec2 offsetVector;", "uniform float alpha;", "uniform float flipY;", "uniform vec3 tint;", "varying vec4 vColor;", "void main(void) {", "   vec3 v = translationMatrix * vec3(aVertexPosition , 1.0);", "   v -= offsetVector.xyx;", "   gl_Position = vec4( v.x / projectionVector.x -1.0, (v.y / projectionVector.y * -flipY) + flipY , 0.0, 1.0);", "   vColor = aColor * vec4(tint * alpha, alpha);", "}"],
                    this.init()
            }
            ,
            e.PrimitiveShader.prototype.constructor = e.PrimitiveShader,
            e.PrimitiveShader.prototype.init = function() {
                var t = this.gl
                    , i = e.compileProgram(t, this.vertexSrc, this.fragmentSrc);
                t.useProgram(i),
                    this.projectionVector = t.getUniformLocation(i, "projectionVector"),
                    this.offsetVector = t.getUniformLocation(i, "offsetVector"),
                    this.tintColor = t.getUniformLocation(i, "tint"),
                    this.flipY = t.getUniformLocation(i, "flipY"),
                    this.aVertexPosition = t.getAttribLocation(i, "aVertexPosition"),
                    this.colorAttribute = t.getAttribLocation(i, "aColor"),
                    this.attributes = [this.aVertexPosition, this.colorAttribute],
                    this.translationMatrix = t.getUniformLocation(i, "translationMatrix"),
                    this.alpha = t.getUniformLocation(i, "alpha"),
                    this.program = i
            }
            ,
            e.PrimitiveShader.prototype.destroy = function() {
                this.gl.deleteProgram(this.program),
                    this.uniforms = null,
                    this.gl = null,
                    this.attributes = null
            }
            ,
            e.ComplexPrimitiveShader = function(t) {
                this._UID = e._UID++,
                    this.gl = t,
                    this.program = null,
                    this.fragmentSrc = ["precision mediump float;", "varying vec4 vColor;", "void main(void) {", "   gl_FragColor = vColor;", "}"],
                    this.vertexSrc = ["attribute vec2 aVertexPosition;", "uniform mat3 translationMatrix;", "uniform vec2 projectionVector;", "uniform vec2 offsetVector;", "uniform vec3 tint;", "uniform float alpha;", "uniform vec3 color;", "uniform float flipY;", "varying vec4 vColor;", "void main(void) {", "   vec3 v = translationMatrix * vec3(aVertexPosition , 1.0);", "   v -= offsetVector.xyx;", "   gl_Position = vec4( v.x / projectionVector.x -1.0, (v.y / projectionVector.y * -flipY) + flipY , 0.0, 1.0);", "   vColor = vec4(color * alpha * tint, alpha);", "}"],
                    this.init()
            }
            ,
            e.ComplexPrimitiveShader.prototype.constructor = e.ComplexPrimitiveShader,
            e.ComplexPrimitiveShader.prototype.init = function() {
                var t = this.gl
                    , i = e.compileProgram(t, this.vertexSrc, this.fragmentSrc);
                t.useProgram(i),
                    this.projectionVector = t.getUniformLocation(i, "projectionVector"),
                    this.offsetVector = t.getUniformLocation(i, "offsetVector"),
                    this.tintColor = t.getUniformLocation(i, "tint"),
                    this.color = t.getUniformLocation(i, "color"),
                    this.flipY = t.getUniformLocation(i, "flipY"),
                    this.aVertexPosition = t.getAttribLocation(i, "aVertexPosition"),
                    this.attributes = [this.aVertexPosition, this.colorAttribute],
                    this.translationMatrix = t.getUniformLocation(i, "translationMatrix"),
                    this.alpha = t.getUniformLocation(i, "alpha"),
                    this.program = i
            }
            ,
            e.ComplexPrimitiveShader.prototype.destroy = function() {
                this.gl.deleteProgram(this.program),
                    this.uniforms = null,
                    this.gl = null,
                    this.attribute = null
            }
            ,
            e.glContexts = [],
            e.instances = [],
            e.WebGLRenderer = function(t) {
                this.game = t,
                e.defaultRenderer || (e.defaultRenderer = this),
                    this.type = e.WEBGL_RENDERER,
                    this.resolution = t.resolution,
                    this.transparent = t.transparent,
                    this.autoResize = !1,
                    this.preserveDrawingBuffer = t.preserveDrawingBuffer,
                    this.clearBeforeRender = t.clearBeforeRender,
                    this.width = t.width,
                    this.height = t.height,
                    this.view = t.canvas,
                    this._contextOptions = {
                        alpha: this.transparent,
                        antialias: t.antialias,
                        premultipliedAlpha: this.transparent && "notMultiplied" !== this.transparent,
                        stencil: !0,
                        preserveDrawingBuffer: this.preserveDrawingBuffer
                    },
                    this.projection = new e.Point,
                    this.offset = new e.Point,
                    this.shaderManager = new e.WebGLShaderManager,
                    this.spriteBatch = new e.WebGLSpriteBatch,
                    this.maskManager = new e.WebGLMaskManager,
                    this.filterManager = new e.WebGLFilterManager,
                    this.stencilManager = new e.WebGLStencilManager,
                    this.blendModeManager = new e.WebGLBlendModeManager,
                    this.renderSession = {},
                    this.renderSession.game = this.game,
                    this.renderSession.gl = this.gl,
                    this.renderSession.drawCount = 0,
                    this.renderSession.shaderManager = this.shaderManager,
                    this.renderSession.maskManager = this.maskManager,
                    this.renderSession.filterManager = this.filterManager,
                    this.renderSession.blendModeManager = this.blendModeManager,
                    this.renderSession.spriteBatch = this.spriteBatch,
                    this.renderSession.stencilManager = this.stencilManager,
                    this.renderSession.renderer = this,
                    this.renderSession.resolution = this.resolution,
                    this.initContext(),
                    this.mapBlendModes()
            }
            ,
            e.WebGLRenderer.prototype.constructor = e.WebGLRenderer,
            e.WebGLRenderer.prototype.initContext = function() {
                var t = this.view.getContext("webgl", this._contextOptions) || this.view.getContext("experimental-webgl", this._contextOptions);
                if (this.gl = t,
                    !t)
                    throw new Error("This browser does not support webGL. Try using the canvas renderer");
                this.glContextId = t.id = e.WebGLRenderer.glContextId++,
                    e.glContexts[this.glContextId] = t,
                    e.instances[this.glContextId] = this,
                    t.disable(t.DEPTH_TEST),
                    t.disable(t.CULL_FACE),
                    t.enable(t.BLEND),
                    this.shaderManager.setContext(t),
                    this.spriteBatch.setContext(t),
                    this.maskManager.setContext(t),
                    this.filterManager.setContext(t),
                    this.blendModeManager.setContext(t),
                    this.stencilManager.setContext(t),
                    this.renderSession.gl = this.gl,
                    this.resize(this.width, this.height)
            }
            ,
            e.WebGLRenderer.prototype.render = function(t) {
                if (!this.contextLost) {
                    t.updateTransform();
                    var e = this.gl;
                    e.viewport(0, 0, this.width, this.height),
                        e.bindFramebuffer(e.FRAMEBUFFER, null),
                    this.game.clearBeforeRender && (e.clearColor(t._bgColor.r, t._bgColor.g, t._bgColor.b, t._bgColor.a),
                        e.clear(e.COLOR_BUFFER_BIT)),
                        this.renderDisplayObject(t, this.projection)
                }
            }
            ,
            e.WebGLRenderer.prototype.renderDisplayObject = function(t, i, s, n) {
                this.renderSession.blendModeManager.setBlendMode(e.blendModes.NORMAL),
                    this.renderSession.drawCount = 0,
                    this.renderSession.flipY = s ? -1 : 1,
                    this.renderSession.projection = i,
                    this.renderSession.offset = this.offset,
                    this.spriteBatch.begin(this.renderSession),
                    this.filterManager.begin(this.renderSession, s),
                    t._renderWebGL(this.renderSession, n),
                    this.spriteBatch.end()
            }
            ,
            e.WebGLRenderer.prototype.resize = function(t, e) {
                this.width = t * this.resolution,
                    this.height = e * this.resolution,
                    this.view.width = this.width,
                    this.view.height = this.height,
                this.autoResize && (this.view.style.width = this.width / this.resolution + "px",
                    this.view.style.height = this.height / this.resolution + "px"),
                    this.gl.viewport(0, 0, this.width, this.height),
                    this.projection.x = this.width / 2 / this.resolution,
                    this.projection.y = -this.height / 2 / this.resolution
            }
            ,
            e.WebGLRenderer.prototype.updateTexture = function(t) {
                if (!t.hasLoaded)
                    return !1;
                var i = this.gl;
                return t._glTextures[i.id] || (t._glTextures[i.id] = i.createTexture()),
                    i.bindTexture(i.TEXTURE_2D, t._glTextures[i.id]),
                    i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, t.premultipliedAlpha),
                    i.texImage2D(i.TEXTURE_2D, 0, i.RGBA, i.RGBA, i.UNSIGNED_BYTE, t.source),
                    i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MAG_FILTER, t.scaleMode === e.scaleModes.LINEAR ? i.LINEAR : i.NEAREST),
                    t.mipmap && e.isPowerOfTwo(t.width, t.height) ? (i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MIN_FILTER, t.scaleMode === e.scaleModes.LINEAR ? i.LINEAR_MIPMAP_LINEAR : i.NEAREST_MIPMAP_NEAREST),
                        i.generateMipmap(i.TEXTURE_2D)) : i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MIN_FILTER, t.scaleMode === e.scaleModes.LINEAR ? i.LINEAR : i.NEAREST),
                    t._powerOf2 ? (i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_S, i.REPEAT),
                        i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_T, i.REPEAT)) : (i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_S, i.CLAMP_TO_EDGE),
                        i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_T, i.CLAMP_TO_EDGE)),
                    t._dirty[i.id] = !1,
                    !0
            }
            ,
            e.WebGLRenderer.prototype.destroy = function() {
                e.glContexts[this.glContextId] = null,
                    this.projection = null,
                    this.offset = null,
                    this.shaderManager.destroy(),
                    this.spriteBatch.destroy(),
                    this.maskManager.destroy(),
                    this.filterManager.destroy(),
                    this.shaderManager = null,
                    this.spriteBatch = null,
                    this.maskManager = null,
                    this.filterManager = null,
                    this.gl = null,
                    this.renderSession = null,
                    e.CanvasPool.remove(this),
                    e.instances[this.glContextId] = null,
                    e.WebGLRenderer.glContextId--
            }
            ,
            e.WebGLRenderer.prototype.mapBlendModes = function() {
                var t = this.gl;
                if (!e.blendModesWebGL) {
                    var i = []
                        , s = e.blendModes;
                    i[s.NORMAL] = [t.ONE, t.ONE_MINUS_SRC_ALPHA],
                        i[s.ADD] = [t.SRC_ALPHA, t.DST_ALPHA],
                        i[s.MULTIPLY] = [t.DST_COLOR, t.ONE_MINUS_SRC_ALPHA],
                        i[s.SCREEN] = [t.SRC_ALPHA, t.ONE],
                        i[s.OVERLAY] = [t.ONE, t.ONE_MINUS_SRC_ALPHA],
                        i[s.DARKEN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA],
                        i[s.LIGHTEN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA],
                        i[s.COLOR_DODGE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA],
                        i[s.COLOR_BURN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA],
                        i[s.HARD_LIGHT] = [t.ONE, t.ONE_MINUS_SRC_ALPHA],
                        i[s.SOFT_LIGHT] = [t.ONE, t.ONE_MINUS_SRC_ALPHA],
                        i[s.DIFFERENCE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA],
                        i[s.EXCLUSION] = [t.ONE, t.ONE_MINUS_SRC_ALPHA],
                        i[s.HUE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA],
                        i[s.SATURATION] = [t.ONE, t.ONE_MINUS_SRC_ALPHA],
                        i[s.COLOR] = [t.ONE, t.ONE_MINUS_SRC_ALPHA],
                        i[s.LUMINOSITY] = [t.ONE, t.ONE_MINUS_SRC_ALPHA],
                        e.blendModesWebGL = i
                }
            }
            ,
            e.WebGLRenderer.glContextId = 0,
            e.WebGLBlendModeManager = function() {
                this.currentBlendMode = 99999
            }
            ,
            e.WebGLBlendModeManager.prototype.constructor = e.WebGLBlendModeManager,
            e.WebGLBlendModeManager.prototype.setContext = function(t) {
                this.gl = t
            }
            ,
            e.WebGLBlendModeManager.prototype.setBlendMode = function(t) {
                if (this.currentBlendMode === t)
                    return !1;
                this.currentBlendMode = t;
                var i = e.blendModesWebGL[this.currentBlendMode];
                return i && this.gl.blendFunc(i[0], i[1]),
                    !0
            }
            ,
            e.WebGLBlendModeManager.prototype.destroy = function() {
                this.gl = null
            }
            ,
            e.WebGLMaskManager = function() {}
            ,
            e.WebGLMaskManager.prototype.constructor = e.WebGLMaskManager,
            e.WebGLMaskManager.prototype.setContext = function(t) {
                this.gl = t
            }
            ,
            e.WebGLMaskManager.prototype.pushMask = function(t, i) {
                var s = i.gl;
                t.dirty && e.WebGLGraphics.updateGraphics(t, s),
                t._webGL[s.id].data.length && i.stencilManager.pushStencil(t, t._webGL[s.id].data[0], i)
            }
            ,
            e.WebGLMaskManager.prototype.popMask = function(t, e) {
                var i = this.gl;
                e.stencilManager.popStencil(t, t._webGL[i.id].data[0], e)
            }
            ,
            e.WebGLMaskManager.prototype.destroy = function() {
                this.gl = null
            }
            ,
            e.WebGLStencilManager = function() {
                this.stencilStack = [],
                    this.reverse = !0,
                    this.count = 0
            }
            ,
            e.WebGLStencilManager.prototype.setContext = function(t) {
                this.gl = t
            }
            ,
            e.WebGLStencilManager.prototype.pushStencil = function(t, e, i) {
                var s = this.gl;
                this.bindGraphics(t, e, i),
                0 === this.stencilStack.length && (s.enable(s.STENCIL_TEST),
                    s.clear(s.STENCIL_BUFFER_BIT),
                    this.reverse = !0,
                    this.count = 0),
                    this.stencilStack.push(e);
                var n = this.count;
                s.colorMask(!1, !1, !1, !1),
                    s.stencilFunc(s.ALWAYS, 0, 255),
                    s.stencilOp(s.KEEP, s.KEEP, s.INVERT),
                    1 === e.mode ? (s.drawElements(s.TRIANGLE_FAN, e.indices.length - 4, s.UNSIGNED_SHORT, 0),
                        this.reverse ? (s.stencilFunc(s.EQUAL, 255 - n, 255),
                            s.stencilOp(s.KEEP, s.KEEP, s.DECR)) : (s.stencilFunc(s.EQUAL, n, 255),
                            s.stencilOp(s.KEEP, s.KEEP, s.INCR)),
                        s.drawElements(s.TRIANGLE_FAN, 4, s.UNSIGNED_SHORT, 2 * (e.indices.length - 4)),
                        this.reverse ? s.stencilFunc(s.EQUAL, 255 - (n + 1), 255) : s.stencilFunc(s.EQUAL, n + 1, 255),
                        this.reverse = !this.reverse) : (this.reverse ? (s.stencilFunc(s.EQUAL, n, 255),
                        s.stencilOp(s.KEEP, s.KEEP, s.INCR)) : (s.stencilFunc(s.EQUAL, 255 - n, 255),
                        s.stencilOp(s.KEEP, s.KEEP, s.DECR)),
                        s.drawElements(s.TRIANGLE_STRIP, e.indices.length, s.UNSIGNED_SHORT, 0),
                        this.reverse ? s.stencilFunc(s.EQUAL, n + 1, 255) : s.stencilFunc(s.EQUAL, 255 - (n + 1), 255)),
                    s.colorMask(!0, !0, !0, !0),
                    s.stencilOp(s.KEEP, s.KEEP, s.KEEP),
                    this.count++
            }
            ,
            e.WebGLStencilManager.prototype.bindGraphics = function(t, i, s) {
                this._currentGraphics = t;
                var n, r = this.gl, o = s.projection, a = s.offset;
                1 === i.mode ? (n = s.shaderManager.complexPrimitiveShader,
                    s.shaderManager.setShader(n),
                    r.uniform1f(n.flipY, s.flipY),
                    r.uniformMatrix3fv(n.translationMatrix, !1, t.worldTransform.toArray(!0)),
                    r.uniform2f(n.projectionVector, o.x, -o.y),
                    r.uniform2f(n.offsetVector, -a.x, -a.y),
                    r.uniform3fv(n.tintColor, e.hex2rgb(t.tint)),
                    r.uniform3fv(n.color, i.color),
                    r.uniform1f(n.alpha, t.worldAlpha * i.alpha),
                    r.bindBuffer(r.ARRAY_BUFFER, i.buffer),
                    r.vertexAttribPointer(n.aVertexPosition, 2, r.FLOAT, !1, 8, 0),
                    r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, i.indexBuffer)) : (n = s.shaderManager.primitiveShader,
                    s.shaderManager.setShader(n),
                    r.uniformMatrix3fv(n.translationMatrix, !1, t.worldTransform.toArray(!0)),
                    r.uniform1f(n.flipY, s.flipY),
                    r.uniform2f(n.projectionVector, o.x, -o.y),
                    r.uniform2f(n.offsetVector, -a.x, -a.y),
                    r.uniform3fv(n.tintColor, e.hex2rgb(t.tint)),
                    r.uniform1f(n.alpha, t.worldAlpha),
                    r.bindBuffer(r.ARRAY_BUFFER, i.buffer),
                    r.vertexAttribPointer(n.aVertexPosition, 2, r.FLOAT, !1, 24, 0),
                    r.vertexAttribPointer(n.colorAttribute, 4, r.FLOAT, !1, 24, 8),
                    r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, i.indexBuffer))
            }
            ,
            e.WebGLStencilManager.prototype.popStencil = function(t, e, i) {
                var s = this.gl;
                if (this.stencilStack.pop(),
                    this.count--,
                0 === this.stencilStack.length)
                    s.disable(s.STENCIL_TEST);
                else {
                    var n = this.count;
                    this.bindGraphics(t, e, i),
                        s.colorMask(!1, !1, !1, !1),
                        1 === e.mode ? (this.reverse = !this.reverse,
                            this.reverse ? (s.stencilFunc(s.EQUAL, 255 - (n + 1), 255),
                                s.stencilOp(s.KEEP, s.KEEP, s.INCR)) : (s.stencilFunc(s.EQUAL, n + 1, 255),
                                s.stencilOp(s.KEEP, s.KEEP, s.DECR)),
                            s.drawElements(s.TRIANGLE_FAN, 4, s.UNSIGNED_SHORT, 2 * (e.indices.length - 4)),
                            s.stencilFunc(s.ALWAYS, 0, 255),
                            s.stencilOp(s.KEEP, s.KEEP, s.INVERT),
                            s.drawElements(s.TRIANGLE_FAN, e.indices.length - 4, s.UNSIGNED_SHORT, 0),
                            this.reverse ? s.stencilFunc(s.EQUAL, n, 255) : s.stencilFunc(s.EQUAL, 255 - n, 255)) : (this.reverse ? (s.stencilFunc(s.EQUAL, n + 1, 255),
                            s.stencilOp(s.KEEP, s.KEEP, s.DECR)) : (s.stencilFunc(s.EQUAL, 255 - (n + 1), 255),
                            s.stencilOp(s.KEEP, s.KEEP, s.INCR)),
                            s.drawElements(s.TRIANGLE_STRIP, e.indices.length, s.UNSIGNED_SHORT, 0),
                            this.reverse ? s.stencilFunc(s.EQUAL, n, 255) : s.stencilFunc(s.EQUAL, 255 - n, 255)),
                        s.colorMask(!0, !0, !0, !0),
                        s.stencilOp(s.KEEP, s.KEEP, s.KEEP)
                }
            }
            ,
            e.WebGLStencilManager.prototype.destroy = function() {
                this.stencilStack = null,
                    this.gl = null
            }
            ,
            e.WebGLShaderManager = function() {
                this.maxAttibs = 10,
                    this.attribState = [],
                    this.tempAttribState = [];
                for (var t = 0; t < this.maxAttibs; t++)
                    this.attribState[t] = !1;
                this.stack = []
            }
            ,
            e.WebGLShaderManager.prototype.constructor = e.WebGLShaderManager,
            e.WebGLShaderManager.prototype.setContext = function(t) {
                this.gl = t,
                    this.primitiveShader = new e.PrimitiveShader(t),
                    this.complexPrimitiveShader = new e.ComplexPrimitiveShader(t),
                    this.defaultShader = new e.PixiShader(t),
                    this.fastShader = new e.PixiFastShader(t),
                    this.stripShader = new e.StripShader(t),
                    this.setShader(this.defaultShader)
            }
            ,
            e.WebGLShaderManager.prototype.setAttribs = function(t) {
                var e;
                for (e = 0; e < this.tempAttribState.length; e++)
                    this.tempAttribState[e] = !1;
                for (e = 0; e < t.length; e++) {
                    var i = t[e];
                    this.tempAttribState[i] = !0
                }
                var s = this.gl;
                for (e = 0; e < this.attribState.length; e++)
                    this.attribState[e] !== this.tempAttribState[e] && (this.attribState[e] = this.tempAttribState[e],
                        this.tempAttribState[e] ? s.enableVertexAttribArray(e) : s.disableVertexAttribArray(e))
            }
            ,
            e.WebGLShaderManager.prototype.setShader = function(t) {
                return this._currentId !== t._UID && (this._currentId = t._UID,
                    this.currentShader = t,
                    this.gl.useProgram(t.program),
                    this.setAttribs(t.attributes),
                    !0)
            }
            ,
            e.WebGLShaderManager.prototype.destroy = function() {
                this.attribState = null,
                    this.tempAttribState = null,
                    this.primitiveShader.destroy(),
                    this.complexPrimitiveShader.destroy(),
                    this.defaultShader.destroy(),
                    this.fastShader.destroy(),
                    this.stripShader.destroy(),
                    this.gl = null
            }
            ,
            e.WebGLSpriteBatch = function() {
                this.vertSize = 5,
                    this.size = 2e3;
                var t = 4 * this.size * 4 * this.vertSize
                    , i = 6 * this.size;
                this.vertices = new e.ArrayBuffer(t),
                    this.positions = new e.Float32Array(this.vertices),
                    this.colors = new e.Uint32Array(this.vertices),
                    this.indices = new e.Uint16Array(i),
                    this.lastIndexCount = 0;
                for (var s = 0, n = 0; i > s; s += 6,
                    n += 4)
                    this.indices[s + 0] = n + 0,
                        this.indices[s + 1] = n + 1,
                        this.indices[s + 2] = n + 2,
                        this.indices[s + 3] = n + 0,
                        this.indices[s + 4] = n + 2,
                        this.indices[s + 5] = n + 3;
                this.drawing = !1,
                    this.currentBatchSize = 0,
                    this.currentBaseTexture = null,
                    this.dirty = !0,
                    this.textures = [],
                    this.blendModes = [],
                    this.shaders = [],
                    this.sprites = [],
                    this.defaultShader = new e.AbstractFilter(["precision lowp float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform sampler2D uSampler;", "void main(void) {", "   gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor ;", "}"])
            }
            ,
            e.WebGLSpriteBatch.prototype.setContext = function(t) {
                this.gl = t,
                    this.vertexBuffer = t.createBuffer(),
                    this.indexBuffer = t.createBuffer(),
                    t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.indexBuffer),
                    t.bufferData(t.ELEMENT_ARRAY_BUFFER, this.indices, t.STATIC_DRAW),
                    t.bindBuffer(t.ARRAY_BUFFER, this.vertexBuffer),
                    t.bufferData(t.ARRAY_BUFFER, this.vertices, t.DYNAMIC_DRAW),
                    this.currentBlendMode = 99999;
                var i = new e.PixiShader(t);
                i.fragmentSrc = this.defaultShader.fragmentSrc,
                    i.uniforms = {},
                    i.init(),
                    this.defaultShader.shaders[t.id] = i
            }
            ,
            e.WebGLSpriteBatch.prototype.begin = function(t) {
                this.renderSession = t,
                    this.shader = this.renderSession.shaderManager.defaultShader,
                    this.start()
            }
            ,
            e.WebGLSpriteBatch.prototype.end = function() {
                this.flush()
            }
            ,
            e.WebGLSpriteBatch.prototype.render = function(t, e) {
                var i = t.texture
                    , s = t.worldTransform;
                e && (s = e),
                this.currentBatchSize >= this.size && (this.flush(),
                    this.currentBaseTexture = i.baseTexture);
                var n = i._uvs;
                if (n) {
                    var r, o, a, h, l = t.anchor.x, u = t.anchor.y;
                    if (i.trim) {
                        var c = i.trim;
                        o = c.x - l * c.width,
                            r = o + i.crop.width,
                            h = c.y - u * c.height,
                            a = h + i.crop.height
                    } else
                        r = i.frame.width * (1 - l),
                            o = i.frame.width * -l,
                            a = i.frame.height * (1 - u),
                            h = i.frame.height * -u;
                    var d = 4 * this.currentBatchSize * this.vertSize
                        , p = i.baseTexture.resolution
                        , f = s.a / p
                        , m = s.b / p
                        , g = s.c / p
                        , y = s.d / p
                        , v = s.tx
                        , x = s.ty
                        , _ = this.colors
                        , b = this.positions;
                    this.renderSession.roundPixels ? (b[d] = f * o + g * h + v | 0,
                        b[d + 1] = y * h + m * o + x | 0,
                        b[d + 5] = f * r + g * h + v | 0,
                        b[d + 6] = y * h + m * r + x | 0,
                        b[d + 10] = f * r + g * a + v | 0,
                        b[d + 11] = y * a + m * r + x | 0,
                        b[d + 15] = f * o + g * a + v | 0,
                        b[d + 16] = y * a + m * o + x | 0) : (b[d] = f * o + g * h + v,
                        b[d + 1] = y * h + m * o + x,
                        b[d + 5] = f * r + g * h + v,
                        b[d + 6] = y * h + m * r + x,
                        b[d + 10] = f * r + g * a + v,
                        b[d + 11] = y * a + m * r + x,
                        b[d + 15] = f * o + g * a + v,
                        b[d + 16] = y * a + m * o + x),
                        b[d + 2] = n.x0,
                        b[d + 3] = n.y0,
                        b[d + 7] = n.x1,
                        b[d + 8] = n.y1,
                        b[d + 12] = n.x2,
                        b[d + 13] = n.y2,
                        b[d + 17] = n.x3,
                        b[d + 18] = n.y3;
                    var w = t.tint;
                    _[d + 4] = _[d + 9] = _[d + 14] = _[d + 19] = (w >> 16) + (65280 & w) + ((255 & w) << 16) + (255 * t.worldAlpha << 24),
                        this.sprites[this.currentBatchSize++] = t
                }
            }
            ,
            e.WebGLSpriteBatch.prototype.renderTilingSprite = function(t) {
                var i = t.tilingTexture;
                this.currentBatchSize >= this.size && (this.flush(),
                    this.currentBaseTexture = i.baseTexture),
                t._uvs || (t._uvs = new e.TextureUvs);
                var s = t._uvs
                    , n = i.baseTexture.width
                    , r = i.baseTexture.height;
                t.tilePosition.x %= n * t.tileScaleOffset.x,
                    t.tilePosition.y %= r * t.tileScaleOffset.y;
                var o = t.tilePosition.x / (n * t.tileScaleOffset.x)
                    , a = t.tilePosition.y / (r * t.tileScaleOffset.y)
                    , h = t.width / n / (t.tileScale.x * t.tileScaleOffset.x)
                    , l = t.height / r / (t.tileScale.y * t.tileScaleOffset.y);
                s.x0 = 0 - o,
                    s.y0 = 0 - a,
                    s.x1 = 1 * h - o,
                    s.y1 = 0 - a,
                    s.x2 = 1 * h - o,
                    s.y2 = 1 * l - a,
                    s.x3 = 0 - o,
                    s.y3 = 1 * l - a;
                var u = t.tint
                    , c = (u >> 16) + (65280 & u) + ((255 & u) << 16) + (255 * t.worldAlpha << 24)
                    , d = this.positions
                    , p = this.colors
                    , f = t.width
                    , m = t.height
                    , g = t.anchor.x
                    , y = t.anchor.y
                    , v = f * (1 - g)
                    , x = f * -g
                    , _ = m * (1 - y)
                    , b = m * -y
                    , w = 4 * this.currentBatchSize * this.vertSize
                    , T = i.baseTexture.resolution
                    , S = t.worldTransform
                    , C = S.a / T
                    , P = S.b / T
                    , A = S.c / T
                    , R = S.d / T
                    , I = S.tx
                    , M = S.ty;
                d[w++] = C * x + A * b + I,
                    d[w++] = R * b + P * x + M,
                    d[w++] = s.x0,
                    d[w++] = s.y0,
                    p[w++] = c,
                    d[w++] = C * v + A * b + I,
                    d[w++] = R * b + P * v + M,
                    d[w++] = s.x1,
                    d[w++] = s.y1,
                    p[w++] = c,
                    d[w++] = C * v + A * _ + I,
                    d[w++] = R * _ + P * v + M,
                    d[w++] = s.x2,
                    d[w++] = s.y2,
                    p[w++] = c,
                    d[w++] = C * x + A * _ + I,
                    d[w++] = R * _ + P * x + M,
                    d[w++] = s.x3,
                    d[w++] = s.y3,
                    p[w++] = c,
                    this.sprites[this.currentBatchSize++] = t
            }
            ,
            e.WebGLSpriteBatch.prototype.flush = function() {
                if (0 !== this.currentBatchSize) {
                    var t, i = this.gl;
                    if (this.dirty) {
                        this.dirty = !1,
                            i.activeTexture(i.TEXTURE0),
                            i.bindBuffer(i.ARRAY_BUFFER, this.vertexBuffer),
                            i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, this.indexBuffer),
                            t = this.defaultShader.shaders[i.id];
                        var s = 4 * this.vertSize;
                        i.vertexAttribPointer(t.aVertexPosition, 2, i.FLOAT, !1, s, 0),
                            i.vertexAttribPointer(t.aTextureCoord, 2, i.FLOAT, !1, s, 8),
                            i.vertexAttribPointer(t.colorAttribute, 4, i.UNSIGNED_BYTE, !0, s, 16)
                    }
                    if (this.currentBatchSize > .5 * this.size)
                        i.bufferSubData(i.ARRAY_BUFFER, 0, this.vertices);
                    else {
                        var n = this.positions.subarray(0, 4 * this.currentBatchSize * this.vertSize);
                        i.bufferSubData(i.ARRAY_BUFFER, 0, n)
                    }
                    for (var r, o, a, h, l = 0, u = 0, c = null, d = this.renderSession.blendModeManager.currentBlendMode, p = null, f = !1, m = !1, g = 0, y = this.currentBatchSize; y > g; g++) {
                        if (h = this.sprites[g],
                            r = h.tilingTexture ? h.tilingTexture.baseTexture : h.texture.baseTexture,
                            o = h.blendMode,
                            a = h.shader || this.defaultShader,
                            f = d !== o,
                            m = p !== a,
                        (c !== r && !r.skipRender || f || m) && (this.renderBatch(c, l, u),
                            u = g,
                            l = 0,
                            c = r,
                        f && (d = o,
                            this.renderSession.blendModeManager.setBlendMode(d)),
                            m)) {
                            p = a,
                                t = p.shaders[i.id],
                            t || (t = new e.PixiShader(i),
                                t.fragmentSrc = p.fragmentSrc,
                                t.uniforms = p.uniforms,
                                t.init(),
                                p.shaders[i.id] = t),
                                this.renderSession.shaderManager.setShader(t),
                            t.dirty && t.syncUniforms();
                            var v = this.renderSession.projection;
                            i.uniform2f(t.projectionVector, v.x, v.y);
                            var x = this.renderSession.offset;
                            i.uniform2f(t.offsetVector, x.x, x.y)
                        }
                        l++
                    }
                    this.renderBatch(c, l, u),
                        this.currentBatchSize = 0
                }
            }
            ,
            e.WebGLSpriteBatch.prototype.renderBatch = function(t, e, i) {
                if (0 !== e) {
                    var s = this.gl;
                    if (t._dirty[s.id]) {
                        if (!this.renderSession.renderer.updateTexture(t))
                            return
                    } else
                        s.bindTexture(s.TEXTURE_2D, t._glTextures[s.id]);
                    s.drawElements(s.TRIANGLES, 6 * e, s.UNSIGNED_SHORT, 6 * i * 2),
                        this.renderSession.drawCount++
                }
            }
            ,
            e.WebGLSpriteBatch.prototype.stop = function() {
                this.flush(),
                    this.dirty = !0
            }
            ,
            e.WebGLSpriteBatch.prototype.start = function() {
                this.dirty = !0
            }
            ,
            e.WebGLSpriteBatch.prototype.destroy = function() {
                this.vertices = null,
                    this.indices = null,
                    this.gl.deleteBuffer(this.vertexBuffer),
                    this.gl.deleteBuffer(this.indexBuffer),
                    this.currentBaseTexture = null,
                    this.gl = null
            }
            ,
            e.WebGLFastSpriteBatch = function(t) {
                this.vertSize = 10,
                    this.maxSize = 6e3,
                    this.size = this.maxSize;
                var i = 4 * this.size * this.vertSize
                    , s = 6 * this.maxSize;
                this.vertices = new e.Float32Array(i),
                    this.indices = new e.Uint16Array(s),
                    this.vertexBuffer = null,
                    this.indexBuffer = null,
                    this.lastIndexCount = 0;
                for (var n = 0, r = 0; s > n; n += 6,
                    r += 4)
                    this.indices[n + 0] = r + 0,
                        this.indices[n + 1] = r + 1,
                        this.indices[n + 2] = r + 2,
                        this.indices[n + 3] = r + 0,
                        this.indices[n + 4] = r + 2,
                        this.indices[n + 5] = r + 3;
                this.drawing = !1,
                    this.currentBatchSize = 0,
                    this.currentBaseTexture = null,
                    this.currentBlendMode = 0,
                    this.renderSession = null,
                    this.shader = null,
                    this.matrix = null,
                    this.setContext(t)
            }
            ,
            e.WebGLFastSpriteBatch.prototype.constructor = e.WebGLFastSpriteBatch,
            e.WebGLFastSpriteBatch.prototype.setContext = function(t) {
                this.gl = t,
                    this.vertexBuffer = t.createBuffer(),
                    this.indexBuffer = t.createBuffer(),
                    t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.indexBuffer),
                    t.bufferData(t.ELEMENT_ARRAY_BUFFER, this.indices, t.STATIC_DRAW),
                    t.bindBuffer(t.ARRAY_BUFFER, this.vertexBuffer),
                    t.bufferData(t.ARRAY_BUFFER, this.vertices, t.DYNAMIC_DRAW)
            }
            ,
            e.WebGLFastSpriteBatch.prototype.begin = function(t, e) {
                this.renderSession = e,
                    this.shader = this.renderSession.shaderManager.fastShader,
                    this.matrix = t.worldTransform.toArray(!0),
                    this.start()
            }
            ,
            e.WebGLFastSpriteBatch.prototype.end = function() {
                this.flush()
            }
            ,
            e.WebGLFastSpriteBatch.prototype.render = function(t) {
                var e = t.children
                    , i = e[0];
                if (i.texture._uvs) {
                    this.currentBaseTexture = i.texture.baseTexture,
                    i.blendMode !== this.renderSession.blendModeManager.currentBlendMode && (this.flush(),
                        this.renderSession.blendModeManager.setBlendMode(i.blendMode));
                    for (var s = 0, n = e.length; n > s; s++)
                        this.renderSprite(e[s]);
                    this.flush()
                }
            }
            ,
            e.WebGLFastSpriteBatch.prototype.renderSprite = function(t) {
                if (t.visible && (t.texture.baseTexture === this.currentBaseTexture || t.texture.baseTexture.skipRender || (this.flush(),
                    this.currentBaseTexture = t.texture.baseTexture,
                    t.texture._uvs))) {
                    var e, i, s, n, r, o, a, h, l = this.vertices;
                    if (e = t.texture._uvs,
                        i = t.texture.frame.width,
                        s = t.texture.frame.height,
                        t.texture.trim) {
                        var u = t.texture.trim;
                        r = u.x - t.anchor.x * u.width,
                            n = r + t.texture.crop.width,
                            a = u.y - t.anchor.y * u.height,
                            o = a + t.texture.crop.height
                    } else
                        n = t.texture.frame.width * (1 - t.anchor.x),
                            r = t.texture.frame.width * -t.anchor.x,
                            o = t.texture.frame.height * (1 - t.anchor.y),
                            a = t.texture.frame.height * -t.anchor.y;
                    h = 4 * this.currentBatchSize * this.vertSize,
                        l[h++] = r,
                        l[h++] = a,
                        l[h++] = t.position.x,
                        l[h++] = t.position.y,
                        l[h++] = t.scale.x,
                        l[h++] = t.scale.y,
                        l[h++] = t.rotation,
                        l[h++] = e.x0,
                        l[h++] = e.y1,
                        l[h++] = t.alpha,
                        l[h++] = n,
                        l[h++] = a,
                        l[h++] = t.position.x,
                        l[h++] = t.position.y,
                        l[h++] = t.scale.x,
                        l[h++] = t.scale.y,
                        l[h++] = t.rotation,
                        l[h++] = e.x1,
                        l[h++] = e.y1,
                        l[h++] = t.alpha,
                        l[h++] = n,
                        l[h++] = o,
                        l[h++] = t.position.x,
                        l[h++] = t.position.y,
                        l[h++] = t.scale.x,
                        l[h++] = t.scale.y,
                        l[h++] = t.rotation,
                        l[h++] = e.x2,
                        l[h++] = e.y2,
                        l[h++] = t.alpha,
                        l[h++] = r,
                        l[h++] = o,
                        l[h++] = t.position.x,
                        l[h++] = t.position.y,
                        l[h++] = t.scale.x,
                        l[h++] = t.scale.y,
                        l[h++] = t.rotation,
                        l[h++] = e.x3,
                        l[h++] = e.y3,
                        l[h++] = t.alpha,
                        this.currentBatchSize++,
                    this.currentBatchSize >= this.size && this.flush()
                }
            }
            ,
            e.WebGLFastSpriteBatch.prototype.flush = function() {
                if (0 !== this.currentBatchSize) {
                    var t = this.gl;
                    if (this.currentBaseTexture._glTextures[t.id] || this.renderSession.renderer.updateTexture(this.currentBaseTexture, t),
                        t.bindTexture(t.TEXTURE_2D, this.currentBaseTexture._glTextures[t.id]),
                    this.currentBatchSize > .5 * this.size)
                        t.bufferSubData(t.ARRAY_BUFFER, 0, this.vertices);
                    else {
                        var e = this.vertices.subarray(0, 4 * this.currentBatchSize * this.vertSize);
                        t.bufferSubData(t.ARRAY_BUFFER, 0, e)
                    }
                    t.drawElements(t.TRIANGLES, 6 * this.currentBatchSize, t.UNSIGNED_SHORT, 0),
                        this.currentBatchSize = 0,
                        this.renderSession.drawCount++
                }
            }
            ,
            e.WebGLFastSpriteBatch.prototype.stop = function() {
                this.flush()
            }
            ,
            e.WebGLFastSpriteBatch.prototype.start = function() {
                var t = this.gl;
                t.activeTexture(t.TEXTURE0),
                    t.bindBuffer(t.ARRAY_BUFFER, this.vertexBuffer),
                    t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
                var e = this.renderSession.projection;
                t.uniform2f(this.shader.projectionVector, e.x, e.y),
                    t.uniformMatrix3fv(this.shader.uMatrix, !1, this.matrix);
                var i = 4 * this.vertSize;
                t.vertexAttribPointer(this.shader.aVertexPosition, 2, t.FLOAT, !1, i, 0),
                    t.vertexAttribPointer(this.shader.aPositionCoord, 2, t.FLOAT, !1, i, 8),
                    t.vertexAttribPointer(this.shader.aScale, 2, t.FLOAT, !1, i, 16),
                    t.vertexAttribPointer(this.shader.aRotation, 1, t.FLOAT, !1, i, 24),
                    t.vertexAttribPointer(this.shader.aTextureCoord, 2, t.FLOAT, !1, i, 28),
                    t.vertexAttribPointer(this.shader.colorAttribute, 1, t.FLOAT, !1, i, 36)
            }
            ,
            e.WebGLFilterManager = function() {
                this.filterStack = [],
                    this.offsetX = 0,
                    this.offsetY = 0
            }
            ,
            e.WebGLFilterManager.prototype.constructor = e.WebGLFilterManager,
            e.WebGLFilterManager.prototype.setContext = function(t) {
                this.gl = t,
                    this.texturePool = [],
                    this.initShaderBuffers()
            }
            ,
            e.WebGLFilterManager.prototype.begin = function(t, e) {
                this.renderSession = t,
                    this.defaultShader = t.shaderManager.defaultShader;
                var i = this.renderSession.projection;
                this.width = 2 * i.x,
                    this.height = 2 * -i.y,
                    this.buffer = e
            }
            ,
            e.WebGLFilterManager.prototype.pushFilter = function(t) {
                var i = this.gl
                    , s = this.renderSession.projection
                    , n = this.renderSession.offset;
                t._filterArea = t.target.filterArea || t.target.getBounds(),
                    this.filterStack.push(t);
                var r = t.filterPasses[0];
                this.offsetX += t._filterArea.x,
                    this.offsetY += t._filterArea.y;
                var o = this.texturePool.pop();
                o ? o.resize(this.width, this.height) : o = new e.FilterTexture(this.gl,this.width,this.height),
                    i.bindTexture(i.TEXTURE_2D, o.texture);
                var a = t._filterArea
                    , h = r.padding;
                a.x -= h,
                    a.y -= h,
                    a.width += 2 * h,
                    a.height += 2 * h,
                a.x < 0 && (a.x = 0),
                a.width > this.width && (a.width = this.width),
                a.y < 0 && (a.y = 0),
                a.height > this.height && (a.height = this.height),
                    i.bindFramebuffer(i.FRAMEBUFFER, o.frameBuffer),
                    i.viewport(0, 0, a.width, a.height),
                    s.x = a.width / 2,
                    s.y = -a.height / 2,
                    n.x = -a.x,
                    n.y = -a.y,
                    i.colorMask(!0, !0, !0, !0),
                    i.clearColor(0, 0, 0, 0),
                    i.clear(i.COLOR_BUFFER_BIT),
                    t._glFilterTexture = o
            }
            ,
            e.WebGLFilterManager.prototype.popFilter = function() {
                var t = this.gl
                    , i = this.filterStack.pop()
                    , s = i._filterArea
                    , n = i._glFilterTexture
                    , r = this.renderSession.projection
                    , o = this.renderSession.offset;
                if (i.filterPasses.length > 1) {
                    t.viewport(0, 0, s.width, s.height),
                        t.bindBuffer(t.ARRAY_BUFFER, this.vertexBuffer),
                        this.vertexArray[0] = 0,
                        this.vertexArray[1] = s.height,
                        this.vertexArray[2] = s.width,
                        this.vertexArray[3] = s.height,
                        this.vertexArray[4] = 0,
                        this.vertexArray[5] = 0,
                        this.vertexArray[6] = s.width,
                        this.vertexArray[7] = 0,
                        t.bufferSubData(t.ARRAY_BUFFER, 0, this.vertexArray),
                        t.bindBuffer(t.ARRAY_BUFFER, this.uvBuffer),
                        this.uvArray[2] = s.width / this.width,
                        this.uvArray[5] = s.height / this.height,
                        this.uvArray[6] = s.width / this.width,
                        this.uvArray[7] = s.height / this.height,
                        t.bufferSubData(t.ARRAY_BUFFER, 0, this.uvArray);
                    var a = n
                        , h = this.texturePool.pop();
                    h || (h = new e.FilterTexture(this.gl,this.width,this.height)),
                        h.resize(this.width, this.height),
                        t.bindFramebuffer(t.FRAMEBUFFER, h.frameBuffer),
                        t.clear(t.COLOR_BUFFER_BIT),
                        t.disable(t.BLEND);
                    for (var l = 0; l < i.filterPasses.length - 1; l++) {
                        var u = i.filterPasses[l];
                        t.bindFramebuffer(t.FRAMEBUFFER, h.frameBuffer),
                            t.activeTexture(t.TEXTURE0),
                            t.bindTexture(t.TEXTURE_2D, a.texture),
                            this.applyFilterPass(u, s, s.width, s.height);
                        var c = a;
                        a = h,
                            h = c
                    }
                    t.enable(t.BLEND),
                        n = a,
                        this.texturePool.push(h)
                }
                var d = i.filterPasses[i.filterPasses.length - 1];
                this.offsetX -= s.x,
                    this.offsetY -= s.y;
                var p = this.width
                    , f = this.height
                    , m = 0
                    , g = 0
                    , y = this.buffer;
                if (0 === this.filterStack.length)
                    t.colorMask(!0, !0, !0, !0);
                else {
                    var v = this.filterStack[this.filterStack.length - 1];
                    s = v._filterArea,
                        p = s.width,
                        f = s.height,
                        m = s.x,
                        g = s.y,
                        y = v._glFilterTexture.frameBuffer
                }
                r.x = p / 2,
                    r.y = -f / 2,
                    o.x = m,
                    o.y = g,
                    s = i._filterArea;
                var x = s.x - m
                    , _ = s.y - g;
                t.bindBuffer(t.ARRAY_BUFFER, this.vertexBuffer),
                    this.vertexArray[0] = x,
                    this.vertexArray[1] = _ + s.height,
                    this.vertexArray[2] = x + s.width,
                    this.vertexArray[3] = _ + s.height,
                    this.vertexArray[4] = x,
                    this.vertexArray[5] = _,
                    this.vertexArray[6] = x + s.width,
                    this.vertexArray[7] = _,
                    t.bufferSubData(t.ARRAY_BUFFER, 0, this.vertexArray),
                    t.bindBuffer(t.ARRAY_BUFFER, this.uvBuffer),
                    this.uvArray[2] = s.width / this.width,
                    this.uvArray[5] = s.height / this.height,
                    this.uvArray[6] = s.width / this.width,
                    this.uvArray[7] = s.height / this.height,
                    t.bufferSubData(t.ARRAY_BUFFER, 0, this.uvArray),
                    t.viewport(0, 0, p * this.renderSession.resolution, f * this.renderSession.resolution),
                    t.bindFramebuffer(t.FRAMEBUFFER, y),
                    t.activeTexture(t.TEXTURE0),
                    t.bindTexture(t.TEXTURE_2D, n.texture),
                    this.applyFilterPass(d, s, p, f),
                    this.texturePool.push(n),
                    i._glFilterTexture = null
            }
            ,
            e.WebGLFilterManager.prototype.applyFilterPass = function(t, i, s, n) {
                var r = this.gl
                    , o = t.shaders[r.id];
                o || (o = new e.PixiShader(r),
                    o.fragmentSrc = t.fragmentSrc,
                    o.uniforms = t.uniforms,
                    o.init(),
                    t.shaders[r.id] = o),
                    this.renderSession.shaderManager.setShader(o),
                    r.uniform2f(o.projectionVector, s / 2, -n / 2),
                    r.uniform2f(o.offsetVector, 0, 0),
                t.uniforms.dimensions && (t.uniforms.dimensions.value[0] = this.width,
                    t.uniforms.dimensions.value[1] = this.height,
                    t.uniforms.dimensions.value[2] = this.vertexArray[0],
                    t.uniforms.dimensions.value[3] = this.vertexArray[5]),
                    o.syncUniforms(),
                    r.bindBuffer(r.ARRAY_BUFFER, this.vertexBuffer),
                    r.vertexAttribPointer(o.aVertexPosition, 2, r.FLOAT, !1, 0, 0),
                    r.bindBuffer(r.ARRAY_BUFFER, this.uvBuffer),
                    r.vertexAttribPointer(o.aTextureCoord, 2, r.FLOAT, !1, 0, 0),
                    r.bindBuffer(r.ARRAY_BUFFER, this.colorBuffer),
                    r.vertexAttribPointer(o.colorAttribute, 2, r.FLOAT, !1, 0, 0),
                    r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, this.indexBuffer),
                    r.drawElements(r.TRIANGLES, 6, r.UNSIGNED_SHORT, 0),
                    this.renderSession.drawCount++
            }
            ,
            e.WebGLFilterManager.prototype.initShaderBuffers = function() {
                var t = this.gl;
                this.vertexBuffer = t.createBuffer(),
                    this.uvBuffer = t.createBuffer(),
                    this.colorBuffer = t.createBuffer(),
                    this.indexBuffer = t.createBuffer(),
                    this.vertexArray = new e.Float32Array([0, 0, 1, 0, 0, 1, 1, 1]),
                    t.bindBuffer(t.ARRAY_BUFFER, this.vertexBuffer),
                    t.bufferData(t.ARRAY_BUFFER, this.vertexArray, t.STATIC_DRAW),
                    this.uvArray = new e.Float32Array([0, 0, 1, 0, 0, 1, 1, 1]),
                    t.bindBuffer(t.ARRAY_BUFFER, this.uvBuffer),
                    t.bufferData(t.ARRAY_BUFFER, this.uvArray, t.STATIC_DRAW),
                    this.colorArray = new e.Float32Array([1, 16777215, 1, 16777215, 1, 16777215, 1, 16777215]),
                    t.bindBuffer(t.ARRAY_BUFFER, this.colorBuffer),
                    t.bufferData(t.ARRAY_BUFFER, this.colorArray, t.STATIC_DRAW),
                    t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.indexBuffer),
                    t.bufferData(t.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2, 1, 3, 2]), t.STATIC_DRAW)
            }
            ,
            e.WebGLFilterManager.prototype.destroy = function() {
                var t = this.gl;
                this.filterStack = null,
                    this.offsetX = 0,
                    this.offsetY = 0;
                for (var e = 0; e < this.texturePool.length; e++)
                    this.texturePool[e].destroy();
                this.texturePool = null,
                    t.deleteBuffer(this.vertexBuffer),
                    t.deleteBuffer(this.uvBuffer),
                    t.deleteBuffer(this.colorBuffer),
                    t.deleteBuffer(this.indexBuffer)
            }
            ,
            e.FilterTexture = function(t, i, s, n) {
                this.gl = t,
                    this.frameBuffer = t.createFramebuffer(),
                    this.texture = t.createTexture(),
                    n = n || e.scaleModes.DEFAULT,
                    t.bindTexture(t.TEXTURE_2D, this.texture),
                    t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, n === e.scaleModes.LINEAR ? t.LINEAR : t.NEAREST),
                    t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, n === e.scaleModes.LINEAR ? t.LINEAR : t.NEAREST),
                    t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE),
                    t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE),
                    t.bindFramebuffer(t.FRAMEBUFFER, this.frameBuffer),
                    t.bindFramebuffer(t.FRAMEBUFFER, this.frameBuffer),
                    t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, this.texture, 0),
                    this.renderBuffer = t.createRenderbuffer(),
                    t.bindRenderbuffer(t.RENDERBUFFER, this.renderBuffer),
                    t.framebufferRenderbuffer(t.FRAMEBUFFER, t.DEPTH_STENCIL_ATTACHMENT, t.RENDERBUFFER, this.renderBuffer),
                    this.resize(i, s)
            }
            ,
            e.FilterTexture.prototype.constructor = e.FilterTexture,
            e.FilterTexture.prototype.clear = function() {
                var t = this.gl;
                t.clearColor(0, 0, 0, 0),
                    t.clear(t.COLOR_BUFFER_BIT)
            }
            ,
            e.FilterTexture.prototype.resize = function(t, e) {
                if (this.width !== t || this.height !== e) {
                    this.width = t,
                        this.height = e;
                    var i = this.gl;
                    i.bindTexture(i.TEXTURE_2D, this.texture),
                        i.texImage2D(i.TEXTURE_2D, 0, i.RGBA, t, e, 0, i.RGBA, i.UNSIGNED_BYTE, null),
                        i.bindRenderbuffer(i.RENDERBUFFER, this.renderBuffer),
                        i.renderbufferStorage(i.RENDERBUFFER, i.DEPTH_STENCIL, t, e)
                }
            }
            ,
            e.FilterTexture.prototype.destroy = function() {
                var t = this.gl;
                t.deleteFramebuffer(this.frameBuffer),
                    t.deleteTexture(this.texture),
                    this.frameBuffer = null,
                    this.texture = null
            }
            ,
            e.CanvasBuffer = function(t, i) {
                this.width = t,
                    this.height = i,
                    this.canvas = e.CanvasPool.create(this, this.width, this.height),
                    this.context = this.canvas.getContext("2d"),
                    this.canvas.width = t,
                    this.canvas.height = i
            }
            ,
            e.CanvasBuffer.prototype.constructor = e.CanvasBuffer,
            e.CanvasBuffer.prototype.clear = function() {
                this.context.setTransform(1, 0, 0, 1, 0, 0),
                    this.context.clearRect(0, 0, this.width, this.height)
            }
            ,
            e.CanvasBuffer.prototype.resize = function(t, e) {
                this.width = this.canvas.width = t,
                    this.height = this.canvas.height = e
            }
            ,
            e.CanvasBuffer.prototype.destroy = function() {
                e.CanvasPool.remove(this)
            }
            ,
            e.CanvasMaskManager = function() {}
            ,
            e.CanvasMaskManager.prototype.constructor = e.CanvasMaskManager,
            e.CanvasMaskManager.prototype.pushMask = function(t, i) {
                var s = i.context;
                s.save();
                var n = t.alpha
                    , r = t.worldTransform
                    , o = i.resolution;
                s.setTransform(r.a * o, r.b * o, r.c * o, r.d * o, r.tx * o, r.ty * o),
                    e.CanvasGraphics.renderGraphicsMask(t, s),
                    s.clip(),
                    t.worldAlpha = n
            }
            ,
            e.CanvasMaskManager.prototype.popMask = function(t) {
                t.context.restore()
            }
            ,
            e.CanvasTinter = function() {}
            ,
            e.CanvasTinter.getTintedTexture = function(t, i) {
                var s = t.tintedTexture || e.CanvasPool.create(this);
                return e.CanvasTinter.tintMethod(t.texture, i, s),
                    s
            }
            ,
            e.CanvasTinter.tintWithMultiply = function(t, e, i) {
                var s = i.getContext("2d")
                    , n = t.crop;
                (i.width !== n.width || i.height !== n.height) && (i.width = n.width,
                    i.height = n.height),
                    s.clearRect(0, 0, n.width, n.height),
                    s.fillStyle = "#" + ("00000" + (0 | e).toString(16)).substr(-6),
                    s.fillRect(0, 0, n.width, n.height),
                    s.globalCompositeOperation = "multiply",
                    s.drawImage(t.baseTexture.source, n.x, n.y, n.width, n.height, 0, 0, n.width, n.height),
                    s.globalCompositeOperation = "destination-atop",
                    s.drawImage(t.baseTexture.source, n.x, n.y, n.width, n.height, 0, 0, n.width, n.height)
            }
            ,
            e.CanvasTinter.tintWithPerPixel = function(t, i, s) {
                var n = s.getContext("2d")
                    , r = t.crop;
                s.width = r.width,
                    s.height = r.height,
                    n.globalCompositeOperation = "copy",
                    n.drawImage(t.baseTexture.source, r.x, r.y, r.width, r.height, 0, 0, r.width, r.height);
                for (var o = e.hex2rgb(i), a = o[0], h = o[1], l = o[2], u = n.getImageData(0, 0, r.width, r.height), c = u.data, d = 0; d < c.length; d += 4)
                    if (c[d + 0] *= a,
                        c[d + 1] *= h,
                        c[d + 2] *= l,
                        !e.CanvasTinter.canHandleAlpha) {
                        var p = c[d + 3];
                        c[d + 0] /= 255 / p,
                            c[d + 1] /= 255 / p,
                            c[d + 2] /= 255 / p
                    }
                n.putImageData(u, 0, 0)
            }
            ,
            e.CanvasTinter.checkInverseAlpha = function() {
                var t = new e.CanvasBuffer(2,1);
                t.context.fillStyle = "rgba(10, 20, 30, 0.5)",
                    t.context.fillRect(0, 0, 1, 1);
                var i = t.context.getImageData(0, 0, 1, 1);
                if (null === i)
                    return !1;
                t.context.putImageData(i, 1, 0);
                var s = t.context.getImageData(1, 0, 1, 1);
                return s.data[0] === i.data[0] && s.data[1] === i.data[1] && s.data[2] === i.data[2] && s.data[3] === i.data[3]
            }
            ,
            e.CanvasTinter.canHandleAlpha = e.CanvasTinter.checkInverseAlpha(),
            e.CanvasTinter.canUseMultiply = e.canUseNewCanvasBlendModes(),
            e.CanvasTinter.tintMethod = e.CanvasTinter.canUseMultiply ? e.CanvasTinter.tintWithMultiply : e.CanvasTinter.tintWithPerPixel,
            e.CanvasRenderer = function(t) {
                this.game = t,
                e.defaultRenderer || (e.defaultRenderer = this),
                    this.type = e.CANVAS_RENDERER,
                    this.resolution = t.resolution,
                    this.clearBeforeRender = t.clearBeforeRender,
                    this.transparent = t.transparent,
                    this.autoResize = !1,
                    this.width = t.width * this.resolution,
                    this.height = t.height * this.resolution,
                    this.view = t.canvas,
                    this.context = this.view.getContext("2d", {
                        alpha: this.transparent
                    }),
                    this.refresh = !0,
                    this.count = 0,
                    this.maskManager = new e.CanvasMaskManager,
                    this.renderSession = {
                        context: this.context,
                        maskManager: this.maskManager,
                        scaleMode: null,
                        smoothProperty: Phaser.Canvas.getSmoothingPrefix(this.context),
                        roundPixels: !1
                    },
                    this.mapBlendModes(),
                    this.resize(this.width, this.height)
            }
            ,
            e.CanvasRenderer.prototype.constructor = e.CanvasRenderer,
            e.CanvasRenderer.prototype.render = function(t) {
                t.updateTransform(),
                    this.context.setTransform(1, 0, 0, 1, 0, 0),
                    this.context.globalAlpha = 1,
                    this.renderSession.currentBlendMode = 0,
                    this.context.globalCompositeOperation = "source-over",
                navigator.isCocoonJS && this.view.screencanvas && (this.context.fillStyle = "black",
                    this.context.clear()),
                this.clearBeforeRender && (this.transparent ? this.context.clearRect(0, 0, this.width, this.height) : (this.context.fillStyle = t._bgColor.rgba,
                    this.context.fillRect(0, 0, this.width, this.height))),
                    this.renderDisplayObject(t)
            }
            ,
            e.CanvasRenderer.prototype.destroy = function(t) {
                void 0 === t && (t = !0),
                t && this.view.parent && this.view.parent.removeChild(this.view),
                    this.view = null,
                    this.context = null,
                    this.maskManager = null,
                    this.renderSession = null
            }
            ,
            e.CanvasRenderer.prototype.resize = function(t, e) {
                this.width = t * this.resolution,
                    this.height = e * this.resolution,
                    this.view.width = this.width,
                    this.view.height = this.height,
                this.autoResize && (this.view.style.width = this.width / this.resolution + "px",
                    this.view.style.height = this.height / this.resolution + "px")
            }
            ,
            e.CanvasRenderer.prototype.renderDisplayObject = function(t, e, i) {
                this.renderSession.context = e || this.context,
                    this.renderSession.resolution = this.resolution,
                    t._renderCanvas(this.renderSession, i)
            }
            ,
            e.CanvasRenderer.prototype.mapBlendModes = function() {
                if (!e.blendModesCanvas) {
                    var t = []
                        , i = e.blendModes
                        , s = e.canUseNewCanvasBlendModes();
                    t[i.NORMAL] = "source-over",
                        t[i.ADD] = "lighter",
                        t[i.MULTIPLY] = s ? "multiply" : "source-over",
                        t[i.SCREEN] = s ? "screen" : "source-over",
                        t[i.OVERLAY] = s ? "overlay" : "source-over",
                        t[i.DARKEN] = s ? "darken" : "source-over",
                        t[i.LIGHTEN] = s ? "lighten" : "source-over",
                        t[i.COLOR_DODGE] = s ? "color-dodge" : "source-over",
                        t[i.COLOR_BURN] = s ? "color-burn" : "source-over",
                        t[i.HARD_LIGHT] = s ? "hard-light" : "source-over",
                        t[i.SOFT_LIGHT] = s ? "soft-light" : "source-over",
                        t[i.DIFFERENCE] = s ? "difference" : "source-over",
                        t[i.EXCLUSION] = s ? "exclusion" : "source-over",
                        t[i.HUE] = s ? "hue" : "source-over",
                        t[i.SATURATION] = s ? "saturation" : "source-over",
                        t[i.COLOR] = s ? "color" : "source-over",
                        t[i.LUMINOSITY] = s ? "luminosity" : "source-over",
                        e.blendModesCanvas = t
                }
            }
            ,
            e.BaseTextureCache = {},
            e.BaseTextureCacheIdGenerator = 0,
            e.BaseTexture = function(t, i) {
                this.resolution = 1,
                    this.width = 100,
                    this.height = 100,
                    this.scaleMode = i || e.scaleModes.DEFAULT,
                    this.hasLoaded = !1,
                    this.source = t,
                    this._UID = e._UID++,
                    this.premultipliedAlpha = !0,
                    this._glTextures = [],
                    this.mipmap = !1,
                    this._dirty = [!0, !0, !0, !0],
                t && ((this.source.complete || this.source.getContext) && this.source.width && this.source.height && (this.hasLoaded = !0,
                    this.width = this.source.naturalWidth || this.source.width,
                    this.height = this.source.naturalHeight || this.source.height,
                    this.dirty()),
                    this.skipRender = !1,
                    this.imageUrl = null,
                    this._powerOf2 = !1)
            }
            ,
            e.BaseTexture.prototype.constructor = e.BaseTexture,
            e.BaseTexture.prototype.forceLoaded = function(t, e) {
                this.hasLoaded = !0,
                    this.width = t,
                    this.height = e,
                    this.dirty()
            }
            ,
            e.BaseTexture.prototype.destroy = function() {
                this.imageUrl ? (delete e.BaseTextureCache[this.imageUrl],
                    delete e.TextureCache[this.imageUrl],
                    this.imageUrl = null,
                navigator.isCocoonJS || (this.source.src = "")) : this.source && this.source._pixiId && (e.CanvasPool.removeByCanvas(this.source),
                    delete e.BaseTextureCache[this.source._pixiId]),
                    this.source = null,
                    this.unloadFromGPU()
            }
            ,
            e.BaseTexture.prototype.updateSourceImage = function(t) {
                this.hasLoaded = !1,
                    this.source.src = null,
                    this.source.src = t
            }
            ,
            e.BaseTexture.prototype.dirty = function() {
                for (var t = 0; t < this._glTextures.length; t++)
                    this._dirty[t] = !0
            }
            ,
            e.BaseTexture.prototype.unloadFromGPU = function() {
                this.dirty();
                for (var t = this._glTextures.length - 1; t >= 0; t--) {
                    var i = this._glTextures[t]
                        , s = e.glContexts[t];
                    s && i && s.deleteTexture(i)
                }
                this._glTextures.length = 0,
                    this.dirty()
            }
            ,
            e.BaseTexture.fromImage = function(t, i, s) {
                var n = e.BaseTextureCache[t];
                if (void 0 === i && -1 === t.indexOf("data:") && (i = !0),
                    !n) {
                    var r = new Image;
                    i && (r.crossOrigin = ""),
                        r.src = t,
                        n = new e.BaseTexture(r,s),
                        n.imageUrl = t,
                        e.BaseTextureCache[t] = n,
                    -1 !== t.indexOf(e.RETINA_PREFIX + ".") && (n.resolution = 2)
                }
                return n
            }
            ,
            e.BaseTexture.fromCanvas = function(t, i) {
                t._pixiId || (t._pixiId = "canvas_" + e.TextureCacheIdGenerator++),
                0 === t.width && (t.width = 1),
                0 === t.height && (t.height = 1);
                var s = e.BaseTextureCache[t._pixiId];
                return s || (s = new e.BaseTexture(t,i),
                    e.BaseTextureCache[t._pixiId] = s),
                    s
            }
            ,
            e.TextureCache = {},
            e.FrameCache = {},
            e.TextureSilentFail = !1,
            e.TextureCacheIdGenerator = 0,
            e.Texture = function(t, i, s, n) {
                this.noFrame = !1,
                i || (this.noFrame = !0,
                    i = new e.Rectangle(0,0,1,1)),
                t instanceof e.Texture && (t = t.baseTexture),
                    this.baseTexture = t,
                    this.frame = i,
                    this.trim = n,
                    this.valid = !1,
                    this.isTiling = !1,
                    this.requiresUpdate = !1,
                    this.requiresReTint = !1,
                    this._uvs = null,
                    this.width = 0,
                    this.height = 0,
                    this.crop = s || new e.Rectangle(0,0,1,1),
                t.hasLoaded && (this.noFrame && (i = new e.Rectangle(0,0,t.width,t.height)),
                    this.setFrame(i))
            }
            ,
            e.Texture.prototype.constructor = e.Texture,
            e.Texture.prototype.onBaseTextureLoaded = function() {
                var t = this.baseTexture;
                this.noFrame && (this.frame = new e.Rectangle(0,0,t.width,t.height)),
                    this.setFrame(this.frame)
            }
            ,
            e.Texture.prototype.destroy = function(t) {
                t && this.baseTexture.destroy(),
                    this.valid = !1
            }
            ,
            e.Texture.prototype.setFrame = function(t) {
                if (this.noFrame = !1,
                    this.frame = t,
                    this.width = t.width,
                    this.height = t.height,
                    this.crop.x = t.x,
                    this.crop.y = t.y,
                    this.crop.width = t.width,
                    this.crop.height = t.height,
                !this.trim && (t.x + t.width > this.baseTexture.width || t.y + t.height > this.baseTexture.height)) {
                    if (!e.TextureSilentFail)
                        throw new Error("Texture Error: frame does not fit inside the base Texture dimensions " + this);
                    return void (this.valid = !1)
                }
                this.valid = t && t.width && t.height && this.baseTexture.source && this.baseTexture.hasLoaded,
                this.trim && (this.width = this.trim.width,
                    this.height = this.trim.height,
                    this.frame.width = this.trim.width,
                    this.frame.height = this.trim.height),
                this.valid && this._updateUvs()
            }
            ,
            e.Texture.prototype._updateUvs = function() {
                this._uvs || (this._uvs = new e.TextureUvs);
                var t = this.crop
                    , i = this.baseTexture.width
                    , s = this.baseTexture.height;
                this._uvs.x0 = t.x / i,
                    this._uvs.y0 = t.y / s,
                    this._uvs.x1 = (t.x + t.width) / i,
                    this._uvs.y1 = t.y / s,
                    this._uvs.x2 = (t.x + t.width) / i,
                    this._uvs.y2 = (t.y + t.height) / s,
                    this._uvs.x3 = t.x / i,
                    this._uvs.y3 = (t.y + t.height) / s
            }
            ,
            e.Texture.fromImage = function(t, i, s) {
                var n = e.TextureCache[t];
                return n || (n = new e.Texture(e.BaseTexture.fromImage(t, i, s)),
                    e.TextureCache[t] = n),
                    n
            }
            ,
            e.Texture.fromFrame = function(t) {
                var i = e.TextureCache[t];
                if (!i)
                    throw new Error('The frameId "' + t + '" does not exist in the texture cache ');
                return i
            }
            ,
            e.Texture.fromCanvas = function(t, i) {
                var s = e.BaseTexture.fromCanvas(t, i);
                return new e.Texture(s)
            }
            ,
            e.Texture.addTextureToCache = function(t, i) {
                e.TextureCache[i] = t
            }
            ,
            e.Texture.removeTextureFromCache = function(t) {
                var i = e.TextureCache[t];
                return delete e.TextureCache[t],
                    delete e.BaseTextureCache[t],
                    i
            }
            ,
            e.TextureUvs = function() {
                this.x0 = 0,
                    this.y0 = 0,
                    this.x1 = 0,
                    this.y1 = 0,
                    this.x2 = 0,
                    this.y2 = 0,
                    this.x3 = 0,
                    this.y3 = 0
            }
            ,
            e.RenderTexture = function(t, i, s, n, r) {
                if (this.width = t || 100,
                    this.height = i || 100,
                    this.resolution = r || 1,
                    this.frame = new e.Rectangle(0,0,this.width * this.resolution,this.height * this.resolution),
                    this.crop = new e.Rectangle(0,0,this.width * this.resolution,this.height * this.resolution),
                    this.baseTexture = new e.BaseTexture,
                    this.baseTexture.width = this.width * this.resolution,
                    this.baseTexture.height = this.height * this.resolution,
                    this.baseTexture._glTextures = [],
                    this.baseTexture.resolution = this.resolution,
                    this.baseTexture.scaleMode = n || e.scaleModes.DEFAULT,
                    this.baseTexture.hasLoaded = !0,
                    e.Texture.call(this, this.baseTexture, new e.Rectangle(0,0,this.width * this.resolution,this.height * this.resolution)),
                    this.renderer = s || e.defaultRenderer,
                this.renderer.type === e.WEBGL_RENDERER) {
                    var o = this.renderer.gl;
                    this.baseTexture._dirty[o.id] = !1,
                        this.textureBuffer = new e.FilterTexture(o,this.width,this.height,this.baseTexture.scaleMode),
                        this.baseTexture._glTextures[o.id] = this.textureBuffer.texture,
                        this.render = this.renderWebGL,
                        this.projection = new e.Point(.5 * this.width,.5 * -this.height)
                } else
                    this.render = this.renderCanvas,
                        this.textureBuffer = new e.CanvasBuffer(this.width * this.resolution,this.height * this.resolution),
                        this.baseTexture.source = this.textureBuffer.canvas;
                this.valid = !0,
                    this.tempMatrix = new Phaser.Matrix,
                    this._updateUvs()
            }
            ,
            e.RenderTexture.prototype = Object.create(e.Texture.prototype),
            e.RenderTexture.prototype.constructor = e.RenderTexture,
            e.RenderTexture.prototype.resize = function(t, i, s) {
                (t !== this.width || i !== this.height) && (this.valid = t > 0 && i > 0,
                    this.width = t,
                    this.height = i,
                    this.frame.width = this.crop.width = t * this.resolution,
                    this.frame.height = this.crop.height = i * this.resolution,
                s && (this.baseTexture.width = this.width * this.resolution,
                    this.baseTexture.height = this.height * this.resolution),
                this.renderer.type === e.WEBGL_RENDERER && (this.projection.x = this.width / 2,
                    this.projection.y = -this.height / 2),
                this.valid && this.textureBuffer.resize(this.width, this.height))
            }
            ,
            e.RenderTexture.prototype.clear = function() {
                this.valid && (this.renderer.type === e.WEBGL_RENDERER && this.renderer.gl.bindFramebuffer(this.renderer.gl.FRAMEBUFFER, this.textureBuffer.frameBuffer),
                    this.textureBuffer.clear())
            }
            ,
            e.RenderTexture.prototype.renderWebGL = function(t, e, i) {
                if (this.valid && 0 !== t.alpha) {
                    var s = t.worldTransform;
                    s.identity(),
                        s.translate(0, 2 * this.projection.y),
                    e && s.append(e),
                        s.scale(1, -1);
                    for (var n = 0; n < t.children.length; n++)
                        t.children[n].updateTransform();
                    var r = this.renderer.gl;
                    r.viewport(0, 0, this.width * this.resolution, this.height * this.resolution),
                        r.bindFramebuffer(r.FRAMEBUFFER, this.textureBuffer.frameBuffer),
                    i && this.textureBuffer.clear(),
                        this.renderer.spriteBatch.dirty = !0,
                        this.renderer.renderDisplayObject(t, this.projection, this.textureBuffer.frameBuffer, e),
                        this.renderer.spriteBatch.dirty = !0
                }
            }
            ,
            e.RenderTexture.prototype.renderCanvas = function(t, e, i) {
                if (this.valid && 0 !== t.alpha) {
                    var s = t.worldTransform;
                    s.identity(),
                    e && s.append(e);
                    for (var n = 0; n < t.children.length; n++)
                        t.children[n].updateTransform();
                    i && this.textureBuffer.clear();
                    var r = this.renderer.resolution;
                    this.renderer.resolution = this.resolution,
                        this.renderer.renderDisplayObject(t, this.textureBuffer.context, e),
                        this.renderer.resolution = r
                }
            }
            ,
            e.RenderTexture.prototype.getImage = function() {
                var t = new Image;
                return t.src = this.getBase64(),
                    t
            }
            ,
            e.RenderTexture.prototype.getBase64 = function() {
                return this.getCanvas().toDataURL()
            }
            ,
            e.RenderTexture.prototype.getCanvas = function() {
                if (this.renderer.type === e.WEBGL_RENDERER) {
                    var t = this.renderer.gl
                        , i = this.textureBuffer.width
                        , s = this.textureBuffer.height
                        , n = new Uint8Array(4 * i * s);
                    t.bindFramebuffer(t.FRAMEBUFFER, this.textureBuffer.frameBuffer),
                        t.readPixels(0, 0, i, s, t.RGBA, t.UNSIGNED_BYTE, n),
                        t.bindFramebuffer(t.FRAMEBUFFER, null);
                    var r = new e.CanvasBuffer(i,s)
                        , o = r.context.getImageData(0, 0, i, s);
                    return o.data.set(n),
                        r.context.putImageData(o, 0, 0),
                        r.canvas
                }
                return this.textureBuffer.canvas
            }
            ,
            e.AbstractFilter = function(t, e) {
                this.passes = [this],
                    this.shaders = [],
                    this.dirty = !0,
                    this.padding = 0,
                    this.uniforms = e || {},
                    this.fragmentSrc = t || []
            }
            ,
            e.AbstractFilter.prototype.constructor = e.AbstractFilter,
            e.AbstractFilter.prototype.syncUniforms = function() {
                for (var t = 0, e = this.shaders.length; e > t; t++)
                    this.shaders[t].dirty = !0
            }
            ,
            e.Strip = function(t) {
                e.DisplayObjectContainer.call(this),
                    this.texture = t,
                    this.uvs = new e.Float32Array([0, 1, 1, 1, 1, 0, 0, 1]),
                    this.vertices = new e.Float32Array([0, 0, 100, 0, 100, 100, 0, 100]),
                    this.colors = new e.Float32Array([1, 1, 1, 1]),
                    this.indices = new e.Uint16Array([0, 1, 2, 3]),
                    this.dirty = !0,
                    this.blendMode = e.blendModes.NORMAL,
                    this.canvasPadding = 0,
                    this.drawMode = e.Strip.DrawModes.TRIANGLE_STRIP
            }
            ,
            e.Strip.prototype = Object.create(e.DisplayObjectContainer.prototype),
            e.Strip.prototype.constructor = e.Strip,
            e.Strip.prototype._renderWebGL = function(t) {
                !this.visible || this.alpha <= 0 || (t.spriteBatch.stop(),
                this._vertexBuffer || this._initWebGL(t),
                    t.shaderManager.setShader(t.shaderManager.stripShader),
                    this._renderStrip(t),
                    t.spriteBatch.start())
            }
            ,
            e.Strip.prototype._initWebGL = function(t) {
                var e = t.gl;
                this._vertexBuffer = e.createBuffer(),
                    this._indexBuffer = e.createBuffer(),
                    this._uvBuffer = e.createBuffer(),
                    this._colorBuffer = e.createBuffer(),
                    e.bindBuffer(e.ARRAY_BUFFER, this._vertexBuffer),
                    e.bufferData(e.ARRAY_BUFFER, this.vertices, e.DYNAMIC_DRAW),
                    e.bindBuffer(e.ARRAY_BUFFER, this._uvBuffer),
                    e.bufferData(e.ARRAY_BUFFER, this.uvs, e.STATIC_DRAW),
                    e.bindBuffer(e.ARRAY_BUFFER, this._colorBuffer),
                    e.bufferData(e.ARRAY_BUFFER, this.colors, e.STATIC_DRAW),
                    e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, this._indexBuffer),
                    e.bufferData(e.ELEMENT_ARRAY_BUFFER, this.indices, e.STATIC_DRAW)
            }
            ,
            e.Strip.prototype._renderStrip = function(t) {
                var i = t.gl
                    , s = t.projection
                    , n = t.offset
                    , r = t.shaderManager.stripShader
                    , o = this.drawMode === e.Strip.DrawModes.TRIANGLE_STRIP ? i.TRIANGLE_STRIP : i.TRIANGLES;
                t.blendModeManager.setBlendMode(this.blendMode),
                    i.uniformMatrix3fv(r.translationMatrix, !1, this.worldTransform.toArray(!0)),
                    i.uniform2f(r.projectionVector, s.x, -s.y),
                    i.uniform2f(r.offsetVector, -n.x, -n.y),
                    i.uniform1f(r.alpha, this.worldAlpha),
                    this.dirty ? (this.dirty = !1,
                        i.bindBuffer(i.ARRAY_BUFFER, this._vertexBuffer),
                        i.bufferData(i.ARRAY_BUFFER, this.vertices, i.STATIC_DRAW),
                        i.vertexAttribPointer(r.aVertexPosition, 2, i.FLOAT, !1, 0, 0),
                        i.bindBuffer(i.ARRAY_BUFFER, this._uvBuffer),
                        i.bufferData(i.ARRAY_BUFFER, this.uvs, i.STATIC_DRAW),
                        i.vertexAttribPointer(r.aTextureCoord, 2, i.FLOAT, !1, 0, 0),
                        i.activeTexture(i.TEXTURE0),
                        this.texture.baseTexture._dirty[i.id] ? t.renderer.updateTexture(this.texture.baseTexture) : i.bindTexture(i.TEXTURE_2D, this.texture.baseTexture._glTextures[i.id]),
                        i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, this._indexBuffer),
                        i.bufferData(i.ELEMENT_ARRAY_BUFFER, this.indices, i.STATIC_DRAW)) : (i.bindBuffer(i.ARRAY_BUFFER, this._vertexBuffer),
                        i.bufferSubData(i.ARRAY_BUFFER, 0, this.vertices),
                        i.vertexAttribPointer(r.aVertexPosition, 2, i.FLOAT, !1, 0, 0),
                        i.bindBuffer(i.ARRAY_BUFFER, this._uvBuffer),
                        i.vertexAttribPointer(r.aTextureCoord, 2, i.FLOAT, !1, 0, 0),
                        i.activeTexture(i.TEXTURE0),
                        this.texture.baseTexture._dirty[i.id] ? t.renderer.updateTexture(this.texture.baseTexture) : i.bindTexture(i.TEXTURE_2D, this.texture.baseTexture._glTextures[i.id]),
                        i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, this._indexBuffer)),
                    i.drawElements(o, this.indices.length, i.UNSIGNED_SHORT, 0)
            }
            ,
            e.Strip.prototype._renderCanvas = function(t) {
                var i = t.context
                    , s = this.worldTransform;
                t.roundPixels ? i.setTransform(s.a, s.b, s.c, s.d, 0 | s.tx, 0 | s.ty) : i.setTransform(s.a, s.b, s.c, s.d, s.tx, s.ty),
                    this.drawMode === e.Strip.DrawModes.TRIANGLE_STRIP ? this._renderCanvasTriangleStrip(i) : this._renderCanvasTriangles(i)
            }
            ,
            e.Strip.prototype._renderCanvasTriangleStrip = function(t) {
                var e = this.vertices
                    , i = this.uvs
                    , s = e.length / 2;
                this.count++;
                for (var n = 0; s - 2 > n; n++) {
                    var r = 2 * n;
                    this._renderCanvasDrawTriangle(t, e, i, r, r + 2, r + 4)
                }
            }
            ,
            e.Strip.prototype._renderCanvasTriangles = function(t) {
                var e = this.vertices
                    , i = this.uvs
                    , s = this.indices
                    , n = s.length;
                this.count++;
                for (var r = 0; n > r; r += 3) {
                    var o = 2 * s[r]
                        , a = 2 * s[r + 1]
                        , h = 2 * s[r + 2];
                    this._renderCanvasDrawTriangle(t, e, i, o, a, h)
                }
            }
            ,
            e.Strip.prototype._renderCanvasDrawTriangle = function(t, e, i, s, n, r) {
                var o = this.texture.baseTexture.source
                    , a = this.texture.width
                    , h = this.texture.height
                    , l = e[s]
                    , u = e[n]
                    , c = e[r]
                    , d = e[s + 1]
                    , p = e[n + 1]
                    , f = e[r + 1]
                    , m = i[s] * a
                    , g = i[n] * a
                    , y = i[r] * a
                    , v = i[s + 1] * h
                    , x = i[n + 1] * h
                    , _ = i[r + 1] * h;
                if (this.canvasPadding > 0) {
                    var b = this.canvasPadding / this.worldTransform.a
                        , w = this.canvasPadding / this.worldTransform.d
                        , T = (l + u + c) / 3
                        , S = (d + p + f) / 3
                        , C = l - T
                        , P = d - S
                        , A = Math.sqrt(C * C + P * P);
                    l = T + C / A * (A + b),
                        d = S + P / A * (A + w),
                        C = u - T,
                        P = p - S,
                        A = Math.sqrt(C * C + P * P),
                        u = T + C / A * (A + b),
                        p = S + P / A * (A + w),
                        C = c - T,
                        P = f - S,
                        A = Math.sqrt(C * C + P * P),
                        c = T + C / A * (A + b),
                        f = S + P / A * (A + w)
                }
                t.save(),
                    t.beginPath(),
                    t.moveTo(l, d),
                    t.lineTo(u, p),
                    t.lineTo(c, f),
                    t.closePath(),
                    t.clip();
                var R = m * x + v * y + g * _ - x * y - v * g - m * _
                    , I = l * x + v * c + u * _ - x * c - v * u - l * _
                    , M = m * u + l * y + g * c - u * y - l * g - m * c
                    , E = m * x * c + v * u * y + l * g * _ - l * x * y - v * g * c - m * u * _
                    , O = d * x + v * f + p * _ - x * f - v * p - d * _
                    , L = m * p + d * y + g * f - p * y - d * g - m * f
                    , D = m * x * f + v * p * y + d * g * _ - d * x * y - v * g * f - m * p * _;
                t.transform(I / R, O / R, M / R, L / R, E / R, D / R),
                    t.drawImage(o, 0, 0),
                    t.restore()
            }
            ,
            e.Strip.prototype.renderStripFlat = function(t) {
                var e = this.context
                    , i = t.vertices
                    , s = i.length / 2;
                this.count++,
                    e.beginPath();
                for (var n = 1; s - 2 > n; n++) {
                    var r = 2 * n
                        , o = i[r]
                        , a = i[r + 2]
                        , h = i[r + 4]
                        , l = i[r + 1]
                        , u = i[r + 3]
                        , c = i[r + 5];
                    e.moveTo(o, l),
                        e.lineTo(a, u),
                        e.lineTo(h, c)
                }
                e.fillStyle = "#FF0000",
                    e.fill(),
                    e.closePath()
            }
            ,
            e.Strip.prototype.onTextureUpdate = function() {
                this.updateFrame = !0
            }
            ,
            e.Strip.prototype.getBounds = function(t) {
                for (var i = t || this.worldTransform, s = i.a, n = i.b, r = i.c, o = i.d, a = i.tx, h = i.ty, l = -(1 / 0), u = -(1 / 0), c = 1 / 0, d = 1 / 0, p = this.vertices, f = 0, m = p.length; m > f; f += 2) {
                    var g = p[f]
                        , y = p[f + 1]
                        , v = s * g + r * y + a
                        , x = o * y + n * g + h;
                    c = c > v ? v : c,
                        d = d > x ? x : d,
                        l = v > l ? v : l,
                        u = x > u ? x : u
                }
                if (c === -(1 / 0) || u === 1 / 0)
                    return e.EmptyRectangle;
                var _ = this._bounds;
                return _.x = c,
                    _.width = l - c,
                    _.y = d,
                    _.height = u - d,
                    this._currentBounds = _,
                    _
            }
            ,
            e.Strip.DrawModes = {
                TRIANGLE_STRIP: 0,
                TRIANGLES: 1
            },
            e.Rope = function(t, i) {
                e.Strip.call(this, t),
                    this.points = i,
                    this.vertices = new e.Float32Array(4 * i.length),
                    this.uvs = new e.Float32Array(4 * i.length),
                    this.colors = new e.Float32Array(2 * i.length),
                    this.indices = new e.Uint16Array(2 * i.length),
                    this.refresh()
            }
            ,
            e.Rope.prototype = Object.create(e.Strip.prototype),
            e.Rope.prototype.constructor = e.Rope,
            e.Rope.prototype.refresh = function() {
                var t = this.points;
                if (!(t.length < 1)) {
                    var e = this.uvs
                        , i = t[0]
                        , s = this.indices
                        , n = this.colors;
                    this.count -= .2,
                        e[0] = 0,
                        e[1] = 0,
                        e[2] = 0,
                        e[3] = 1,
                        n[0] = 1,
                        n[1] = 1,
                        s[0] = 0,
                        s[1] = 1;
                    for (var r, o, a, h = t.length, l = 1; h > l; l++)
                        r = t[l],
                            o = 4 * l,
                            a = l / (h - 1),
                            l % 2 ? (e[o] = a,
                                e[o + 1] = 0,
                                e[o + 2] = a,
                                e[o + 3] = 1) : (e[o] = a,
                                e[o + 1] = 0,
                                e[o + 2] = a,
                                e[o + 3] = 1),
                            o = 2 * l,
                            n[o] = 1,
                            n[o + 1] = 1,
                            o = 2 * l,
                            s[o] = o,
                            s[o + 1] = o + 1,
                            i = r
                }
            }
            ,
            e.Rope.prototype.updateTransform = function() {
                var t = this.points;
                if (!(t.length < 1)) {
                    var i, s = t[0], n = {
                        x: 0,
                        y: 0
                    };
                    this.count -= .2;
                    for (var r, o, a, h, l, u = this.vertices, c = t.length, d = 0; c > d; d++)
                        r = t[d],
                            o = 4 * d,
                            i = d < t.length - 1 ? t[d + 1] : r,
                            n.y = -(i.x - s.x),
                            n.x = i.y - s.y,
                            a = 10 * (1 - d / (c - 1)),
                        a > 1 && (a = 1),
                            h = Math.sqrt(n.x * n.x + n.y * n.y),
                            l = this.texture.height / 2,
                            n.x /= h,
                            n.y /= h,
                            n.x *= l,
                            n.y *= l,
                            u[o] = r.x + n.x,
                            u[o + 1] = r.y + n.y,
                            u[o + 2] = r.x - n.x,
                            u[o + 3] = r.y - n.y,
                            s = r;
                    e.DisplayObjectContainer.prototype.updateTransform.call(this)
                }
            }
            ,
            e.Rope.prototype.setTexture = function(t) {
                this.texture = t
            }
            ,
            e.TilingSprite = function(t, i, s) {
                e.Sprite.call(this, t),
                    this._width = i || 128,
                    this._height = s || 128,
                    this.tileScale = new e.Point(1,1),
                    this.tileScaleOffset = new e.Point(1,1),
                    this.tilePosition = new e.Point,
                    this.renderable = !0,
                    this.tint = 16777215,
                    this.textureDebug = !1,
                    this.blendMode = e.blendModes.NORMAL,
                    this.canvasBuffer = null,
                    this.tilingTexture = null,
                    this.tilePattern = null,
                    this.refreshTexture = !0,
                    this.frameWidth = 0,
                    this.frameHeight = 0
            }
            ,
            e.TilingSprite.prototype = Object.create(e.Sprite.prototype),
            e.TilingSprite.prototype.constructor = e.TilingSprite,
            e.TilingSprite.prototype.setTexture = function(t) {
                this.texture !== t && (this.texture = t,
                    this.refreshTexture = !0,
                    this.cachedTint = 16777215)
            }
            ,
            e.TilingSprite.prototype._renderWebGL = function(t) {
                if (this.visible !== !1 && 0 !== this.alpha) {
                    if (this._mask && (t.spriteBatch.stop(),
                        t.maskManager.pushMask(this.mask, t),
                        t.spriteBatch.start()),
                    this._filters && (t.spriteBatch.flush(),
                        t.filterManager.pushFilter(this._filterBlock)),
                        this.refreshTexture) {
                        if (this.generateTilingTexture(!0, t),
                            !this.tilingTexture)
                            return;
                        this.tilingTexture.needsUpdate && (t.renderer.updateTexture(this.tilingTexture.baseTexture),
                            this.tilingTexture.needsUpdate = !1)
                    }
                    t.spriteBatch.renderTilingSprite(this);
                    for (var e = 0; e < this.children.length; e++)
                        this.children[e]._renderWebGL(t);
                    t.spriteBatch.stop(),
                    this._filters && t.filterManager.popFilter(),
                    this._mask && t.maskManager.popMask(this._mask, t),
                        t.spriteBatch.start()
                }
            }
            ,
            e.TilingSprite.prototype._renderCanvas = function(t) {
                if (this.visible !== !1 && 0 !== this.alpha) {
                    var i = t.context;
                    this._mask && t.maskManager.pushMask(this._mask, t),
                        i.globalAlpha = this.worldAlpha;
                    var s = this.worldTransform
                        , n = t.resolution;
                    if (i.setTransform(s.a * n, s.b * n, s.c * n, s.d * n, s.tx * n, s.ty * n),
                        this.refreshTexture) {
                        if (this.generateTilingTexture(!1, t),
                            !this.tilingTexture)
                            return;
                        this.tilePattern = i.createPattern(this.tilingTexture.baseTexture.source, "repeat")
                    }
                    var r = t.currentBlendMode;
                    this.blendMode !== t.currentBlendMode && (t.currentBlendMode = this.blendMode,
                        i.globalCompositeOperation = e.blendModesCanvas[t.currentBlendMode]);
                    var o = this.tilePosition
                        , a = this.tileScale;
                    o.x %= this.tilingTexture.baseTexture.width,
                        o.y %= this.tilingTexture.baseTexture.height,
                        i.scale(a.x, a.y),
                        i.translate(o.x + this.anchor.x * -this._width, o.y + this.anchor.y * -this._height),
                        i.fillStyle = this.tilePattern;
                    var h = -o.x
                        , l = -o.y
                        , u = this._width / a.x
                        , c = this._height / a.y;
                    t.roundPixels && (h |= 0,
                        l |= 0,
                        u |= 0,
                        c |= 0),
                        i.fillRect(h, l, u, c),
                        i.scale(1 / a.x, 1 / a.y),
                        i.translate(-o.x + this.anchor.x * this._width, -o.y + this.anchor.y * this._height),
                    this._mask && t.maskManager.popMask(t);
                    for (var d = 0; d < this.children.length; d++)
                        this.children[d]._renderCanvas(t);
                    r !== this.blendMode && (t.currentBlendMode = r,
                        i.globalCompositeOperation = e.blendModesCanvas[r])
                }
            }
            ,
            e.TilingSprite.prototype.onTextureUpdate = function() {}
            ,
            e.TilingSprite.prototype.generateTilingTexture = function(t, i) {
                if (this.texture.baseTexture.hasLoaded) {
                    var s = this.texture
                        , n = s.frame
                        , r = this._frame.sourceSizeW
                        , o = this._frame.sourceSizeH
                        , a = 0
                        , h = 0;
                    this._frame.trimmed && (a = this._frame.spriteSourceSizeX,
                        h = this._frame.spriteSourceSizeY),
                    t && (r = e.getNextPowerOfTwo(r),
                        o = e.getNextPowerOfTwo(o)),
                        this.canvasBuffer ? (this.canvasBuffer.resize(r, o),
                            this.tilingTexture.baseTexture.width = r,
                            this.tilingTexture.baseTexture.height = o,
                            this.tilingTexture.needsUpdate = !0) : (this.canvasBuffer = new e.CanvasBuffer(r,o),
                            this.tilingTexture = e.Texture.fromCanvas(this.canvasBuffer.canvas),
                            this.tilingTexture.isTiling = !0,
                            this.tilingTexture.needsUpdate = !0),
                    this.textureDebug && (this.canvasBuffer.context.strokeStyle = "#00ff00",
                        this.canvasBuffer.context.strokeRect(0, 0, r, o));
                    var l = s.crop.width
                        , u = s.crop.height;
                    (l !== r || u !== o) && (l = r,
                        u = o),
                        this.canvasBuffer.context.drawImage(s.baseTexture.source, s.crop.x, s.crop.y, s.crop.width, s.crop.height, a, h, l, u),
                        this.tileScaleOffset.x = n.width / r,
                        this.tileScaleOffset.y = n.height / o,
                        this.refreshTexture = !1,
                        this.tilingTexture.baseTexture._powerOf2 = !0
                }
            }
            ,
            e.TilingSprite.prototype.getBounds = function() {
                var t = this._width
                    , e = this._height
                    , i = t * (1 - this.anchor.x)
                    , s = t * -this.anchor.x
                    , n = e * (1 - this.anchor.y)
                    , r = e * -this.anchor.y
                    , o = this.worldTransform
                    , a = o.a
                    , h = o.b
                    , l = o.c
                    , u = o.d
                    , c = o.tx
                    , d = o.ty
                    , p = a * s + l * r + c
                    , f = u * r + h * s + d
                    , m = a * i + l * r + c
                    , g = u * r + h * i + d
                    , y = a * i + l * n + c
                    , v = u * n + h * i + d
                    , x = a * s + l * n + c
                    , _ = u * n + h * s + d
                    , b = -(1 / 0)
                    , w = -(1 / 0)
                    , T = 1 / 0
                    , S = 1 / 0;
                T = T > p ? p : T,
                    T = T > m ? m : T,
                    T = T > y ? y : T,
                    T = T > x ? x : T,
                    S = S > f ? f : S,
                    S = S > g ? g : S,
                    S = S > v ? v : S,
                    S = S > _ ? _ : S,
                    b = p > b ? p : b,
                    b = m > b ? m : b,
                    b = y > b ? y : b,
                    b = x > b ? x : b,
                    w = f > w ? f : w,
                    w = g > w ? g : w,
                    w = v > w ? v : w,
                    w = _ > w ? _ : w;
                var C = this._bounds;
                return C.x = T,
                    C.width = b - T,
                    C.y = S,
                    C.height = w - S,
                    this._currentBounds = C,
                    C
            }
            ,
            e.TilingSprite.prototype.destroy = function() {
                e.Sprite.prototype.destroy.call(this),
                this.canvasBuffer && (this.canvasBuffer.destroy(),
                    this.canvasBuffer = null),
                    this.tileScale = null,
                    this.tileScaleOffset = null,
                    this.tilePosition = null,
                this.tilingTexture && (this.tilingTexture.destroy(!0),
                    this.tilingTexture = null)
            }
            ,
            Object.defineProperty(e.TilingSprite.prototype, "width", {
                get: function() {
                    return this._width
                },
                set: function(t) {
                    this._width = t
                }
            }),
            Object.defineProperty(e.TilingSprite.prototype, "height", {
                get: function() {
                    return this._height
                },
                set: function(t) {
                    this._height = t
                }
            }),
            "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = e),
                exports.PIXI = e) : "undefined" != typeof define && define.amd ? define("PIXI", function() {
                return t.PIXI = e
            }()) : t.PIXI = e,
            e
    }
).call(this),
    function() {
        function t(t, e) {
            this._scaleFactor = t,
                this._deltaMode = e,
                this.originalEvent = null
        }
        var e = this
            , i = i || {
            VERSION: "2.4.4",
            GAMES: [],
            AUTO: 0,
            CANVAS: 1,
            WEBGL: 2,
            HEADLESS: 3,
            NONE: 0,
            LEFT: 1,
            RIGHT: 2,
            UP: 3,
            DOWN: 4,
            SPRITE: 0,
            BUTTON: 1,
            IMAGE: 2,
            GRAPHICS: 3,
            TEXT: 4,
            TILESPRITE: 5,
            BITMAPTEXT: 6,
            GROUP: 7,
            RENDERTEXTURE: 8,
            TILEMAP: 9,
            TILEMAPLAYER: 10,
            EMITTER: 11,
            POLYGON: 12,
            BITMAPDATA: 13,
            CANVAS_FILTER: 14,
            WEBGL_FILTER: 15,
            ELLIPSE: 16,
            SPRITEBATCH: 17,
            RETROFONT: 18,
            POINTER: 19,
            ROPE: 20,
            CIRCLE: 21,
            RECTANGLE: 22,
            LINE: 23,
            MATRIX: 24,
            POINT: 25,
            ROUNDEDRECTANGLE: 26,
            CREATURE: 27,
            VIDEO: 28,
            blendModes: {
                NORMAL: 0,
                ADD: 1,
                MULTIPLY: 2,
                SCREEN: 3,
                OVERLAY: 4,
                DARKEN: 5,
                LIGHTEN: 6,
                COLOR_DODGE: 7,
                COLOR_BURN: 8,
                HARD_LIGHT: 9,
                SOFT_LIGHT: 10,
                DIFFERENCE: 11,
                EXCLUSION: 12,
                HUE: 13,
                SATURATION: 14,
                COLOR: 15,
                LUMINOSITY: 16
            },
            scaleModes: {
                DEFAULT: 0,
                LINEAR: 0,
                NEAREST: 1
            },
            PIXI: PIXI || {}
        };
        if (Math.trunc || (Math.trunc = function(t) {
                return 0 > t ? Math.ceil(t) : Math.floor(t)
            }
        ),
        Function.prototype.bind || (Function.prototype.bind = function() {
            var t = Array.prototype.slice;
            return function(e) {
                function i() {
                    var r = n.concat(t.call(arguments));
                    s.apply(this instanceof i ? this : e, r)
                }
                var s = this
                    , n = t.call(arguments, 1);
                if ("function" != typeof s)
                    throw new TypeError;
                return i.prototype = function r(t) {
                    return t && (r.prototype = t),
                        this instanceof r ? void 0 : new r
                }(s.prototype),
                    i
            }
        }()),
        Array.isArray || (Array.isArray = function(t) {
                return "[object Array]" == Object.prototype.toString.call(t)
            }
        ),
        Array.prototype.forEach || (Array.prototype.forEach = function(t) {
                "use strict";
                if (void 0 === this || null === this)
                    throw new TypeError;
                var e = Object(this)
                    , i = e.length >>> 0;
                if ("function" != typeof t)
                    throw new TypeError;
                for (var s = arguments.length >= 2 ? arguments[1] : void 0, n = 0; i > n; n++)
                    n in e && t.call(s, e[n], n, e)
            }
        ),
        "function" != typeof window.Uint32Array && "object" != typeof window.Uint32Array) {
            var s = function(t) {
                var e = new Array;
                window[t] = function(t) {
                    if ("number" == typeof t) {
                        Array.call(this, t),
                            this.length = t;
                        for (var e = 0; e < this.length; e++)
                            this[e] = 0
                    } else {
                        Array.call(this, t.length),
                            this.length = t.length;
                        for (var e = 0; e < this.length; e++)
                            this[e] = t[e]
                    }
                }
                    ,
                    window[t].prototype = e,
                    window[t].constructor = window[t]
            };
            s("Uint32Array"),
                s("Int16Array")
        }
        window.console || (window.console = {},
                window.console.log = window.console.assert = function() {}
                ,
                window.console.warn = window.console.assert = function() {}
        ),
            i.Utils = {
                getProperty: function(t, e) {
                    for (var i = e.split("."), s = i.pop(), n = i.length, r = 1, o = i[0]; n > r && (t = t[o]); )
                        o = i[r],
                            r++;
                    return t ? t[s] : null
                },
                setProperty: function(t, e, i) {
                    for (var s = e.split("."), n = s.pop(), r = s.length, o = 1, a = s[0]; r > o && (t = t[a]); )
                        a = s[o],
                            o++;
                    return t && (t[n] = i),
                        t
                },
                chanceRoll: function(t) {
                    return void 0 === t && (t = 50),
                    t > 0 && 100 * Math.random() <= t
                },
                randomChoice: function(t, e) {
                    return Math.random() < .5 ? t : e
                },
                parseDimension: function(t, e) {
                    var i = 0
                        , s = 0;
                    return "string" == typeof t ? "%" === t.substr(-1) ? (i = parseInt(t, 10) / 100,
                        s = 0 === e ? window.innerWidth * i : window.innerHeight * i) : s = parseInt(t, 10) : s = t,
                        s
                },
                pad: function(t, e, i, s) {
                    if (void 0 === e)
                        var e = 0;
                    if (void 0 === i)
                        var i = " ";
                    if (void 0 === s)
                        var s = 3;
                    var n = 0;
                    if (e + 1 >= t.length)
                        switch (s) {
                            case 1:
                                t = new Array(e + 1 - t.length).join(i) + t;
                                break;
                            case 3:
                                var r = Math.ceil((n = e - t.length) / 2)
                                    , o = n - r;
                                t = new Array(o + 1).join(i) + t + new Array(r + 1).join(i);
                                break;
                            default:
                                t += new Array(e + 1 - t.length).join(i)
                        }
                    return t
                },
                isPlainObject: function(t) {
                    if ("object" != typeof t || t.nodeType || t === t.window)
                        return !1;
                    try {
                        if (t.constructor && !{}.hasOwnProperty.call(t.constructor.prototype, "isPrototypeOf"))
                            return !1
                    } catch (e) {
                        return !1
                    }
                    return !0
                },
                extend: function() {
                    var t, e, s, n, r, o, a = arguments[0] || {}, h = 1, l = arguments.length, u = !1;
                    for ("boolean" == typeof a && (u = a,
                        a = arguments[1] || {},
                        h = 2),
                         l === h && (a = this,
                             --h); l > h; h++)
                        if (null != (t = arguments[h]))
                            for (e in t)
                                s = a[e],
                                    n = t[e],
                                a !== n && (u && n && (i.Utils.isPlainObject(n) || (r = Array.isArray(n))) ? (r ? (r = !1,
                                    o = s && Array.isArray(s) ? s : []) : o = s && i.Utils.isPlainObject(s) ? s : {},
                                    a[e] = i.Utils.extend(u, o, n)) : void 0 !== n && (a[e] = n));
                    return a
                },
                mixinPrototype: function(t, e, i) {
                    void 0 === i && (i = !1);
                    for (var s = Object.keys(e), n = 0; n < s.length; n++) {
                        var r = s[n]
                            , o = e[r];
                        !i && r in t || (!o || "function" != typeof o.get && "function" != typeof o.set ? t[r] = o : "function" == typeof o.clone ? t[r] = o.clone() : Object.defineProperty(t, r, o))
                    }
                },
                mixin: function(t, e) {
                    if (!t || "object" != typeof t)
                        return e;
                    for (var s in t) {
                        var n = t[s];
                        if (!n.childNodes && !n.cloneNode) {
                            var r = typeof t[s];
                            t[s] && "object" === r ? typeof e[s] === r ? e[s] = i.Utils.mixin(t[s], e[s]) : e[s] = i.Utils.mixin(t[s], new n.constructor) : e[s] = t[s]
                        }
                    }
                    return e
                }
            },
            i.Circle = function(t, e, s) {
                t = t || 0,
                    e = e || 0,
                    s = s || 0,
                    this.x = t,
                    this.y = e,
                    this._diameter = s,
                    this._radius = 0,
                s > 0 && (this._radius = .5 * s),
                    this.type = i.CIRCLE
            }
            ,
            i.Circle.prototype = {
                circumference: function() {
                    return 2 * (Math.PI * this._radius)
                },
                random: function(t) {
                    void 0 === t && (t = new i.Point);
                    var e = 2 * Math.PI * Math.random()
                        , s = Math.random() + Math.random()
                        , n = s > 1 ? 2 - s : s
                        , r = n * Math.cos(e)
                        , o = n * Math.sin(e);
                    return t.x = this.x + r * this.radius,
                        t.y = this.y + o * this.radius,
                        t
                },
                getBounds: function() {
                    return new i.Rectangle(this.x - this.radius,this.y - this.radius,this.diameter,this.diameter)
                },
                setTo: function(t, e, i) {
                    return this.x = t,
                        this.y = e,
                        this._diameter = i,
                        this._radius = .5 * i,
                        this
                },
                copyFrom: function(t) {
                    return this.setTo(t.x, t.y, t.diameter)
                },
                copyTo: function(t) {
                    return t.x = this.x,
                        t.y = this.y,
                        t.diameter = this._diameter,
                        t
                },
                distance: function(t, e) {
                    var s = i.Math.distance(this.x, this.y, t.x, t.y);
                    return e ? Math.round(s) : s
                },
                clone: function(t) {
                    return void 0 === t || null === t ? t = new i.Circle(this.x,this.y,this.diameter) : t.setTo(this.x, this.y, this.diameter),
                        t
                },
                contains: function(t, e) {
                    return i.Circle.contains(this, t, e)
                },
                circumferencePoint: function(t, e, s) {
                    return i.Circle.circumferencePoint(this, t, e, s)
                },
                offset: function(t, e) {
                    return this.x += t,
                        this.y += e,
                        this
                },
                offsetPoint: function(t) {
                    return this.offset(t.x, t.y)
                },
                toString: function() {
                    return "[{Phaser.Circle (x=" + this.x + " y=" + this.y + " diameter=" + this.diameter + " radius=" + this.radius + ")}]"
                }
            },
            i.Circle.prototype.constructor = i.Circle,
            Object.defineProperty(i.Circle.prototype, "diameter", {
                get: function() {
                    return this._diameter
                },
                set: function(t) {
                    t > 0 && (this._diameter = t,
                        this._radius = .5 * t)
                }
            }),
            Object.defineProperty(i.Circle.prototype, "radius", {
                get: function() {
                    return this._radius
                },
                set: function(t) {
                    t > 0 && (this._radius = t,
                        this._diameter = 2 * t)
                }
            }),
            Object.defineProperty(i.Circle.prototype, "left", {
                get: function() {
                    return this.x - this._radius
                },
                set: function(t) {
                    t > this.x ? (this._radius = 0,
                        this._diameter = 0) : this.radius = this.x - t
                }
            }),
            Object.defineProperty(i.Circle.prototype, "right", {
                get: function() {
                    return this.x + this._radius
                },
                set: function(t) {
                    t < this.x ? (this._radius = 0,
                        this._diameter = 0) : this.radius = t - this.x
                }
            }),
            Object.defineProperty(i.Circle.prototype, "top", {
                get: function() {
                    return this.y - this._radius
                },
                set: function(t) {
                    t > this.y ? (this._radius = 0,
                        this._diameter = 0) : this.radius = this.y - t
                }
            }),
            Object.defineProperty(i.Circle.prototype, "bottom", {
                get: function() {
                    return this.y + this._radius
                },
                set: function(t) {
                    t < this.y ? (this._radius = 0,
                        this._diameter = 0) : this.radius = t - this.y
                }
            }),
            Object.defineProperty(i.Circle.prototype, "area", {
                get: function() {
                    return this._radius > 0 ? Math.PI * this._radius * this._radius : 0
                }
            }),
            Object.defineProperty(i.Circle.prototype, "empty", {
                get: function() {
                    return 0 === this._diameter
                },
                set: function(t) {
                    t === !0 && this.setTo(0, 0, 0)
                }
            }),
            i.Circle.contains = function(t, e, i) {
                if (t.radius > 0 && e >= t.left && e <= t.right && i >= t.top && i <= t.bottom) {
                    var s = (t.x - e) * (t.x - e)
                        , n = (t.y - i) * (t.y - i);
                    return s + n <= t.radius * t.radius
                }
                return !1
            }
            ,
            i.Circle.equals = function(t, e) {
                return t.x == e.x && t.y == e.y && t.diameter == e.diameter
            }
            ,
            i.Circle.intersects = function(t, e) {
                return i.Math.distance(t.x, t.y, e.x, e.y) <= t.radius + e.radius
            }
            ,
            i.Circle.circumferencePoint = function(t, e, s, n) {
                return void 0 === s && (s = !1),
                void 0 === n && (n = new i.Point),
                s === !0 && (e = i.Math.degToRad(e)),
                    n.x = t.x + t.radius * Math.cos(e),
                    n.y = t.y + t.radius * Math.sin(e),
                    n
            }
            ,
            i.Circle.intersectsRectangle = function(t, e) {
                var i = Math.abs(t.x - e.x - e.halfWidth)
                    , s = e.halfWidth + t.radius;
                if (i > s)
                    return !1;
                var n = Math.abs(t.y - e.y - e.halfHeight)
                    , r = e.halfHeight + t.radius;
                if (n > r)
                    return !1;
                if (i <= e.halfWidth || n <= e.halfHeight)
                    return !0;
                var o = i - e.halfWidth
                    , a = n - e.halfHeight
                    , h = o * o
                    , l = a * a
                    , u = t.radius * t.radius;
                return u >= h + l
            }
            ,
            PIXI.Circle = i.Circle,
            i.Ellipse = function(t, e, s, n) {
                t = t || 0,
                    e = e || 0,
                    s = s || 0,
                    n = n || 0,
                    this.x = t,
                    this.y = e,
                    this.width = s,
                    this.height = n,
                    this.type = i.ELLIPSE
            }
            ,
            i.Ellipse.prototype = {
                setTo: function(t, e, i, s) {
                    return this.x = t,
                        this.y = e,
                        this.width = i,
                        this.height = s,
                        this
                },
                getBounds: function() {
                    return new i.Rectangle(this.x - this.width,this.y - this.height,this.width,this.height)
                },
                copyFrom: function(t) {
                    return this.setTo(t.x, t.y, t.width, t.height)
                },
                copyTo: function(t) {
                    return t.x = this.x,
                        t.y = this.y,
                        t.width = this.width,
                        t.height = this.height,
                        t
                },
                clone: function(t) {
                    return void 0 === t || null === t ? t = new i.Ellipse(this.x,this.y,this.width,this.height) : t.setTo(this.x, this.y, this.width, this.height),
                        t
                },
                contains: function(t, e) {
                    return i.Ellipse.contains(this, t, e)
                },
                random: function(t) {
                    void 0 === t && (t = new i.Point);
                    var e = Math.random() * Math.PI * 2
                        , s = Math.random();
                    return t.x = Math.sqrt(s) * Math.cos(e),
                        t.y = Math.sqrt(s) * Math.sin(e),
                        t.x = this.x + t.x * this.width / 2,
                        t.y = this.y + t.y * this.height / 2,
                        t
                },
                toString: function() {
                    return "[{Phaser.Ellipse (x=" + this.x + " y=" + this.y + " width=" + this.width + " height=" + this.height + ")}]"
                }
            },
            i.Ellipse.prototype.constructor = i.Ellipse,
            Object.defineProperty(i.Ellipse.prototype, "left", {
                get: function() {
                    return this.x
                },
                set: function(t) {
                    this.x = t
                }
            }),
            Object.defineProperty(i.Ellipse.prototype, "right", {
                get: function() {
                    return this.x + this.width;
                },
                set: function(t) {
                    t < this.x ? this.width = 0 : this.width = t - this.x
                }
            }),
            Object.defineProperty(i.Ellipse.prototype, "top", {
                get: function() {
                    return this.y
                },
                set: function(t) {
                    this.y = t
                }
            }),
            Object.defineProperty(i.Ellipse.prototype, "bottom", {
                get: function() {
                    return this.y + this.height
                },
                set: function(t) {
                    t < this.y ? this.height = 0 : this.height = t - this.y
                }
            }),
            Object.defineProperty(i.Ellipse.prototype, "empty", {
                get: function() {
                    return 0 === this.width || 0 === this.height
                },
                set: function(t) {
                    t === !0 && this.setTo(0, 0, 0, 0)
                }
            }),
            i.Ellipse.contains = function(t, e, i) {
                if (t.width <= 0 || t.height <= 0)
                    return !1;
                var s = (e - t.x) / t.width - .5
                    , n = (i - t.y) / t.height - .5;
                return s *= s,
                    n *= n,
                .25 > s + n
            }
            ,
            PIXI.Ellipse = i.Ellipse,
            i.Line = function(t, e, s, n) {
                t = t || 0,
                    e = e || 0,
                    s = s || 0,
                    n = n || 0,
                    this.start = new i.Point(t,e),
                    this.end = new i.Point(s,n),
                    this.type = i.LINE
            }
            ,
            i.Line.prototype = {
                setTo: function(t, e, i, s) {
                    return this.start.setTo(t, e),
                        this.end.setTo(i, s),
                        this
                },
                fromSprite: function(t, e, i) {
                    return void 0 === i && (i = !1),
                        i ? this.setTo(t.center.x, t.center.y, e.center.x, e.center.y) : this.setTo(t.x, t.y, e.x, e.y)
                },
                fromAngle: function(t, e, i, s) {
                    return this.start.setTo(t, e),
                        this.end.setTo(t + Math.cos(i) * s, e + Math.sin(i) * s),
                        this
                },
                rotate: function(t, e) {
                    var i = (this.start.x + this.end.x) / 2
                        , s = (this.start.y + this.end.y) / 2;
                    return this.start.rotate(i, s, t, e),
                        this.end.rotate(i, s, t, e),
                        this
                },
                rotateAround: function(t, e, i, s) {
                    return this.start.rotate(t, e, i, s),
                        this.end.rotate(t, e, i, s),
                        this
                },
                intersects: function(t, e, s) {
                    return i.Line.intersectsPoints(this.start, this.end, t.start, t.end, e, s)
                },
                reflect: function(t) {
                    return i.Line.reflect(this, t)
                },
                midPoint: function(t) {
                    return void 0 === t && (t = new i.Point),
                        t.x = (this.start.x + this.end.x) / 2,
                        t.y = (this.start.y + this.end.y) / 2,
                        t
                },
                centerOn: function(t, e) {
                    var i = (this.start.x + this.end.x) / 2
                        , s = (this.start.y + this.end.y) / 2
                        , n = t - i
                        , r = e - s;
                    this.start.add(n, r),
                        this.end.add(n, r)
                },
                pointOnLine: function(t, e) {
                    return (t - this.start.x) * (this.end.y - this.start.y) === (this.end.x - this.start.x) * (e - this.start.y)
                },
                pointOnSegment: function(t, e) {
                    var i = Math.min(this.start.x, this.end.x)
                        , s = Math.max(this.start.x, this.end.x)
                        , n = Math.min(this.start.y, this.end.y)
                        , r = Math.max(this.start.y, this.end.y);
                    return this.pointOnLine(t, e) && t >= i && s >= t && e >= n && r >= e
                },
                random: function(t) {
                    void 0 === t && (t = new i.Point);
                    var e = Math.random();
                    return t.x = this.start.x + e * (this.end.x - this.start.x),
                        t.y = this.start.y + e * (this.end.y - this.start.y),
                        t
                },
                coordinatesOnLine: function(t, e) {
                    void 0 === t && (t = 1),
                    void 0 === e && (e = []);
                    var i = Math.round(this.start.x)
                        , s = Math.round(this.start.y)
                        , n = Math.round(this.end.x)
                        , r = Math.round(this.end.y)
                        , o = Math.abs(n - i)
                        , a = Math.abs(r - s)
                        , h = n > i ? 1 : -1
                        , l = r > s ? 1 : -1
                        , u = o - a;
                    e.push([i, s]);
                    for (var c = 1; i != n || s != r; ) {
                        var d = u << 1;
                        d > -a && (u -= a,
                            i += h),
                        o > d && (u += o,
                            s += l),
                        c % t === 0 && e.push([i, s]),
                            c++
                    }
                    return e
                },
                clone: function(t) {
                    return void 0 === t || null === t ? t = new i.Line(this.start.x,this.start.y,this.end.x,this.end.y) : t.setTo(this.start.x, this.start.y, this.end.x, this.end.y),
                        t
                }
            },
            Object.defineProperty(i.Line.prototype, "length", {
                get: function() {
                    return Math.sqrt((this.end.x - this.start.x) * (this.end.x - this.start.x) + (this.end.y - this.start.y) * (this.end.y - this.start.y))
                }
            }),
            Object.defineProperty(i.Line.prototype, "angle", {
                get: function() {
                    return Math.atan2(this.end.y - this.start.y, this.end.x - this.start.x)
                }
            }),
            Object.defineProperty(i.Line.prototype, "slope", {
                get: function() {
                    return (this.end.y - this.start.y) / (this.end.x - this.start.x)
                }
            }),
            Object.defineProperty(i.Line.prototype, "perpSlope", {
                get: function() {
                    return -((this.end.x - this.start.x) / (this.end.y - this.start.y))
                }
            }),
            Object.defineProperty(i.Line.prototype, "x", {
                get: function() {
                    return Math.min(this.start.x, this.end.x)
                }
            }),
            Object.defineProperty(i.Line.prototype, "y", {
                get: function() {
                    return Math.min(this.start.y, this.end.y)
                }
            }),
            Object.defineProperty(i.Line.prototype, "left", {
                get: function() {
                    return Math.min(this.start.x, this.end.x)
                }
            }),
            Object.defineProperty(i.Line.prototype, "right", {
                get: function() {
                    return Math.max(this.start.x, this.end.x)
                }
            }),
            Object.defineProperty(i.Line.prototype, "top", {
                get: function() {
                    return Math.min(this.start.y, this.end.y)
                }
            }),
            Object.defineProperty(i.Line.prototype, "bottom", {
                get: function() {
                    return Math.max(this.start.y, this.end.y)
                }
            }),
            Object.defineProperty(i.Line.prototype, "width", {
                get: function() {
                    return Math.abs(this.start.x - this.end.x)
                }
            }),
            Object.defineProperty(i.Line.prototype, "height", {
                get: function() {
                    return Math.abs(this.start.y - this.end.y)
                }
            }),
            Object.defineProperty(i.Line.prototype, "normalX", {
                get: function() {
                    return Math.cos(this.angle - 1.5707963267948966)
                }
            }),
            Object.defineProperty(i.Line.prototype, "normalY", {
                get: function() {
                    return Math.sin(this.angle - 1.5707963267948966)
                }
            }),
            Object.defineProperty(i.Line.prototype, "normalAngle", {
                get: function() {
                    return i.Math.wrap(this.angle - 1.5707963267948966, -Math.PI, Math.PI)
                }
            }),
            i.Line.intersectsPoints = function(t, e, s, n, r, o) {
                void 0 === r && (r = !0),
                void 0 === o && (o = new i.Point);
                var a = e.y - t.y
                    , h = n.y - s.y
                    , l = t.x - e.x
                    , u = s.x - n.x
                    , c = e.x * t.y - t.x * e.y
                    , d = n.x * s.y - s.x * n.y
                    , p = a * u - h * l;
                if (0 === p)
                    return null;
                if (o.x = (l * d - u * c) / p,
                    o.y = (h * c - a * d) / p,
                    r) {
                    var f = (n.y - s.y) * (e.x - t.x) - (n.x - s.x) * (e.y - t.y)
                        , m = ((n.x - s.x) * (t.y - s.y) - (n.y - s.y) * (t.x - s.x)) / f
                        , g = ((e.x - t.x) * (t.y - s.y) - (e.y - t.y) * (t.x - s.x)) / f;
                    return m >= 0 && 1 >= m && g >= 0 && 1 >= g ? o : null
                }
                return o
            }
            ,
            i.Line.intersects = function(t, e, s, n) {
                return i.Line.intersectsPoints(t.start, t.end, e.start, e.end, s, n)
            }
            ,
            i.Line.reflect = function(t, e) {
                return 2 * e.normalAngle - 3.141592653589793 - t.angle
            }
            ,
            i.Matrix = function(t, e, s, n, r, o) {
                t = t || 1,
                    e = e || 0,
                    s = s || 0,
                    n = n || 1,
                    r = r || 0,
                    o = o || 0,
                    this.a = t,
                    this.b = e,
                    this.c = s,
                    this.d = n,
                    this.tx = r,
                    this.ty = o,
                    this.type = i.MATRIX
            }
            ,
            i.Matrix.prototype = {
                fromArray: function(t) {
                    return this.setTo(t[0], t[1], t[3], t[4], t[2], t[5])
                },
                setTo: function(t, e, i, s, n, r) {
                    return this.a = t,
                        this.b = e,
                        this.c = i,
                        this.d = s,
                        this.tx = n,
                        this.ty = r,
                        this
                },
                clone: function(t) {
                    return void 0 === t || null === t ? t = new i.Matrix(this.a,this.b,this.c,this.d,this.tx,this.ty) : (t.a = this.a,
                        t.b = this.b,
                        t.c = this.c,
                        t.d = this.d,
                        t.tx = this.tx,
                        t.ty = this.ty),
                        t
                },
                copyTo: function(t) {
                    return t.copyFrom(this),
                        t
                },
                copyFrom: function(t) {
                    return this.a = t.a,
                        this.b = t.b,
                        this.c = t.c,
                        this.d = t.d,
                        this.tx = t.tx,
                        this.ty = t.ty,
                        this
                },
                toArray: function(t, e) {
                    return void 0 === e && (e = new PIXI.Float32Array(9)),
                        t ? (e[0] = this.a,
                            e[1] = this.b,
                            e[2] = 0,
                            e[3] = this.c,
                            e[4] = this.d,
                            e[5] = 0,
                            e[6] = this.tx,
                            e[7] = this.ty,
                            e[8] = 1) : (e[0] = this.a,
                            e[1] = this.c,
                            e[2] = this.tx,
                            e[3] = this.b,
                            e[4] = this.d,
                            e[5] = this.ty,
                            e[6] = 0,
                            e[7] = 0,
                            e[8] = 1),
                        e
                },
                apply: function(t, e) {
                    return void 0 === e && (e = new i.Point),
                        e.x = this.a * t.x + this.c * t.y + this.tx,
                        e.y = this.b * t.x + this.d * t.y + this.ty,
                        e
                },
                applyInverse: function(t, e) {
                    void 0 === e && (e = new i.Point);
                    var s = 1 / (this.a * this.d + this.c * -this.b)
                        , n = t.x
                        , r = t.y;
                    return e.x = this.d * s * n + -this.c * s * r + (this.ty * this.c - this.tx * this.d) * s,
                        e.y = this.a * s * r + -this.b * s * n + (-this.ty * this.a + this.tx * this.b) * s,
                        e
                },
                translate: function(t, e) {
                    return this.tx += t,
                        this.ty += e,
                        this
                },
                scale: function(t, e) {
                    return this.a *= t,
                        this.d *= e,
                        this.c *= t,
                        this.b *= e,
                        this.tx *= t,
                        this.ty *= e,
                        this
                },
                rotate: function(t) {
                    var e = Math.cos(t)
                        , i = Math.sin(t)
                        , s = this.a
                        , n = this.c
                        , r = this.tx;
                    return this.a = s * e - this.b * i,
                        this.b = s * i + this.b * e,
                        this.c = n * e - this.d * i,
                        this.d = n * i + this.d * e,
                        this.tx = r * e - this.ty * i,
                        this.ty = r * i + this.ty * e,
                        this
                },
                append: function(t) {
                    var e = this.a
                        , i = this.b
                        , s = this.c
                        , n = this.d;
                    return this.a = t.a * e + t.b * s,
                        this.b = t.a * i + t.b * n,
                        this.c = t.c * e + t.d * s,
                        this.d = t.c * i + t.d * n,
                        this.tx = t.tx * e + t.ty * s + this.tx,
                        this.ty = t.tx * i + t.ty * n + this.ty,
                        this
                },
                identity: function() {
                    return this.setTo(1, 0, 0, 1, 0, 0)
                }
            },
            i.identityMatrix = new i.Matrix,
            PIXI.Matrix = i.Matrix,
            PIXI.identityMatrix = i.identityMatrix,
            i.Point = function(t, e) {
                t = t || 0,
                    e = e || 0,
                    this.x = t,
                    this.y = e,
                    this.type = i.POINT
            }
            ,
            i.Point.prototype = {
                copyFrom: function(t) {
                    return this.setTo(t.x, t.y)
                },
                invert: function() {
                    return this.setTo(this.y, this.x)
                },
                setTo: function(t, e) {
                    return this.x = t || 0,
                        this.y = e || (0 !== e ? this.x : 0),
                        this
                },
                set: function(t, e) {
                    return this.x = t || 0,
                        this.y = e || (0 !== e ? this.x : 0),
                        this
                },
                add: function(t, e) {
                    return this.x += t,
                        this.y += e,
                        this
                },
                subtract: function(t, e) {
                    return this.x -= t,
                        this.y -= e,
                        this
                },
                multiply: function(t, e) {
                    return this.x *= t,
                        this.y *= e,
                        this
                },
                divide: function(t, e) {
                    return this.x /= t,
                        this.y /= e,
                        this
                },
                clampX: function(t, e) {
                    return this.x = i.Math.clamp(this.x, t, e),
                        this
                },
                clampY: function(t, e) {
                    return this.y = i.Math.clamp(this.y, t, e),
                        this
                },
                clamp: function(t, e) {
                    return this.x = i.Math.clamp(this.x, t, e),
                        this.y = i.Math.clamp(this.y, t, e),
                        this
                },
                clone: function(t) {
                    return void 0 === t || null === t ? t = new i.Point(this.x,this.y) : t.setTo(this.x, this.y),
                        t
                },
                copyTo: function(t) {
                    return t.x = this.x,
                        t.y = this.y,
                        t
                },
                distance: function(t, e) {
                    return i.Point.distance(this, t, e)
                },
                equals: function(t) {
                    return t.x === this.x && t.y === this.y
                },
                angle: function(t, e) {
                    return void 0 === e && (e = !1),
                        e ? i.Math.radToDeg(Math.atan2(t.y - this.y, t.x - this.x)) : Math.atan2(t.y - this.y, t.x - this.x)
                },
                rotate: function(t, e, s, n, r) {
                    return i.Point.rotate(this, t, e, s, n, r)
                },
                getMagnitude: function() {
                    return Math.sqrt(this.x * this.x + this.y * this.y)
                },
                getMagnitudeSq: function() {
                    return this.x * this.x + this.y * this.y
                },
                setMagnitude: function(t) {
                    return this.normalize().multiply(t, t)
                },
                normalize: function() {
                    if (!this.isZero()) {
                        var t = this.getMagnitude();
                        this.x /= t,
                            this.y /= t
                    }
                    return this
                },
                isZero: function() {
                    return 0 === this.x && 0 === this.y
                },
                dot: function(t) {
                    return this.x * t.x + this.y * t.y
                },
                cross: function(t) {
                    return this.x * t.y - this.y * t.x
                },
                perp: function() {
                    return this.setTo(-this.y, this.x)
                },
                rperp: function() {
                    return this.setTo(this.y, -this.x)
                },
                normalRightHand: function() {
                    return this.setTo(-1 * this.y, this.x)
                },
                floor: function() {
                    return this.setTo(Math.floor(this.x), Math.floor(this.y))
                },
                ceil: function() {
                    return this.setTo(Math.ceil(this.x), Math.ceil(this.y))
                },
                toString: function() {
                    return "[{Point (x=" + this.x + " y=" + this.y + ")}]"
                }
            },
            i.Point.prototype.constructor = i.Point,
            i.Point.add = function(t, e, s) {
                return void 0 === s && (s = new i.Point),
                    s.x = t.x + e.x,
                    s.y = t.y + e.y,
                    s
            }
            ,
            i.Point.subtract = function(t, e, s) {
                return void 0 === s && (s = new i.Point),
                    s.x = t.x - e.x,
                    s.y = t.y - e.y,
                    s
            }
            ,
            i.Point.multiply = function(t, e, s) {
                return void 0 === s && (s = new i.Point),
                    s.x = t.x * e.x,
                    s.y = t.y * e.y,
                    s
            }
            ,
            i.Point.divide = function(t, e, s) {
                return void 0 === s && (s = new i.Point),
                    s.x = t.x / e.x,
                    s.y = t.y / e.y,
                    s
            }
            ,
            i.Point.equals = function(t, e) {
                return t.x === e.x && t.y === e.y
            }
            ,
            i.Point.angle = function(t, e) {
                return Math.atan2(t.y - e.y, t.x - e.x)
            }
            ,
            i.Point.negative = function(t, e) {
                return void 0 === e && (e = new i.Point),
                    e.setTo(-t.x, -t.y)
            }
            ,
            i.Point.multiplyAdd = function(t, e, s, n) {
                return void 0 === n && (n = new i.Point),
                    n.setTo(t.x + e.x * s, t.y + e.y * s)
            }
            ,
            i.Point.interpolate = function(t, e, s, n) {
                return void 0 === n && (n = new i.Point),
                    n.setTo(t.x + (e.x - t.x) * s, t.y + (e.y - t.y) * s)
            }
            ,
            i.Point.perp = function(t, e) {
                return void 0 === e && (e = new i.Point),
                    e.setTo(-t.y, t.x)
            }
            ,
            i.Point.rperp = function(t, e) {
                return void 0 === e && (e = new i.Point),
                    e.setTo(t.y, -t.x)
            }
            ,
            i.Point.distance = function(t, e, s) {
                var n = i.Math.distance(t.x, t.y, e.x, e.y);
                return s ? Math.round(n) : n
            }
            ,
            i.Point.project = function(t, e, s) {
                void 0 === s && (s = new i.Point);
                var n = t.dot(e) / e.getMagnitudeSq();
                return 0 !== n && s.setTo(n * e.x, n * e.y),
                    s
            }
            ,
            i.Point.projectUnit = function(t, e, s) {
                void 0 === s && (s = new i.Point);
                var n = t.dot(e);
                return 0 !== n && s.setTo(n * e.x, n * e.y),
                    s
            }
            ,
            i.Point.normalRightHand = function(t, e) {
                return void 0 === e && (e = new i.Point),
                    e.setTo(-1 * t.y, t.x)
            }
            ,
            i.Point.normalize = function(t, e) {
                void 0 === e && (e = new i.Point);
                var s = t.getMagnitude();
                return 0 !== s && e.setTo(t.x / s, t.y / s),
                    e
            }
            ,
            i.Point.rotate = function(t, e, s, n, r, o) {
                if (r && (n = i.Math.degToRad(n)),
                void 0 === o) {
                    t.subtract(e, s);
                    var a = Math.sin(n)
                        , h = Math.cos(n)
                        , l = h * t.x - a * t.y
                        , u = a * t.x + h * t.y;
                    t.x = l + e,
                        t.y = u + s
                } else {
                    var c = n + Math.atan2(t.y - s, t.x - e);
                    t.x = e + o * Math.cos(c),
                        t.y = s + o * Math.sin(c)
                }
                return t
            }
            ,
            i.Point.centroid = function(t, e) {
                if (void 0 === e && (e = new i.Point),
                "[object Array]" !== Object.prototype.toString.call(t))
                    throw new Error("Phaser.Point. Parameter 'points' must be an array");
                var s = t.length;
                if (1 > s)
                    throw new Error("Phaser.Point. Parameter 'points' array must not be empty");
                if (1 === s)
                    return e.copyFrom(t[0]),
                        e;
                for (var n = 0; s > n; n++)
                    i.Point.add(e, t[n], e);
                return e.divide(s, s),
                    e
            }
            ,
            i.Point.parse = function(t, e, s) {
                e = e || "x",
                    s = s || "y";
                var n = new i.Point;
                return t[e] && (n.x = parseInt(t[e], 10)),
                t[s] && (n.y = parseInt(t[s], 10)),
                    n
            }
            ,
            PIXI.Point = i.Point,
            i.Polygon = function() {
                this.area = 0,
                    this._points = [],
                arguments.length > 0 && this.setTo.apply(this, arguments),
                    this.closed = !0,
                    this.type = i.POLYGON
            }
            ,
            i.Polygon.prototype = {
                toNumberArray: function(t) {
                    void 0 === t && (t = []);
                    for (var e = 0; e < this._points.length; e++)
                        "number" == typeof this._points[e] ? (t.push(this._points[e]),
                            t.push(this._points[e + 1]),
                            e++) : (t.push(this._points[e].x),
                            t.push(this._points[e].y));
                    return t
                },
                flatten: function() {
                    return this._points = this.toNumberArray(),
                        this
                },
                clone: function(t) {
                    var e = this._points.slice();
                    return void 0 === t || null === t ? t = new i.Polygon(e) : t.setTo(e),
                        t
                },
                contains: function(t, e) {
                    for (var i = this._points.length, s = !1, n = -1, r = i - 1; ++n < i; r = n) {
                        var o = this._points[n].x
                            , a = this._points[n].y
                            , h = this._points[r].x
                            , l = this._points[r].y;
                        (e >= a && l > e || e >= l && a > e) && (h - o) * (e - a) / (l - a) + o > t && (s = !s)
                    }
                    return s
                },
                setTo: function(t) {
                    if (this.area = 0,
                        this._points = [],
                    arguments.length > 0) {
                        Array.isArray(t) || (t = Array.prototype.slice.call(arguments));
                        for (var e = Number.MAX_VALUE, i = 0, s = t.length; s > i; i++) {
                            if ("number" == typeof t[i]) {
                                var n = new PIXI.Point(t[i],t[i + 1]);
                                i++
                            } else
                                var n = new PIXI.Point(t[i].x,t[i].y);
                            this._points.push(n),
                            n.y < e && (e = n.y)
                        }
                        this.calculateArea(e)
                    }
                    return this
                },
                calculateArea: function(t) {
                    for (var e, i, s, n, r = 0, o = this._points.length; o > r; r++)
                        e = this._points[r],
                            i = r === o - 1 ? this._points[0] : this._points[r + 1],
                            s = (e.y - t + (i.y - t)) / 2,
                            n = e.x - i.x,
                            this.area += s * n;
                    return this.area
                }
            },
            i.Polygon.prototype.constructor = i.Polygon,
            Object.defineProperty(i.Polygon.prototype, "points", {
                get: function() {
                    return this._points
                },
                set: function(t) {
                    null != t ? this.setTo(t) : this.setTo()
                }
            }),
            PIXI.Polygon = i.Polygon,
            i.Rectangle = function(t, e, s, n) {
                t = t || 0,
                    e = e || 0,
                    s = s || 0,
                    n = n || 0,
                    this.x = t,
                    this.y = e,
                    this.width = s,
                    this.height = n,
                    this.type = i.RECTANGLE
            }
            ,
            i.Rectangle.prototype = {
                offset: function(t, e) {
                    return this.x += t,
                        this.y += e,
                        this
                },
                offsetPoint: function(t) {
                    return this.offset(t.x, t.y)
                },
                setTo: function(t, e, i, s) {
                    return this.x = t,
                        this.y = e,
                        this.width = i,
                        this.height = s,
                        this
                },
                scale: function(t, e) {
                    return void 0 === e && (e = t),
                        this.width *= t,
                        this.height *= e,
                        this
                },
                centerOn: function(t, e) {
                    return this.centerX = t,
                        this.centerY = e,
                        this
                },
                floor: function() {
                    this.x = Math.floor(this.x),
                        this.y = Math.floor(this.y)
                },
                floorAll: function() {
                    this.x = Math.floor(this.x),
                        this.y = Math.floor(this.y),
                        this.width = Math.floor(this.width),
                        this.height = Math.floor(this.height)
                },
                ceil: function() {
                    this.x = Math.ceil(this.x),
                        this.y = Math.ceil(this.y)
                },
                ceilAll: function() {
                    this.x = Math.ceil(this.x),
                        this.y = Math.ceil(this.y),
                        this.width = Math.ceil(this.width),
                        this.height = Math.ceil(this.height)
                },
                copyFrom: function(t) {
                    return this.setTo(t.x, t.y, t.width, t.height)
                },
                copyTo: function(t) {
                    return t.x = this.x,
                        t.y = this.y,
                        t.width = this.width,
                        t.height = this.height,
                        t
                },
                inflate: function(t, e) {
                    return i.Rectangle.inflate(this, t, e)
                },
                size: function(t) {
                    return i.Rectangle.size(this, t)
                },
                resize: function(t, e) {
                    return this.width = t,
                        this.height = e,
                        this
                },
                clone: function(t) {
                    return i.Rectangle.clone(this, t)
                },
                contains: function(t, e) {
                    return i.Rectangle.contains(this, t, e)
                },
                containsRect: function(t) {
                    return i.Rectangle.containsRect(t, this)
                },
                equals: function(t) {
                    return i.Rectangle.equals(this, t)
                },
                intersection: function(t, e) {
                    return i.Rectangle.intersection(this, t, e)
                },
                intersects: function(t) {
                    return i.Rectangle.intersects(this, t)
                },
                intersectsRaw: function(t, e, s, n, r) {
                    return i.Rectangle.intersectsRaw(this, t, e, s, n, r)
                },
                union: function(t, e) {
                    return i.Rectangle.union(this, t, e)
                },
                random: function(t) {
                    return void 0 === t && (t = new i.Point),
                        t.x = this.randomX,
                        t.y = this.randomY,
                        t
                },
                toString: function() {
                    return "[{Rectangle (x=" + this.x + " y=" + this.y + " width=" + this.width + " height=" + this.height + " empty=" + this.empty + ")}]"
                }
            },
            Object.defineProperty(i.Rectangle.prototype, "halfWidth", {
                get: function() {
                    return Math.round(this.width / 2)
                }
            }),
            Object.defineProperty(i.Rectangle.prototype, "halfHeight", {
                get: function() {
                    return Math.round(this.height / 2)
                }
            }),
            Object.defineProperty(i.Rectangle.prototype, "bottom", {
                get: function() {
                    return this.y + this.height
                },
                set: function(t) {
                    t <= this.y ? this.height = 0 : this.height = t - this.y
                }
            }),
            Object.defineProperty(i.Rectangle.prototype, "bottomLeft", {
                get: function() {
                    return new i.Point(this.x,this.bottom)
                },
                set: function(t) {
                    this.x = t.x,
                        this.bottom = t.y
                }
            }),
            Object.defineProperty(i.Rectangle.prototype, "bottomRight", {
                get: function() {
                    return new i.Point(this.right,this.bottom)
                },
                set: function(t) {
                    this.right = t.x,
                        this.bottom = t.y
                }
            }),
            Object.defineProperty(i.Rectangle.prototype, "left", {
                get: function() {
                    return this.x
                },
                set: function(t) {
                    t >= this.right ? this.width = 0 : this.width = this.right - t,
                        this.x = t
                }
            }),
            Object.defineProperty(i.Rectangle.prototype, "right", {
                get: function() {
                    return this.x + this.width
                },
                set: function(t) {
                    t <= this.x ? this.width = 0 : this.width = t - this.x
                }
            }),
            Object.defineProperty(i.Rectangle.prototype, "volume", {
                get: function() {
                    return this.width * this.height
                }
            }),
            Object.defineProperty(i.Rectangle.prototype, "perimeter", {
                get: function() {
                    return 2 * this.width + 2 * this.height
                }
            }),
            Object.defineProperty(i.Rectangle.prototype, "centerX", {
                get: function() {
                    return this.x + this.halfWidth
                },
                set: function(t) {
                    this.x = t - this.halfWidth
                }
            }),
            Object.defineProperty(i.Rectangle.prototype, "centerY", {
                get: function() {
                    return this.y + this.halfHeight
                },
                set: function(t) {
                    this.y = t - this.halfHeight
                }
            }),
            Object.defineProperty(i.Rectangle.prototype, "randomX", {
                get: function() {
                    return this.x + Math.random() * this.width
                }
            }),
            Object.defineProperty(i.Rectangle.prototype, "randomY", {
                get: function() {
                    return this.y + Math.random() * this.height
                }
            }),
            Object.defineProperty(i.Rectangle.prototype, "top", {
                get: function() {
                    return this.y
                },
                set: function(t) {
                    t >= this.bottom ? (this.height = 0,
                        this.y = t) : this.height = this.bottom - t
                }
            }),
            Object.defineProperty(i.Rectangle.prototype, "topLeft", {
                get: function() {
                    return new i.Point(this.x,this.y)
                },
                set: function(t) {
                    this.x = t.x,
                        this.y = t.y
                }
            }),
            Object.defineProperty(i.Rectangle.prototype, "topRight", {
                get: function() {
                    return new i.Point(this.x + this.width,this.y)
                },
                set: function(t) {
                    this.right = t.x,
                        this.y = t.y
                }
            }),
            Object.defineProperty(i.Rectangle.prototype, "empty", {
                get: function() {
                    return !this.width || !this.height
                },
                set: function(t) {
                    t === !0 && this.setTo(0, 0, 0, 0)
                }
            }),
        i.Rectangle.prototype.constructor = i.Rectangle,
        i.Rectangle.inflate = function(t, e, i) {
            return t.x -= e,
                t.width += 2 * e,
                t.y -= i,
                t.height += 2 * i,
                t
        }
        ,
        i.Rectangle.inflatePoint = function(t, e) {
            return i.Rectangle.inflate(t, e.x, e.y)
        }
        ,
        i.Rectangle.size = function(t, e) {
            return void 0 === e || null === e ? e = new i.Point(t.width,t.height) : e.setTo(t.width, t.height),
                e
        }
        ,
        i.Rectangle.clone = function(t, e) {
            return void 0 === e || null === e ? e = new i.Rectangle(t.x,t.y,t.width,t.height) : e.setTo(t.x, t.y, t.width, t.height),
                e
        }
        ,
        i.Rectangle.contains = function(t, e, i) {
            return !(t.width <= 0 || t.height <= 0) && (e >= t.x && e < t.right && i >= t.y && i < t.bottom)
        }
        ,
        i.Rectangle.containsRaw = function(t, e, i, s, n, r) {
            return n >= t && t + i > n && r >= e && e + s > r
        }
        ,
        i.Rectangle.containsPoint = function(t, e) {
            return i.Rectangle.contains(t, e.x, e.y)
        }
        ,
        i.Rectangle.containsRect = function(t, e) {
            return !(t.volume > e.volume) && (t.x >= e.x && t.y >= e.y && t.right < e.right && t.bottom < e.bottom)
        }
        ,
        i.Rectangle.equals = function(t, e) {
            return t.x == e.x && t.y == e.y && t.width == e.width && t.height == e.height
        }
        ,
        i.Rectangle.sameDimensions = function(t, e) {
            return t.width === e.width && t.height === e.height
        }
        ,
        i.Rectangle.intersection = function(t, e, s) {
            return void 0 === s && (s = new i.Rectangle),
            i.Rectangle.intersects(t, e) && (s.x = Math.max(t.x, e.x),
                s.y = Math.max(t.y, e.y),
                s.width = Math.min(t.right, e.right) - s.x,
                s.height = Math.min(t.bottom, e.bottom) - s.y),
                s
        }
        ,
        i.Rectangle.intersects = function(t, e) {
            return !(t.width <= 0 || t.height <= 0 || e.width <= 0 || e.height <= 0) && !(t.right < e.x || t.bottom < e.y || t.x > e.right || t.y > e.bottom)
        }
        ,
        i.Rectangle.intersectsRaw = function(t, e, i, s, n, r) {
            return void 0 === r && (r = 0),
                !(e > t.right + r || i < t.left - r || s > t.bottom + r || n < t.top - r)
        }
        ,
        i.Rectangle.union = function(t, e, s) {
            return void 0 === s && (s = new i.Rectangle),
                s.setTo(Math.min(t.x, e.x), Math.min(t.y, e.y), Math.max(t.right, e.right) - Math.min(t.left, e.left), Math.max(t.bottom, e.bottom) - Math.min(t.top, e.top))
        }
        ,
        i.Rectangle.aabb = function(t, e) {
            void 0 === e && (e = new i.Rectangle);
            var s = Number.MIN_VALUE
                , n = Number.MAX_VALUE
                , r = Number.MIN_VALUE
                , o = Number.MAX_VALUE;
            return t.forEach(function(t) {
                t.x > s && (s = t.x),
                t.x < n && (n = t.x),
                t.y > r && (r = t.y),
                t.y < o && (o = t.y)
            }),
                e.setTo(n, o, s - n, r - o),
                e
        }
        ,
        PIXI.Rectangle = i.Rectangle,
        PIXI.EmptyRectangle = new i.Rectangle(0,0,0,0),
        i.RoundedRectangle = function(t, e, s, n, r) {
            void 0 === t && (t = 0),
            void 0 === e && (e = 0),
            void 0 === s && (s = 0),
            void 0 === n && (n = 0),
            void 0 === r && (r = 20),
                this.x = t,
                this.y = e,
                this.width = s,
                this.height = n,
                this.radius = r || 20,
                this.type = i.ROUNDEDRECTANGLE
        }
        ,
        i.RoundedRectangle.prototype = {
            clone: function() {
                return new i.RoundedRectangle(this.x,this.y,this.width,this.height,this.radius)
            },
            contains: function(t, e) {
                if (this.width <= 0 || this.height <= 0)
                    return !1;
                var i = this.x;
                if (t >= i && t <= i + this.width) {
                    var s = this.y;
                    if (e >= s && e <= s + this.height)
                        return !0
                }
                return !1
            }
        },
        i.RoundedRectangle.prototype.constructor = i.RoundedRectangle,
        PIXI.RoundedRectangle = i.RoundedRectangle,
        i.Camera = function(t, e, s, n, r, o) {
            this.game = t,
                this.world = t.world,
                this.id = 0,
                this.view = new i.Rectangle(s,n,r,o),
                this.bounds = new i.Rectangle(s,n,r,o),
                this.deadzone = null,
                this.visible = !0,
                this.roundPx = !0,
                this.atLimit = {
                    x: !1,
                    y: !1
                },
                this.target = null,
                this.displayObject = null,
                this.scale = null,
                this.totalInView = 0,
                this._targetPosition = new i.Point,
                this._edge = 0,
                this._position = new i.Point
        }
        ,
        i.Camera.FOLLOW_LOCKON = 0,
        i.Camera.FOLLOW_PLATFORMER = 1,
        i.Camera.FOLLOW_TOPDOWN = 2,
        i.Camera.FOLLOW_TOPDOWN_TIGHT = 3,
        i.Camera.prototype = {
            preUpdate: function() {
                this.totalInView = 0
            },
            follow: function(t, e) {
                void 0 === e && (e = i.Camera.FOLLOW_LOCKON),
                    this.target = t;
                var s;
                switch (e) {
                    case i.Camera.FOLLOW_PLATFORMER:
                        var n = this.width / 8
                            , r = this.height / 3;
                        this.deadzone = new i.Rectangle((this.width - n) / 2,(this.height - r) / 2 - .25 * r,n,r);
                        break;
                    case i.Camera.FOLLOW_TOPDOWN:
                        s = Math.max(this.width, this.height) / 4,
                            this.deadzone = new i.Rectangle((this.width - s) / 2,(this.height - s) / 2,s,s);
                        break;
                    case i.Camera.FOLLOW_TOPDOWN_TIGHT:
                        s = Math.max(this.width, this.height) / 8,
                            this.deadzone = new i.Rectangle((this.width - s) / 2,(this.height - s) / 2,s,s);
                        break;
                    case i.Camera.FOLLOW_LOCKON:
                        this.deadzone = null;
                        break;
                    default:
                        this.deadzone = null
                }
            },
            unfollow: function() {
                this.target = null
            },
            focusOn: function(t) {
                this.setPosition(Math.round(t.x - this.view.halfWidth), Math.round(t.y - this.view.halfHeight))
            },
            focusOnXY: function(t, e) {
                this.setPosition(Math.round(t - this.view.halfWidth), Math.round(e - this.view.halfHeight))
            },
            update: function() {
                this.target && this.updateTarget(),
                this.bounds && this.checkBounds(),
                this.roundPx && this.view.floor(),
                    this.displayObject.position.x = -this.view.x,
                    this.displayObject.position.y = -this.view.y
            },
            updateTarget: function() {
                this._targetPosition.copyFrom(this.target),
                this.target.parent && this._targetPosition.multiply(this.target.parent.worldTransform.a, this.target.parent.worldTransform.d),
                    this.deadzone ? (this._edge = this._targetPosition.x - this.view.x,
                        this._edge < this.deadzone.left ? this.view.x = this._targetPosition.x - this.deadzone.left : this._edge > this.deadzone.right && (this.view.x = this._targetPosition.x - this.deadzone.right),
                        this._edge = this._targetPosition.y - this.view.y,
                        this._edge < this.deadzone.top ? this.view.y = this._targetPosition.y - this.deadzone.top : this._edge > this.deadzone.bottom && (this.view.y = this._targetPosition.y - this.deadzone.bottom)) : (this.view.x = this._targetPosition.x - this.view.halfWidth,
                        this.view.y = this._targetPosition.y - this.view.halfHeight)
            },
            setBoundsToWorld: function() {
                this.bounds && this.bounds.copyFrom(this.game.world.bounds)
            },
            checkBounds: function() {
                this.atLimit.x = !1,
                    this.atLimit.y = !1,
                this.view.x <= this.bounds.x && (this.atLimit.x = !0,
                    this.view.x = this.bounds.x),
                this.view.right >= this.bounds.right && (this.atLimit.x = !0,
                    this.view.x = this.bounds.right - this.width),
                this.view.y <= this.bounds.top && (this.atLimit.y = !0,
                    this.view.y = this.bounds.top),
                this.view.bottom >= this.bounds.bottom && (this.atLimit.y = !0,
                    this.view.y = this.bounds.bottom - this.height)
            },
            setPosition: function(t, e) {
                this.view.x = t,
                    this.view.y = e,
                this.bounds && this.checkBounds()
            },
            setSize: function(t, e) {
                this.view.width = t,
                    this.view.height = e
            },
            reset: function() {
                this.target = null,
                    this.view.x = 0,
                    this.view.y = 0
            }
        },
        i.Camera.prototype.constructor = i.Camera,
        Object.defineProperty(i.Camera.prototype, "x", {
            get: function() {
                return this.view.x
            },
            set: function(t) {
                this.view.x = t,
                this.bounds && this.checkBounds()
            }
        }),
        Object.defineProperty(i.Camera.prototype, "y", {
            get: function() {
                return this.view.y
            },
            set: function(t) {
                this.view.y = t,
                this.bounds && this.checkBounds()
            }
        }),
        Object.defineProperty(i.Camera.prototype, "position", {
            get: function() {
                return this._position.set(this.view.centerX, this.view.centerY),
                    this._position
            },
            set: function(t) {
                "undefined" != typeof t.x && (this.view.x = t.x),
                "undefined" != typeof t.y && (this.view.y = t.y),
                this.bounds && this.checkBounds()
            }
        }),
        Object.defineProperty(i.Camera.prototype, "width", {
            get: function() {
                return this.view.width
            },
            set: function(t) {
                this.view.width = t
            }
        }),
        Object.defineProperty(i.Camera.prototype, "height", {
            get: function() {
                return this.view.height
            },
            set: function(t) {
                this.view.height = t
            }
        }),
        i.State = function() {
            this.game = null,
                this.key = "",
                this.add = null,
                this.make = null,
                this.camera = null,
                this.cache = null,
                this.input = null,
                this.load = null,
                this.math = null,
                this.sound = null,
                this.scale = null,
                this.stage = null,
                this.time = null,
                this.tweens = null,
                this.world = null,
                this.particles = null,
                this.physics = null,
                this.rnd = null
        }
        ,
        i.State.prototype = {
            init: function() {},
            preload: function() {},
            loadUpdate: function() {},
            loadRender: function() {},
            create: function() {},
            update: function() {},
            preRender: function() {},
            render: function() {},
            resize: function() {},
            paused: function() {},
            resumed: function() {},
            pauseUpdate: function() {},
            shutdown: function() {}
        },
        i.State.prototype.constructor = i.State,
        i.StateManager = function(t, e) {
            this.game = t,
                this.states = {},
                this._pendingState = null,
            "undefined" != typeof e && null !== e && (this._pendingState = e),
                this._clearWorld = !1,
                this._clearCache = !1,
                this._created = !1,
                this._args = [],
                this.current = "",
                this.onStateChange = new i.Signal,
                this.onInitCallback = null,
                this.onPreloadCallback = null,
                this.onCreateCallback = null,
                this.onUpdateCallback = null,
                this.onRenderCallback = null,
                this.onResizeCallback = null,
                this.onPreRenderCallback = null,
                this.onLoadUpdateCallback = null,
                this.onLoadRenderCallback = null,
                this.onPausedCallback = null,
                this.onResumedCallback = null,
                this.onPauseUpdateCallback = null,
                this.onShutDownCallback = null
        }
        ,
        i.StateManager.prototype = {
            boot: function() {
                this.game.onPause.add(this.pause, this),
                    this.game.onResume.add(this.resume, this),
                null !== this._pendingState && "string" != typeof this._pendingState && this.add("default", this._pendingState, !0)
            },
            add: function(t, e, s) {
                void 0 === s && (s = !1);
                var n;
                return e instanceof i.State ? n = e : "object" == typeof e ? (n = e,
                    n.game = this.game) : "function" == typeof e && (n = new e(this.game)),
                    this.states[t] = n,
                s && (this.game.isBooted ? this.start(t) : this._pendingState = t),
                    n
            },
            remove: function(t) {
                this.current === t && (this.callbackContext = null,
                    this.onInitCallback = null,
                    this.onShutDownCallback = null,
                    this.onPreloadCallback = null,
                    this.onLoadRenderCallback = null,
                    this.onLoadUpdateCallback = null,
                    this.onCreateCallback = null,
                    this.onUpdateCallback = null,
                    this.onPreRenderCallback = null,
                    this.onRenderCallback = null,
                    this.onResizeCallback = null,
                    this.onPausedCallback = null,
                    this.onResumedCallback = null,
                    this.onPauseUpdateCallback = null),
                    delete this.states[t]
            },
            start: function(t, e, i) {
                void 0 === e && (e = !0),
                void 0 === i && (i = !1),
                this.checkState(t) && (this._pendingState = t,
                    this._clearWorld = e,
                    this._clearCache = i,
                arguments.length > 3 && (this._args = Array.prototype.splice.call(arguments, 3)))
            },
            restart: function(t, e) {
                void 0 === t && (t = !0),
                void 0 === e && (e = !1),
                    this._pendingState = this.current,
                    this._clearWorld = t,
                    this._clearCache = e,
                arguments.length > 2 && (this._args = Array.prototype.slice.call(arguments, 2))
            },
            dummy: function() {},
            preUpdate: function() {
                if (this._pendingState && this.game.isBooted) {
                    var t = this.current;
                    if (this.clearCurrentState(),
                        this.setCurrentState(this._pendingState),
                        this.onStateChange.dispatch(this.current, t),
                    this.current !== this._pendingState)
                        return;
                    this._pendingState = null,
                        this.onPreloadCallback ? (this.game.load.reset(!0),
                            this.onPreloadCallback.call(this.callbackContext, this.game),
                            0 === this.game.load.totalQueuedFiles() && 0 === this.game.load.totalQueuedPacks() ? this.loadComplete() : this.game.load.start()) : this.loadComplete()
                }
            },
            clearCurrentState: function() {
                this.current && (this.onShutDownCallback && this.onShutDownCallback.call(this.callbackContext, this.game),
                    this.game.tweens.removeAll(),
                    this.game.camera.reset(),
                    this.game.input.reset(!0),
                    this.game.physics.clear(),
                    this.game.time.removeAll(),
                    this.game.scale.reset(this._clearWorld),
                this.game.debug && this.game.debug.reset(),
                this._clearWorld && (this.game.world.shutdown(),
                this._clearCache === !0 && this.game.cache.destroy()))
            },
            checkState: function(t) {
                if (this.states[t]) {
                    var e = !1;
                    return (this.states[t].preload || this.states[t].create || this.states[t].update || this.states[t].render) && (e = !0),
                    e !== !1 || (console.warn("Invalid Phaser State object given. Must contain at least a one of the required functions: preload, create, update or render"),
                        !1)
                }
                return console.warn("Phaser.StateManager - No state found with the key: " + t),
                    !1
            },
            link: function(t) {
                this.states[t].game = this.game,
                    this.states[t].add = this.game.add,
                    this.states[t].make = this.game.make,
                    this.states[t].camera = this.game.camera,
                    this.states[t].cache = this.game.cache,
                    this.states[t].input = this.game.input,
                    this.states[t].load = this.game.load,
                    this.states[t].math = this.game.math,
                    this.states[t].sound = this.game.sound,
                    this.states[t].scale = this.game.scale,
                    this.states[t].state = this,
                    this.states[t].stage = this.game.stage,
                    this.states[t].time = this.game.time,
                    this.states[t].tweens = this.game.tweens,
                    this.states[t].world = this.game.world,
                    this.states[t].particles = this.game.particles,
                    this.states[t].rnd = this.game.rnd,
                    this.states[t].physics = this.game.physics,
                    this.states[t].key = t
            },
            unlink: function(t) {
                this.states[t] && (this.states[t].game = null,
                    this.states[t].add = null,
                    this.states[t].make = null,
                    this.states[t].camera = null,
                    this.states[t].cache = null,
                    this.states[t].input = null,
                    this.states[t].load = null,
                    this.states[t].math = null,
                    this.states[t].sound = null,
                    this.states[t].scale = null,
                    this.states[t].state = null,
                    this.states[t].stage = null,
                    this.states[t].time = null,
                    this.states[t].tweens = null,
                    this.states[t].world = null,
                    this.states[t].particles = null,
                    this.states[t].rnd = null,
                    this.states[t].physics = null)
            },
            setCurrentState: function(t) {
                this.callbackContext = this.states[t],
                    this.link(t),
                    this.onInitCallback = this.states[t].init || this.dummy,
                    this.onPreloadCallback = this.states[t].preload || null,
                    this.onLoadRenderCallback = this.states[t].loadRender || null,
                    this.onLoadUpdateCallback = this.states[t].loadUpdate || null,
                    this.onCreateCallback = this.states[t].create || null,
                    this.onUpdateCallback = this.states[t].update || null,
                    this.onPreRenderCallback = this.states[t].preRender || null,
                    this.onRenderCallback = this.states[t].render || null,
                    this.onResizeCallback = this.states[t].resize || null,
                    this.onPausedCallback = this.states[t].paused || null,
                    this.onResumedCallback = this.states[t].resumed || null,
                    this.onPauseUpdateCallback = this.states[t].pauseUpdate || null,
                    this.onShutDownCallback = this.states[t].shutdown || this.dummy,
                "" !== this.current && this.game.physics.reset(),
                    this.current = t,
                    this._created = !1,
                    this.onInitCallback.apply(this.callbackContext, this._args),
                t === this._pendingState && (this._args = []),
                    this.game._kickstart = !0
            },
            getCurrentState: function() {
                return this.states[this.current]
            },
            loadComplete: function() {
                this._created === !1 && this.onCreateCallback ? (this._created = !0,
                    this.onCreateCallback.call(this.callbackContext, this.game)) : this._created = !0
            },
            pause: function() {
                this._created && this.onPausedCallback && this.onPausedCallback.call(this.callbackContext, this.game)
            },
            resume: function() {
                this._created && this.onResumedCallback && this.onResumedCallback.call(this.callbackContext, this.game)
            },
            update: function() {
                this._created ? this.onUpdateCallback && this.onUpdateCallback.call(this.callbackContext, this.game) : this.onLoadUpdateCallback && this.onLoadUpdateCallback.call(this.callbackContext, this.game)
            },
            pauseUpdate: function() {
                this._created ? this.onPauseUpdateCallback && this.onPauseUpdateCallback.call(this.callbackContext, this.game) : this.onLoadUpdateCallback && this.onLoadUpdateCallback.call(this.callbackContext, this.game)
            },
            preRender: function(t) {
                this._created && this.onPreRenderCallback && this.onPreRenderCallback.call(this.callbackContext, this.game, t)
            },
            resize: function(t, e) {
                this.onResizeCallback && this.onResizeCallback.call(this.callbackContext, t, e)
            },
            render: function() {
                this._created ? this.onRenderCallback && (this.game.renderType === i.CANVAS ? (this.game.context.save(),
                    this.game.context.setTransform(1, 0, 0, 1, 0, 0),
                    this.onRenderCallback.call(this.callbackContext, this.game),
                    this.game.context.restore()) : this.onRenderCallback.call(this.callbackContext, this.game)) : this.onLoadRenderCallback && this.onLoadRenderCallback.call(this.callbackContext, this.game)
            },
            destroy: function() {
                this.clearCurrentState(),
                    this.callbackContext = null,
                    this.onInitCallback = null,
                    this.onShutDownCallback = null,
                    this.onPreloadCallback = null,
                    this.onLoadRenderCallback = null,
                    this.onLoadUpdateCallback = null,
                    this.onCreateCallback = null,
                    this.onUpdateCallback = null,
                    this.onRenderCallback = null,
                    this.onPausedCallback = null,
                    this.onResumedCallback = null,
                    this.onPauseUpdateCallback = null,
                    this.game = null,
                    this.states = {},
                    this._pendingState = null,
                    this.current = ""
            }
        },
        i.StateManager.prototype.constructor = i.StateManager,
        Object.defineProperty(i.StateManager.prototype, "created", {
            get: function() {
                return this._created
            }
        }),
        i.Signal = function() {}
        ,
        i.Signal.prototype = {
            _bindings: null,
            _prevParams: null,
            memorize: !1,
            _shouldPropagate: !0,
            active: !0,
            _boundDispatch: !0,
            validateListener: function(t, e) {
                if ("function" != typeof t)
                    throw new Error("Phaser.Signal: listener is a required param of {fn}() and should be a Function.".replace("{fn}", e))
            },
            _registerListener: function(t, e, s, n, r) {
                var o, a = this._indexOfListener(t, s);
                if (-1 !== a) {
                    if (o = this._bindings[a],
                    o.isOnce() !== e)
                        throw new Error("You cannot add" + (e ? "" : "Once") + "() then add" + (e ? "Once" : "") + "() the same listener without removing the relationship first.")
                } else
                    o = new i.SignalBinding(this,t,e,s,n,r),
                        this._addBinding(o);
                return this.memorize && this._prevParams && o.execute(this._prevParams),
                    o
            },
            _addBinding: function(t) {
                this._bindings || (this._bindings = []);
                var e = this._bindings.length;
                do
                    e--;
                while (this._bindings[e] && t._priority <= this._bindings[e]._priority);this._bindings.splice(e + 1, 0, t)
            },
            _indexOfListener: function(t, e) {
                if (!this._bindings)
                    return -1;
                void 0 === e && (e = null);
                for (var i, s = this._bindings.length; s--; )
                    if (i = this._bindings[s],
                    i._listener === t && i.context === e)
                        return s;
                return -1
            },
            has: function(t, e) {
                return -1 !== this._indexOfListener(t, e)
            },
            add: function(t, e, i) {
                this.validateListener(t, "add");
                var s = [];
                if (arguments.length > 3)
                    for (var n = 3; n < arguments.length; n++)
                        s.push(arguments[n]);
                return this._registerListener(t, !1, e, i, s)
            },
            addOnce: function(t, e, i) {
                this.validateListener(t, "addOnce");
                var s = [];
                if (arguments.length > 3)
                    for (var n = 3; n < arguments.length; n++)
                        s.push(arguments[n]);
                return this._registerListener(t, !0, e, i, s)
            },
            remove: function(t, e) {
                this.validateListener(t, "remove");
                var i = this._indexOfListener(t, e);
                return -1 !== i && (this._bindings[i]._destroy(),
                    this._bindings.splice(i, 1)),
                    t
            },
            removeAll: function(t) {
                if (void 0 === t && (t = null),
                    this._bindings) {
                    for (var e = this._bindings.length; e--; )
                        t ? this._bindings[e].context === t && (this._bindings[e]._destroy(),
                            this._bindings.splice(e, 1)) : this._bindings[e]._destroy();
                    t || (this._bindings.length = 0)
                }
            },
            getNumListeners: function() {
                return this._bindings ? this._bindings.length : 0
            },
            halt: function() {
                this._shouldPropagate = !1
            },
            dispatch: function() {
                if (this.active && this._bindings) {
                    var t, e = Array.prototype.slice.call(arguments), i = this._bindings.length;
                    if (this.memorize && (this._prevParams = e),
                        i) {
                        t = this._bindings.slice(),
                            this._shouldPropagate = !0;
                        do
                            i--;
                        while (t[i] && this._shouldPropagate && t[i].execute(e) !== !1)
                    }
                }
            },
            forget: function() {
                this._prevParams && (this._prevParams = null)
            },
            dispose: function() {
                this.removeAll(),
                    this._bindings = null,
                this._prevParams && (this._prevParams = null)
            },
            toString: function() {
                return "[Phaser.Signal active:" + this.active + " numListeners:" + this.getNumListeners() + "]"
            }
        },
        Object.defineProperty(i.Signal.prototype, "boundDispatch", {
            get: function() {
                var t = this;
                return this._boundDispatch || (this._boundDispatch = function() {
                        return t.dispatch.apply(t, arguments)
                    }
                )
            }
        }),
        i.Signal.prototype.constructor = i.Signal,
        i.SignalBinding = function(t, e, i, s, n, r) {
            this._listener = e,
            i && (this._isOnce = !0),
            null != s && (this.context = s),
                this._signal = t,
            n && (this._priority = n),
            r && r.length && (this._args = r)
        }
        ,
        i.SignalBinding.prototype = {
            context: null,
            _isOnce: !1,
            _priority: 0,
            _args: null,
            callCount: 0,
            active: !0,
            params: null,
            execute: function(t) {
                var e, i;
                return this.active && this._listener && (i = this.params ? this.params.concat(t) : t,
                this._args && (i = i.concat(this._args)),
                    e = this._listener.apply(this.context, i),
                    this.callCount++,
                this._isOnce && this.detach()),
                    e
            },
            detach: function() {
                return this.isBound() ? this._signal.remove(this._listener, this.context) : null
            },
            isBound: function() {
                return !!this._signal && !!this._listener
            },
            isOnce: function() {
                return this._isOnce
            },
            getListener: function() {
                return this._listener
            },
            getSignal: function() {
                return this._signal
            },
            _destroy: function() {
                delete this._signal,
                    delete this._listener,
                    delete this.context
            },
            toString: function() {
                return "[Phaser.SignalBinding isOnce:" + this._isOnce + ", isBound:" + this.isBound() + ", active:" + this.active + "]"
            }
        },
        i.SignalBinding.prototype.constructor = i.SignalBinding,
        i.Filter = function(t, e, s) {
            this.game = t,
                this.type = i.WEBGL_FILTER,
                this.passes = [this],
                this.shaders = [],
                this.dirty = !0,
                this.padding = 0,
                this.prevPoint = new i.Point;
            var n = new Date;
            if (this.uniforms = {
                resolution: {
                    type: "2f",
                    value: {
                        x: 256,
                        y: 256
                    }
                },
                time: {
                    type: "1f",
                    value: 0
                },
                mouse: {
                    type: "2f",
                    value: {
                        x: 0,
                        y: 0
                    }
                },
                date: {
                    type: "4fv",
                    value: [n.getFullYear(), n.getMonth(), n.getDate(), 60 * n.getHours() * 60 + 60 * n.getMinutes() + n.getSeconds()]
                },
                sampleRate: {
                    type: "1f",
                    value: 44100
                },
                iChannel0: {
                    type: "sampler2D",
                    value: null,
                    textureData: {
                        repeat: !0
                    }
                },
                iChannel1: {
                    type: "sampler2D",
                    value: null,
                    textureData: {
                        repeat: !0
                    }
                },
                iChannel2: {
                    type: "sampler2D",
                    value: null,
                    textureData: {
                        repeat: !0
                    }
                },
                iChannel3: {
                    type: "sampler2D",
                    value: null,
                    textureData: {
                        repeat: !0
                    }
                }
            },
                e)
                for (var r in e)
                    this.uniforms[r] = e[r];
            this.fragmentSrc = s || ""
        }
        ,
        i.Filter.prototype = {
            init: function() {},
            setResolution: function(t, e) {
                this.uniforms.resolution.value.x = t,
                    this.uniforms.resolution.value.y = e
            },
            update: function(t) {
                if ("undefined" != typeof t) {
                    var e = t.x / this.game.width
                        , i = 1 - t.y / this.game.height;
                    (e !== this.prevPoint.x || i !== this.prevPoint.y) && (this.uniforms.mouse.value.x = e.toFixed(2),
                        this.uniforms.mouse.value.y = i.toFixed(2),
                        this.prevPoint.set(e, i))
                }
                this.uniforms.time.value = this.game.time.totalElapsedSeconds()
            },
            addToWorld: function(t, e, i, s, n, r) {
                void 0 === n && (n = 0),
                void 0 === r && (r = 0),
                    void 0 !== i && null !== i ? this.width = i : i = this.width,
                    void 0 !== s && null !== s ? this.height = s : s = this.height;
                var o = this.game.add.image(t, e, "__default");
                return o.width = i,
                    o.height = s,
                    o.anchor.set(n, r),
                    o.filters = [this],
                    o
            },
            destroy: function() {
                this.game = null
            }
        },
        i.Filter.prototype.constructor = i.Filter,
        Object.defineProperty(i.Filter.prototype, "width", {
            get: function() {
                return this.uniforms.resolution.value.x
            },
            set: function(t) {
                this.uniforms.resolution.value.x = t
            }
        }),
        Object.defineProperty(i.Filter.prototype, "height", {
            get: function() {
                return this.uniforms.resolution.value.y
            },
            set: function(t) {
                this.uniforms.resolution.value.y = t
            }
        }),
        i.Plugin = function(t, e) {
            void 0 === e && (e = null),
                this.game = t,
                this.parent = e,
                this.active = !1,
                this.visible = !1,
                this.hasPreUpdate = !1,
                this.hasUpdate = !1,
                this.hasPostUpdate = !1,
                this.hasRender = !1,
                this.hasPostRender = !1
        }
        ,
        i.Plugin.prototype = {
            preUpdate: function() {},
            update: function() {},
            render: function() {},
            postRender: function() {},
            destroy: function() {
                this.game = null,
                    this.parent = null,
                    this.active = !1,
                    this.visible = !1
            }
        },
        i.Plugin.prototype.constructor = i.Plugin,
        i.PluginManager = function(t) {
            this.game = t,
                this.plugins = [],
                this._len = 0,
                this._i = 0
        }
        ,
        i.PluginManager.prototype = {
            add: function(t) {
                var e = Array.prototype.slice.call(arguments, 1)
                    , i = !1;
                return "function" == typeof t ? t = new t(this.game,this) : (t.game = this.game,
                    t.parent = this),
                "function" == typeof t.preUpdate && (t.hasPreUpdate = !0,
                    i = !0),
                "function" == typeof t.update && (t.hasUpdate = !0,
                    i = !0),
                "function" == typeof t.postUpdate && (t.hasPostUpdate = !0,
                    i = !0),
                "function" == typeof t.render && (t.hasRender = !0,
                    i = !0),
                "function" == typeof t.postRender && (t.hasPostRender = !0,
                    i = !0),
                    i ? ((t.hasPreUpdate || t.hasUpdate || t.hasPostUpdate) && (t.active = !0),
                    (t.hasRender || t.hasPostRender) && (t.visible = !0),
                        this._len = this.plugins.push(t),
                    "function" == typeof t.init && t.init.apply(t, e),
                        t) : null
            },
            remove: function(t) {
                for (this._i = this._len; this._i--; )
                    if (this.plugins[this._i] === t)
                        return t.destroy(),
                            this.plugins.splice(this._i, 1),
                            void this._len--
            },
            removeAll: function() {
                for (this._i = this._len; this._i--; )
                    this.plugins[this._i].destroy();
                this.plugins.length = 0,
                    this._len = 0
            },
            preUpdate: function() {
                for (this._i = this._len; this._i--; )
                    this.plugins[this._i].active && this.plugins[this._i].hasPreUpdate && this.plugins[this._i].preUpdate()
            },
            update: function() {
                for (this._i = this._len; this._i--; )
                    this.plugins[this._i].active && this.plugins[this._i].hasUpdate && this.plugins[this._i].update()
            },
            postUpdate: function() {
                for (this._i = this._len; this._i--; )
                    this.plugins[this._i].active && this.plugins[this._i].hasPostUpdate && this.plugins[this._i].postUpdate()
            },
            render: function() {
                for (this._i = this._len; this._i--; )
                    this.plugins[this._i].visible && this.plugins[this._i].hasRender && this.plugins[this._i].render()
            },
            postRender: function() {
                for (this._i = this._len; this._i--; )
                    this.plugins[this._i].visible && this.plugins[this._i].hasPostRender && this.plugins[this._i].postRender()
            },
            destroy: function() {
                this.removeAll(),
                    this.game = null
            }
        },
        i.PluginManager.prototype.constructor = i.PluginManager,
        i.Stage = function(t) {
            this.game = t,
                PIXI.DisplayObjectContainer.call(this),
                this.name = "_stage_root",
                this.disableVisibilityChange = !1,
                this.exists = !0,
                this.worldTransform = new PIXI.Matrix,
                this.stage = this,
                this.currentRenderOrderID = 0,
                this._hiddenVar = "hidden",
                this._onChange = null,
                this._bgColor = {
                    r: 0,
                    g: 0,
                    b: 0,
                    a: 0,
                    color: 0,
                    rgba: "#000000"
                },
            this.game.transparent || (this._bgColor.a = 1),
            t.config && this.parseConfig(t.config)
        }
        ,
        i.Stage.prototype = Object.create(PIXI.DisplayObjectContainer.prototype),
        i.Stage.prototype.constructor = i.Stage,
        i.Stage.prototype.parseConfig = function(t) {
            t.disableVisibilityChange && (this.disableVisibilityChange = t.disableVisibilityChange),
            t.backgroundColor && this.setBackgroundColor(t.backgroundColor)
        }
        ,
        i.Stage.prototype.boot = function() {
            i.DOM.getOffset(this.game.canvas, this.offset),
                i.Canvas.setUserSelect(this.game.canvas, "none"),
                i.Canvas.setTouchAction(this.game.canvas, "none"),
                this.checkVisibility()
        }
        ,
        i.Stage.prototype.preUpdate = function() {
            this.currentRenderOrderID = 0;
            for (var t = 0; t < this.children.length; t++)
                this.children[t].preUpdate()
        }
        ,
        i.Stage.prototype.update = function() {
            for (var t = this.children.length; t--; )
                this.children[t].update()
        }
        ,
        i.Stage.prototype.postUpdate = function() {
            if (this.game.world.camera.target) {
                this.game.world.camera.target.postUpdate(),
                    this.game.world.camera.update();
                for (var t = this.children.length; t--; )
                    this.children[t] !== this.game.world.camera.target && this.children[t].postUpdate()
            } else {
                this.game.world.camera.update();
                for (var t = this.children.length; t--; )
                    this.children[t].postUpdate()
            }
        }
        ,
        i.Stage.prototype.updateTransform = function() {
            this.worldAlpha = 1;
            for (var t = 0; t < this.children.length; t++)
                this.children[t].updateTransform()
        }
        ,
        i.Stage.prototype.checkVisibility = function() {
            void 0 !== document.webkitHidden ? this._hiddenVar = "webkitvisibilitychange" : void 0 !== document.mozHidden ? this._hiddenVar = "mozvisibilitychange" : void 0 !== document.msHidden ? this._hiddenVar = "msvisibilitychange" : void 0 !== document.hidden ? this._hiddenVar = "visibilitychange" : this._hiddenVar = null;
            var t = this;
            this._onChange = function(e) {
                return t.visibilityChange(e)
            }
                ,
            this._hiddenVar && document.addEventListener(this._hiddenVar, this._onChange, !1),
                window.onblur = this._onChange,
                window.onfocus = this._onChange,
                window.onpagehide = this._onChange,
                window.onpageshow = this._onChange,
            this.game.device.cocoonJSApp && (CocoonJS.App.onSuspended.addEventListener(function() {
                i.Stage.prototype.visibilityChange.call(t, {
                    type: "pause"
                })
            }),
                CocoonJS.App.onActivated.addEventListener(function() {
                    i.Stage.prototype.visibilityChange.call(t, {
                        type: "resume"
                    })
                }))
        }
        ,
        i.Stage.prototype.visibilityChange = function(t) {
            return "pagehide" === t.type || "blur" === t.type || "pageshow" === t.type || "focus" === t.type ? void ("pagehide" === t.type || "blur" === t.type ? this.game.focusLoss(t) : ("pageshow" === t.type || "focus" === t.type) && this.game.focusGain(t)) : void (this.disableVisibilityChange || (document.hidden || document.mozHidden || document.msHidden || document.webkitHidden || "pause" === t.type ? this.game.gamePaused(t) : this.game.gameResumed(t)))
        }
        ,
        i.Stage.prototype.setBackgroundColor = function(t) {
            this.game.transparent || (i.Color.valueToColor(t, this._bgColor),
                i.Color.updateColor(this._bgColor),
                this._bgColor.r /= 255,
                this._bgColor.g /= 255,
                this._bgColor.b /= 255,
                this._bgColor.a = 1)
        }
        ,
        i.Stage.prototype.destroy = function() {
            this._hiddenVar && document.removeEventListener(this._hiddenVar, this._onChange, !1),
                window.onpagehide = null,
                window.onpageshow = null,
                window.onblur = null,
                window.onfocus = null
        }
        ,
        Object.defineProperty(i.Stage.prototype, "backgroundColor", {
            get: function() {
                return this._bgColor.color
            },
            set: function(t) {
                this.setBackgroundColor(t)
            }
        }),
        Object.defineProperty(i.Stage.prototype, "smoothed", {
            get: function() {
                return PIXI.scaleModes.DEFAULT === PIXI.scaleModes.LINEAR
            },
            set: function(t) {
                t ? PIXI.scaleModes.DEFAULT = PIXI.scaleModes.LINEAR : PIXI.scaleModes.DEFAULT = PIXI.scaleModes.NEAREST
            }
        }),
        i.Group = function(t, e, s, n, r, o) {
            void 0 === n && (n = !1),
            void 0 === r && (r = !1),
            void 0 === o && (o = i.Physics.ARCADE),
                this.game = t,
            void 0 === e && (e = t.world),
                this.name = s || "group",
                this.z = 0,
                PIXI.DisplayObjectContainer.call(this),
                n ? (this.game.stage.addChild(this),
                    this.z = this.game.stage.children.length) : e && (e.addChild(this),
                    this.z = e.children.length),
                this.type = i.GROUP,
                this.physicsType = i.GROUP,
                this.alive = !0,
                this.exists = !0,
                this.ignoreDestroy = !1,
                this.pendingDestroy = !1,
                this.classType = i.Sprite,
                this.cursor = null,
                this.enableBody = r,
                this.enableBodyDebug = !1,
                this.physicsBodyType = o,
                this.physicsSortDirection = null,
                this.onDestroy = new i.Signal,
                this.cursorIndex = 0,
                this.fixedToCamera = !1,
                this.cameraOffset = new i.Point,
                this.hash = [],
                this._sortProperty = "z"
        }
        ,
        i.Group.prototype = Object.create(PIXI.DisplayObjectContainer.prototype),
        i.Group.prototype.constructor = i.Group,
        i.Group.RETURN_NONE = 0,
        i.Group.RETURN_TOTAL = 1,
        i.Group.RETURN_CHILD = 2,
        i.Group.SORT_ASCENDING = -1,
        i.Group.SORT_DESCENDING = 1,
        i.Group.prototype.add = function(t, e) {
            return void 0 === e && (e = !1),
            t.parent !== this && (this.addChild(t),
                t.z = this.children.length,
                this.enableBody && null === t.body ? this.game.physics.enable(t, this.physicsBodyType) : t.body && this.addToHash(t),
            !e && t.events && t.events.onAddedToGroup$dispatch(t, this),
            null === this.cursor && (this.cursor = t)),
                t
        }
        ,
        i.Group.prototype.addToHash = function(t) {
            if (t.parent === this) {
                var e = this.hash.indexOf(t);
                if (-1 === e)
                    return this.hash.push(t),
                        !0
            }
            return !1
        }
        ,
        i.Group.prototype.removeFromHash = function(t) {
            if (t) {
                var e = this.hash.indexOf(t);
                if (-1 !== e)
                    return this.hash.splice(e, 1),
                        !0
            }
            return !1
        }
        ,
        i.Group.prototype.addMultiple = function(t, e) {
            if (t instanceof i.Group)
                t.moveAll(this, e);
            else if (Array.isArray(t))
                for (var s = 0; s < t.length; s++)
                    this.add(t[s], e);
            return t
        }
        ,
        i.Group.prototype.addAt = function(t, e, i) {
            return void 0 === i && (i = !1),
            t.parent !== this && (this.addChildAt(t, e),
                this.updateZ(),
                this.enableBody && null === t.body ? this.game.physics.enable(t, this.physicsBodyType) : t.body && this.addToHash(t),
            !i && t.events && t.events.onAddedToGroup$dispatch(t, this),
            null === this.cursor && (this.cursor = t)),
                t
        }
        ,
        i.Group.prototype.getAt = function(t) {
            return 0 > t || t >= this.children.length ? -1 : this.getChildAt(t)
        }
        ,
        i.Group.prototype.create = function(t, e, i, s, n) {
            void 0 === n && (n = !0);
            var r = new this.classType(this.game,t,e,i,s);
            return r.exists = n,
                r.visible = n,
                r.alive = n,
                this.addChild(r),
                r.z = this.children.length,
            this.enableBody && this.game.physics.enable(r, this.physicsBodyType, this.enableBodyDebug),
            r.events && r.events.onAddedToGroup$dispatch(r, this),
            null === this.cursor && (this.cursor = r),
                r
        }
        ,
        i.Group.prototype.createMultiple = function(t, e, i, s) {
            void 0 === s && (s = !1);
            for (var n = 0; t > n; n++)
                this.create(0, 0, e, i, s)
        }
        ,
        i.Group.prototype.updateZ = function() {
            for (var t = this.children.length; t--; )
                this.children[t].z = t
        }
        ,
        i.Group.prototype.resetCursor = function(t) {
            return void 0 === t && (t = 0),
            t > this.children.length - 1 && (t = 0),
                this.cursor ? (this.cursorIndex = t,
                    this.cursor = this.children[this.cursorIndex],
                    this.cursor) : void 0
        }
        ,
        i.Group.prototype.next = function() {
            return this.cursor ? (this.cursorIndex >= this.children.length - 1 ? this.cursorIndex = 0 : this.cursorIndex++,
                this.cursor = this.children[this.cursorIndex],
                this.cursor) : void 0
        }
        ,
        i.Group.prototype.previous = function() {
            return this.cursor ? (0 === this.cursorIndex ? this.cursorIndex = this.children.length - 1 : this.cursorIndex--,
                this.cursor = this.children[this.cursorIndex],
                this.cursor) : void 0
        }
        ,
        i.Group.prototype.swap = function(t, e) {
            this.swapChildren(t, e),
                this.updateZ()
        }
        ,
        i.Group.prototype.bringToTop = function(t) {
            return t.parent === this && this.getIndex(t) < this.children.length && (this.remove(t, !1, !0),
                this.add(t, !0)),
                t
        }
        ,
        i.Group.prototype.sendToBack = function(t) {
            return t.parent === this && this.getIndex(t) > 0 && (this.remove(t, !1, !0),
                this.addAt(t, 0, !0)),
                t
        }
        ,
        i.Group.prototype.moveUp = function(t) {
            if (t.parent === this && this.getIndex(t) < this.children.length - 1) {
                var e = this.getIndex(t)
                    , i = this.getAt(e + 1);
                i && this.swap(t, i)
            }
            return t
        }
        ,
        i.Group.prototype.moveDown = function(t) {
            if (t.parent === this && this.getIndex(t) > 0) {
                var e = this.getIndex(t)
                    , i = this.getAt(e - 1);
                i && this.swap(t, i)
            }
            return t
        }
        ,
        i.Group.prototype.xy = function(t, e, i) {
            return 0 > t || t > this.children.length ? -1 : (this.getChildAt(t).x = e,
                void (this.getChildAt(t).y = i))
        }
        ,
        i.Group.prototype.reverse = function() {
            this.children.reverse(),
                this.updateZ()
        }
        ,
        i.Group.prototype.getIndex = function(t) {
            return this.children.indexOf(t)
        }
        ,
        i.Group.prototype.replace = function(t, e) {
            var s = this.getIndex(t);
            return -1 !== s ? (e.parent && (e.parent instanceof i.Group ? e.parent.remove(e) : e.parent.removeChild(e)),
                this.remove(t),
                this.addAt(e, s),
                t) : void 0
        }
        ,
        i.Group.prototype.hasProperty = function(t, e) {
            var i = e.length;
            return 1 === i && e[0]in t || (2 === i && e[0]in t && e[1]in t[e[0]] || (3 === i && e[0]in t && e[1]in t[e[0]] && e[2]in t[e[0]][e[1]] || 4 === i && e[0]in t && e[1]in t[e[0]] && e[2]in t[e[0]][e[1]] && e[3]in t[e[0]][e[1]][e[2]]))
        }
        ,
        i.Group.prototype.setProperty = function(t, e, i, s, n) {
            if (void 0 === n && (n = !1),
                s = s || 0,
            !this.hasProperty(t, e) && (!n || s > 0))
                return !1;
            var r = e.length;
            return 1 === r ? 0 === s ? t[e[0]] = i : 1 == s ? t[e[0]] += i : 2 == s ? t[e[0]] -= i : 3 == s ? t[e[0]] *= i : 4 == s && (t[e[0]] /= i) : 2 === r ? 0 === s ? t[e[0]][e[1]] = i : 1 == s ? t[e[0]][e[1]] += i : 2 == s ? t[e[0]][e[1]] -= i : 3 == s ? t[e[0]][e[1]] *= i : 4 == s && (t[e[0]][e[1]] /= i) : 3 === r ? 0 === s ? t[e[0]][e[1]][e[2]] = i : 1 == s ? t[e[0]][e[1]][e[2]] += i : 2 == s ? t[e[0]][e[1]][e[2]] -= i : 3 == s ? t[e[0]][e[1]][e[2]] *= i : 4 == s && (t[e[0]][e[1]][e[2]] /= i) : 4 === r && (0 === s ? t[e[0]][e[1]][e[2]][e[3]] = i : 1 == s ? t[e[0]][e[1]][e[2]][e[3]] += i : 2 == s ? t[e[0]][e[1]][e[2]][e[3]] -= i : 3 == s ? t[e[0]][e[1]][e[2]][e[3]] *= i : 4 == s && (t[e[0]][e[1]][e[2]][e[3]] /= i)),
                !0
        }
        ,
        i.Group.prototype.checkProperty = function(t, e, s, n) {
            return void 0 === n && (n = !1),
            !(!i.Utils.getProperty(t, e) && n) && i.Utils.getProperty(t, e) === s
        }
        ,
        i.Group.prototype.set = function(t, e, i, s, n, r, o) {
            return void 0 === o && (o = !1),
                e = e.split("."),
            void 0 === s && (s = !1),
            void 0 === n && (n = !1),
                (s === !1 || s && t.alive) && (n === !1 || n && t.visible) ? this.setProperty(t, e, i, r, o) : void 0
        }
        ,
        i.Group.prototype.setAll = function(t, e, i, s, n, r) {
            void 0 === i && (i = !1),
            void 0 === s && (s = !1),
            void 0 === r && (r = !1),
                t = t.split("."),
                n = n || 0;
            for (var o = 0; o < this.children.length; o++)
                (!i || i && this.children[o].alive) && (!s || s && this.children[o].visible) && this.setProperty(this.children[o], t, e, n, r)
        }
        ,
        i.Group.prototype.setAllChildren = function(t, e, s, n, r, o) {
            void 0 === s && (s = !1),
            void 0 === n && (n = !1),
            void 0 === o && (o = !1),
                r = r || 0;
            for (var a = 0; a < this.children.length; a++)
                (!s || s && this.children[a].alive) && (!n || n && this.children[a].visible) && (this.children[a]instanceof i.Group ? this.children[a].setAllChildren(t, e, s, n, r, o) : this.setProperty(this.children[a], t.split("."), e, r, o))
        }
        ,
        i.Group.prototype.checkAll = function(t, e, i, s, n) {
            void 0 === i && (i = !1),
            void 0 === s && (s = !1),
            void 0 === n && (n = !1);
            for (var r = 0; r < this.children.length; r++)
                if ((!i || i && this.children[r].alive) && (!s || s && this.children[r].visible) && !this.checkProperty(this.children[r], t, e, n))
                    return !1;
            return !0
        }
        ,
        i.Group.prototype.addAll = function(t, e, i, s) {
            this.setAll(t, e, i, s, 1)
        }
        ,
        i.Group.prototype.subAll = function(t, e, i, s) {
            this.setAll(t, e, i, s, 2)
        }
        ,
        i.Group.prototype.multiplyAll = function(t, e, i, s) {
            this.setAll(t, e, i, s, 3)
        }
        ,
        i.Group.prototype.divideAll = function(t, e, i, s) {
            this.setAll(t, e, i, s, 4)
        }
        ,
        i.Group.prototype.callAllExists = function(t, e) {
            var i;
            if (arguments.length > 2) {
                i = [];
                for (var s = 2; s < arguments.length; s++)
                    i.push(arguments[s])
            }
            for (var s = 0; s < this.children.length; s++)
                this.children[s].exists === e && this.children[s][t] && this.children[s][t].apply(this.children[s], i)
        }
        ,
        i.Group.prototype.callbackFromArray = function(t, e, i) {
            if (1 == i) {
                if (t[e[0]])
                    return t[e[0]]
            } else if (2 == i) {
                if (t[e[0]][e[1]])
                    return t[e[0]][e[1]]
            } else if (3 == i) {
                if (t[e[0]][e[1]][e[2]])
                    return t[e[0]][e[1]][e[2]]
            } else if (4 == i) {
                if (t[e[0]][e[1]][e[2]][e[3]])
                    return t[e[0]][e[1]][e[2]][e[3]]
            } else if (t[e])
                return t[e];
            return !1
        }
        ,
        i.Group.prototype.callAll = function(t, e) {
            if (void 0 !== t) {
                t = t.split(".");
                var i = t.length;
                if (void 0 === e || null === e || "" === e)
                    e = null;
                else if ("string" == typeof e) {
                    e = e.split(".");
                    var s = e.length
                }
                var n;
                if (arguments.length > 2) {
                    n = [];
                    for (var r = 2; r < arguments.length; r++)
                        n.push(arguments[r])
                }
                for (var o = null, a = null, r = 0; r < this.children.length; r++)
                    o = this.callbackFromArray(this.children[r], t, i),
                        e && o ? (a = this.callbackFromArray(this.children[r], e, s),
                        o && o.apply(a, n)) : o && o.apply(this.children[r], n)
            }
        }
        ,
        i.Group.prototype.preUpdate = function() {
            if (this.pendingDestroy)
                return this.destroy(),
                    !1;
            if (!this.exists || !this.parent.exists)
                return this.renderOrderID = -1,
                    !1;
            for (var t = this.children.length; t--; )
                this.children[t].preUpdate();
            return !0
        }
        ,
        i.Group.prototype.update = function() {
            for (var t = this.children.length; t--; )
                this.children[t].update()
        }
        ,
        i.Group.prototype.postUpdate = function() {
            this.fixedToCamera && (this.x = this.game.camera.view.x + this.cameraOffset.x,
                this.y = this.game.camera.view.y + this.cameraOffset.y);
            for (var t = this.children.length; t--; )
                this.children[t].postUpdate()
        }
        ,
        i.Group.prototype.filter = function(t, e) {
            for (var s = -1, n = this.children.length, r = []; ++s < n; ) {
                var o = this.children[s];
                (!e || e && o.exists) && t(o, s, this.children) && r.push(o)
            }
            return new i.ArraySet(r)
        }
        ,
        i.Group.prototype.forEach = function(t, e, i) {
            if (void 0 === i && (i = !1),
            arguments.length <= 3)
                for (var s = 0; s < this.children.length; s++)
                    (!i || i && this.children[s].exists) && t.call(e, this.children[s]);
            else {
                for (var n = [null], s = 3; s < arguments.length; s++)
                    n.push(arguments[s]);
                for (var s = 0; s < this.children.length; s++)
                    (!i || i && this.children[s].exists) && (n[0] = this.children[s],
                        t.apply(e, n))
            }
        }
        ,
        i.Group.prototype.forEachExists = function(t, e) {
            var s;
            if (arguments.length > 2) {
                s = [null];
                for (var n = 2; n < arguments.length; n++)
                    s.push(arguments[n])
            }
            this.iterate("exists", !0, i.Group.RETURN_TOTAL, t, e, s)
        }
        ,
        i.Group.prototype.forEachAlive = function(t, e) {
            var s;
            if (arguments.length > 2) {
                s = [null];
                for (var n = 2; n < arguments.length; n++)
                    s.push(arguments[n])
            }
            this.iterate("alive", !0, i.Group.RETURN_TOTAL, t, e, s)
        }
        ,
        i.Group.prototype.forEachDead = function(t, e) {
            var s;
            if (arguments.length > 2) {
                s = [null];
                for (var n = 2; n < arguments.length; n++)
                    s.push(arguments[n])
            }
            this.iterate("alive", !1, i.Group.RETURN_TOTAL, t, e, s)
        }
        ,
        i.Group.prototype.sort = function(t, e) {
            this.children.length < 2 || (void 0 === t && (t = "z"),
            void 0 === e && (e = i.Group.SORT_ASCENDING),
                this._sortProperty = t,
                e === i.Group.SORT_ASCENDING ? this.children.sort(this.ascendingSortHandler.bind(this)) : this.children.sort(this.descendingSortHandler.bind(this)),
                this.updateZ())
        }
        ,
        i.Group.prototype.customSort = function(t, e) {
            this.children.length < 2 || (this.children.sort(t.bind(e)),
                this.updateZ())
        }
        ,
        i.Group.prototype.ascendingSortHandler = function(t, e) {
            return t[this._sortProperty] < e[this._sortProperty] ? -1 : t[this._sortProperty] > e[this._sortProperty] ? 1 : t.z < e.z ? -1 : 1
        }
        ,
        i.Group.prototype.descendingSortHandler = function(t, e) {
            return t[this._sortProperty] < e[this._sortProperty] ? 1 : t[this._sortProperty] > e[this._sortProperty] ? -1 : 0
        }
        ,
        i.Group.prototype.iterate = function(t, e, s, n, r, o) {
            if (s === i.Group.RETURN_TOTAL && 0 === this.children.length)
                return 0;
            for (var a = 0, h = 0; h < this.children.length; h++)
                if (this.children[h][t] === e && (a++,
                n && (o ? (o[0] = this.children[h],
                    n.apply(r, o)) : n.call(r, this.children[h])),
                s === i.Group.RETURN_CHILD))
                    return this.children[h];
            return s === i.Group.RETURN_TOTAL ? a : null
        }
        ,
        i.Group.prototype.getFirstExists = function(t, e, s, n, r, o) {
            void 0 === e && (e = !1),
            "boolean" != typeof t && (t = !0);
            var a = this.iterate("exists", t, i.Group.RETURN_CHILD);
            return null === a && e ? this.create(s, n, r, o) : this.resetChild(a, s, n, r, o)
        }
        ,
        i.Group.prototype.getFirstAlive = function(t, e, s, n, r) {
            void 0 === t && (t = !1);
            var o = this.iterate("alive", !0, i.Group.RETURN_CHILD);
            return null === o && t ? this.create(e, s, n, r) : this.resetChild(o, e, s, n, r)
        }
        ,
        i.Group.prototype.getFirstDead = function(t, e, s, n, r) {
            void 0 === t && (t = !1);
            var o = this.iterate("alive", !1, i.Group.RETURN_CHILD);
            return null === o && t ? this.create(e, s, n, r) : this.resetChild(o, e, s, n, r)
        }
        ,
        i.Group.prototype.resetChild = function(t, e, i, s, n) {
            return null === t ? null : (void 0 === e && (e = null),
            void 0 === i && (i = null),
            null !== e && null !== i && t.reset(e, i),
            void 0 !== s && t.loadTexture(s, n),
                t)
        }
        ,
        i.Group.prototype.getTop = function() {
            return this.children.length > 0 ? this.children[this.children.length - 1] : void 0
        }
        ,
        i.Group.prototype.getBottom = function() {
            return this.children.length > 0 ? this.children[0] : void 0
        }
        ,
        i.Group.prototype.countLiving = function() {
            return this.iterate("alive", !0, i.Group.RETURN_TOTAL)
        }
        ,
        i.Group.prototype.countDead = function() {
            return this.iterate("alive", !1, i.Group.RETURN_TOTAL)
        }
        ,
        i.Group.prototype.getRandom = function(t, e) {
            return 0 === this.children.length ? null : (t = t || 0,
                e = e || this.children.length,
                i.ArrayUtils.getRandomItem(this.children, t, e))
        }
        ,
        i.Group.prototype.remove = function(t, e, i) {
            if (void 0 === e && (e = !1),
            void 0 === i && (i = !1),
            0 === this.children.length || -1 === this.children.indexOf(t))
                return !1;
            i || !t.events || t.destroyPhase || t.events.onRemovedFromGroup$dispatch(t, this);
            var s = this.removeChild(t);
            return this.removeFromHash(t),
                this.updateZ(),
            this.cursor === t && this.next(),
            e && s && s.destroy(!0),
                !0
        }
        ,
        i.Group.prototype.moveAll = function(t, e) {
            if (void 0 === e && (e = !1),
            this.children.length > 0 && t instanceof i.Group) {
                do
                    t.add(this.children[0], e);
                while (this.children.length > 0);this.hash = [],
                    this.cursor = null
            }
            return t
        }
        ,
        i.Group.prototype.removeAll = function(t, e) {
            if (void 0 === t && (t = !1),
            void 0 === e && (e = !1),
            0 !== this.children.length) {
                do {
                    !e && this.children[0].events && this.children[0].events.onRemovedFromGroup$dispatch(this.children[0], this);
                    var i = this.removeChild(this.children[0]);
                    this.removeFromHash(i),
                    t && i && i.destroy(!0)
                } while (this.children.length > 0);this.hash = [],
                    this.cursor = null
            }
        }
        ,
        i.Group.prototype.removeBetween = function(t, e, i, s) {
            if (void 0 === e && (e = this.children.length - 1),
            void 0 === i && (i = !1),
            void 0 === s && (s = !1),
            0 !== this.children.length) {
                if (t > e || 0 > t || e > this.children.length)
                    return !1;
                for (var n = e; n >= t; ) {
                    !s && this.children[n].events && this.children[n].events.onRemovedFromGroup$dispatch(this.children[n], this);
                    var r = this.removeChild(this.children[n]);
                    this.removeFromHash(r),
                    i && r && r.destroy(!0),
                    this.cursor === this.children[n] && (this.cursor = null),
                        n--
                }
                this.updateZ()
            }
        }
        ,
        i.Group.prototype.destroy = function(t, e) {
            null === this.game || this.ignoreDestroy || (void 0 === t && (t = !0),
            void 0 === e && (e = !1),
                this.onDestroy.dispatch(this, t, e),
                this.removeAll(t),
                this.cursor = null,
                this.filters = null,
                this.pendingDestroy = !1,
            e || (this.parent && this.parent.removeChild(this),
                this.game = null,
                this.exists = !1))
        }
        ,
        Object.defineProperty(i.Group.prototype, "total", {
            get: function() {
                return this.iterate("exists", !0, i.Group.RETURN_TOTAL)
            }
        }),
        Object.defineProperty(i.Group.prototype, "length", {
            get: function() {
                return this.children.length
            }
        }),
        Object.defineProperty(i.Group.prototype, "angle", {
            get: function() {
                return i.Math.radToDeg(this.rotation)
            },
            set: function(t) {
                this.rotation = i.Math.degToRad(t)
            }
        }),
        i.World = function(t) {
            i.Group.call(this, t, null, "__world", !1),
                this.bounds = new i.Rectangle(0,0,t.width,t.height),
                this.camera = null,
                this._definedSize = !1,
                this._width = t.width,
                this._height = t.height,
                this.game.state.onStateChange.add(this.stateChange, this)
        }
        ,
        i.World.prototype = Object.create(i.Group.prototype),
        i.World.prototype.constructor = i.World,
        i.World.prototype.boot = function() {
            this.camera = new i.Camera(this.game,0,0,0,this.game.width,this.game.height),
                this.camera.displayObject = this,
                this.camera.scale = this.scale,
                this.game.camera = this.camera,
                this.game.stage.addChild(this)
        }
        ,
        i.World.prototype.stateChange = function() {
            this.x = 0,
                this.y = 0,
                this.camera.reset()
        }
        ,
        i.World.prototype.setBounds = function(t, e, i, s) {
            this._definedSize = !0,
                this._width = i,
                this._height = s,
                this.bounds.setTo(t, e, i, s),
                this.x = t,
                this.y = e,
            this.camera.bounds && this.camera.bounds.setTo(t, e, Math.max(i, this.game.width), Math.max(s, this.game.height)),
                this.game.physics.setBoundsToWorld()
        }
        ,
        i.World.prototype.resize = function(t, e) {
            this._definedSize && (t < this._width && (t = this._width),
            e < this._height && (e = this._height)),
                this.bounds.width = t,
                this.bounds.height = e,
                this.game.camera.setBoundsToWorld(),
                this.game.physics.setBoundsToWorld()
        }
        ,
        i.World.prototype.shutdown = function() {
            this.destroy(!0, !0)
        }
        ,
        i.World.prototype.wrap = function(t, e, i, s, n) {
            void 0 === e && (e = 0),
            void 0 === i && (i = !1),
            void 0 === s && (s = !0),
            void 0 === n && (n = !0),
                i ? (t.getBounds(),
                s && (t.x + t._currentBounds.width < this.bounds.x ? t.x = this.bounds.right : t.x > this.bounds.right && (t.x = this.bounds.left)),
                n && (t.y + t._currentBounds.height < this.bounds.top ? t.y = this.bounds.bottom : t.y > this.bounds.bottom && (t.y = this.bounds.top))) : (s && t.x + e < this.bounds.x ? t.x = this.bounds.right + e : s && t.x - e > this.bounds.right && (t.x = this.bounds.left - e),
                    n && t.y + e < this.bounds.top ? t.y = this.bounds.bottom + e : n && t.y - e > this.bounds.bottom && (t.y = this.bounds.top - e))
        }
        ,
        Object.defineProperty(i.World.prototype, "width", {
            get: function() {
                return this.bounds.width
            },
            set: function(t) {
                t < this.game.width && (t = this.game.width),
                    this.bounds.width = t,
                    this._width = t,
                    this._definedSize = !0
            }
        }),
        Object.defineProperty(i.World.prototype, "height", {
            get: function() {
                return this.bounds.height
            },
            set: function(t) {
                t < this.game.height && (t = this.game.height),
                    this.bounds.height = t,
                    this._height = t,
                    this._definedSize = !0
            }
        }),
        Object.defineProperty(i.World.prototype, "centerX", {
            get: function() {
                return this.bounds.halfWidth
            }
        }),
        Object.defineProperty(i.World.prototype, "centerY", {
            get: function() {
                return this.bounds.halfHeight
            }
        }),
        Object.defineProperty(i.World.prototype, "randomX", {
            get: function() {
                return this.bounds.x < 0 ? this.game.rnd.between(this.bounds.x, this.bounds.width - Math.abs(this.bounds.x)) : this.game.rnd.between(this.bounds.x, this.bounds.width)
            }
        }),
        Object.defineProperty(i.World.prototype, "randomY", {
            get: function() {
                return this.bounds.y < 0 ? this.game.rnd.between(this.bounds.y, this.bounds.height - Math.abs(this.bounds.y)) : this.game.rnd.between(this.bounds.y, this.bounds.height)
            }
        }),
        i.Game = function(t, e, s, n, r, o, a, h) {
            return this.id = i.GAMES.push(this) - 1,
                this.config = null,
                this.physicsConfig = h,
                this.parent = "",
                this.width = 800,
                this.height = 600,
                this.resolution = 1,
                this._width = 800,
                this._height = 600,
                this.transparent = !1,
                this.antialias = !0,
                this.preserveDrawingBuffer = !1,
                this.clearBeforeRender = !0,
                this.renderer = null,
                this.renderType = i.AUTO,
                this.state = null,
                this.isBooted = !1,
                this.isRunning = !1,
                this.raf = null,
                this.add = null,
                this.make = null,
                this.cache = null,
                this.input = null,
                this.load = null,
                this.math = null,
                this.net = null,
                this.scale = null,
                this.sound = null,
                this.stage = null,
                this.time = null,
                this.tweens = null,
                this.world = null,
                this.physics = null,
                this.plugins = null,
                this.rnd = null,
                this.device = i.Device,
                this.camera = null,
                this.canvas = null,
                this.context = null,
                this.debug = null,
                this.particles = null,
                this.create = null,
                this.lockRender = !1,
                this.stepping = !1,
                this.pendingStep = !1,
                this.stepCount = 0,
                this.onPause = null,
                this.onResume = null,
                this.onBlur = null,
                this.onFocus = null,
                this._paused = !1,
                this._codePaused = !1,
                this.currentUpdateID = 0,
                this.updatesThisFrame = 1,
                this._deltaTime = 0,
                this._lastCount = 0,
                this._spiraling = 0,
                this._kickstart = !0,
                this.fpsProblemNotifier = new i.Signal,
                this.forceSingleUpdate = !1,
                this._nextFpsNotification = 0,
                1 === arguments.length && "object" == typeof arguments[0] ? this.parseConfig(arguments[0]) : (this.config = {
                    enableDebug: !0
                },
                "undefined" != typeof t && (this._width = t),
                "undefined" != typeof e && (this._height = e),
                "undefined" != typeof s && (this.renderType = s),
                "undefined" != typeof n && (this.parent = n),
                "undefined" != typeof o && (this.transparent = o),
                "undefined" != typeof a && (this.antialias = a),
                    this.rnd = new i.RandomDataGenerator([(Date.now() * Math.random()).toString()]),
                    this.state = new i.StateManager(this,r)),
                this.device.whenReady(this.boot, this),
                this
        }
        ,
        i.Game.prototype = {
            parseConfig: function(t) {
                this.config = t,
                void 0 === t.enableDebug && (this.config.enableDebug = !0),
                t.width && (this._width = t.width),
                t.height && (this._height = t.height),
                t.renderer && (this.renderType = t.renderer),
                t.parent && (this.parent = t.parent),
                t.transparent && (this.transparent = t.transparent),
                t.antialias && (this.antialias = t.antialias),
                t.resolution && (this.resolution = t.resolution),
                t.preserveDrawingBuffer && (this.preserveDrawingBuffer = t.preserveDrawingBuffer),
                t.physicsConfig && (this.physicsConfig = t.physicsConfig);
                var e = [(Date.now() * Math.random()).toString()];
                t.seed && (e = t.seed),
                    this.rnd = new i.RandomDataGenerator(e);
                var s = null;
                t.state && (s = t.state),
                    this.state = new i.StateManager(this,s)
            },
            boot: function() {
                this.isBooted || (this.onPause = new i.Signal,
                    this.onResume = new i.Signal,
                    this.onBlur = new i.Signal,
                    this.onFocus = new i.Signal,
                    this.isBooted = !0,
                    PIXI.game = this,
                    this.math = i.Math,
                    this.scale = new i.ScaleManager(this,this._width,this._height),
                    this.stage = new i.Stage(this),
                    this.setUpRenderer(),
                    this.world = new i.World(this),
                    this.add = new i.GameObjectFactory(this),
                    this.make = new i.GameObjectCreator(this),
                    this.cache = new i.Cache(this),
                    this.load = new i.Loader(this),
                    this.time = new i.Time(this),
                    this.tweens = new i.TweenManager(this),
                    this.input = new i.Input(this),
                    this.sound = new i.SoundManager(this),
                    this.physics = new i.Physics(this,this.physicsConfig),
                    this.particles = new i.Particles(this),
                    this.create = new i.Create(this),
                    this.plugins = new i.PluginManager(this),
                    this.net = new i.Net(this),
                    this.time.boot(),
                    this.stage.boot(),
                    this.world.boot(),
                    this.scale.boot(),
                    this.input.boot(),
                    this.sound.boot(),
                    this.state.boot(),
                    this.config.enableDebug ? (this.debug = new i.Utils.Debug(this),
                        this.debug.boot()) : this.debug = {
                        preUpdate: function() {},
                        update: function() {},
                        reset: function() {}
                    },
                    this.showDebugHeader(),
                    this.isRunning = !0,
                    this.config && this.config.forceSetTimeOut ? this.raf = new i.RequestAnimationFrame(this,this.config.forceSetTimeOut) : this.raf = new i.RequestAnimationFrame(this,(!1)),
                    this._kickstart = !0,
                window.focus && (!window.PhaserGlobal || window.PhaserGlobal && !window.PhaserGlobal.stopFocus) && window.focus(),
                    this.raf.start())
            },
            showDebugHeader: function() {
                if (!window.PhaserGlobal || !window.PhaserGlobal.hideBanner) {
                    var t = i.VERSION
                        , e = "Canvas"
                        , s = "HTML Audio"
                        , n = 1;
                    if (this.renderType === i.WEBGL ? (e = "WebGL",
                        n++) : this.renderType == i.HEADLESS && (e = "Headless"),
                    this.device.webAudio && (s = "WebAudio",
                        n++),
                        this.device.chrome) {
                        for (var r = ["%c %c %c Phaser v" + t + " | Pixi.js " + PIXI.VERSION + " | " + e + " | " + s + "  %c %c %c http://phaser.io %c♥%c♥%c♥", "background: #9854d8", "background: #6c2ca7", "color: #ffffff; background: #450f78;", "background: #6c2ca7", "background: #9854d8", "background: #ffffff"], o = 0; 3 > o; o++)
                            n > o ? r.push("color: #ff2424; background: #fff") : r.push("color: #959595; background: #fff");
                        console.log.apply(console, r)
                    } else
                        window.console && console.log("Phaser v" + t + " | Pixi.js " + PIXI.VERSION + " | " + e + " | " + s + " | http://phaser.io")
                }
            },
            setUpRenderer: function() {
                if (this.canvas = i.Canvas.create(this, this.width, this.height, this.config.canvasID, !0),
                    this.config.canvasStyle ? this.canvas.style = this.config.canvasStyle : this.canvas.style["-webkit-full-screen"] = "width: 100%; height: 100%",
                this.renderType === i.HEADLESS || this.renderType === i.CANVAS || this.renderType === i.AUTO && !this.device.webGL) {
                    if (!this.device.canvas)
                        throw new Error("Phaser.Game - Cannot create Canvas or WebGL context, aborting.");
                    this.renderType = i.CANVAS,
                        this.renderer = new PIXI.CanvasRenderer(this),
                        this.context = this.renderer.context
                } else
                    this.renderType = i.WEBGL,
                        this.renderer = new PIXI.WebGLRenderer(this),
                        this.context = null,
                        this.canvas.addEventListener("webglcontextlost", this.contextLost.bind(this), !1),
                        this.canvas.addEventListener("webglcontextrestored", this.contextRestored.bind(this), !1);
                this.device.cocoonJS && (this.canvas.screencanvas = this.renderType === i.CANVAS),
                this.renderType !== i.HEADLESS && (this.stage.smoothed = this.antialias,
                    i.Canvas.addToDOM(this.canvas, this.parent, !1),
                    i.Canvas.setTouchAction(this.canvas))
            },
            contextLost: function(t) {
                t.preventDefault(),
                    this.renderer.contextLost = !0
            },
            contextRestored: function() {
                this.renderer.initContext(),
                    this.cache.clearGLTextures(),
                    this.renderer.contextLost = !1
            },
            update: function(t) {
                if (this.time.update(t),
                    this._kickstart)
                    return this.updateLogic(this.time.desiredFpsMult),
                        this.stage.updateTransform(),
                        this.updateRender(this.time.slowMotion * this.time.desiredFps),
                        void (this._kickstart = !1);
                if (this._spiraling > 1 && !this.forceSingleUpdate)
                    this.time.time > this._nextFpsNotification && (this._nextFpsNotification = this.time.time + 1e4,
                        this.fpsProblemNotifier.dispatch()),
                        this._deltaTime = 0,
                        this._spiraling = 0,
                        this.updateRender(this.time.slowMotion * this.time.desiredFps);
                else {
                    var e = 1e3 * this.time.slowMotion / this.time.desiredFps;
                    this._deltaTime += Math.max(Math.min(3 * e, this.time.elapsed), 0);
                    var i = 0;
                    for (this.updatesThisFrame = Math.floor(this._deltaTime / e),
                         this.forceSingleUpdate && (this.updatesThisFrame = Math.min(1, this.updatesThisFrame)); this._deltaTime >= e && (this._deltaTime -= e,
                        this.currentUpdateID = i,
                        this.updateLogic(this.time.desiredFpsMult),
                        this.stage.updateTransform(),
                        i++,
                    !this.forceSingleUpdate || 1 !== i); )
                        this.time.refresh();
                    i > this._lastCount ? this._spiraling++ : i < this._lastCount && (this._spiraling = 0),
                        this._lastCount = i,
                        this.updateRender(this._deltaTime / e)
                }
            },
            updateLogic: function(t) {
                this._paused || this.pendingStep ? (this.scale.pauseUpdate(),
                    this.state.pauseUpdate(),
                    this.debug.preUpdate()) : (this.stepping && (this.pendingStep = !0),
                    this.scale.preUpdate(),
                    this.debug.preUpdate(),
                    this.world.camera.preUpdate(),
                    this.physics.preUpdate(),
                    this.state.preUpdate(t),
                    this.plugins.preUpdate(t),
                    this.stage.preUpdate(),
                    this.state.update(),
                    this.stage.update(),
                    this.tweens.update(),
                    this.sound.update(),
                    this.input.update(),
                    this.physics.update(),
                    this.particles.update(),
                    this.plugins.update(),
                    this.stage.postUpdate(),
                    this.plugins.postUpdate())
            },
            updateRender: function(t) {
                this.lockRender || (this.state.preRender(t),
                    this.renderer.render(this.stage),
                    this.plugins.render(t),
                    this.state.render(t),
                    this.plugins.postRender(t))
            },
            enableStep: function() {
                this.stepping = !0,
                    this.pendingStep = !1,
                    this.stepCount = 0
            },
            disableStep: function() {
                this.stepping = !1,
                    this.pendingStep = !1
            },
            step: function() {
                this.pendingStep = !1,
                    this.stepCount++
            },
            destroy: function() {
                this.raf.stop(),
                    this.state.destroy(),
                    this.sound.destroy(),
                    this.scale.destroy(),
                    this.stage.destroy(),
                    this.input.destroy(),
                    this.physics.destroy(),
                    this.state = null,
                    this.cache = null,
                    this.input = null,
                    this.load = null,
                    this.sound = null,
                    this.stage = null,
                    this.time = null,
                    this.world = null,
                    this.isBooted = !1,
                    this.renderer.destroy(!1),
                    i.Canvas.removeFromDOM(this.canvas),
                    i.GAMES[this.id] = null
            },
            gamePaused: function(t) {
                this._paused || (this._paused = !0,
                    this.time.gamePaused(),
                    this.sound.setMute(),
                    this.onPause.dispatch(t),
                this.device.cordova && this.device.iOS && (this.lockRender = !0))
            },
            gameResumed: function(t) {
                this._paused && !this._codePaused && (this._paused = !1,
                    this.time.gameResumed(),
                    this.input.reset(),
                    this.sound.unsetMute(),
                    this.onResume.dispatch(t),
                this.device.cordova && this.device.iOS && (this.lockRender = !1))
            },
            focusLoss: function(t) {
                this.onBlur.dispatch(t),
                this.stage.disableVisibilityChange || this.gamePaused(t)
            },
            focusGain: function(t) {
                this.onFocus.dispatch(t),
                this.stage.disableVisibilityChange || this.gameResumed(t)
            }
        },
        i.Game.prototype.constructor = i.Game,
        Object.defineProperty(i.Game.prototype, "paused", {
            get: function() {
                return this._paused
            },
            set: function(t) {
                t === !0 ? (this._paused === !1 && (this._paused = !0,
                    this.sound.setMute(),
                    this.time.gamePaused(),
                    this.onPause.dispatch(this)),
                    this._codePaused = !0) : (this._paused && (this._paused = !1,
                    this.input.reset(),
                    this.sound.unsetMute(),
                    this.time.gameResumed(),
                    this.onResume.dispatch(this)),
                    this._codePaused = !1)
            }
        }),
        i.Input = function(t) {
            this.game = t,
                this.hitCanvas = null,
                this.hitContext = null,
                this.moveCallbacks = [],
                this.pollRate = 0,
                this.enabled = !0,
                this.multiInputOverride = i.Input.MOUSE_TOUCH_COMBINE,
                this.position = null,
                this.speed = null,
                this.circle = null,
                this.scale = null,
                this.maxPointers = -1,
                this.tapRate = 200,
                this.doubleTapRate = 300,
                this.holdRate = 2e3,
                this.justPressedRate = 200,
                this.justReleasedRate = 200,
                this.recordPointerHistory = !1,
                this.recordRate = 100,
                this.recordLimit = 100,
                this.pointer1 = null,
                this.pointer2 = null,
                this.pointer3 = null,
                this.pointer4 = null,
                this.pointer5 = null,
                this.pointer6 = null,
                this.pointer7 = null,
                this.pointer8 = null,
                this.pointer9 = null,
                this.pointer10 = null,
                this.pointers = [],
                this.activePointer = null,
                this.mousePointer = null,
                this.mouse = null,
                this.keyboard = null,
                this.touch = null,
                this.mspointer = null,
                this.gamepad = null,
                this.resetLocked = !1,
                this.onDown = null,
                this.onUp = null,
                this.onTap = null,
                this.onHold = null,
                this.minPriorityID = 0,
                this.interactiveItems = new i.ArraySet,
                this._localPoint = new i.Point,
                this._pollCounter = 0,
                this._oldPosition = null,
                this._x = 0,
                this._y = 0
        }
        ,
        i.Input.MOUSE_OVERRIDES_TOUCH = 0,
        i.Input.TOUCH_OVERRIDES_MOUSE = 1,
        i.Input.MOUSE_TOUCH_COMBINE = 2,
        i.Input.MAX_POINTERS = 10,
        i.Input.prototype = {
            boot: function() {
                this.mousePointer = new i.Pointer(this.game,0,i.PointerMode.CURSOR),
                    this.addPointer(),
                    this.addPointer(),
                    this.mouse = new i.Mouse(this.game),
                    this.touch = new i.Touch(this.game),
                    this.mspointer = new i.MSPointer(this.game),
                i.Keyboard && (this.keyboard = new i.Keyboard(this.game)),
                i.Gamepad && (this.gamepad = new i.Gamepad(this.game)),
                    this.onDown = new i.Signal,
                    this.onUp = new i.Signal,
                    this.onTap = new i.Signal,
                    this.onHold = new i.Signal,
                    this.scale = new i.Point(1,1),
                    this.speed = new i.Point,
                    this.position = new i.Point,
                    this._oldPosition = new i.Point,
                    this.circle = new i.Circle(0,0,44),
                    this.activePointer = this.mousePointer,
                    this.hitCanvas = PIXI.CanvasPool.create(this, 1, 1),
                    this.hitContext = this.hitCanvas.getContext("2d"),
                    this.mouse.start(),
                    this.touch.start(),
                    this.mspointer.start(),
                    this.mousePointer.active = !0,
                this.keyboard && this.keyboard.start();
                var t = this;
                this._onClickTrampoline = function(e) {
                    t.onClickTrampoline(e)
                }
                    ,
                    this.game.canvas.addEventListener("click", this._onClickTrampoline, !1)
            },
            destroy: function() {
                this.mouse.stop(),
                    this.touch.stop(),
                    this.mspointer.stop(),
                this.keyboard && this.keyboard.stop(),
                this.gamepad && this.gamepad.stop(),
                    this.moveCallbacks = [],
                    PIXI.CanvasPool.remove(this),
                    this.game.canvas.removeEventListener("click", this._onClickTrampoline)
            },
            addMoveCallback: function(t, e) {
                this.moveCallbacks.push({
                    callback: t,
                    context: e
                })
            },
            deleteMoveCallback: function(t, e) {
                for (var i = this.moveCallbacks.length; i--; )
                    if (this.moveCallbacks[i].callback === t && this.moveCallbacks[i].context === e)
                        return void this.moveCallbacks.splice(i, 1)
            },
            addPointer: function() {
                if (this.pointers.length >= i.Input.MAX_POINTERS)
                    return console.warn("Phaser.Input.addPointer: Maximum limit of " + i.Input.MAX_POINTERS + " pointers reached."),
                        null;
                var t = this.pointers.length + 1
                    , e = new i.Pointer(this.game,t,i.PointerMode.TOUCH);
                return this.pointers.push(e),
                    this["pointer" + t] = e,
                    e
            },
            update: function() {
                if (this.keyboard && this.keyboard.update(),
                this.pollRate > 0 && this._pollCounter < this.pollRate)
                    return void this._pollCounter++;
                this.speed.x = this.position.x - this._oldPosition.x,
                    this.speed.y = this.position.y - this._oldPosition.y,
                    this._oldPosition.copyFrom(this.position),
                    this.mousePointer.update(),
                this.gamepad && this.gamepad.active && this.gamepad.update();
                for (var t = 0; t < this.pointers.length; t++)
                    this.pointers[t].update();
                this._pollCounter = 0
            },
            reset: function(t) {
                if (this.game.isBooted && !this.resetLocked) {
                    void 0 === t && (t = !1),
                        this.mousePointer.reset(),
                    this.keyboard && this.keyboard.reset(t),
                    this.gamepad && this.gamepad.reset();
                    for (var e = 0; e < this.pointers.length; e++)
                        this.pointers[e].reset();
                    "none" !== this.game.canvas.style.cursor && (this.game.canvas.style.cursor = "inherit"),
                    t && (this.onDown.dispose(),
                        this.onUp.dispose(),
                        this.onTap.dispose(),
                        this.onHold.dispose(),
                        this.onDown = new i.Signal,
                        this.onUp = new i.Signal,
                        this.onTap = new i.Signal,
                        this.onHold = new i.Signal,
                        this.moveCallbacks = []),
                        this._pollCounter = 0
                }
            },
            resetSpeed: function(t, e) {
                this._oldPosition.setTo(t, e),
                    this.speed.setTo(0, 0)
            },
            startPointer: function(t) {
                if (this.maxPointers >= 0 && this.countActivePointers(this.maxPointers) >= this.maxPointers)
                    return null;
                if (!this.pointer1.active)
                    return this.pointer1.start(t);
                if (!this.pointer2.active)
                    return this.pointer2.start(t);
                for (var e = 2; e < this.pointers.length; e++) {
                    var i = this.pointers[e];
                    if (!i.active)
                        return i.start(t)
                }
                return null
            },
            updatePointer: function(t) {
                if (this.pointer1.active && this.pointer1.identifier === t.identifier)
                    return this.pointer1.move(t);
                if (this.pointer2.active && this.pointer2.identifier === t.identifier)
                    return this.pointer2.move(t);
                for (var e = 2; e < this.pointers.length; e++) {
                    var i = this.pointers[e];
                    if (i.active && i.identifier === t.identifier)
                        return i.move(t)
                }
                return null
            },
            stopPointer: function(t) {
                if (this.pointer1.active && this.pointer1.identifier === t.identifier)
                    return this.pointer1.stop(t);
                if (this.pointer2.active && this.pointer2.identifier === t.identifier)
                    return this.pointer2.stop(t);
                for (var e = 2; e < this.pointers.length; e++) {
                    var i = this.pointers[e];
                    if (i.active && i.identifier === t.identifier)
                        return i.stop(t)
                }
                return null
            },
            countActivePointers: function(t) {
                void 0 === t && (t = this.pointers.length);
                for (var e = t, i = 0; i < this.pointers.length && e > 0; i++) {
                    var s = this.pointers[i];
                    s.active && e--
                }
                return t - e
            },
            getPointer: function(t) {
                void 0 === t && (t = !1);
                for (var e = 0; e < this.pointers.length; e++) {
                    var i = this.pointers[e];
                    if (i.active === t)
                        return i
                }
                return null
            },
            getPointerFromIdentifier: function(t) {
                for (var e = 0; e < this.pointers.length; e++) {
                    var i = this.pointers[e];
                    if (i.identifier === t)
                        return i
                }
                return null
            },
            getPointerFromId: function(t) {
                for (var e = 0; e < this.pointers.length; e++) {
                    var i = this.pointers[e];
                    if (i.pointerId === t)
                        return i
                }
                return null
            },
            getLocalPosition: function(t, e, s) {
                void 0 === s && (s = new i.Point);
                var n = t.worldTransform
                    , r = 1 / (n.a * n.d + n.c * -n.b);
                return s.setTo(n.d * r * e.x + -n.c * r * e.y + (n.ty * n.c - n.tx * n.d) * r, n.a * r * e.y + -n.b * r * e.x + (-n.ty * n.a + n.tx * n.b) * r)
            },
            hitTest: function(t, e, s) {
                if (!t.worldVisible)
                    return !1;
                if (this.getLocalPosition(t, e, this._localPoint),
                    s.copyFrom(this._localPoint),
                t.hitArea && t.hitArea.contains)
                    return t.hitArea.contains(this._localPoint.x, this._localPoint.y);
                if (t instanceof i.TileSprite) {
                    var n = t.width
                        , r = t.height
                        , o = -n * t.anchor.x;
                    if (this._localPoint.x >= o && this._localPoint.x < o + n) {
                        var a = -r * t.anchor.y;
                        if (this._localPoint.y >= a && this._localPoint.y < a + r)
                            return !0
                    }
                } else if (t instanceof PIXI.Sprite) {
                    var n = t.texture.frame.width
                        , r = t.texture.frame.height
                        , o = -n * t.anchor.x;
                    if (this._localPoint.x >= o && this._localPoint.x < o + n) {
                        var a = -r * t.anchor.y;
                        if (this._localPoint.y >= a && this._localPoint.y < a + r)
                            return !0
                    }
                } else if (t instanceof i.Graphics)
                    for (var h = 0; h < t.graphicsData.length; h++) {
                        var l = t.graphicsData[h];
                        if (l.fill && l.shape && l.shape.contains(this._localPoint.x, this._localPoint.y))
                            return !0
                    }
                for (var h = 0, u = t.children.length; u > h; h++)
                    if (this.hitTest(t.children[h], e, s))
                        return !0;
                return !1
            },
            onClickTrampoline: function() {
                this.activePointer.processClickTrampolines()
            }
        },
        i.Input.prototype.constructor = i.Input,
        Object.defineProperty(i.Input.prototype, "x", {
            get: function() {
                return this._x
            },
            set: function(t) {
                this._x = Math.floor(t)
            }
        }),
        Object.defineProperty(i.Input.prototype, "y", {
            get: function() {
                return this._y
            },
            set: function(t) {
                this._y = Math.floor(t)
            }
        }),
        Object.defineProperty(i.Input.prototype, "pollLocked", {
            get: function() {
                return this.pollRate > 0 && this._pollCounter < this.pollRate
            }
        }),
        Object.defineProperty(i.Input.prototype, "totalInactivePointers", {
            get: function() {
                return this.pointers.length - this.countActivePointers()
            }
        }),
        Object.defineProperty(i.Input.prototype, "totalActivePointers", {
            get: function() {
                return this.countActivePointers()
            }
        }),
        Object.defineProperty(i.Input.prototype, "worldX", {
            get: function() {
                return this.game.camera.view.x + this.x
            }
        }),
        Object.defineProperty(i.Input.prototype, "worldY", {
            get: function() {
                return this.game.camera.view.y + this.y
            }
        }),
        i.Mouse = function(t) {
            this.game = t,
                this.input = t.input,
                this.callbackContext = this.game,
                this.mouseDownCallback = null,
                this.mouseUpCallback = null,
                this.mouseOutCallback = null,
                this.mouseOverCallback = null,
                this.mouseWheelCallback = null,
                this.capture = !1,
                this.button = -1,
                this.wheelDelta = 0,
                this.enabled = !0,
                this.locked = !1,
                this.stopOnGameOut = !1,
                this.pointerLock = new i.Signal,
                this.event = null,
                this._onMouseDown = null,
                this._onMouseMove = null,
                this._onMouseUp = null,
                this._onMouseOut = null,
                this._onMouseOver = null,
                this._onMouseWheel = null,
                this._wheelEvent = null
        }
        ,
        i.Mouse.NO_BUTTON = -1,
        i.Mouse.LEFT_BUTTON = 0,
        i.Mouse.MIDDLE_BUTTON = 1,
        i.Mouse.RIGHT_BUTTON = 2,
        i.Mouse.BACK_BUTTON = 3,
        i.Mouse.FORWARD_BUTTON = 4,
        i.Mouse.WHEEL_UP = 1,
        i.Mouse.WHEEL_DOWN = -1,
        i.Mouse.prototype = {
            start: function() {
                if ((!this.game.device.android || this.game.device.chrome !== !1) && null === this._onMouseDown) {
                    var e = this;
                    this._onMouseDown = function(t) {
                        return e.onMouseDown(t)
                    }
                        ,
                        this._onMouseMove = function(t) {
                            return e.onMouseMove(t)
                        }
                        ,
                        this._onMouseUp = function(t) {
                            return e.onMouseUp(t)
                        }
                        ,
                        this._onMouseUpGlobal = function(t) {
                            return e.onMouseUpGlobal(t)
                        }
                        ,
                        this._onMouseOut = function(t) {
                            return e.onMouseOut(t)
                        }
                        ,
                        this._onMouseOver = function(t) {
                            return e.onMouseOver(t)
                        }
                        ,
                        this._onMouseWheel = function(t) {
                            return e.onMouseWheel(t)
                        }
                    ;
                    var i = this.game.canvas;
                    i.addEventListener("mousedown", this._onMouseDown, !0),
                        i.addEventListener("mousemove", this._onMouseMove, !0),
                        i.addEventListener("mouseup", this._onMouseUp, !0),
                    this.game.device.cocoonJS || (window.addEventListener("mouseup", this._onMouseUpGlobal, !0),
                        i.addEventListener("mouseover", this._onMouseOver, !0),
                        i.addEventListener("mouseout", this._onMouseOut, !0));
                    var s = this.game.device.wheelEvent;
                    s && (i.addEventListener(s, this._onMouseWheel, !0),
                        "mousewheel" === s ? this._wheelEvent = new t((-.025),1) : "DOMMouseScroll" === s && (this._wheelEvent = new t(1,1)))
                }
            },
            onMouseDown: function(t) {
                this.event = t,
                this.capture && t.preventDefault(),
                this.mouseDownCallback && this.mouseDownCallback.call(this.callbackContext, t),
                this.input.enabled && this.enabled && (t.identifier = 0,
                    this.input.mousePointer.start(t))
            },
            onMouseMove: function(t) {
                this.event = t,
                this.capture && t.preventDefault(),
                this.mouseMoveCallback && this.mouseMoveCallback.call(this.callbackContext, t),
                this.input.enabled && this.enabled && (t.identifier = 0,
                    this.input.mousePointer.move(t))
            },
            onMouseUp: function(t) {
                this.event = t,
                this.capture && t.preventDefault(),
                this.mouseUpCallback && this.mouseUpCallback.call(this.callbackContext, t),
                this.input.enabled && this.enabled && (t.identifier = 0,
                    this.input.mousePointer.stop(t))
            },
            onMouseUpGlobal: function(t) {
                this.input.mousePointer.withinGame || (this.mouseUpCallback && this.mouseUpCallback.call(this.callbackContext, t),
                    t.identifier = 0,
                    this.input.mousePointer.stop(t))
            },
            onMouseOut: function(t) {
                this.event = t,
                this.capture && t.preventDefault(),
                    this.input.mousePointer.withinGame = !1,
                this.mouseOutCallback && this.mouseOutCallback.call(this.callbackContext, t),
                this.input.enabled && this.enabled && this.stopOnGameOut && (t.identifier = 0,
                    this.input.mousePointer.stop(t))
            },
            onMouseOver: function(t) {
                this.event = t,
                this.capture && t.preventDefault(),
                    this.input.mousePointer.withinGame = !0,
                this.mouseOverCallback && this.mouseOverCallback.call(this.callbackContext, t)
            },
            onMouseWheel: function(t) {
                this._wheelEvent && (t = this._wheelEvent.bindEvent(t)),
                    this.event = t,
                this.capture && t.preventDefault(),
                    this.wheelDelta = i.Math.clamp(-t.deltaY, -1, 1),
                this.mouseWheelCallback && this.mouseWheelCallback.call(this.callbackContext, t)
            },
            requestPointerLock: function() {
                if (this.game.device.pointerLock) {
                    var t = this.game.canvas;
                    t.requestPointerLock = t.requestPointerLock || t.mozRequestPointerLock || t.webkitRequestPointerLock,
                        t.requestPointerLock();
                    var e = this;
                    this._pointerLockChange = function(t) {
                        return e.pointerLockChange(t)
                    }
                        ,
                        document.addEventListener("pointerlockchange", this._pointerLockChange, !0),
                        document.addEventListener("mozpointerlockchange", this._pointerLockChange, !0),
                        document.addEventListener("webkitpointerlockchange", this._pointerLockChange, !0)
                }
            },
            pointerLockChange: function(t) {
                var e = this.game.canvas;
                document.pointerLockElement === e || document.mozPointerLockElement === e || document.webkitPointerLockElement === e ? (this.locked = !0,
                    this.pointerLock.dispatch(!0, t)) : (this.locked = !1,
                    this.pointerLock.dispatch(!1, t))
            },
            releasePointerLock: function() {
                document.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock,
                    document.exitPointerLock(),
                    document.removeEventListener("pointerlockchange", this._pointerLockChange, !0),
                    document.removeEventListener("mozpointerlockchange", this._pointerLockChange, !0),
                    document.removeEventListener("webkitpointerlockchange", this._pointerLockChange, !0)
            },
            stop: function() {
                var t = this.game.canvas;
                t.removeEventListener("mousedown", this._onMouseDown, !0),
                    t.removeEventListener("mousemove", this._onMouseMove, !0),
                    t.removeEventListener("mouseup", this._onMouseUp, !0),
                    t.removeEventListener("mouseover", this._onMouseOver, !0),
                    t.removeEventListener("mouseout", this._onMouseOut, !0);
                var e = this.game.device.wheelEvent;
                e && t.removeEventListener(e, this._onMouseWheel, !0),
                    window.removeEventListener("mouseup", this._onMouseUpGlobal, !0),
                    document.removeEventListener("pointerlockchange", this._pointerLockChange, !0),
                    document.removeEventListener("mozpointerlockchange", this._pointerLockChange, !0),
                    document.removeEventListener("webkitpointerlockchange", this._pointerLockChange, !0)
            }
        },
        i.Mouse.prototype.constructor = i.Mouse,
        t.prototype = {},
        t.prototype.constructor = t,
        t.prototype.bindEvent = function(e) {
            if (!t._stubsGenerated && e) {
                var i = function(t) {
                    return function() {
                        var e = this.originalEvent[t];
                        return "function" != typeof e ? e : e.bind(this.originalEvent)
                    }
                };
                for (var s in e)
                    s in t.prototype || Object.defineProperty(t.prototype, s, {
                        get: i(s)
                    });
                t._stubsGenerated = !0
            }
            return this.originalEvent = e,
                this
        }
        ,
        Object.defineProperties(t.prototype, {
            type: {
                value: "wheel"
            },
            deltaMode: {
                get: function() {
                    return this._deltaMode
                }
            },
            deltaY: {
                get: function() {
                    return this._scaleFactor * (this.originalEvent.wheelDelta || this.originalEvent.detail) || 0
                }
            },
            deltaX: {
                get: function() {
                    return this._scaleFactor * this.originalEvent.wheelDeltaX || 0
                }
            },
            deltaZ: {
                value: 0
            }
        }),
        i.MSPointer = function(t) {
            this.game = t,
                this.input = t.input,
                this.callbackContext = this.game,
                this.pointerDownCallback = null,
                this.pointerMoveCallback = null,
                this.pointerUpCallback = null,
                this.capture = !0,
                this.button = -1,
                this.event = null,
                this.enabled = !0,
                this._onMSPointerDown = null,
                this._onMSPointerMove = null,
                this._onMSPointerUp = null,
                this._onMSPointerUpGlobal = null,
                this._onMSPointerOut = null,
                this._onMSPointerOver = null
        }
        ,
        i.MSPointer.prototype = {
            start: function() {
                if (null === this._onMSPointerDown) {
                    var t = this;
                    if (this.game.device.mspointer) {
                        this._onMSPointerDown = function(e) {
                            return t.onPointerDown(e)
                        }
                            ,
                            this._onMSPointerMove = function(e) {
                                return t.onPointerMove(e)
                            }
                            ,
                            this._onMSPointerUp = function(e) {
                                return t.onPointerUp(e)
                            }
                            ,
                            this._onMSPointerUpGlobal = function(e) {
                                return t.onPointerUpGlobal(e)
                            }
                            ,
                            this._onMSPointerOut = function(e) {
                                return t.onPointerOut(e)
                            }
                            ,
                            this._onMSPointerOver = function(e) {
                                return t.onPointerOver(e)
                            }
                        ;
                        var e = this.game.canvas;
                        e.addEventListener("MSPointerDown", this._onMSPointerDown, !1),
                            e.addEventListener("MSPointerMove", this._onMSPointerMove, !1),
                            e.addEventListener("MSPointerUp", this._onMSPointerUp, !1),
                            e.addEventListener("pointerdown", this._onMSPointerDown, !1),
                            e.addEventListener("pointermove", this._onMSPointerMove, !1),
                            e.addEventListener("pointerup", this._onMSPointerUp, !1),
                            e.style["-ms-content-zooming"] = "none",
                            e.style["-ms-touch-action"] = "none",
                        this.game.device.cocoonJS || (window.addEventListener("MSPointerUp", this._onMSPointerUpGlobal, !0),
                            e.addEventListener("MSPointerOver", this._onMSPointerOver, !0),
                            e.addEventListener("MSPointerOut", this._onMSPointerOut, !0),
                            window.addEventListener("pointerup", this._onMSPointerUpGlobal, !0),
                            e.addEventListener("pointerover", this._onMSPointerOver, !0),
                            e.addEventListener("pointerout", this._onMSPointerOut, !0))
                    }
                }
            },
            onPointerDown: function(t) {
                this.event = t,
                this.capture && t.preventDefault(),
                this.pointerDownCallback && this.pointerDownCallback.call(this.callbackContext, t),
                this.input.enabled && this.enabled && (t.identifier = t.pointerId,
                    "mouse" === t.pointerType || 4 === t.pointerType ? this.input.mousePointer.start(t) : this.input.startPointer(t))
            },
            onPointerMove: function(t) {
                this.event = t,
                this.capture && t.preventDefault(),
                this.pointerMoveCallback && this.pointerMoveCallback.call(this.callbackContext, t),
                this.input.enabled && this.enabled && (t.identifier = t.pointerId,
                    "mouse" === t.pointerType || 4 === t.pointerType ? this.input.mousePointer.move(t) : this.input.updatePointer(t))
            },
            onPointerUp: function(t) {
                this.event = t,
                this.capture && t.preventDefault(),
                this.pointerUpCallback && this.pointerUpCallback.call(this.callbackContext, t),
                this.input.enabled && this.enabled && (t.identifier = t.pointerId,
                    "mouse" === t.pointerType || 4 === t.pointerType ? this.input.mousePointer.stop(t) : this.input.stopPointer(t))
            },
            onPointerUpGlobal: function(t) {
                if ("mouse" !== t.pointerType && 4 !== t.pointerType || this.input.mousePointer.withinGame) {
                    var e = this.input.getPointerFromIdentifier(t.identifier);
                    e && e.withinGame && this.onPointerUp(t)
                } else
                    this.onPointerUp(t)
            },
            onPointerOut: function(t) {
                if (this.event = t,
                this.capture && t.preventDefault(),
                "mouse" === t.pointerType || 4 === t.pointerType)
                    this.input.mousePointer.withinGame = !1;
                else {
                    var e = this.input.getPointerFromIdentifier(t.identifier);
                    e && (e.withinGame = !1)
                }
                this.input.mouse.mouseOutCallback && this.input.mouse.mouseOutCallback.call(this.input.mouse.callbackContext, t),
                this.input.enabled && this.enabled && this.input.mouse.stopOnGameOut && (t.identifier = 0,
                    e ? e.stop(t) : this.input.mousePointer.stop(t))
            },
            onPointerOver: function(t) {
                if (this.event = t,
                this.capture && t.preventDefault(),
                "mouse" === t.pointerType || 4 === t.pointerType)
                    this.input.mousePointer.withinGame = !0;
                else {
                    var e = this.input.getPointerFromIdentifier(t.identifier);
                    e && (e.withinGame = !0)
                }
                this.input.mouse.mouseOverCallback && this.input.mouse.mouseOverCallback.call(this.input.mouse.callbackContext, t)
            },
            stop: function() {
                var t = this.game.canvas;
                t.removeEventListener("MSPointerDown", this._onMSPointerDown, !1),
                    t.removeEventListener("MSPointerMove", this._onMSPointerMove, !1),
                    t.removeEventListener("MSPointerUp", this._onMSPointerUp, !1),
                    t.removeEventListener("pointerdown", this._onMSPointerDown, !1),
                    t.removeEventListener("pointermove", this._onMSPointerMove, !1),
                    t.removeEventListener("pointerup", this._onMSPointerUp, !1),
                    window.removeEventListener("MSPointerUp", this._onMSPointerUpGlobal, !0),
                    t.removeEventListener("MSPointerOver", this._onMSPointerOver, !0),
                    t.removeEventListener("MSPointerOut", this._onMSPointerOut, !0),
                    window.removeEventListener("pointerup", this._onMSPointerUpGlobal, !0),
                    t.removeEventListener("pointerover", this._onMSPointerOver, !0),
                    t.removeEventListener("pointerout", this._onMSPointerOut, !0)
            }
        },
        i.MSPointer.prototype.constructor = i.MSPointer,
        i.DeviceButton = function(t, e) {
            this.parent = t,
                this.game = t.game,
                this.event = null,
                this.isDown = !1,
                this.isUp = !0,
                this.timeDown = 0,
                this.timeUp = 0,
                this.repeats = 0,
                this.altKey = !1,
                this.shiftKey = !1,
                this.ctrlKey = !1,
                this.value = 0,
                this.buttonCode = e,
                this.onDown = new i.Signal,
                this.onUp = new i.Signal,
                this.onFloat = new i.Signal
        }
        ,
        i.DeviceButton.prototype = {
            start: function(t, e) {
                this.isDown || (this.isDown = !0,
                    this.isUp = !1,
                    this.timeDown = this.game.time.time,
                    this.repeats = 0,
                    this.event = t,
                    this.value = e,
                t && (this.altKey = t.altKey,
                    this.shiftKey = t.shiftKey,
                    this.ctrlKey = t.ctrlKey),
                    this.onDown.dispatch(this, e))
            },
            stop: function(t, e) {
                this.isUp || (this.isDown = !1,
                    this.isUp = !0,
                    this.timeUp = this.game.time.time,
                    this.event = t,
                    this.value = e,
                t && (this.altKey = t.altKey,
                    this.shiftKey = t.shiftKey,
                    this.ctrlKey = t.ctrlKey),
                    this.onUp.dispatch(this, e))
            },
            padFloat: function(t) {
                this.value = t,
                    this.onFloat.dispatch(this, t)
            },
            justPressed: function(t) {
                return t = t || 250,
                this.isDown && this.timeDown + t > this.game.time.time
            },
            justReleased: function(t) {
                return t = t || 250,
                this.isUp && this.timeUp + t > this.game.time.time
            },
            reset: function() {
                this.isDown = !1,
                    this.isUp = !0,
                    this.timeDown = this.game.time.time,
                    this.repeats = 0,
                    this.altKey = !1,
                    this.shiftKey = !1,
                    this.ctrlKey = !1
            },
            destroy: function() {
                this.onDown.dispose(),
                    this.onUp.dispose(),
                    this.onFloat.dispose(),
                    this.parent = null,
                    this.game = null
            }
        },
        i.DeviceButton.prototype.constructor = i.DeviceButton,
        Object.defineProperty(i.DeviceButton.prototype, "duration", {
            get: function() {
                return this.isUp ? -1 : this.game.time.time - this.timeDown
            }
        }),
        i.Pointer = function(t, e, s) {
            this.game = t,
                this.id = e,
                this.type = i.POINTER,
                this.exists = !0,
                this.identifier = 0,
                this.pointerId = null,
                this.pointerMode = s || i.PointerMode.CURSOR | i.PointerMode.CONTACT,
                this.target = null,
                this.button = null,
                this.leftButton = new i.DeviceButton(this,i.Pointer.LEFT_BUTTON),
                this.middleButton = new i.DeviceButton(this,i.Pointer.MIDDLE_BUTTON),
                this.rightButton = new i.DeviceButton(this,i.Pointer.RIGHT_BUTTON),
                this.backButton = new i.DeviceButton(this,i.Pointer.BACK_BUTTON),
                this.forwardButton = new i.DeviceButton(this,i.Pointer.FORWARD_BUTTON),
                this.eraserButton = new i.DeviceButton(this,i.Pointer.ERASER_BUTTON),
                this._holdSent = !1,
                this._history = [],
                this._nextDrop = 0,
                this._stateReset = !1,
                this.withinGame = !1,
                this.clientX = -1,
                this.clientY = -1,
                this.pageX = -1,
                this.pageY = -1,
                this.screenX = -1,
                this.screenY = -1,
                this.rawMovementX = 0,
                this.rawMovementY = 0,
                this.movementX = 0,
                this.movementY = 0,
                this.x = -1,
                this.y = -1,
                this.isMouse = 0 === e,
                this.isDown = !1,
                this.isUp = !0,
                this.timeDown = 0,
                this.timeUp = 0,
                this.previousTapTime = 0,
                this.totalTouches = 0,
                this.msSinceLastClick = Number.MAX_VALUE,
                this.targetObject = null,
                this.active = !1,
                this.dirty = !1,
                this.position = new i.Point,
                this.positionDown = new i.Point,
                this.positionUp = new i.Point,
                this.circle = new i.Circle(0,0,44),
                this._clickTrampolines = null,
                this._trampolineTargetObject = null
        }
        ,
        i.Pointer.NO_BUTTON = 0,
        i.Pointer.LEFT_BUTTON = 1,
        i.Pointer.RIGHT_BUTTON = 2,
        i.Pointer.MIDDLE_BUTTON = 4,
        i.Pointer.BACK_BUTTON = 8,
        i.Pointer.FORWARD_BUTTON = 16,
        i.Pointer.ERASER_BUTTON = 32,
        i.Pointer.prototype = {
            resetButtons: function() {
                this.isDown = !1,
                    this.isUp = !0,
                this.isMouse && (this.leftButton.reset(),
                    this.middleButton.reset(),
                    this.rightButton.reset(),
                    this.backButton.reset(),
                    this.forwardButton.reset(),
                    this.eraserButton.reset())
            },
            processButtonsDown: function(t, e) {
                i.Pointer.LEFT_BUTTON & t && this.leftButton.start(e),
                i.Pointer.RIGHT_BUTTON & t && this.rightButton.start(e),
                i.Pointer.MIDDLE_BUTTON & t && this.middleButton.start(e),
                i.Pointer.BACK_BUTTON & t && this.backButton.start(e),
                i.Pointer.FORWARD_BUTTON & t && this.forwardButton.start(e),
                i.Pointer.ERASER_BUTTON & t && this.eraserButton.start(e)
            },
            processButtonsUp: function(t, e) {
                t === i.Mouse.LEFT_BUTTON && this.leftButton.stop(e),
                t === i.Mouse.RIGHT_BUTTON && this.rightButton.stop(e),
                t === i.Mouse.MIDDLE_BUTTON && this.middleButton.stop(e),
                t === i.Mouse.BACK_BUTTON && this.backButton.stop(e),
                t === i.Mouse.FORWARD_BUTTON && this.forwardButton.stop(e),
                5 === t && this.eraserButton.stop(e)
            },
            updateButtons: function(t) {
                this.button = t.button;
                var e = "down" === t.type.toLowerCase().substr(-4);
                void 0 !== t.buttons ? e ? this.processButtonsDown(t.buttons, t) : this.processButtonsUp(t.button, t) : e ? this.leftButton.start(t) : (this.leftButton.stop(t),
                    this.rightButton.stop(t)),
                t.ctrlKey && this.leftButton.isDown && this.rightButton.start(t),
                    this.isUp = !0,
                    this.isDown = !1,
                (this.leftButton.isDown || this.rightButton.isDown || this.middleButton.isDown || this.backButton.isDown || this.forwardButton.isDown || this.eraserButton.isDown) && (this.isUp = !1,
                    this.isDown = !0)
            },
            start: function(t) {
                var e = this.game.input;
                return t.pointerId && (this.pointerId = t.pointerId),
                    this.identifier = t.identifier,
                    this.target = t.target,
                    this.isMouse ? this.updateButtons(t) : (this.isDown = !0,
                        this.isUp = !1),
                    this.active = !0,
                    this.withinGame = !0,
                    this.dirty = !1,
                    this._history = [],
                    this._clickTrampolines = null,
                    this._trampolineTargetObject = null,
                    this.msSinceLastClick = this.game.time.time - this.timeDown,
                    this.timeDown = this.game.time.time,
                    this._holdSent = !1,
                    this.move(t, !0),
                    this.positionDown.setTo(this.x, this.y),
                (e.multiInputOverride === i.Input.MOUSE_OVERRIDES_TOUCH || e.multiInputOverride === i.Input.MOUSE_TOUCH_COMBINE || e.multiInputOverride === i.Input.TOUCH_OVERRIDES_MOUSE && 0 === e.totalActivePointers) && (e.x = this.x,
                    e.y = this.y,
                    e.position.setTo(this.x, this.y),
                    e.onDown.dispatch(this, t),
                    e.resetSpeed(this.x, this.y)),
                    this._stateReset = !1,
                    this.totalTouches++,
                null !== this.targetObject && this.targetObject._touchedHandler(this),
                    this
            },
            update: function() {
                var t = this.game.input;
                this.active && (this.dirty && (t.interactiveItems.total > 0 && this.processInteractiveObjects(!1),
                    this.dirty = !1),
                this._holdSent === !1 && this.duration >= t.holdRate && ((t.multiInputOverride === i.Input.MOUSE_OVERRIDES_TOUCH || t.multiInputOverride === i.Input.MOUSE_TOUCH_COMBINE || t.multiInputOverride === i.Input.TOUCH_OVERRIDES_MOUSE && 0 === t.totalActivePointers) && t.onHold.dispatch(this),
                    this._holdSent = !0),
                t.recordPointerHistory && this.game.time.time >= this._nextDrop && (this._nextDrop = this.game.time.time + t.recordRate,
                    this._history.push({
                        x: this.position.x,
                        y: this.position.y
                    }),
                this._history.length > t.recordLimit && this._history.shift()))
            },
            move: function(t, e) {
                var s = this.game.input;
                if (!s.pollLocked) {
                    if (void 0 === e && (e = !1),
                    void 0 !== t.button && (this.button = t.button),
                    e && this.isMouse && this.updateButtons(t),
                        this.clientX = t.clientX,
                        this.clientY = t.clientY,
                        this.pageX = t.pageX,
                        this.pageY = t.pageY,
                        this.screenX = t.screenX,
                        this.screenY = t.screenY,
                    this.isMouse && s.mouse.locked && !e && (this.rawMovementX = t.movementX || t.mozMovementX || t.webkitMovementX || 0,
                        this.rawMovementY = t.movementY || t.mozMovementY || t.webkitMovementY || 0,
                        this.movementX += this.rawMovementX,
                        this.movementY += this.rawMovementY),
                        this.x = (this.pageX - this.game.scale.offset.x) * s.scale.x,
                        this.y = (this.pageY - this.game.scale.offset.y) * s.scale.y,
                        this.position.setTo(this.x, this.y),
                        this.circle.x = this.x,
                        this.circle.y = this.y,
                    (s.multiInputOverride === i.Input.MOUSE_OVERRIDES_TOUCH || s.multiInputOverride === i.Input.MOUSE_TOUCH_COMBINE || s.multiInputOverride === i.Input.TOUCH_OVERRIDES_MOUSE && 0 === s.totalActivePointers) && (s.activePointer = this,
                        s.x = this.x,
                        s.y = this.y,
                        s.position.setTo(s.x, s.y),
                        s.circle.x = s.x,
                        s.circle.y = s.y),
                        this.withinGame = this.game.scale.bounds.contains(this.pageX, this.pageY),
                        this.game.paused)
                        return this;
                    for (var n = s.moveCallbacks.length; n--; )
                        s.moveCallbacks[n].callback.call(s.moveCallbacks[n].context, this, this.x, this.y, e);
                    return null !== this.targetObject && this.targetObject.isDragged === !0 ? this.targetObject.update(this) === !1 && (this.targetObject = null) : s.interactiveItems.total > 0 && this.processInteractiveObjects(e),
                        this
                }
            },
            processInteractiveObjects: function(t) {
                for (var e = Number.MAX_VALUE, i = -1, s = null, n = this.game.input.interactiveItems.first; n; )
                    n.checked = !1,
                    n.validForInput(i, e, !1) && (n.checked = !0,
                    (t && n.checkPointerDown(this, !0) || !t && n.checkPointerOver(this, !0)) && (e = n.sprite.renderOrderID,
                        i = n.priorityID,
                        s = n)),
                        n = this.game.input.interactiveItems.next;
                for (var n = this.game.input.interactiveItems.first; n; )
                    !n.checked && n.validForInput(i, e, !0) && (t && n.checkPointerDown(this, !1) || !t && n.checkPointerOver(this, !1)) && (e = n.sprite.renderOrderID,
                        i = n.priorityID,
                        s = n),
                        n = this.game.input.interactiveItems.next;
                return null === s ? this.targetObject && (this.targetObject._pointerOutHandler(this),
                    this.targetObject = null) : null === this.targetObject ? (this.targetObject = s,
                    s._pointerOverHandler(this)) : this.targetObject === s ? s.update(this) === !1 && (this.targetObject = null) : (this.targetObject._pointerOutHandler(this),
                    this.targetObject = s,
                    this.targetObject._pointerOverHandler(this)),
                null !== this.targetObject
            },
            leave: function(t) {
                this.withinGame = !1,
                    this.move(t, !1)
            },
            stop: function(t) {
                var e = this.game.input;
                return this._stateReset && this.withinGame ? void t.preventDefault() : (this.timeUp = this.game.time.time,
                (e.multiInputOverride === i.Input.MOUSE_OVERRIDES_TOUCH || e.multiInputOverride === i.Input.MOUSE_TOUCH_COMBINE || e.multiInputOverride === i.Input.TOUCH_OVERRIDES_MOUSE && 0 === e.totalActivePointers) && (e.onUp.dispatch(this, t),
                this.duration >= 0 && this.duration <= e.tapRate && (this.timeUp - this.previousTapTime < e.doubleTapRate ? e.onTap.dispatch(this, !0) : e.onTap.dispatch(this, !1),
                    this.previousTapTime = this.timeUp)),
                    this.isMouse ? this.updateButtons(t) : (this.isDown = !1,
                        this.isUp = !0),
                this.id > 0 && (this.active = !1),
                    this.withinGame = this.game.scale.bounds.contains(t.pageX, t.pageY),
                    this.pointerId = null,
                    this.identifier = null,
                    this.positionUp.setTo(this.x, this.y),
                this.isMouse === !1 && e.currentPointers--,
                    e.interactiveItems.callAll("_releasedHandler", this),
                this._clickTrampolines && (this._trampolineTargetObject = this.targetObject),
                    this.targetObject = null,
                    this)
            },
            justPressed: function(t) {
                return t = t || this.game.input.justPressedRate,
                this.isDown === !0 && this.timeDown + t > this.game.time.time
            },
            justReleased: function(t) {
                return t = t || this.game.input.justReleasedRate,
                this.isUp && this.timeUp + t > this.game.time.time
            },
            addClickTrampoline: function(t, e, i, s) {
                if (this.isDown) {
                    for (var n = this._clickTrampolines = this._clickTrampolines || [], r = 0; r < n.length; r++)
                        if (n[r].name === t) {
                            n.splice(r, 1);
                            break
                        }
                    n.push({
                        name: t,
                        targetObject: this.targetObject,
                        callback: e,
                        callbackContext: i,
                        callbackArgs: s
                    })
                }
            },
            processClickTrampolines: function() {
                var t = this._clickTrampolines;
                if (t) {
                    for (var e = 0; e < t.length; e++) {
                        var i = t[e];
                        i.targetObject === this._trampolineTargetObject && i.callback.apply(i.callbackContext, i.callbackArgs)
                    }
                    this._clickTrampolines = null,
                        this._trampolineTargetObject = null
                }
            },
            reset: function() {
                this.isMouse === !1 && (this.active = !1),
                    this.pointerId = null,
                    this.identifier = null,
                    this.dirty = !1,
                    this.totalTouches = 0,
                    this._holdSent = !1,
                    this._history.length = 0,
                    this._stateReset = !0,
                    this.resetButtons(),
                this.targetObject && this.targetObject._releasedHandler(this),
                    this.targetObject = null
            },
            resetMovement: function() {
                this.movementX = 0,
                    this.movementY = 0
            }
        },
        i.Pointer.prototype.constructor = i.Pointer,
        Object.defineProperty(i.Pointer.prototype, "duration", {
            get: function() {
                return this.isUp ? -1 : this.game.time.time - this.timeDown
            }
        }),
        Object.defineProperty(i.Pointer.prototype, "worldX", {
            get: function() {
                return this.game.world.camera.x + this.x
            }
        }),
        Object.defineProperty(i.Pointer.prototype, "worldY", {
            get: function() {
                return this.game.world.camera.y + this.y
            }
        }),
        i.PointerMode = {
            CURSOR: 1,
            CONTACT: 2
        },
        i.Touch = function(t) {
            this.game = t,
                this.enabled = !0,
                this.touchLockCallbacks = [],
                this.callbackContext = this.game,
                this.touchStartCallback = null,
                this.touchMoveCallback = null,
                this.touchEndCallback = null,
                this.touchEnterCallback = null,
                this.touchLeaveCallback = null,
                this.touchCancelCallback = null,
                this.preventDefault = !0,
                this.event = null,
                this._onTouchStart = null,
                this._onTouchMove = null,
                this._onTouchEnd = null,
                this._onTouchEnter = null,
                this._onTouchLeave = null,
                this._onTouchCancel = null,
                this._onTouchMove = null
        }
        ,
        i.Touch.prototype = {
            start: function() {
                if (null === this._onTouchStart) {
                    var t = this;
                    this.game.device.touch && (this._onTouchStart = function(e) {
                        return t.onTouchStart(e)
                    }
                        ,
                        this._onTouchMove = function(e) {
                            return t.onTouchMove(e)
                        }
                        ,
                        this._onTouchEnd = function(e) {
                            return t.onTouchEnd(e)
                        }
                        ,
                        this._onTouchEnter = function(e) {
                            return t.onTouchEnter(e)
                        }
                        ,
                        this._onTouchLeave = function(e) {
                            return t.onTouchLeave(e)
                        }
                        ,
                        this._onTouchCancel = function(e) {
                            return t.onTouchCancel(e)
                        }
                        ,
                        this.game.canvas.addEventListener("touchstart", this._onTouchStart, !1),
                        this.game.canvas.addEventListener("touchmove", this._onTouchMove, !1),
                        this.game.canvas.addEventListener("touchend", this._onTouchEnd, !1),
                        this.game.canvas.addEventListener("touchcancel", this._onTouchCancel, !1),
                    this.game.device.cocoonJS || (this.game.canvas.addEventListener("touchenter", this._onTouchEnter, !1),
                        this.game.canvas.addEventListener("touchleave", this._onTouchLeave, !1)))
                }
            },
            consumeDocumentTouches: function() {
                this._documentTouchMove = function(t) {
                    t.preventDefault()
                }
                    ,
                    document.addEventListener("touchmove", this._documentTouchMove, !1)
            },
            addTouchLockCallback: function(t, e, i) {
                void 0 === i && (i = !1),
                    this.touchLockCallbacks.push({
                        callback: t,
                        context: e,
                        onEnd: i
                    })
            },
            removeTouchLockCallback: function(t, e) {
                for (var i = this.touchLockCallbacks.length; i--; )
                    if (this.touchLockCallbacks[i].callback === t && this.touchLockCallbacks[i].context === e)
                        return this.touchLockCallbacks.splice(i, 1),
                            !0;
                return !1
            },
            onTouchStart: function(t) {
                for (var e = this.touchLockCallbacks.length; e--; ) {
                    var i = this.touchLockCallbacks[e];
                    !i.onEnd && i.callback.call(i.context, this, t) && this.touchLockCallbacks.splice(e, 1)
                }
                if (this.event = t,
                this.game.input.enabled && this.enabled) {
                    this.touchStartCallback && this.touchStartCallback.call(this.callbackContext, t),
                    this.preventDefault && t.preventDefault();
                    for (var e = 0; e < t.changedTouches.length; e++)
                        this.game.input.startPointer(t.changedTouches[e])
                }
            },
            onTouchCancel: function(t) {
                if (this.event = t,
                this.touchCancelCallback && this.touchCancelCallback.call(this.callbackContext, t),
                this.game.input.enabled && this.enabled) {
                    this.preventDefault && t.preventDefault();
                    for (var e = 0; e < t.changedTouches.length; e++)
                        this.game.input.stopPointer(t.changedTouches[e])
                }
            },
            onTouchEnter: function(t) {
                this.event = t,
                this.touchEnterCallback && this.touchEnterCallback.call(this.callbackContext, t),
                this.game.input.enabled && this.enabled && this.preventDefault && t.preventDefault()
            },
            onTouchLeave: function(t) {
                this.event = t,
                this.touchLeaveCallback && this.touchLeaveCallback.call(this.callbackContext, t),
                this.preventDefault && t.preventDefault()
            },
            onTouchMove: function(t) {
                this.event = t,
                this.touchMoveCallback && this.touchMoveCallback.call(this.callbackContext, t),
                this.preventDefault && t.preventDefault();
                for (var e = 0; e < t.changedTouches.length; e++)
                    this.game.input.updatePointer(t.changedTouches[e])
            },
            onTouchEnd: function(t) {
                for (var e = this.touchLockCallbacks.length; e--; ) {
                    var i = this.touchLockCallbacks[e];
                    i.onEnd && i.callback.call(i.context, this, t) && this.touchLockCallbacks.splice(e, 1)
                }
                this.event = t,
                this.touchEndCallback && this.touchEndCallback.call(this.callbackContext, t),
                this.preventDefault && t.preventDefault();
                for (var e = 0; e < t.changedTouches.length; e++)
                    this.game.input.stopPointer(t.changedTouches[e])
            },
            stop: function() {
                this.game.device.touch && (this.game.canvas.removeEventListener("touchstart", this._onTouchStart),
                    this.game.canvas.removeEventListener("touchmove", this._onTouchMove),
                    this.game.canvas.removeEventListener("touchend", this._onTouchEnd),
                    this.game.canvas.removeEventListener("touchenter", this._onTouchEnter),
                    this.game.canvas.removeEventListener("touchleave", this._onTouchLeave),
                    this.game.canvas.removeEventListener("touchcancel", this._onTouchCancel))
            }
        },
        i.Touch.prototype.constructor = i.Touch,
        i.InputHandler = function(t) {
            this.sprite = t,
                this.game = t.game,
                this.enabled = !1,
                this.checked = !1,
                this.priorityID = 0,
                this.useHandCursor = !1,
                this._setHandCursor = !1,
                this.isDragged = !1,
                this.allowHorizontalDrag = !0,
                this.allowVerticalDrag = !0,
                this.bringToTop = !1,
                this.snapOffset = null,
                this.snapOnDrag = !1,
                this.snapOnRelease = !1,
                this.snapX = 0,
                this.snapY = 0,
                this.snapOffsetX = 0,
                this.snapOffsetY = 0,
                this.pixelPerfectOver = !1,
                this.pixelPerfectClick = !1,
                this.pixelPerfectAlpha = 255,
                this.draggable = !1,
                this.boundsRect = null,
                this.boundsSprite = null,
                this.consumePointerEvent = !1,
                this.scaleLayer = !1,
                this.dragOffset = new i.Point,
                this.dragFromCenter = !1,
                this.dragStartPoint = new i.Point,
                this.snapPoint = new i.Point,
                this._dragPoint = new i.Point,
                this._dragPhase = !1,
                this._wasEnabled = !1,
                this._tempPoint = new i.Point,
                this._pointerData = [],
                this._pointerData.push({
                    id: 0,
                    x: 0,
                    y: 0,
                    isDown: !1,
                    isUp: !1,
                    isOver: !1,
                    isOut: !1,
                    timeOver: 0,
                    timeOut: 0,
                    timeDown: 0,
                    timeUp: 0,
                    downDuration: 0,
                    isDragged: !1
                })
        }
        ,
        i.InputHandler.prototype = {
            start: function(t, e) {
                if (t = t || 0,
                void 0 === e && (e = !1),
                this.enabled === !1) {
                    this.game.input.interactiveItems.add(this),
                        this.useHandCursor = e,
                        this.priorityID = t;
                    for (var s = 0; 10 > s; s++)
                        this._pointerData[s] = {
                            id: s,
                            x: 0,
                            y: 0,
                            isDown: !1,
                            isUp: !1,
                            isOver: !1,
                            isOut: !1,
                            timeOver: 0,
                            timeOut: 0,
                            timeDown: 0,
                            timeUp: 0,
                            downDuration: 0,
                            isDragged: !1
                        };
                    this.snapOffset = new i.Point,
                        this.enabled = !0,
                        this._wasEnabled = !0
                }
                return this.sprite.events.onAddedToGroup.add(this.addedToGroup, this),
                    this.sprite.events.onRemovedFromGroup.add(this.removedFromGroup, this),
                    this.flagged = !1,
                    this.sprite
            },
            addedToGroup: function() {
                this._dragPhase || this._wasEnabled && !this.enabled && this.start()
            },
            removedFromGroup: function() {
                this._dragPhase || (this.enabled ? (this._wasEnabled = !0,
                    this.stop()) : this._wasEnabled = !1)
            },
            reset: function() {
                this.enabled = !1,
                    this.flagged = !1;
                for (var t = 0; 10 > t; t++)
                    this._pointerData[t] = {
                        id: t,
                        x: 0,
                        y: 0,
                        isDown: !1,
                        isUp: !1,
                        isOver: !1,
                        isOut: !1,
                        timeOver: 0,
                        timeOut: 0,
                        timeDown: 0,
                        timeUp: 0,
                        downDuration: 0,
                        isDragged: !1
                    }
            },
            stop: function() {
                this.enabled !== !1 && (this.enabled = !1,
                    this.game.input.interactiveItems.remove(this))
            },
            destroy: function() {
                this.sprite && (this._setHandCursor && (this.game.canvas.style.cursor = "default",
                    this._setHandCursor = !1),
                    this.enabled = !1,
                    this.game.input.interactiveItems.remove(this),
                    this._pointerData.length = 0,
                    this.boundsRect = null,
                    this.boundsSprite = null,
                    this.sprite = null)
            },
            validForInput: function(t, e, i) {
                return void 0 === i && (i = !0),
                !(!this.enabled || 0 === this.sprite.scale.x || 0 === this.sprite.scale.y || this.priorityID < this.game.input.minPriorityID) && !(!i && (this.pixelPerfectClick || this.pixelPerfectOver) || !(this.priorityID > t || this.priorityID === t && this.sprite.renderOrderID < e))
            },
            isPixelPerfect: function() {
                return this.pixelPerfectClick || this.pixelPerfectOver
            },
            pointerX: function(t) {
                return t = t || 0,
                    this._pointerData[t].x
            },
            pointerY: function(t) {
                return t = t || 0,
                    this._pointerData[t].y
            },
            pointerDown: function(t) {
                return t = t || 0,
                    this._pointerData[t].isDown
            },
            pointerUp: function(t) {
                return t = t || 0,
                    this._pointerData[t].isUp
            },
            pointerTimeDown: function(t) {
                return t = t || 0,
                    this._pointerData[t].timeDown
            },
            pointerTimeUp: function(t) {
                return t = t || 0,
                    this._pointerData[t].timeUp
            },
            pointerOver: function(t) {
                if (!this.enabled)
                    return !1;
                if (void 0 !== t)
                    return this._pointerData[t].isOver;
                for (var e = 0; 10 > e; e++)
                    if (this._pointerData[e].isOver)
                        return !0
            },
            pointerOut: function(t) {
                if (!this.enabled)
                    return !1;
                if (void 0 !== t)
                    return this._pointerData[t].isOut;
                for (var e = 0; 10 > e; e++)
                    if (this._pointerData[e].isOut)
                        return !0
            },
            pointerTimeOver: function(t) {
                return t = t || 0,
                    this._pointerData[t].timeOver
            },
            pointerTimeOut: function(t) {
                return t = t || 0,
                    this._pointerData[t].timeOut
            },
            pointerDragged: function(t) {
                return t = t || 0,
                    this._pointerData[t].isDragged
            },
            checkPointerDown: function(t, e) {
                return !!(t.isDown && this.enabled && this.sprite && this.sprite.parent && this.sprite.visible && this.sprite.parent.visible && this.game.input.hitTest(this.sprite, t, this._tempPoint)) && (void 0 === e && (e = !1),
                !(!e && this.pixelPerfectClick) || this.checkPixel(this._tempPoint.x, this._tempPoint.y))
            },
            checkPointerOver: function(t, e) {
                return !!(this.enabled && this.sprite && this.sprite.parent && this.sprite.visible && this.sprite.parent.visible && this.game.input.hitTest(this.sprite, t, this._tempPoint)) && (void 0 === e && (e = !1),
                !(!e && this.pixelPerfectOver) || this.checkPixel(this._tempPoint.x, this._tempPoint.y))
            },
            checkPixel: function(t, e, i) {
                if (this.sprite.texture.baseTexture.source) {
                    if (null === t && null === e) {
                        this.game.input.getLocalPosition(this.sprite, i, this._tempPoint);
                        var t = this._tempPoint.x
                            , e = this._tempPoint.y
                    }
                    if (0 !== this.sprite.anchor.x && (t -= -this.sprite.texture.frame.width * this.sprite.anchor.x),
                    0 !== this.sprite.anchor.y && (e -= -this.sprite.texture.frame.height * this.sprite.anchor.y),
                        t += this.sprite.texture.frame.x,
                        e += this.sprite.texture.frame.y,
                    this.sprite.texture.trim && (t -= this.sprite.texture.trim.x,
                        e -= this.sprite.texture.trim.y,
                    t < this.sprite.texture.crop.x || t > this.sprite.texture.crop.right || e < this.sprite.texture.crop.y || e > this.sprite.texture.crop.bottom))
                        return this._dx = t,
                            this._dy = e,
                            !1;
                    this._dx = t,
                        this._dy = e,
                        this.game.input.hitContext.clearRect(0, 0, 1, 1),
                        this.game.input.hitContext.drawImage(this.sprite.texture.baseTexture.source, t, e, 1, 1, 0, 0, 1, 1);
                    var s = this.game.input.hitContext.getImageData(0, 0, 1, 1);
                    if (s.data[3] >= this.pixelPerfectAlpha)
                        return !0
                }
                return !1
            },
            update: function(t) {
                return null !== this.sprite && void 0 !== this.sprite.parent ? this.enabled && this.sprite.visible && this.sprite.parent.visible ? this.draggable && this._draggedPointerID === t.id ? this.updateDrag(t) : this._pointerData[t.id].isOver ? this.checkPointerOver(t) ? (this._pointerData[t.id].x = t.x - this.sprite.x,
                    this._pointerData[t.id].y = t.y - this.sprite.y,
                    !0) : (this._pointerOutHandler(t),
                    !1) : void 0 : (this._pointerOutHandler(t),
                    !1) : void 0
            },
            _pointerOverHandler: function(t) {
                if (null !== this.sprite) {
                    var e = this._pointerData[t.id];
                    (e.isOver === !1 || t.dirty) && (e.isOver = !0,
                        e.isOut = !1,
                        e.timeOver = this.game.time.time,
                        e.x = t.x - this.sprite.x,
                        e.y = t.y - this.sprite.y,
                    this.useHandCursor && e.isDragged === !1 && (this.game.canvas.style.cursor = "pointer",
                        this._setHandCursor = !0),
                    this.sprite && this.sprite.events && this.sprite.events.onInputOver$dispatch(this.sprite, t))
                }
            },
            _pointerOutHandler: function(t) {
                if (null !== this.sprite) {
                    var e = this._pointerData[t.id];
                    e.isOver = !1,
                        e.isOut = !0,
                        e.timeOut = this.game.time.time,
                    this.useHandCursor && e.isDragged === !1 && (this.game.canvas.style.cursor = "default",
                        this._setHandCursor = !1),
                    this.sprite && this.sprite.events && this.sprite.events.onInputOut$dispatch(this.sprite, t)
                }
            },
            _touchedHandler: function(t) {
                if (null !== this.sprite) {
                    var e = this._pointerData[t.id];
                    if (!e.isDown && e.isOver) {
                        if (this.pixelPerfectClick && !this.checkPixel(null, null, t))
                            return;
                        e.isDown = !0,
                            e.isUp = !1,
                            e.timeDown = this.game.time.time,
                        this.sprite && this.sprite.events && this.sprite.events.onInputDown$dispatch(this.sprite, t),
                            t.dirty = !0,
                        this.draggable && this.isDragged === !1 && this.startDrag(t),
                        this.bringToTop && this.sprite.bringToTop()
                    }
                    return this.consumePointerEvent
                }
            },
            _releasedHandler: function(t) {
                if (null !== this.sprite) {
                    var e = this._pointerData[t.id];
                    if (e.isDown && t.isUp) {
                        e.isDown = !1,
                            e.isUp = !0,
                            e.timeUp = this.game.time.time,
                            e.downDuration = e.timeUp - e.timeDown;
                        var i = this.checkPointerOver(t);
                        this.sprite && this.sprite.events && (this.sprite.events.onInputUp$dispatch(this.sprite, t, i),
                        i && (i = this.checkPointerOver(t))),
                            e.isOver = i,
                        !i && this.useHandCursor && (this.game.canvas.style.cursor = "default",
                            this._setHandCursor = !1),
                            t.dirty = !0,
                        this.draggable && this.isDragged && this._draggedPointerID === t.id && this.stopDrag(t)
                    }
                }
            },
            updateDrag: function(t) {
                if (t.isUp)
                    return this.stopDrag(t),
                        !1;
                var e = this.globalToLocalX(t.x) + this._dragPoint.x + this.dragOffset.x
                    , i = this.globalToLocalY(t.y) + this._dragPoint.y + this.dragOffset.y;
                return this.sprite.fixedToCamera ? (this.allowHorizontalDrag && (this.sprite.cameraOffset.x = e),
                this.allowVerticalDrag && (this.sprite.cameraOffset.y = i),
                this.boundsRect && this.checkBoundsRect(),
                this.boundsSprite && this.checkBoundsSprite(),
                this.snapOnDrag && (this.sprite.cameraOffset.x = Math.round((this.sprite.cameraOffset.x - this.snapOffsetX % this.snapX) / this.snapX) * this.snapX + this.snapOffsetX % this.snapX,
                    this.sprite.cameraOffset.y = Math.round((this.sprite.cameraOffset.y - this.snapOffsetY % this.snapY) / this.snapY) * this.snapY + this.snapOffsetY % this.snapY,
                    this.snapPoint.set(this.sprite.cameraOffset.x, this.sprite.cameraOffset.y))) : (this.allowHorizontalDrag && (this.sprite.x = e),
                this.allowVerticalDrag && (this.sprite.y = i),
                this.boundsRect && this.checkBoundsRect(),
                this.boundsSprite && this.checkBoundsSprite(),
                this.snapOnDrag && (this.sprite.x = Math.round((this.sprite.x - this.snapOffsetX % this.snapX) / this.snapX) * this.snapX + this.snapOffsetX % this.snapX,
                    this.sprite.y = Math.round((this.sprite.y - this.snapOffsetY % this.snapY) / this.snapY) * this.snapY + this.snapOffsetY % this.snapY,
                    this.snapPoint.set(this.sprite.x, this.sprite.y))),
                    this.sprite.events.onDragUpdate.dispatch(this.sprite, t, e, i, this.snapPoint),
                    !0
            },
            justOver: function(t, e) {
                return t = t || 0,
                    e = e || 500,
                this._pointerData[t].isOver && this.overDuration(t) < e
            },
            justOut: function(t, e) {
                return t = t || 0,
                    e = e || 500,
                this._pointerData[t].isOut && this.game.time.time - this._pointerData[t].timeOut < e
            },
            justPressed: function(t, e) {
                return t = t || 0,
                    e = e || 500,
                this._pointerData[t].isDown && this.downDuration(t) < e
            },
            justReleased: function(t, e) {
                return t = t || 0,
                    e = e || 500,
                this._pointerData[t].isUp && this.game.time.time - this._pointerData[t].timeUp < e
            },
            overDuration: function(t) {
                return t = t || 0,
                    this._pointerData[t].isOver ? this.game.time.time - this._pointerData[t].timeOver : -1
            },
            downDuration: function(t) {
                return t = t || 0,
                    this._pointerData[t].isDown ? this.game.time.time - this._pointerData[t].timeDown : -1
            },
            enableDrag: function(t, e, s, n, r, o) {
                void 0 === t && (t = !1),
                void 0 === e && (e = !1),
                void 0 === s && (s = !1),
                void 0 === n && (n = 255),
                void 0 === r && (r = null),
                void 0 === o && (o = null),
                    this._dragPoint = new i.Point,
                    this.draggable = !0,
                    this.bringToTop = e,
                    this.dragOffset = new i.Point,
                    this.dragFromCenter = t,
                    this.pixelPerfectClick = s,
                    this.pixelPerfectAlpha = n,
                r && (this.boundsRect = r),
                o && (this.boundsSprite = o)
            },
            disableDrag: function() {
                if (this._pointerData)
                    for (var t = 0; 10 > t; t++)
                        this._pointerData[t].isDragged = !1;
                this.draggable = !1,
                    this.isDragged = !1,
                    this._draggedPointerID = -1
            },
            startDrag: function(t) {
                var e = this.sprite.x
                    , i = this.sprite.y;
                if (this.isDragged = !0,
                    this._draggedPointerID = t.id,
                    this._pointerData[t.id].isDragged = !0,
                    this.sprite.fixedToCamera)
                    this.dragFromCenter ? (this.sprite.centerOn(t.x, t.y),
                        this._dragPoint.setTo(this.sprite.cameraOffset.x - t.x, this.sprite.cameraOffset.y - t.y)) : this._dragPoint.setTo(this.sprite.cameraOffset.x - t.x, this.sprite.cameraOffset.y - t.y);
                else {
                    if (this.dragFromCenter) {
                        var s = this.sprite.getBounds();
                        this.sprite.x = this.globalToLocalX(t.x) + (this.sprite.x - s.centerX),
                            this.sprite.y = this.globalToLocalY(t.y) + (this.sprite.y - s.centerY)
                    }
                    this._dragPoint.setTo(this.sprite.x - this.globalToLocalX(t.x), this.sprite.y - this.globalToLocalY(t.y))
                }
                this.updateDrag(t),
                this.bringToTop && (this._dragPhase = !0,
                    this.sprite.bringToTop()),
                    this.dragStartPoint.set(e, i),
                    this.sprite.events.onDragStart$dispatch(this.sprite, t, e, i)
            },
            globalToLocalX: function(t) {
                return this.scaleLayer && (t -= this.game.scale.grid.boundsFluid.x,
                    t *= this.game.scale.grid.scaleFluidInversed.x),
                    t
            },
            globalToLocalY: function(t) {
                return this.scaleLayer && (t -= this.game.scale.grid.boundsFluid.y,
                    t *= this.game.scale.grid.scaleFluidInversed.y),
                    t
            },
            stopDrag: function(t) {
                this.isDragged = !1,
                    this._draggedPointerID = -1,
                    this._pointerData[t.id].isDragged = !1,
                    this._dragPhase = !1,
                this.snapOnRelease && (this.sprite.fixedToCamera ? (this.sprite.cameraOffset.x = Math.round((this.sprite.cameraOffset.x - this.snapOffsetX % this.snapX) / this.snapX) * this.snapX + this.snapOffsetX % this.snapX,
                    this.sprite.cameraOffset.y = Math.round((this.sprite.cameraOffset.y - this.snapOffsetY % this.snapY) / this.snapY) * this.snapY + this.snapOffsetY % this.snapY) : (this.sprite.x = Math.round((this.sprite.x - this.snapOffsetX % this.snapX) / this.snapX) * this.snapX + this.snapOffsetX % this.snapX,
                    this.sprite.y = Math.round((this.sprite.y - this.snapOffsetY % this.snapY) / this.snapY) * this.snapY + this.snapOffsetY % this.snapY)),
                    this.sprite.events.onDragStop$dispatch(this.sprite, t),
                this.checkPointerOver(t) === !1 && this._pointerOutHandler(t)
            },
            setDragLock: function(t, e) {
                void 0 === t && (t = !0),
                void 0 === e && (e = !0),
                    this.allowHorizontalDrag = t,
                    this.allowVerticalDrag = e
            },
            enableSnap: function(t, e, i, s, n, r) {
                void 0 === i && (i = !0),
                void 0 === s && (s = !1),
                void 0 === n && (n = 0),
                void 0 === r && (r = 0),
                    this.snapX = t,
                    this.snapY = e,
                    this.snapOffsetX = n,
                    this.snapOffsetY = r,
                    this.snapOnDrag = i,
                    this.snapOnRelease = s
            },
            disableSnap: function() {
                this.snapOnDrag = !1,
                    this.snapOnRelease = !1
            },
            checkBoundsRect: function() {
                this.sprite.fixedToCamera ? (this.sprite.cameraOffset.x < this.boundsRect.left ? this.sprite.cameraOffset.x = this.boundsRect.left : this.sprite.cameraOffset.x + this.sprite.width > this.boundsRect.right && (this.sprite.cameraOffset.x = this.boundsRect.right - this.sprite.width),
                    this.sprite.cameraOffset.y < this.boundsRect.top ? this.sprite.cameraOffset.y = this.boundsRect.top : this.sprite.cameraOffset.y + this.sprite.height > this.boundsRect.bottom && (this.sprite.cameraOffset.y = this.boundsRect.bottom - this.sprite.height)) : (this.sprite.left < this.boundsRect.left ? this.sprite.x = this.boundsRect.x + this.sprite.offsetX : this.sprite.right > this.boundsRect.right && (this.sprite.x = this.boundsRect.right - (this.sprite.width - this.sprite.offsetX)),
                    this.sprite.top < this.boundsRect.top ? this.sprite.y = this.boundsRect.top + this.sprite.offsetY : this.sprite.bottom > this.boundsRect.bottom && (this.sprite.y = this.boundsRect.bottom - (this.sprite.height - this.sprite.offsetY)))
            },
            checkBoundsSprite: function() {
                this.sprite.fixedToCamera && this.boundsSprite.fixedToCamera ? (this.sprite.cameraOffset.x < this.boundsSprite.cameraOffset.x ? this.sprite.cameraOffset.x = this.boundsSprite.cameraOffset.x : this.sprite.cameraOffset.x + this.sprite.width > this.boundsSprite.cameraOffset.x + this.boundsSprite.width && (this.sprite.cameraOffset.x = this.boundsSprite.cameraOffset.x + this.boundsSprite.width - this.sprite.width),
                    this.sprite.cameraOffset.y < this.boundsSprite.cameraOffset.y ? this.sprite.cameraOffset.y = this.boundsSprite.cameraOffset.y : this.sprite.cameraOffset.y + this.sprite.height > this.boundsSprite.cameraOffset.y + this.boundsSprite.height && (this.sprite.cameraOffset.y = this.boundsSprite.cameraOffset.y + this.boundsSprite.height - this.sprite.height)) : (this.sprite.left < this.boundsSprite.left ? this.sprite.x = this.boundsSprite.left + this.sprite.offsetX : this.sprite.right > this.boundsSprite.right && (this.sprite.x = this.boundsSprite.right - (this.sprite.width - this.sprite.offsetX)),
                    this.sprite.top < this.boundsSprite.top ? this.sprite.y = this.boundsSprite.top + this.sprite.offsetY : this.sprite.bottom > this.boundsSprite.bottom && (this.sprite.y = this.boundsSprite.bottom - (this.sprite.height - this.sprite.offsetY)))
            }
        },
        i.InputHandler.prototype.constructor = i.InputHandler,
        i.Gamepad = function(t) {
            this.game = t,
                this._gamepadIndexMap = {},
                this._rawPads = [],
                this._active = !1,
                this.enabled = !0,
                this._gamepadSupportAvailable = !!navigator.webkitGetGamepads || !!navigator.webkitGamepads || -1 != navigator.userAgent.indexOf("Firefox/") || !!navigator.getGamepads,
                this._prevRawGamepadTypes = [],
                this._prevTimestamps = [],
                this.callbackContext = this,
                this.onConnectCallback = null,
                this.onDisconnectCallback = null,
                this.onDownCallback = null,
                this.onUpCallback = null,
                this.onAxisCallback = null,
                this.onFloatCallback = null,
                this._ongamepadconnected = null,
                this._gamepaddisconnected = null,
                this._gamepads = [new i.SinglePad(t,this), new i.SinglePad(t,this), new i.SinglePad(t,this), new i.SinglePad(t,this)]
        }
        ,
        i.Gamepad.prototype = {
            addCallbacks: function(t, e) {
                "undefined" != typeof e && (this.onConnectCallback = "function" == typeof e.onConnect ? e.onConnect : this.onConnectCallback,
                    this.onDisconnectCallback = "function" == typeof e.onDisconnect ? e.onDisconnect : this.onDisconnectCallback,
                    this.onDownCallback = "function" == typeof e.onDown ? e.onDown : this.onDownCallback,
                    this.onUpCallback = "function" == typeof e.onUp ? e.onUp : this.onUpCallback,
                    this.onAxisCallback = "function" == typeof e.onAxis ? e.onAxis : this.onAxisCallback,
                    this.onFloatCallback = "function" == typeof e.onFloat ? e.onFloat : this.onFloatCallback,
                    this.callbackContext = t)
            },
            start: function() {
                if (!this._active) {
                    this._active = !0;
                    var t = this;
                    this._onGamepadConnected = function(e) {
                        return t.onGamepadConnected(e)
                    }
                        ,
                        this._onGamepadDisconnected = function(e) {
                            return t.onGamepadDisconnected(e)
                        }
                        ,
                        window.addEventListener("gamepadconnected", this._onGamepadConnected, !1),
                        window.addEventListener("gamepaddisconnected", this._onGamepadDisconnected, !1)
                }
            },
            onGamepadConnected: function(t) {
                var e = t.gamepad;
                this._rawPads.push(e),
                    this._gamepads[e.index].connect(e)
            },
            onGamepadDisconnected: function(t) {
                var e = t.gamepad;
                for (var i in this._rawPads)
                    this._rawPads[i].index === e.index && this._rawPads.splice(i, 1);
                this._gamepads[e.index].disconnect()
            },
            update: function() {
                this._pollGamepads(),
                    this.pad1.pollStatus(),
                    this.pad2.pollStatus(),
                    this.pad3.pollStatus(),
                    this.pad4.pollStatus()
            },
            _pollGamepads: function() {
                if (navigator.getGamepads)
                    var t = navigator.getGamepads();
                else if (navigator.webkitGetGamepads)
                    var t = navigator.webkitGetGamepads();
                else if (navigator.webkitGamepads)
                    var t = navigator.webkitGamepads();
                if (t) {
                    this._rawPads = [];
                    for (var e = !1, i = 0; i < t.length && (typeof t[i] !== this._prevRawGamepadTypes[i] && (e = !0,
                        this._prevRawGamepadTypes[i] = typeof t[i]),
                    t[i] && this._rawPads.push(t[i]),
                    3 !== i); i++)
                        ;
                    if (e) {
                        for (var s, n = {
                            rawIndices: {},
                            padIndices: {}
                        }, r = 0; r < this._gamepads.length; r++)
                            if (s = this._gamepads[r],
                                s.connected)
                                for (var o = 0; o < this._rawPads.length; o++)
                                    this._rawPads[o].index === s.index && (n.rawIndices[s.index] = !0,
                                        n.padIndices[r] = !0);
                        for (var a = 0; a < this._gamepads.length; a++)
                            if (s = this._gamepads[a],
                                !n.padIndices[a]) {
                                this._rawPads.length < 1 && s.disconnect();
                                for (var h = 0; h < this._rawPads.length && !n.padIndices[a]; h++) {
                                    var l = this._rawPads[h];
                                    if (l) {
                                        if (n.rawIndices[l.index]) {
                                            s.disconnect();
                                            continue
                                        }
                                        s.connect(l),
                                            n.rawIndices[l.index] = !0,
                                            n.padIndices[a] = !0
                                    } else
                                        s.disconnect()
                                }
                            }
                    }
                }
            },
            setDeadZones: function(t) {
                for (var e = 0; e < this._gamepads.length; e++)
                    this._gamepads[e].deadZone = t
            },
            stop: function() {
                this._active = !1,
                    window.removeEventListener("gamepadconnected", this._onGamepadConnected),
                    window.removeEventListener("gamepaddisconnected", this._onGamepadDisconnected)
            },
            reset: function() {
                this.update();
                for (var t = 0; t < this._gamepads.length; t++)
                    this._gamepads[t].reset()
            },
            justPressed: function(t, e) {
                for (var i = 0; i < this._gamepads.length; i++)
                    if (this._gamepads[i].justPressed(t, e) === !0)
                        return !0;
                return !1
            },
            justReleased: function(t, e) {
                for (var i = 0; i < this._gamepads.length; i++)
                    if (this._gamepads[i].justReleased(t, e) === !0)
                        return !0;
                return !1
            },
            isDown: function(t) {
                for (var e = 0; e < this._gamepads.length; e++)
                    if (this._gamepads[e].isDown(t) === !0)
                        return !0;
                return !1
            },
            destroy: function() {
                this.stop();
                for (var t = 0; t < this._gamepads.length; t++)
                    this._gamepads[t].destroy()
            }
        },
        i.Gamepad.prototype.constructor = i.Gamepad,
        Object.defineProperty(i.Gamepad.prototype, "active", {
            get: function() {
                return this._active
            }
        }),
        Object.defineProperty(i.Gamepad.prototype, "supported", {
            get: function() {
                return this._gamepadSupportAvailable
            }
        }),
        Object.defineProperty(i.Gamepad.prototype, "padsConnected", {
            get: function() {
                return this._rawPads.length
            }
        }),
        Object.defineProperty(i.Gamepad.prototype, "pad1", {
            get: function() {
                return this._gamepads[0]
            }
        }),
        Object.defineProperty(i.Gamepad.prototype, "pad2", {
            get: function() {
                return this._gamepads[1]
            }
        }),
        Object.defineProperty(i.Gamepad.prototype, "pad3", {
            get: function() {
                return this._gamepads[2]
            }
        }),
        Object.defineProperty(i.Gamepad.prototype, "pad4", {
            get: function() {
                return this._gamepads[3]
            }
        }),
        i.Gamepad.BUTTON_0 = 0,
        i.Gamepad.BUTTON_1 = 1,
        i.Gamepad.BUTTON_2 = 2,
        i.Gamepad.BUTTON_3 = 3,
        i.Gamepad.BUTTON_4 = 4,
        i.Gamepad.BUTTON_5 = 5,
        i.Gamepad.BUTTON_6 = 6,
        i.Gamepad.BUTTON_7 = 7,
        i.Gamepad.BUTTON_8 = 8,
        i.Gamepad.BUTTON_9 = 9,
        i.Gamepad.BUTTON_10 = 10,
        i.Gamepad.BUTTON_11 = 11,
        i.Gamepad.BUTTON_12 = 12,
        i.Gamepad.BUTTON_13 = 13,
        i.Gamepad.BUTTON_14 = 14,
        i.Gamepad.BUTTON_15 = 15,
        i.Gamepad.AXIS_0 = 0,
        i.Gamepad.AXIS_1 = 1,
        i.Gamepad.AXIS_2 = 2,
        i.Gamepad.AXIS_3 = 3,
        i.Gamepad.AXIS_4 = 4,
        i.Gamepad.AXIS_5 = 5,
        i.Gamepad.AXIS_6 = 6,
        i.Gamepad.AXIS_7 = 7,
        i.Gamepad.AXIS_8 = 8,
        i.Gamepad.AXIS_9 = 9,
        i.Gamepad.XBOX360_A = 0,
        i.Gamepad.XBOX360_B = 1,
        i.Gamepad.XBOX360_X = 2,
        i.Gamepad.XBOX360_Y = 3,
        i.Gamepad.XBOX360_LEFT_BUMPER = 4,
        i.Gamepad.XBOX360_RIGHT_BUMPER = 5,
        i.Gamepad.XBOX360_LEFT_TRIGGER = 6,
        i.Gamepad.XBOX360_RIGHT_TRIGGER = 7,
        i.Gamepad.XBOX360_BACK = 8,
        i.Gamepad.XBOX360_START = 9,
        i.Gamepad.XBOX360_STICK_LEFT_BUTTON = 10,
        i.Gamepad.XBOX360_STICK_RIGHT_BUTTON = 11,
        i.Gamepad.XBOX360_DPAD_LEFT = 14,
        i.Gamepad.XBOX360_DPAD_RIGHT = 15,
        i.Gamepad.XBOX360_DPAD_UP = 12,
        i.Gamepad.XBOX360_DPAD_DOWN = 13,
        i.Gamepad.XBOX360_STICK_LEFT_X = 0,
        i.Gamepad.XBOX360_STICK_LEFT_Y = 1,
        i.Gamepad.XBOX360_STICK_RIGHT_X = 2,
        i.Gamepad.XBOX360_STICK_RIGHT_Y = 3,
        i.Gamepad.PS3XC_X = 0,
        i.Gamepad.PS3XC_CIRCLE = 1,
        i.Gamepad.PS3XC_SQUARE = 2,
        i.Gamepad.PS3XC_TRIANGLE = 3,
        i.Gamepad.PS3XC_L1 = 4,
        i.Gamepad.PS3XC_R1 = 5,
        i.Gamepad.PS3XC_L2 = 6,
        i.Gamepad.PS3XC_R2 = 7,
        i.Gamepad.PS3XC_SELECT = 8,
        i.Gamepad.PS3XC_START = 9,
        i.Gamepad.PS3XC_STICK_LEFT_BUTTON = 10,
        i.Gamepad.PS3XC_STICK_RIGHT_BUTTON = 11,
        i.Gamepad.PS3XC_DPAD_UP = 12,
        i.Gamepad.PS3XC_DPAD_DOWN = 13,
        i.Gamepad.PS3XC_DPAD_LEFT = 14,
        i.Gamepad.PS3XC_DPAD_RIGHT = 15,
        i.Gamepad.PS3XC_STICK_LEFT_X = 0,
        i.Gamepad.PS3XC_STICK_LEFT_Y = 1,
        i.Gamepad.PS3XC_STICK_RIGHT_X = 2,
        i.Gamepad.PS3XC_STICK_RIGHT_Y = 3,
        i.SinglePad = function(t, e) {
            this.game = t,
                this.index = null,
                this.connected = !1,
                this.callbackContext = this,
                this.onConnectCallback = null,
                this.onDisconnectCallback = null,
                this.onDownCallback = null,
                this.onUpCallback = null,
                this.onAxisCallback = null,
                this.onFloatCallback = null,
                this.deadZone = .26,
                this._padParent = e,
                this._rawPad = null,
                this._prevTimestamp = null,
                this._buttons = [],
                this._buttonsLen = 0,
                this._axes = [],
                this._axesLen = 0
        }
        ,
        i.SinglePad.prototype = {
            addCallbacks: function(t, e) {
                "undefined" != typeof e && (this.onConnectCallback = "function" == typeof e.onConnect ? e.onConnect : this.onConnectCallback,
                    this.onDisconnectCallback = "function" == typeof e.onDisconnect ? e.onDisconnect : this.onDisconnectCallback,
                    this.onDownCallback = "function" == typeof e.onDown ? e.onDown : this.onDownCallback,
                    this.onUpCallback = "function" == typeof e.onUp ? e.onUp : this.onUpCallback,
                    this.onAxisCallback = "function" == typeof e.onAxis ? e.onAxis : this.onAxisCallback,
                    this.onFloatCallback = "function" == typeof e.onFloat ? e.onFloat : this.onFloatCallback)
            },
            getButton: function(t) {
                return this._buttons[t] ? this._buttons[t] : null
            },
            pollStatus: function() {
                if (this.connected && this.game.input.enabled && this.game.input.gamepad.enabled && (!this._rawPad.timestamp || this._rawPad.timestamp !== this._prevTimestamp)) {
                    for (var t = 0; t < this._buttonsLen; t++) {
                        var e = isNaN(this._rawPad.buttons[t]) ? this._rawPad.buttons[t].value : this._rawPad.buttons[t];
                        e !== this._buttons[t].value && (1 === e ? this.processButtonDown(t, e) : 0 === e ? this.processButtonUp(t, e) : this.processButtonFloat(t, e))
                    }
                    for (var i = 0; i < this._axesLen; i++) {
                        var s = this._rawPad.axes[i];
                        s > 0 && s > this.deadZone || 0 > s && s < -this.deadZone ? this.processAxisChange(i, s) : this.processAxisChange(i, 0)
                    }
                    this._prevTimestamp = this._rawPad.timestamp
                }
            },
            connect: function(t) {
                var e = !this.connected;
                this.connected = !0,
                    this.index = t.index,
                    this._rawPad = t,
                    this._buttons = [],
                    this._buttonsLen = t.buttons.length,
                    this._axes = [],
                    this._axesLen = t.axes.length;
                for (var s = 0; s < this._axesLen; s++)
                    this._axes[s] = t.axes[s];
                for (var n in t.buttons)
                    n = parseInt(n, 10),
                        this._buttons[n] = new i.DeviceButton(this,n);
                e && this._padParent.onConnectCallback && this._padParent.onConnectCallback.call(this._padParent.callbackContext, this.index),
                e && this.onConnectCallback && this.onConnectCallback.call(this.callbackContext)
            },
            disconnect: function() {
                var t = this.connected
                    , e = this.index;
                this.connected = !1,
                    this.index = null,
                    this._rawPad = void 0;
                for (var i = 0; i < this._buttonsLen; i++)
                    this._buttons[i].destroy();
                this._buttons = [],
                    this._buttonsLen = 0,
                    this._axes = [],
                    this._axesLen = 0,
                t && this._padParent.onDisconnectCallback && this._padParent.onDisconnectCallback.call(this._padParent.callbackContext, e),
                t && this.onDisconnectCallback && this.onDisconnectCallback.call(this.callbackContext)
            },
            destroy: function() {
                this._rawPad = void 0;
                for (var t = 0; t < this._buttonsLen; t++)
                    this._buttons[t].destroy();
                this._buttons = [],
                    this._buttonsLen = 0,
                    this._axes = [],
                    this._axesLen = 0,
                    this.onConnectCallback = null,
                    this.onDisconnectCallback = null,
                    this.onDownCallback = null,
                    this.onUpCallback = null,
                    this.onAxisCallback = null,
                    this.onFloatCallback = null
            },
            processAxisChange: function(t, e) {
                this._axes[t] !== e && (this._axes[t] = e,
                this._padParent.onAxisCallback && this._padParent.onAxisCallback.call(this._padParent.callbackContext, this, t, e),
                this.onAxisCallback && this.onAxisCallback.call(this.callbackContext, this, t, e))
            },
            processButtonDown: function(t, e) {
                this._padParent.onDownCallback && this._padParent.onDownCallback.call(this._padParent.callbackContext, t, e, this.index),
                this.onDownCallback && this.onDownCallback.call(this.callbackContext, t, e),
                this._buttons[t] && this._buttons[t].start(null, e);
            },
            processButtonUp: function(t, e) {
                this._padParent.onUpCallback && this._padParent.onUpCallback.call(this._padParent.callbackContext, t, e, this.index),
                this.onUpCallback && this.onUpCallback.call(this.callbackContext, t, e),
                this._buttons[t] && this._buttons[t].stop(null, e)
            },
            processButtonFloat: function(t, e) {
                this._padParent.onFloatCallback && this._padParent.onFloatCallback.call(this._padParent.callbackContext, t, e, this.index),
                this.onFloatCallback && this.onFloatCallback.call(this.callbackContext, t, e),
                this._buttons[t] && this._buttons[t].padFloat(e)
            },
            axis: function(t) {
                return !!this._axes[t] && this._axes[t]
            },
            isDown: function(t) {
                return !!this._buttons[t] && this._buttons[t].isDown
            },
            isUp: function(t) {
                return !!this._buttons[t] && this._buttons[t].isUp
            },
            justReleased: function(t, e) {
                return this._buttons[t] ? this._buttons[t].justReleased(e) : void 0
            },
            justPressed: function(t, e) {
                return this._buttons[t] ? this._buttons[t].justPressed(e) : void 0
            },
            buttonValue: function(t) {
                return this._buttons[t] ? this._buttons[t].value : null
            },
            reset: function() {
                for (var t = 0; t < this._axes.length; t++)
                    this._axes[t] = 0
            }
        },
        i.SinglePad.prototype.constructor = i.SinglePad,
        i.Key = function(t, e) {
            this.game = t,
                this._enabled = !0,
                this.event = null,
                this.isDown = !1,
                this.isUp = !0,
                this.altKey = !1,
                this.ctrlKey = !1,
                this.shiftKey = !1,
                this.timeDown = 0,
                this.duration = 0,
                this.timeUp = -2500,
                this.repeats = 0,
                this.keyCode = e,
                this.onDown = new i.Signal,
                this.onHoldCallback = null,
                this.onHoldContext = null,
                this.onUp = new i.Signal,
                this._justDown = !1,
                this._justUp = !1
        }
        ,
        i.Key.prototype = {
            update: function() {
                this._enabled && this.isDown && (this.duration = this.game.time.time - this.timeDown,
                    this.repeats++,
                this.onHoldCallback && this.onHoldCallback.call(this.onHoldContext, this))
            },
            processKeyDown: function(t) {
                this._enabled && (this.event = t,
                this.isDown || (this.altKey = t.altKey,
                    this.ctrlKey = t.ctrlKey,
                    this.shiftKey = t.shiftKey,
                    this.isDown = !0,
                    this.isUp = !1,
                    this.timeDown = this.game.time.time,
                    this.duration = 0,
                    this.repeats = 0,
                    this._justDown = !0,
                    this.onDown.dispatch(this)))
            },
            processKeyUp: function(t) {
                this._enabled && (this.event = t,
                this.isUp || (this.isDown = !1,
                    this.isUp = !0,
                    this.timeUp = this.game.time.time,
                    this.duration = this.game.time.time - this.timeDown,
                    this._justUp = !0,
                    this.onUp.dispatch(this)))
            },
            reset: function(t) {
                void 0 === t && (t = !0),
                    this.isDown = !1,
                    this.isUp = !0,
                    this.timeUp = this.game.time.time,
                    this.duration = 0,
                    this._enabled = !0,
                    this._justDown = !1,
                    this._justUp = !1,
                t && (this.onDown.removeAll(),
                    this.onUp.removeAll(),
                    this.onHoldCallback = null,
                    this.onHoldContext = null)
            },
            downDuration: function(t) {
                return void 0 === t && (t = 50),
                this.isDown && this.duration < t
            },
            upDuration: function(t) {
                return void 0 === t && (t = 50),
                !this.isDown && this.game.time.time - this.timeUp < t
            }
        },
        Object.defineProperty(i.Key.prototype, "justDown", {
            get: function() {
                var t = this._justDown;
                return this._justDown = !1,
                    t
            }
        }),
        Object.defineProperty(i.Key.prototype, "justUp", {
            get: function() {
                var t = this._justUp;
                return this._justUp = !1,
                    t
            }
        }),
        Object.defineProperty(i.Key.prototype, "enabled", {
            get: function() {
                return this._enabled
            },
            set: function(t) {
                t = !!t,
                t !== this._enabled && (t || this.reset(!1),
                    this._enabled = t)
            }
        }),
        i.Key.prototype.constructor = i.Key,
        i.Keyboard = function(t) {
            this.game = t,
                this.enabled = !0,
                this.event = null,
                this.pressEvent = null,
                this.callbackContext = this,
                this.onDownCallback = null,
                this.onPressCallback = null,
                this.onUpCallback = null,
                this._keys = [],
                this._capture = [],
                this._onKeyDown = null,
                this._onKeyPress = null,
                this._onKeyUp = null,
                this._i = 0,
                this._k = 0
        }
        ,
        i.Keyboard.prototype = {
            addCallbacks: function(t, e, i, s) {
                this.callbackContext = t,
                void 0 !== e && null !== e && (this.onDownCallback = e),
                void 0 !== i && null !== i && (this.onUpCallback = i),
                void 0 !== s && null !== s && (this.onPressCallback = s)
            },
            addKey: function(t) {
                return this._keys[t] || (this._keys[t] = new i.Key(this.game,t),
                    this.addKeyCapture(t)),
                    this._keys[t]
            },
            addKeys: function(t) {
                var e = {};
                for (var i in t)
                    e[i] = this.addKey(t[i]);
                return e
            },
            removeKey: function(t) {
                this._keys[t] && (this._keys[t] = null,
                    this.removeKeyCapture(t))
            },
            createCursorKeys: function() {
                return this.addKeys({
                    up: i.KeyCode.UP,
                    down: i.KeyCode.DOWN,
                    left: i.KeyCode.LEFT,
                    right: i.KeyCode.RIGHT
                })
            },
            start: function() {
                if (!this.game.device.cocoonJS && null === this._onKeyDown) {
                    var t = this;
                    this._onKeyDown = function(e) {
                        return t.processKeyDown(e)
                    }
                        ,
                        this._onKeyUp = function(e) {
                            return t.processKeyUp(e)
                        }
                        ,
                        this._onKeyPress = function(e) {
                            return t.processKeyPress(e)
                        }
                        ,
                        window.addEventListener("keydown", this._onKeyDown, !1),
                        window.addEventListener("keyup", this._onKeyUp, !1),
                        window.addEventListener("keypress", this._onKeyPress, !1)
                }
            },
            stop: function() {
                window.removeEventListener("keydown", this._onKeyDown),
                    window.removeEventListener("keyup", this._onKeyUp),
                    window.removeEventListener("keypress", this._onKeyPress),
                    this._onKeyDown = null,
                    this._onKeyUp = null,
                    this._onKeyPress = null
            },
            destroy: function() {
                this.stop(),
                    this.clearCaptures(),
                    this._keys.length = 0,
                    this._i = 0
            },
            addKeyCapture: function(t) {
                if ("object" == typeof t)
                    for (var e in t)
                        this._capture[t[e]] = !0;
                else
                    this._capture[t] = !0
            },
            removeKeyCapture: function(t) {
                delete this._capture[t]
            },
            clearCaptures: function() {
                this._capture = {}
            },
            update: function() {
                for (this._i = this._keys.length; this._i--; )
                    this._keys[this._i] && this._keys[this._i].update()
            },
            processKeyDown: function(t) {
                this.event = t,
                this.game.input.enabled && this.enabled && (this._capture[t.keyCode] && t.preventDefault(),
                this._keys[t.keyCode] || (this._keys[t.keyCode] = new i.Key(this.game,t.keyCode)),
                    this._keys[t.keyCode].processKeyDown(t),
                    this._k = t.keyCode,
                this.onDownCallback && this.onDownCallback.call(this.callbackContext, t))
            },
            processKeyPress: function(t) {
                this.pressEvent = t,
                this.game.input.enabled && this.enabled && this.onPressCallback && this.onPressCallback.call(this.callbackContext, String.fromCharCode(t.charCode), t)
            },
            processKeyUp: function(t) {
                this.event = t,
                this.game.input.enabled && this.enabled && (this._capture[t.keyCode] && t.preventDefault(),
                this._keys[t.keyCode] || (this._keys[t.keyCode] = new i.Key(this.game,t.keyCode)),
                    this._keys[t.keyCode].processKeyUp(t),
                this.onUpCallback && this.onUpCallback.call(this.callbackContext, t))
            },
            reset: function(t) {
                void 0 === t && (t = !0),
                    this.event = null;
                for (var e = this._keys.length; e--; )
                    this._keys[e] && this._keys[e].reset(t)
            },
            downDuration: function(t, e) {
                return this._keys[t] ? this._keys[t].downDuration(e) : null
            },
            upDuration: function(t, e) {
                return this._keys[t] ? this._keys[t].upDuration(e) : null
            },
            isDown: function(t) {
                return this._keys[t] ? this._keys[t].isDown : null
            }
        },
        Object.defineProperty(i.Keyboard.prototype, "lastChar", {
            get: function() {
                return 32 === this.event.charCode ? "" : String.fromCharCode(this.pressEvent.charCode)
            }
        }),
        Object.defineProperty(i.Keyboard.prototype, "lastKey", {
            get: function() {
                return this._keys[this._k]
            }
        }),
        i.Keyboard.prototype.constructor = i.Keyboard,
        i.KeyCode = {
            A: "A".charCodeAt(0),
            B: "B".charCodeAt(0),
            C: "C".charCodeAt(0),
            D: "D".charCodeAt(0),
            E: "E".charCodeAt(0),
            F: "F".charCodeAt(0),
            G: "G".charCodeAt(0),
            H: "H".charCodeAt(0),
            I: "I".charCodeAt(0),
            J: "J".charCodeAt(0),
            K: "K".charCodeAt(0),
            L: "L".charCodeAt(0),
            M: "M".charCodeAt(0),
            N: "N".charCodeAt(0),
            O: "O".charCodeAt(0),
            P: "P".charCodeAt(0),
            Q: "Q".charCodeAt(0),
            R: "R".charCodeAt(0),
            S: "S".charCodeAt(0),
            T: "T".charCodeAt(0),
            U: "U".charCodeAt(0),
            V: "V".charCodeAt(0),
            W: "W".charCodeAt(0),
            X: "X".charCodeAt(0),
            Y: "Y".charCodeAt(0),
            Z: "Z".charCodeAt(0),
            ZERO: "0".charCodeAt(0),
            ONE: "1".charCodeAt(0),
            TWO: "2".charCodeAt(0),
            THREE: "3".charCodeAt(0),
            FOUR: "4".charCodeAt(0),
            FIVE: "5".charCodeAt(0),
            SIX: "6".charCodeAt(0),
            SEVEN: "7".charCodeAt(0),
            EIGHT: "8".charCodeAt(0),
            NINE: "9".charCodeAt(0),
            NUMPAD_0: 96,
            NUMPAD_1: 97,
            NUMPAD_2: 98,
            NUMPAD_3: 99,
            NUMPAD_4: 100,
            NUMPAD_5: 101,
            NUMPAD_6: 102,
            NUMPAD_7: 103,
            NUMPAD_8: 104,
            NUMPAD_9: 105,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_ADD: 107,
            NUMPAD_ENTER: 108,
            NUMPAD_SUBTRACT: 109,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            F1: 112,
            F2: 113,
            F3: 114,
            F4: 115,
            F5: 116,
            F6: 117,
            F7: 118,
            F8: 119,
            F9: 120,
            F10: 121,
            F11: 122,
            F12: 123,
            F13: 124,
            F14: 125,
            F15: 126,
            COLON: 186,
            EQUALS: 187,
            COMMA: 188,
            UNDERSCORE: 189,
            PERIOD: 190,
            QUESTION_MARK: 191,
            TILDE: 192,
            OPEN_BRACKET: 219,
            BACKWARD_SLASH: 220,
            CLOSED_BRACKET: 221,
            QUOTES: 222,
            BACKSPACE: 8,
            TAB: 9,
            CLEAR: 12,
            ENTER: 13,
            SHIFT: 16,
            CONTROL: 17,
            ALT: 18,
            CAPS_LOCK: 20,
            ESC: 27,
            SPACEBAR: 32,
            PAGE_UP: 33,
            PAGE_DOWN: 34,
            END: 35,
            HOME: 36,
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40,
            PLUS: 43,
            MINUS: 44,
            INSERT: 45,
            DELETE: 46,
            HELP: 47,
            NUM_LOCK: 144
        };
        for (var n in i.KeyCode)
            i.KeyCode.hasOwnProperty(n) && !n.match(/[a-z]/) && (i.Keyboard[n] = i.KeyCode[n]);
        i.Component = function() {}
            ,
            i.Component.Angle = function() {}
            ,
            i.Component.Angle.prototype = {
                angle: {
                    get: function() {
                        return i.Math.wrapAngle(i.Math.radToDeg(this.rotation))
                    },
                    set: function(t) {
                        this.rotation = i.Math.degToRad(i.Math.wrapAngle(t))
                    }
                }
            },
            i.Component.Animation = function() {}
            ,
            i.Component.Animation.prototype = {
                play: function(t, e, i, s) {
                    return this.animations ? this.animations.play(t, e, i, s) : void 0
                }
            },
            i.Component.AutoCull = function() {}
            ,
            i.Component.AutoCull.prototype = {
                autoCull: !1,
                inCamera: {
                    get: function() {
                        return this.autoCull || this.checkWorldBounds || (this._bounds.copyFrom(this.getBounds()),
                            this._bounds.x += this.game.camera.view.x,
                            this._bounds.y += this.game.camera.view.y),
                            this.game.world.camera.view.intersects(this._bounds)
                    }
                }
            },
            i.Component.Bounds = function() {}
            ,
            i.Component.Bounds.prototype = {
                offsetX: {
                    get: function() {
                        return this.anchor.x * this.width
                    }
                },
                offsetY: {
                    get: function() {
                        return this.anchor.y * this.height
                    }
                },
                left: {
                    get: function() {
                        return this.x - this.offsetX
                    }
                },
                right: {
                    get: function() {
                        return this.x + this.width - this.offsetX
                    }
                },
                top: {
                    get: function() {
                        return this.y - this.offsetY
                    }
                },
                bottom: {
                    get: function() {
                        return this.y + this.height - this.offsetY
                    }
                }
            },
            i.Component.BringToTop = function() {}
            ,
            i.Component.BringToTop.prototype.bringToTop = function() {
                return this.parent && this.parent.bringToTop(this),
                    this
            }
            ,
            i.Component.BringToTop.prototype.sendToBack = function() {
                return this.parent && this.parent.sendToBack(this),
                    this
            }
            ,
            i.Component.BringToTop.prototype.moveUp = function() {
                return this.parent && this.parent.moveUp(this),
                    this
            }
            ,
            i.Component.BringToTop.prototype.moveDown = function() {
                return this.parent && this.parent.moveDown(this),
                    this
            }
            ,
            i.Component.Core = function() {}
            ,
            i.Component.Core.install = function(t) {
                i.Utils.mixinPrototype(this, i.Component.Core.prototype),
                    this.components = {};
                for (var e = 0; e < t.length; e++) {
                    var s = t[e]
                        , n = !1;
                    "Destroy" === s && (n = !0),
                        i.Utils.mixinPrototype(this, i.Component[s].prototype, n),
                        this.components[s] = !0
                }
            }
            ,
            i.Component.Core.init = function(t, e, s, n, r) {
                this.game = t,
                    this.key = n,
                    this.position.set(e, s),
                    this.world = new i.Point(e,s),
                    this.previousPosition = new i.Point(e,s),
                    this.events = new i.Events(this),
                    this._bounds = new i.Rectangle,
                this.components.PhysicsBody && (this.body = this.body),
                this.components.Animation && (this.animations = new i.AnimationManager(this)),
                this.components.LoadTexture && null !== n && this.loadTexture(n, r),
                this.components.FixedToCamera && (this.cameraOffset = new i.Point(e,s))
            }
            ,
            i.Component.Core.preUpdate = function() {
                if (this.pendingDestroy)
                    return void this.destroy();
                if (this.previousPosition.set(this.world.x, this.world.y),
                    this.previousRotation = this.rotation,
                !this.exists || !this.parent.exists)
                    return this.renderOrderID = -1,
                        !1;
                this.world.setTo(this.game.camera.x + this.worldTransform.tx, this.game.camera.y + this.worldTransform.ty),
                this.visible && (this.renderOrderID = this.game.stage.currentRenderOrderID++),
                this.texture && (this.texture.requiresReTint = !1),
                this.animations && this.animations.update(),
                this.body && this.body.preUpdate();
                for (var t = 0; t < this.children.length; t++)
                    this.children[t].preUpdate();
                return !0
            }
            ,
            i.Component.Core.prototype = {
                game: null,
                name: "",
                components: {},
                z: 0,
                events: void 0,
                animations: void 0,
                key: "",
                world: null,
                debug: !1,
                previousPosition: null,
                previousRotation: 0,
                renderOrderID: 0,
                fresh: !0,
                pendingDestroy: !1,
                _bounds: null,
                _exists: !0,
                exists: {
                    get: function() {
                        return this._exists
                    },
                    set: function(t) {
                        t ? (this._exists = !0,
                        this.body && this.body.type === i.Physics.P2JS && this.body.addToWorld(),
                            this.visible = !0) : (this._exists = !1,
                        this.body && this.body.type === i.Physics.P2JS && this.body.removeFromWorld(),
                            this.visible = !1)
                    }
                },
                update: function() {},
                postUpdate: function() {
                    this.customRender && this.key.render(),
                    this.components.PhysicsBody && i.Component.PhysicsBody.postUpdate.call(this),
                    this.components.FixedToCamera && i.Component.FixedToCamera.postUpdate.call(this);
                    for (var t = 0; t < this.children.length; t++)
                        this.children[t].postUpdate()
                }
            },
            i.Component.Crop = function() {}
            ,
            i.Component.Crop.prototype = {
                cropRect: null,
                _crop: null,
                crop: function(t, e) {
                    void 0 === e && (e = !1),
                        t ? (e && null !== this.cropRect ? this.cropRect.setTo(t.x, t.y, t.width, t.height) : e && null === this.cropRect ? this.cropRect = new i.Rectangle(t.x,t.y,t.width,t.height) : this.cropRect = t,
                            this.updateCrop()) : (this._crop = null,
                            this.cropRect = null,
                            this.resetFrame())
                },
                updateCrop: function() {
                    if (this.cropRect) {
                        this._crop = i.Rectangle.clone(this.cropRect, this._crop),
                            this._crop.x += this._frame.x,
                            this._crop.y += this._frame.y;
                        var t = Math.max(this._frame.x, this._crop.x)
                            , e = Math.max(this._frame.y, this._crop.y)
                            , s = Math.min(this._frame.right, this._crop.right) - t
                            , n = Math.min(this._frame.bottom, this._crop.bottom) - e;
                        this.texture.crop.x = t,
                            this.texture.crop.y = e,
                            this.texture.crop.width = s,
                            this.texture.crop.height = n,
                            this.texture.frame.width = Math.min(s, this.cropRect.width),
                            this.texture.frame.height = Math.min(n, this.cropRect.height),
                            this.texture.width = this.texture.frame.width,
                            this.texture.height = this.texture.frame.height,
                            this.texture._updateUvs()
                    }
                }
            },
            i.Component.Delta = function() {}
            ,
            i.Component.Delta.prototype = {
                deltaX: {
                    get: function() {
                        return this.world.x - this.previousPosition.x
                    }
                },
                deltaY: {
                    get: function() {
                        return this.world.y - this.previousPosition.y
                    }
                },
                deltaZ: {
                    get: function() {
                        return this.rotation - this.previousRotation
                    }
                }
            },
            i.Component.Destroy = function() {}
            ,
            i.Component.Destroy.prototype = {
                destroyPhase: !1,
                destroy: function(t) {
                    if (null !== this.game && !this.destroyPhase) {
                        void 0 === t && (t = !0),
                            this.destroyPhase = !0,
                        this.events && this.events.onDestroy$dispatch(this),
                        this.parent && (this.parent instanceof i.Group ? this.parent.remove(this) : this.parent.removeChild(this)),
                        this.input && this.input.destroy(),
                        this.animations && this.animations.destroy(),
                        this.body && this.body.destroy(),
                        this.events && this.events.destroy();
                        var e = this.children.length;
                        if (t)
                            for (; e--; )
                                this.children[e].destroy(t);
                        else
                            for (; e--; )
                                this.removeChild(this.children[e]);
                        this._crop && (this._crop = null),
                        this._frame && (this._frame = null),
                        i.Video && this.key instanceof i.Video && this.key.onChangeSource.remove(this.resizeFrame, this),
                        i.BitmapText && this._glyphs && (this._glyphs = []),
                            this.alive = !1,
                            this.exists = !1,
                            this.visible = !1,
                            this.filters = null,
                            this.mask = null,
                            this.game = null,
                            this.renderable = !1,
                        this.transformCallback && (this.transformCallback = null,
                            this.transformCallbackContext = null),
                            this.hitArea = null,
                            this.parent = null,
                            this.stage = null,
                            this.worldTransform = null,
                            this.filterArea = null,
                            this._bounds = null,
                            this._currentBounds = null,
                            this._mask = null,
                            this._destroyCachedSprite(),
                            this.destroyPhase = !1,
                            this.pendingDestroy = !1
                    }
                }
            },
            i.Events = function(t) {
                this.parent = t
            }
            ,
            i.Events.prototype = {
                destroy: function() {
                    this._parent = null,
                    this._onDestroy && this._onDestroy.dispose(),
                    this._onAddedToGroup && this._onAddedToGroup.dispose(),
                    this._onRemovedFromGroup && this._onRemovedFromGroup.dispose(),
                    this._onRemovedFromWorld && this._onRemovedFromWorld.dispose(),
                    this._onKilled && this._onKilled.dispose(),
                    this._onRevived && this._onRevived.dispose(),
                    this._onEnterBounds && this._onEnterBounds.dispose(),
                    this._onOutOfBounds && this._onOutOfBounds.dispose(),
                    this._onInputOver && this._onInputOver.dispose(),
                    this._onInputOut && this._onInputOut.dispose(),
                    this._onInputDown && this._onInputDown.dispose(),
                    this._onInputUp && this._onInputUp.dispose(),
                    this._onDragStart && this._onDragStart.dispose(),
                    this._onDragUpdate && this._onDragUpdate.dispose(),
                    this._onDragStop && this._onDragStop.dispose(),
                    this._onAnimationStart && this._onAnimationStart.dispose(),
                    this._onAnimationComplete && this._onAnimationComplete.dispose(),
                    this._onAnimationLoop && this._onAnimationLoop.dispose()
                },
                onAddedToGroup: null,
                onRemovedFromGroup: null,
                onRemovedFromWorld: null,
                onDestroy: null,
                onKilled: null,
                onRevived: null,
                onOutOfBounds: null,
                onEnterBounds: null,
                onInputOver: null,
                onInputOut: null,
                onInputDown: null,
                onInputUp: null,
                onDragStart: null,
                onDragUpdate: null,
                onDragStop: null,
                onAnimationStart: null,
                onAnimationComplete: null,
                onAnimationLoop: null
            },
            i.Events.prototype.constructor = i.Events;
        for (var r in i.Events.prototype)
            i.Events.prototype.hasOwnProperty(r) && 0 === r.indexOf("on") && null === i.Events.prototype[r] && !function(t, e) {
                "use strict";
                Object.defineProperty(i.Events.prototype, t, {
                    get: function() {
                        return this[e] || (this[e] = new i.Signal)
                    }
                }),
                    i.Events.prototype[t + "$dispatch"] = function() {
                        return this[e] ? this[e].dispatch.apply(this[e], arguments) : null
                    }
            }(r, "_" + r);
        i.Component.FixedToCamera = function() {}
            ,
            i.Component.FixedToCamera.postUpdate = function() {
                this.fixedToCamera && (this.position.x = (this.game.camera.view.x + this.cameraOffset.x) / this.game.camera.scale.x,
                    this.position.y = (this.game.camera.view.y + this.cameraOffset.y) / this.game.camera.scale.y)
            }
            ,
            i.Component.FixedToCamera.prototype = {
                _fixedToCamera: !1,
                fixedToCamera: {
                    get: function() {
                        return this._fixedToCamera
                    },
                    set: function(t) {
                        t ? (this._fixedToCamera = !0,
                            this.cameraOffset.set(this.x, this.y)) : this._fixedToCamera = !1
                    }
                },
                cameraOffset: new i.Point
            },
            i.Component.Health = function() {}
            ,
            i.Component.Health.prototype = {
                health: 1,
                maxHealth: 100,
                damage: function(t) {
                    return this.alive && (this.health -= t,
                    this.health <= 0 && this.kill()),
                        this
                },
                heal: function(t) {
                    return this.alive && (this.health += t,
                    this.health > this.maxHealth && (this.health = this.maxHealth)),
                        this
                }
            },
            i.Component.InCamera = function() {}
            ,
            i.Component.InCamera.prototype = {
                inCamera: {
                    get: function() {
                        return this.game.world.camera.view.intersects(this._bounds)
                    }
                }
            },
            i.Component.InputEnabled = function() {}
            ,
            i.Component.InputEnabled.prototype = {
                input: null,
                inputEnabled: {
                    get: function() {
                        return this.input && this.input.enabled
                    },
                    set: function(t) {
                        t ? null === this.input ? (this.input = new i.InputHandler(this),
                            this.input.start()) : this.input && !this.input.enabled && this.input.start() : this.input && this.input.enabled && this.input.stop()
                    }
                }
            },
            i.Component.InWorld = function() {}
            ,
            i.Component.InWorld.preUpdate = function() {
                if ((this.autoCull || this.checkWorldBounds) && (this._bounds.copyFrom(this.getBounds()),
                    this._bounds.x += this.game.camera.view.x,
                    this._bounds.y += this.game.camera.view.y,
                this.autoCull && (this.game.world.camera.view.intersects(this._bounds) ? (this.renderable = !0,
                    this.game.world.camera.totalInView++) : this.renderable = !1),
                    this.checkWorldBounds))
                    if (this._outOfBoundsFired && this.game.world.bounds.intersects(this._bounds))
                        this._outOfBoundsFired = !1,
                            this.events.onEnterBounds$dispatch(this);
                    else if (!this._outOfBoundsFired && !this.game.world.bounds.intersects(this._bounds) && (this._outOfBoundsFired = !0,
                        this.events.onOutOfBounds$dispatch(this),
                        this.outOfBoundsKill))
                        return this.kill(),
                            !1;
                return !0
            }
            ,
            i.Component.InWorld.prototype = {
                checkWorldBounds: !1,
                outOfBoundsKill: !1,
                _outOfBoundsFired: !1,
                inWorld: {
                    get: function() {
                        return this.game.world.bounds.intersects(this.getBounds())
                    }
                }
            },
            i.Component.LifeSpan = function() {}
            ,
            i.Component.LifeSpan.preUpdate = function() {
                return !(this.lifespan > 0 && (this.lifespan -= this.game.time.physicsElapsedMS,
                this.lifespan <= 0)) || (this.kill(),
                    !1)
            }
            ,
            i.Component.LifeSpan.prototype = {
                alive: !0,
                lifespan: 0,
                revive: function(t) {
                    return void 0 === t && (t = 1),
                        this.alive = !0,
                        this.exists = !0,
                        this.visible = !0,
                    "function" == typeof this.heal && this.heal(t),
                    this.events && this.events.onRevived$dispatch(this),
                        this
                },
                kill: function() {
                    return this.alive = !1,
                        this.exists = !1,
                        this.visible = !1,
                    this.events && this.events.onKilled$dispatch(this),
                        this
                }
            },
            i.Component.LoadTexture = function() {}
            ,
            i.Component.LoadTexture.prototype = {
                customRender: !1,
                _frame: null,
                loadTexture: function(t, e, s) {
                    e = e || 0,
                    (s || void 0 === s) && this.animations && this.animations.stop(),
                        this.key = t,
                        this.customRender = !1;
                    var n = this.game.cache
                        , r = !0
                        , o = !this.texture.baseTexture.scaleMode;
                    if (i.RenderTexture && t instanceof i.RenderTexture)
                        this.key = t.key,
                            this.setTexture(t);
                    else if (i.BitmapData && t instanceof i.BitmapData)
                        this.customRender = !0,
                            this.setTexture(t.texture),
                        n.hasFrameData(t.key, i.Cache.BITMAPDATA) && (r = !this.animations.loadFrameData(n.getFrameData(t.key, i.Cache.BITMAPDATA), e));
                    else if (i.Video && t instanceof i.Video) {
                        this.customRender = !0;
                        var a = t.texture.valid;
                        this.setTexture(t.texture),
                            this.setFrame(t.texture.frame.clone()),
                            t.onChangeSource.add(this.resizeFrame, this),
                            this.texture.valid = a
                    } else if (t instanceof PIXI.Texture)
                        this.setTexture(t);
                    else {
                        var h = n.getImage(t, !0);
                        this.key = h.key,
                            this.setTexture(new PIXI.Texture(h.base)),
                            r = !this.animations.loadFrameData(h.frameData, e)
                    }
                    r && (this._frame = i.Rectangle.clone(this.texture.frame)),
                    o || (this.texture.baseTexture.scaleMode = 1)
                },
                setFrame: function(t) {
                    this._frame = t,
                        this.texture.frame.x = t.x,
                        this.texture.frame.y = t.y,
                        this.texture.frame.width = t.width,
                        this.texture.frame.height = t.height,
                        this.texture.crop.x = t.x,
                        this.texture.crop.y = t.y,
                        this.texture.crop.width = t.width,
                        this.texture.crop.height = t.height,
                        t.trimmed ? (this.texture.trim ? (this.texture.trim.x = t.spriteSourceSizeX,
                            this.texture.trim.y = t.spriteSourceSizeY,
                            this.texture.trim.width = t.sourceSizeW,
                            this.texture.trim.height = t.sourceSizeH) : this.texture.trim = {
                            x: t.spriteSourceSizeX,
                            y: t.spriteSourceSizeY,
                            width: t.sourceSizeW,
                            height: t.sourceSizeH
                        },
                            this.texture.width = t.sourceSizeW,
                            this.texture.height = t.sourceSizeH,
                            this.texture.frame.width = t.sourceSizeW,
                            this.texture.frame.height = t.sourceSizeH) : !t.trimmed && this.texture.trim && (this.texture.trim = null),
                    this.cropRect && this.updateCrop(),
                        this.texture.requiresReTint = !0,
                        this.texture._updateUvs(),
                    this.tilingTexture && (this.refreshTexture = !0)
                },
                resizeFrame: function(t, e, i) {
                    this.texture.frame.resize(e, i),
                        this.texture.setFrame(this.texture.frame)
                },
                resetFrame: function() {
                    this._frame && this.setFrame(this._frame)
                },
                frame: {
                    get: function() {
                        return this.animations.frame
                    },
                    set: function(t) {
                        this.animations.frame = t
                    }
                },
                frameName: {
                    get: function() {
                        return this.animations.frameName
                    },
                    set: function(t) {
                        this.animations.frameName = t
                    }
                }
            },
            i.Component.Overlap = function() {}
            ,
            i.Component.Overlap.prototype = {
                overlap: function(t) {
                    return i.Rectangle.intersects(this.getBounds(), t.getBounds())
                }
            },
            i.Component.PhysicsBody = function() {}
            ,
            i.Component.PhysicsBody.preUpdate = function() {
                return this.fresh && this.exists ? (this.world.setTo(this.parent.position.x + this.position.x, this.parent.position.y + this.position.y),
                    this.worldTransform.tx = this.world.x,
                    this.worldTransform.ty = this.world.y,
                    this.previousPosition.set(this.world.x, this.world.y),
                    this.previousRotation = this.rotation,
                this.body && this.body.preUpdate(),
                    this.fresh = !1,
                    !1) : (this.previousPosition.set(this.world.x, this.world.y),
                    this.previousRotation = this.rotation,
                !(!this._exists || !this.parent.exists) || (this.renderOrderID = -1,
                    !1))
            }
            ,
            i.Component.PhysicsBody.postUpdate = function() {
                this.exists && this.body && this.body.postUpdate()
            }
            ,
            i.Component.PhysicsBody.prototype = {
                body: null,
                x: {
                    get: function() {
                        return this.position.x
                    },
                    set: function(t) {
                        this.position.x = t,
                        this.body && !this.body.dirty && (this.body._reset = !0)
                    }
                },
                y: {
                    get: function() {
                        return this.position.y
                    },
                    set: function(t) {
                        this.position.y = t,
                        this.body && !this.body.dirty && (this.body._reset = !0)
                    }
                }
            },
            i.Component.Reset = function() {}
            ,
            i.Component.Reset.prototype.reset = function(t, e, i) {
                return void 0 === i && (i = 1),
                    this.world.set(t, e),
                    this.position.set(t, e),
                    this.fresh = !0,
                    this.exists = !0,
                    this.visible = !0,
                    this.renderable = !0,
                this.components.InWorld && (this._outOfBoundsFired = !1),
                this.components.LifeSpan && (this.alive = !0,
                    this.health = i),
                this.components.PhysicsBody && this.body && this.body.reset(t, e, !1, !1),
                    this
            }
            ,
            i.Component.ScaleMinMax = function() {}
            ,
            i.Component.ScaleMinMax.prototype = {
                transformCallback: null,
                transformCallbackContext: this,
                scaleMin: null,
                scaleMax: null,
                checkTransform: function(t) {
                    this.scaleMin && (t.a < this.scaleMin.x && (t.a = this.scaleMin.x),
                    t.d < this.scaleMin.y && (t.d = this.scaleMin.y)),
                    this.scaleMax && (t.a > this.scaleMax.x && (t.a = this.scaleMax.x),
                    t.d > this.scaleMax.y && (t.d = this.scaleMax.y))
                },
                setScaleMinMax: function(t, e, s, n) {
                    void 0 === e ? e = s = n = t : void 0 === s && (s = n = e,
                        e = t),
                        null === t ? this.scaleMin = null : this.scaleMin ? this.scaleMin.set(t, e) : this.scaleMin = new i.Point(t,e),
                        null === s ? this.scaleMax = null : this.scaleMax ? this.scaleMax.set(s, n) : this.scaleMax = new i.Point(s,n),
                        null === this.scaleMin ? this.transformCallback = null : (this.transformCallback = this.checkTransform,
                            this.transformCallbackContext = this)
                }
            },
            i.Component.Smoothed = function() {}
            ,
            i.Component.Smoothed.prototype = {
                smoothed: {
                    get: function() {
                        return !this.texture.baseTexture.scaleMode
                    },
                    set: function(t) {
                        t ? this.texture && (this.texture.baseTexture.scaleMode = 0) : this.texture && (this.texture.baseTexture.scaleMode = 1)
                    }
                }
            },
            i.GameObjectFactory = function(t) {
                this.game = t,
                    this.world = this.game.world
            }
            ,
            i.GameObjectFactory.prototype = {
                existing: function(t) {
                    return this.world.add(t)
                },
                image: function(t, e, s, n, r) {
                    return void 0 === r && (r = this.world),
                        r.add(new i.Image(this.game,t,e,s,n))
                },
                sprite: function(t, e, i, s, n) {
                    return void 0 === n && (n = this.world),
                        n.create(t, e, i, s)
                },
                creature: function(t, e, s, n, r) {
                    void 0 === r && (r = this.world);
                    var o = new i.Creature(this.game,t,e,s,n);
                    return r.add(o),
                        o
                },
                tween: function(t) {
                    return this.game.tweens.create(t)
                },
                group: function(t, e, s, n, r) {
                    return new i.Group(this.game,t,e,s,n,r)
                },
                physicsGroup: function(t, e, s, n) {
                    return new i.Group(this.game,e,s,n,(!0),t)
                },
                spriteBatch: function(t, e, s) {
                    return void 0 === t && (t = null),
                    void 0 === e && (e = "group"),
                    void 0 === s && (s = !1),
                        new i.SpriteBatch(this.game,t,e,s)
                },
                audio: function(t, e, i, s) {
                    return this.game.sound.add(t, e, i, s)
                },
                sound: function(t, e, i, s) {
                    return this.game.sound.add(t, e, i, s)
                },
                audioSprite: function(t) {
                    return this.game.sound.addSprite(t)
                },
                tileSprite: function(t, e, s, n, r, o, a) {
                    return void 0 === a && (a = this.world),
                        a.add(new i.TileSprite(this.game,t,e,s,n,r,o))
                },
                rope: function(t, e, s, n, r, o) {
                    return void 0 === o && (o = this.world),
                        o.add(new i.Rope(this.game,t,e,s,n,r))
                },
                text: function(t, e, s, n, r) {
                    return void 0 === r && (r = this.world),
                        r.add(new i.Text(this.game,t,e,s,n))
                },
                button: function(t, e, s, n, r, o, a, h, l, u) {
                    return void 0 === u && (u = this.world),
                        u.add(new i.Button(this.game,t,e,s,n,r,o,a,h,l))
                },
                graphics: function(t, e, s) {
                    return void 0 === s && (s = this.world),
                        s.add(new i.Graphics(this.game,t,e))
                },
                emitter: function(t, e, s) {
                    return this.game.particles.add(new i.Particles.Arcade.Emitter(this.game,t,e,s))
                },
                retroFont: function(t, e, s, n, r, o, a, h, l) {
                    return new i.RetroFont(this.game,t,e,s,n,r,o,a,h,l)
                },
                bitmapText: function(t, e, s, n, r, o) {
                    return void 0 === o && (o = this.world),
                        o.add(new i.BitmapText(this.game,t,e,s,n,r))
                },
                tilemap: function(t, e, s, n, r) {
                    return new i.Tilemap(this.game,t,e,s,n,r)
                },
                renderTexture: function(t, e, s, n) {
                    (void 0 === s || "" === s) && (s = this.game.rnd.uuid()),
                    void 0 === n && (n = !1);
                    var r = new i.RenderTexture(this.game,t,e,s);
                    return n && this.game.cache.addRenderTexture(s, r),
                        r
                },
                video: function(t, e) {
                    return new i.Video(this.game,t,e)
                },
                bitmapData: function(t, e, s, n) {
                    void 0 === n && (n = !1),
                    (void 0 === s || "" === s) && (s = this.game.rnd.uuid());
                    var r = new i.BitmapData(this.game,s,t,e);
                    return n && this.game.cache.addBitmapData(s, r),
                        r
                },
                filter: function(t) {
                    var e = Array.prototype.slice.call(arguments, 1)
                        , t = new i.Filter[t](this.game);
                    return t.init.apply(t, e),
                        t
                },
                plugin: function(t) {
                    return this.game.plugins.add(t)
                }
            },
            i.GameObjectFactory.prototype.constructor = i.GameObjectFactory,
            i.GameObjectCreator = function(t) {
                this.game = t,
                    this.world = this.game.world
            }
            ,
            i.GameObjectCreator.prototype = {
                image: function(t, e, s, n) {
                    return new i.Image(this.game,t,e,s,n)
                },
                sprite: function(t, e, s, n) {
                    return new i.Sprite(this.game,t,e,s,n)
                },
                tween: function(t) {
                    return new i.Tween(t,this.game,this.game.tweens)
                },
                group: function(t, e, s, n, r) {
                    return new i.Group(this.game,t,e,s,n,r)
                },
                spriteBatch: function(t, e, s) {
                    return void 0 === e && (e = "group"),
                    void 0 === s && (s = !1),
                        new i.SpriteBatch(this.game,t,e,s)
                },
                audio: function(t, e, i, s) {
                    return this.game.sound.add(t, e, i, s)
                },
                audioSprite: function(t) {
                    return this.game.sound.addSprite(t)
                },
                sound: function(t, e, i, s) {
                    return this.game.sound.add(t, e, i, s)
                },
                tileSprite: function(t, e, s, n, r, o) {
                    return new i.TileSprite(this.game,t,e,s,n,r,o)
                },
                rope: function(t, e, s, n, r) {
                    return new i.Rope(this.game,t,e,s,n,r)
                },
                text: function(t, e, s, n) {
                    return new i.Text(this.game,t,e,s,n)
                },
                button: function(t, e, s, n, r, o, a, h, l) {
                    return new i.Button(this.game,t,e,s,n,r,o,a,h,l)
                },
                graphics: function(t, e) {
                    return new i.Graphics(this.game,t,e)
                },
                emitter: function(t, e, s) {
                    return new i.Particles.Arcade.Emitter(this.game,t,e,s)
                },
                retroFont: function(t, e, s, n, r, o, a, h, l) {
                    return new i.RetroFont(this.game,t,e,s,n,r,o,a,h,l)
                },
                bitmapText: function(t, e, s, n, r, o) {
                    return new i.BitmapText(this.game,t,e,s,n,r,o)
                },
                tilemap: function(t, e, s, n, r) {
                    return new i.Tilemap(this.game,t,e,s,n,r)
                },
                renderTexture: function(t, e, s, n) {
                    (void 0 === s || "" === s) && (s = this.game.rnd.uuid()),
                    void 0 === n && (n = !1);
                    var r = new i.RenderTexture(this.game,t,e,s);
                    return n && this.game.cache.addRenderTexture(s, r),
                        r
                },
                bitmapData: function(t, e, s, n) {
                    void 0 === n && (n = !1),
                    (void 0 === s || "" === s) && (s = this.game.rnd.uuid());
                    var r = new i.BitmapData(this.game,s,t,e);
                    return n && this.game.cache.addBitmapData(s, r),
                        r
                },
                filter: function(t) {
                    var e = Array.prototype.slice.call(arguments, 1)
                        , t = new i.Filter[t](this.game);
                    return t.init.apply(t, e),
                        t
                }
            },
            i.GameObjectCreator.prototype.constructor = i.GameObjectCreator,
            i.Sprite = function(t, e, s, n, r) {
                e = e || 0,
                    s = s || 0,
                    n = n || null,
                    r = r || null,
                    this.type = i.SPRITE,
                    this.physicsType = i.SPRITE,
                    PIXI.Sprite.call(this, PIXI.TextureCache.__default),
                    i.Component.Core.init.call(this, t, e, s, n, r)
            }
            ,
            i.Sprite.prototype = Object.create(PIXI.Sprite.prototype),
            i.Sprite.prototype.constructor = i.Sprite,
            i.Component.Core.install.call(i.Sprite.prototype, ["Angle", "Animation", "AutoCull", "Bounds", "BringToTop", "Crop", "Delta", "Destroy", "FixedToCamera", "Health", "InCamera", "InputEnabled", "InWorld", "LifeSpan", "LoadTexture", "Overlap", "PhysicsBody", "Reset", "ScaleMinMax", "Smoothed"]),
            i.Sprite.prototype.preUpdatePhysics = i.Component.PhysicsBody.preUpdate,
            i.Sprite.prototype.preUpdateLifeSpan = i.Component.LifeSpan.preUpdate,
            i.Sprite.prototype.preUpdateInWorld = i.Component.InWorld.preUpdate,
            i.Sprite.prototype.preUpdateCore = i.Component.Core.preUpdate,
            i.Sprite.prototype.preUpdate = function() {
                return !!(this.preUpdatePhysics() && this.preUpdateLifeSpan() && this.preUpdateInWorld()) && this.preUpdateCore()
            }
            ,
            i.Image = function(t, e, s, n, r) {
                e = e || 0,
                    s = s || 0,
                    n = n || null,
                    r = r || null,
                    this.type = i.IMAGE,
                    PIXI.Sprite.call(this, PIXI.TextureCache.__default),
                    i.Component.Core.init.call(this, t, e, s, n, r)
            }
            ,
            i.Image.prototype = Object.create(PIXI.Sprite.prototype),
            i.Image.prototype.constructor = i.Image,
            i.Component.Core.install.call(i.Image.prototype, ["Angle", "Animation", "AutoCull", "Bounds", "BringToTop", "Crop", "Destroy", "FixedToCamera", "InputEnabled", "LifeSpan", "LoadTexture", "Overlap", "Reset", "Smoothed"]),
            i.Image.prototype.preUpdateInWorld = i.Component.InWorld.preUpdate,
            i.Image.prototype.preUpdateCore = i.Component.Core.preUpdate,
            i.Image.prototype.preUpdate = function() {
                return !!this.preUpdateInWorld() && this.preUpdateCore()
            }
            ,
            i.Button = function(t, e, s, n, r, o, a, h, l, u) {
                e = e || 0,
                    s = s || 0,
                    n = n || null,
                    r = r || null,
                    o = o || this,
                    i.Image.call(this, t, e, s, n, h),
                    this.type = i.BUTTON,
                    this.physicsType = i.SPRITE,
                    this._onOverFrame = null,
                    this._onOutFrame = null,
                    this._onDownFrame = null,
                    this._onUpFrame = null,
                    this.onOverSound = null,
                    this.onOutSound = null,
                    this.onDownSound = null,
                    this.onUpSound = null,
                    this.onOverSoundMarker = "",
                    this.onOutSoundMarker = "",
                    this.onDownSoundMarker = "",
                    this.onUpSoundMarker = "",
                    this.onInputOver = new i.Signal,
                    this.onInputOut = new i.Signal,
                    this.onInputDown = new i.Signal,
                    this.onInputUp = new i.Signal,
                    this.onOverMouseOnly = !0,
                    this.justReleasedPreventsOver = i.PointerMode.TOUCH,
                    this.freezeFrames = !1,
                    this.forceOut = !1,
                    this.inputEnabled = !0,
                    this.input.start(0, !0),
                    this.input.useHandCursor = !0,
                    this.setFrames(a, h, l, u),
                null !== r && this.onInputUp.add(r, o),
                    this.events.onInputOver.add(this.onInputOverHandler, this),
                    this.events.onInputOut.add(this.onInputOutHandler, this),
                    this.events.onInputDown.add(this.onInputDownHandler, this),
                    this.events.onInputUp.add(this.onInputUpHandler, this),
                    this.events.onRemovedFromWorld.add(this.removedFromWorld, this)
            }
            ,
            i.Button.prototype = Object.create(i.Image.prototype),
            i.Button.prototype.constructor = i.Button;
        var o = "Over"
            , a = "Out"
            , h = "Down"
            , l = "Up";
        i.Button.prototype.clearFrames = function() {
            this.setFrames(null, null, null, null)
        }
            ,
            i.Button.prototype.removedFromWorld = function() {
                this.inputEnabled = !1
            }
            ,
            i.Button.prototype.setStateFrame = function(t, e, i) {
                var s = "_on" + t + "Frame";
                null !== e ? (this[s] = e,
                i && this.changeStateFrame(t)) : this[s] = null
            }
            ,
            i.Button.prototype.changeStateFrame = function(t) {
                if (this.freezeFrames)
                    return !1;
                var e = "_on" + t + "Frame"
                    , i = this[e];
                return "string" == typeof i ? (this.frameName = i,
                    !0) : "number" == typeof i && (this.frame = i,
                    !0)
            }
            ,
            i.Button.prototype.setFrames = function(t, e, i, s) {
                this.setStateFrame(o, t, this.input.pointerOver()),
                    this.setStateFrame(a, e, !this.input.pointerOver()),
                    this.setStateFrame(h, i, this.input.pointerDown()),
                    this.setStateFrame(l, s, this.input.pointerUp())
            }
            ,
            i.Button.prototype.setStateSound = function(t, e, s) {
                var n = "on" + t + "Sound"
                    , r = "on" + t + "SoundMarker";
                e instanceof i.Sound || e instanceof i.AudioSprite ? (this[n] = e,
                    this[r] = "string" == typeof s ? s : "") : (this[n] = null,
                    this[r] = "")
            }
            ,
            i.Button.prototype.playStateSound = function(t) {
                var e = "on" + t + "Sound"
                    , i = this[e];
                if (i) {
                    var s = "on" + t + "SoundMarker"
                        , n = this[s];
                    return i.play(n),
                        !0
                }
                return !1
            }
            ,
            i.Button.prototype.setSounds = function(t, e, i, s, n, r, u, c) {
                this.setStateSound(o, t, e),
                    this.setStateSound(a, n, r),
                    this.setStateSound(h, i, s),
                    this.setStateSound(l, u, c)
            }
            ,
            i.Button.prototype.setOverSound = function(t, e) {
                this.setStateSound(o, t, e)
            }
            ,
            i.Button.prototype.setOutSound = function(t, e) {
                this.setStateSound(a, t, e)
            }
            ,
            i.Button.prototype.setDownSound = function(t, e) {
                this.setStateSound(h, t, e)
            }
            ,
            i.Button.prototype.setUpSound = function(t, e) {
                this.setStateSound(l, t, e)
            }
            ,
            i.Button.prototype.onInputOverHandler = function(t, e) {
                e.justReleased() && (this.justReleasedPreventsOver & e.pointerMode) === e.pointerMode || (this.changeStateFrame(o),
                (!this.onOverMouseOnly || e.isMouse) && (this.playStateSound(o),
                this.onInputOver && this.onInputOver.dispatch(this, e)))
            }
            ,
            i.Button.prototype.onInputOutHandler = function(t, e) {
                this.changeStateFrame(a),
                    this.playStateSound(a),
                this.onInputOut && this.onInputOut.dispatch(this, e)
            }
            ,
            i.Button.prototype.onInputDownHandler = function(t, e) {
                this.changeStateFrame(h),
                    this.playStateSound(h),
                this.onInputDown && this.onInputDown.dispatch(this, e)
            }
            ,
            i.Button.prototype.onInputUpHandler = function(t, e, i) {
                if (this.playStateSound(l),
                this.onInputUp && this.onInputUp.dispatch(this, e, i),
                    !this.freezeFrames)
                    if (this.forceOut === !0 || (this.forceOut & e.pointerMode) === e.pointerMode)
                        this.changeStateFrame(a);
                    else {
                        var s = this.changeStateFrame(l);
                        s || (i ? this.changeStateFrame(o) : this.changeStateFrame(a))
                    }
            }
            ,
            i.SpriteBatch = function(t, e, s, n) {
                (void 0 === e || null === e) && (e = t.world),
                    PIXI.SpriteBatch.call(this),
                    i.Group.call(this, t, e, s, n),
                    this.type = i.SPRITEBATCH
            }
            ,
            i.SpriteBatch.prototype = i.Utils.extend(!0, i.SpriteBatch.prototype, i.Group.prototype, PIXI.SpriteBatch.prototype),
            i.SpriteBatch.prototype.constructor = i.SpriteBatch,
            i.BitmapData = function(t, e, s, n) {
                (void 0 === s || 0 === s) && (s = 256),
                (void 0 === n || 0 === n) && (n = 256),
                    this.game = t,
                    this.key = e,
                    this.width = s,
                    this.height = n,
                    this.canvas = PIXI.CanvasPool.create(this, s, n),
                    this.context = this.canvas.getContext("2d", {
                        alpha: !0
                    }),
                    this.ctx = this.context,
                    this.imageData = this.context.getImageData(0, 0, s, n),
                    this.data = null,
                this.imageData && (this.data = this.imageData.data),
                    this.pixels = null,
                this.data && (this.imageData.data.buffer ? (this.buffer = this.imageData.data.buffer,
                    this.pixels = new Uint32Array(this.buffer)) : window.ArrayBuffer ? (this.buffer = new ArrayBuffer(this.imageData.data.length),
                    this.pixels = new Uint32Array(this.buffer)) : this.pixels = this.imageData.data),
                    this.baseTexture = new PIXI.BaseTexture(this.canvas),
                    this.texture = new PIXI.Texture(this.baseTexture),
                    this.textureFrame = new i.Frame(0,0,0,s,n,"bitmapData"),
                    this.texture.frame = this.textureFrame,
                    this.type = i.BITMAPDATA,
                    this.disableTextureUpload = !1,
                    this.dirty = !1,
                    this.cls = this.clear,
                    this._image = null,
                    this._pos = new i.Point,
                    this._size = new i.Point,
                    this._scale = new i.Point,
                    this._rotate = 0,
                    this._alpha = {
                        prev: 1,
                        current: 1
                    },
                    this._anchor = new i.Point,
                    this._tempR = 0,
                    this._tempG = 0,
                    this._tempB = 0,
                    this._circle = new i.Circle,
                    this._swapCanvas = PIXI.CanvasPool.create(this, s, n)
            }
            ,
            i.BitmapData.prototype = {
                move: function(t, e, i) {
                    return 0 !== t && this.moveH(t, i),
                    0 !== e && this.moveV(e, i),
                        this
                },
                moveH: function(t, e) {
                    void 0 === e && (e = !0);
                    var i = this._swapCanvas
                        , s = i.getContext("2d")
                        , n = this.height
                        , r = this.canvas;
                    if (s.clearRect(0, 0, this.width, this.height),
                    0 > t) {
                        t = Math.abs(t);
                        var o = this.width - t;
                        e && s.drawImage(r, 0, 0, t, n, o, 0, t, n),
                            s.drawImage(r, t, 0, o, n, 0, 0, o, n)
                    } else {
                        var o = this.width - t;
                        e && s.drawImage(r, o, 0, t, n, 0, 0, t, n),
                            s.drawImage(r, 0, 0, o, n, t, 0, o, n)
                    }
                    return this.clear(),
                        this.copy(this._swapCanvas)
                },
                moveV: function(t, e) {
                    void 0 === e && (e = !0);
                    var i = this._swapCanvas
                        , s = i.getContext("2d")
                        , n = this.width
                        , r = this.canvas;
                    if (s.clearRect(0, 0, this.width, this.height),
                    0 > t) {
                        t = Math.abs(t);
                        var o = this.height - t;
                        e && s.drawImage(r, 0, 0, n, t, 0, o, n, t),
                            s.drawImage(r, 0, t, n, o, 0, 0, n, o)
                    } else {
                        var o = this.height - t;
                        e && s.drawImage(r, 0, o, n, t, 0, 0, n, t),
                            s.drawImage(r, 0, 0, n, o, 0, t, n, o)
                    }
                    return this.clear(),
                        this.copy(this._swapCanvas)
                },
                add: function(t) {
                    if (Array.isArray(t))
                        for (var e = 0; e < t.length; e++)
                            t[e].loadTexture && t[e].loadTexture(this);
                    else
                        t.loadTexture(this);
                    return this
                },
                load: function(t) {
                    return "string" == typeof t && (t = this.game.cache.getImage(t)),
                        t ? (this.resize(t.width, t.height),
                            this.cls(),
                            this.draw(t),
                            this.update(),
                            this) : void 0
                },
                clear: function(t, e, i, s) {
                    return void 0 === t && (t = 0),
                    void 0 === e && (e = 0),
                    void 0 === i && (i = this.width),
                    void 0 === s && (s = this.height),
                        this.context.clearRect(t, e, i, s),
                        this.update(),
                        this.dirty = !0,
                        this
                },
                fill: function(t, e, i, s) {
                    return void 0 === s && (s = 1),
                        this.context.fillStyle = "rgba(" + t + "," + e + "," + i + "," + s + ")",
                        this.context.fillRect(0, 0, this.width, this.height),
                        this.dirty = !0,
                        this
                },
                generateTexture: function(t) {
                    var e = new Image;
                    e.src = this.canvas.toDataURL("image/png");
                    var i = this.game.cache.addImage(t, "", e);
                    return new PIXI.Texture(i.base)
                },
                resize: function(t, e) {
                    return (t !== this.width || e !== this.height) && (this.width = t,
                        this.height = e,
                        this.canvas.width = t,
                        this.canvas.height = e,
                        this._swapCanvas.width = t,
                        this._swapCanvas.height = e,
                        this.baseTexture.width = t,
                        this.baseTexture.height = e,
                        this.textureFrame.width = t,
                        this.textureFrame.height = e,
                        this.texture.width = t,
                        this.texture.height = e,
                        this.texture.crop.width = t,
                        this.texture.crop.height = e,
                        this.update(),
                        this.dirty = !0),
                        this
                },
                update: function(t, e, i, s) {
                    return void 0 === t && (t = 0),
                    void 0 === e && (e = 0),
                    void 0 === i && (i = Math.max(1, this.width)),
                    void 0 === s && (s = Math.max(1, this.height)),
                        this.imageData = this.context.getImageData(t, e, i, s),
                        this.data = this.imageData.data,
                        this.imageData.data.buffer ? (this.buffer = this.imageData.data.buffer,
                            this.pixels = new Uint32Array(this.buffer)) : window.ArrayBuffer ? (this.buffer = new ArrayBuffer(this.imageData.data.length),
                            this.pixels = new Uint32Array(this.buffer)) : this.pixels = this.imageData.data,
                        this
                },
                processPixelRGB: function(t, e, s, n, r, o) {
                    void 0 === s && (s = 0),
                    void 0 === n && (n = 0),
                    void 0 === r && (r = this.width),
                    void 0 === o && (o = this.height);
                    for (var a = s + r, h = n + o, l = i.Color.createColor(), u = {
                        r: 0,
                        g: 0,
                        b: 0,
                        a: 0
                    }, c = !1, d = n; h > d; d++)
                        for (var p = s; a > p; p++)
                            i.Color.unpackPixel(this.getPixel32(p, d), l),
                                u = t.call(e, l, p, d),
                            u !== !1 && null !== u && void 0 !== u && (this.setPixel32(p, d, u.r, u.g, u.b, u.a, !1),
                                c = !0);
                    return c && (this.context.putImageData(this.imageData, 0, 0),
                        this.dirty = !0),
                        this
                },
                processPixel: function(t, e, i, s, n, r) {
                    void 0 === i && (i = 0),
                    void 0 === s && (s = 0),
                    void 0 === n && (n = this.width),
                    void 0 === r && (r = this.height);
                    for (var o = i + n, a = s + r, h = 0, l = 0, u = !1, c = s; a > c; c++)
                        for (var d = i; o > d; d++)
                            h = this.getPixel32(d, c),
                                l = t.call(e, h, d, c),
                            l !== h && (this.pixels[c * this.width + d] = l,
                                u = !0);
                    return u && (this.context.putImageData(this.imageData, 0, 0),
                        this.dirty = !0),
                        this
                },
                replaceRGB: function(t, e, s, n, r, o, a, h, l) {
                    var u = 0
                        , c = 0
                        , d = this.width
                        , p = this.height
                        , f = i.Color.packPixel(t, e, s, n);
                    void 0 !== l && l instanceof i.Rectangle && (u = l.x,
                        c = l.y,
                        d = l.width,
                        p = l.height);
                    for (var m = 0; p > m; m++)
                        for (var g = 0; d > g; g++)
                            this.getPixel32(u + g, c + m) === f && this.setPixel32(u + g, c + m, r, o, a, h, !1);
                    return this.context.putImageData(this.imageData, 0, 0),
                        this.dirty = !0,
                        this
                },
                setHSL: function(t, e, s, n) {
                    if ((void 0 === t || null === t) && (t = !1),
                    (void 0 === e || null === e) && (e = !1),
                    (void 0 === s || null === s) && (s = !1),
                    t || e || s) {
                        void 0 === n && (n = new i.Rectangle(0,0,this.width,this.height));
                        for (var r = i.Color.createColor(), o = n.y; o < n.bottom; o++)
                            for (var a = n.x; a < n.right; a++)
                                i.Color.unpackPixel(this.getPixel32(a, o), r, !0),
                                t && (r.h = t),
                                e && (r.s = e),
                                s && (r.l = s),
                                    i.Color.HSLtoRGB(r.h, r.s, r.l, r),
                                    this.setPixel32(a, o, r.r, r.g, r.b, r.a, !1);
                        return this.context.putImageData(this.imageData, 0, 0),
                            this.dirty = !0,
                            this
                    }
                },
                shiftHSL: function(t, e, s, n) {
                    if ((void 0 === t || null === t) && (t = !1),
                    (void 0 === e || null === e) && (e = !1),
                    (void 0 === s || null === s) && (s = !1),
                    t || e || s) {
                        void 0 === n && (n = new i.Rectangle(0,0,this.width,this.height));
                        for (var r = i.Color.createColor(), o = n.y; o < n.bottom; o++)
                            for (var a = n.x; a < n.right; a++)
                                i.Color.unpackPixel(this.getPixel32(a, o), r, !0),
                                t && (r.h = this.game.math.wrap(r.h + t, 0, 1)),
                                e && (r.s = this.game.math.limitValue(r.s + e, 0, 1)),
                                s && (r.l = this.game.math.limitValue(r.l + s, 0, 1)),
                                    i.Color.HSLtoRGB(r.h, r.s, r.l, r),
                                    this.setPixel32(a, o, r.r, r.g, r.b, r.a, !1);
                        return this.context.putImageData(this.imageData, 0, 0),
                            this.dirty = !0,
                            this
                    }
                },
                setPixel32: function(t, e, s, n, r, o, a) {
                    return void 0 === a && (a = !0),
                    t >= 0 && t <= this.width && e >= 0 && e <= this.height && (i.Device.LITTLE_ENDIAN ? this.pixels[e * this.width + t] = o << 24 | r << 16 | n << 8 | s : this.pixels[e * this.width + t] = s << 24 | n << 16 | r << 8 | o,
                    a && (this.context.putImageData(this.imageData, 0, 0),
                        this.dirty = !0)),
                        this
                },
                setPixel: function(t, e, i, s, n, r) {
                    return this.setPixel32(t, e, i, s, n, 255, r)
                },
                getPixel: function(t, e, s) {
                    s || (s = i.Color.createColor());
                    var n = ~~(t + e * this.width);
                    return n *= 4,
                        s.r = this.data[n],
                        s.g = this.data[++n],
                        s.b = this.data[++n],
                        s.a = this.data[++n],
                        s
                },
                getPixel32: function(t, e) {
                    return t >= 0 && t <= this.width && e >= 0 && e <= this.height ? this.pixels[e * this.width + t] : void 0
                },
                getPixelRGB: function(t, e, s, n, r) {
                    return i.Color.unpackPixel(this.getPixel32(t, e), s, n, r)
                },
                getPixels: function(t) {
                    return this.context.getImageData(t.x, t.y, t.width, t.height)
                },
                getFirstPixel: function(t) {
                    void 0 === t && (t = 0);
                    var e = i.Color.createColor()
                        , s = 0
                        , n = 0
                        , r = 1
                        , o = !1;
                    1 === t ? (r = -1,
                        n = this.height) : 3 === t && (r = -1,
                        s = this.width);
                    do
                        i.Color.unpackPixel(this.getPixel32(s, n), e),
                            0 === t || 1 === t ? (s++,
                            s === this.width && (s = 0,
                                n += r,
                            (n >= this.height || 0 >= n) && (o = !0))) : (2 === t || 3 === t) && (n++,
                            n === this.height && (n = 0,
                                s += r,
                            (s >= this.width || 0 >= s) && (o = !0)));
                    while (0 === e.a && !o);return e.x = s,
                        e.y = n,
                        e
                },
                getBounds: function(t) {
                    return void 0 === t && (t = new i.Rectangle),
                        t.x = this.getFirstPixel(2).x,
                        t.x === this.width ? t.setTo(0, 0, 0, 0) : (t.y = this.getFirstPixel(0).y,
                            t.width = this.getFirstPixel(3).x - t.x + 1,
                            t.height = this.getFirstPixel(1).y - t.y + 1,
                            t)
                },
                addToWorld: function(t, e, i, s, n, r) {
                    n = n || 1,
                        r = r || 1;
                    var o = this.game.add.image(t, e, this);
                    return o.anchor.set(i, s),
                        o.scale.set(n, r),
                        o
                },
                copy: function(t, e, s, n, r, o, a, h, l, u, c, d, p, f, m, g, y) {
                    if ((void 0 === t || null === t) && (t = this),
                        this._image = t,
                    t instanceof i.Sprite || t instanceof i.Image || t instanceof i.Text || t instanceof PIXI.Sprite)
                        this._pos.set(t.texture.crop.x, t.texture.crop.y),
                            this._size.set(t.texture.crop.width, t.texture.crop.height),
                            this._scale.set(t.scale.x, t.scale.y),
                            this._anchor.set(t.anchor.x, t.anchor.y),
                            this._rotate = t.rotation,
                            this._alpha.current = t.alpha,
                            this._image = t.texture.baseTexture.source,
                        (void 0 === o || null === o) && (o = t.x),
                        (void 0 === a || null === a) && (a = t.y),
                        t.texture.trim && (o += t.texture.trim.x - t.anchor.x * t.texture.trim.width,
                            a += t.texture.trim.y - t.anchor.y * t.texture.trim.height),
                        16777215 !== t.tint && (t.cachedTint !== t.tint && (t.cachedTint = t.tint,
                            t.tintedTexture = PIXI.CanvasTinter.getTintedTexture(t, t.tint)),
                            this._image = t.tintedTexture);
                    else {
                        if (this._pos.set(0),
                            this._scale.set(1),
                            this._anchor.set(0),
                            this._rotate = 0,
                            this._alpha.current = 1,
                        t instanceof i.BitmapData)
                            this._image = t.canvas;
                        else if ("string" == typeof t) {
                            if (t = this.game.cache.getImage(t),
                            null === t)
                                return;
                            this._image = t
                        }
                        this._size.set(this._image.width, this._image.height)
                    }
                    if ((void 0 === e || null === e) && (e = 0),
                    (void 0 === s || null === s) && (s = 0),
                    n && (this._size.x = n),
                    r && (this._size.y = r),
                    (void 0 === o || null === o) && (o = e),
                    (void 0 === a || null === a) && (a = s),
                    (void 0 === h || null === h) && (h = this._size.x),
                    (void 0 === l || null === l) && (l = this._size.y),
                    "number" == typeof u && (this._rotate = u),
                    "number" == typeof c && (this._anchor.x = c),
                    "number" == typeof d && (this._anchor.y = d),
                    "number" == typeof p && (this._scale.x = p),
                    "number" == typeof f && (this._scale.y = f),
                    "number" == typeof m && (this._alpha.current = m),
                    void 0 === g && (g = null),
                    void 0 === y && (y = !1),
                        !(this._alpha.current <= 0 || 0 === this._scale.x || 0 === this._scale.y || 0 === this._size.x || 0 === this._size.y)) {
                        var v = this.context;
                        return this._alpha.prev = v.globalAlpha,
                            v.save(),
                            v.globalAlpha = this._alpha.current,
                        g && (this.op = g),
                        y && (o |= 0,
                            a |= 0),
                            v.translate(o, a),
                            v.scale(this._scale.x, this._scale.y),
                            v.rotate(this._rotate),
                            v.drawImage(this._image, this._pos.x + e, this._pos.y + s, this._size.x, this._size.y, -h * this._anchor.x, -l * this._anchor.y, h, l),
                            v.restore(),
                            v.globalAlpha = this._alpha.prev,
                            this.dirty = !0,
                            this
                    }
                },
                copyRect: function(t, e, i, s, n, r, o) {
                    return this.copy(t, e.x, e.y, e.width, e.height, i, s, e.width, e.height, 0, 0, 0, 1, 1, n, r, o)
                },
                draw: function(t, e, i, s, n, r, o) {
                    return this.copy(t, null, null, null, null, e, i, s, n, null, null, null, null, null, null, r, o)
                },
                drawGroup: function(t, e, i) {
                    return t.total > 0 && t.forEachExists(this.copy, this, null, null, null, null, null, null, null, null, null, null, null, null, null, null, e, i),
                        this
                },
                drawFull: function(t, e, s) {
                    if (t.worldVisible === !1 || 0 === t.worldAlpha || t.hasOwnProperty("exists") && t.exists === !1)
                        return this;
                    if (t.type !== i.GROUP && t.type !== i.EMITTER && t.type !== i.BITMAPTEXT)
                        if (t.type === i.GRAPHICS) {
                            var n = t.getBounds();
                            this.ctx.save(),
                                this.ctx.translate(n.x, n.y),
                                PIXI.CanvasGraphics.renderGraphics(t, this.ctx),
                                this.ctx.restore()
                        } else
                            this.copy(t, null, null, null, null, t.worldPosition.x, t.worldPosition.y, null, null, t.worldRotation, null, null, t.worldScale.x, t.worldScale.y, t.worldAlpha, e, s);
                    if (t.children)
                        for (var r = 0; r < t.children.length; r++)
                            this.drawFull(t.children[r], e, s);
                    return this
                },
                shadow: function(t, e, i, s) {
                    var n = this.context;
                    void 0 === t || null === t ? n.shadowColor = "rgba(0,0,0,0)" : (n.shadowColor = t,
                        n.shadowBlur = e || 5,
                        n.shadowOffsetX = i || 10,
                        n.shadowOffsetY = s || 10)
                },
                alphaMask: function(t, e, i, s) {
                    return void 0 === s || null === s ? this.draw(e).blendSourceAtop() : this.draw(e, s.x, s.y, s.width, s.height).blendSourceAtop(),
                        void 0 === i || null === i ? this.draw(t).blendReset() : this.draw(t, i.x, i.y, i.width, i.height).blendReset(),
                        this
                },
                extract: function(t, e, i, s, n, r, o, a, h) {
                    return void 0 === n && (n = 255),
                    void 0 === r && (r = !1),
                    void 0 === o && (o = e),
                    void 0 === a && (a = i),
                    void 0 === h && (h = s),
                    r && t.resize(this.width, this.height),
                        this.processPixelRGB(function(r, l, u) {
                            return r.r === e && r.g === i && r.b === s && t.setPixel32(l, u, o, a, h, n, !1),
                                !1
                        }, this),
                        t.context.putImageData(t.imageData, 0, 0),
                        t.dirty = !0,
                        t
                },
                rect: function(t, e, i, s, n) {
                    return "undefined" != typeof n && (this.context.fillStyle = n),
                        this.context.fillRect(t, e, i, s),
                        this
                },
                text: function(t, e, i, s, n, r) {
                    void 0 === e && (e = 0),
                    void 0 === i && (i = 0),
                    void 0 === s && (s = "14px Courier"),
                    void 0 === n && (n = "rgb(255,255,255)"),
                    void 0 === r && (r = !0);
                    var o = this.context
                        , a = o.font;
                    o.font = s,
                    r && (o.fillStyle = "rgb(0,0,0)",
                        o.fillText(t, e + 1, i + 1)),
                        o.fillStyle = n,
                        o.fillText(t, e, i),
                        o.font = a
                },
                circle: function(t, e, i, s) {
                    var n = this.context;
                    return void 0 !== s && (n.fillStyle = s),
                        n.beginPath(),
                        n.arc(t, e, i, 0, 2 * Math.PI, !1),
                        n.closePath(),
                        n.fill(),
                        this
                },
                line: function(t, e, i, s, n, r) {
                    void 0 === n && (n = "#fff"),
                    void 0 === r && (r = 1);
                    var o = this.context;
                    return o.beginPath(),
                        o.moveTo(t, e),
                        o.lineTo(i, s),
                        o.lineWidth = r,
                        o.strokeStyle = n,
                        o.stroke(),
                        o.closePath(),
                        this
                },
                textureLine: function(t, e, s) {
                    if (void 0 === s && (s = "repeat-x"),
                    "string" != typeof e || (e = this.game.cache.getImage(e))) {
                        var n = t.length;
                        "no-repeat" === s && n > e.width && (n = e.width);
                        var r = this.context;
                        return r.fillStyle = r.createPattern(e, s),
                            this._circle = new i.Circle(t.start.x,t.start.y,e.height),
                            this._circle.circumferencePoint(t.angle - 1.5707963267948966, !1, this._pos),
                            r.save(),
                            r.translate(this._pos.x, this._pos.y),
                            r.rotate(t.angle),
                            r.fillRect(0, 0, n, e.height),
                            r.restore(),
                            this.dirty = !0,
                            this
                    }
                },
                render: function() {
                    return !this.disableTextureUpload && this.dirty && (this.baseTexture.dirty(),
                        this.dirty = !1),
                        this
                },
                destroy: function() {
                    PIXI.CanvasPool.remove(this)
                },
                blendReset: function() {
                    return this.op = "source-over",
                        this
                },
                blendSourceOver: function() {
                    return this.op = "source-over",
                        this
                },
                blendSourceIn: function() {
                    return this.op = "source-in",
                        this
                },
                blendSourceOut: function() {
                    return this.op = "source-out",
                        this
                },
                blendSourceAtop: function() {
                    return this.op = "source-atop",
                        this
                },
                blendDestinationOver: function() {
                    return this.op = "destination-over",
                        this
                },
                blendDestinationIn: function() {
                    return this.op = "destination-in",
                        this
                },
                blendDestinationOut: function() {
                    return this.op = "destination-out",
                        this
                },
                blendDestinationAtop: function() {
                    return this.op = "destination-atop",
                        this
                },
                blendXor: function() {
                    return this.op = "xor",
                        this
                },
                blendAdd: function() {
                    return this.op = "lighter",
                        this
                },
                blendMultiply: function() {
                    return this.op = "multiply",
                        this
                },
                blendScreen: function() {
                    return this.op = "screen",
                        this
                },
                blendOverlay: function() {
                    return this.op = "overlay",
                        this
                },
                blendDarken: function() {
                    return this.op = "darken",
                        this
                },
                blendLighten: function() {
                    return this.op = "lighten",
                        this
                },
                blendColorDodge: function() {
                    return this.op = "color-dodge",
                        this
                },
                blendColorBurn: function() {
                    return this.op = "color-burn",
                        this
                },
                blendHardLight: function() {
                    return this.op = "hard-light",
                        this
                },
                blendSoftLight: function() {
                    return this.op = "soft-light",
                        this
                },
                blendDifference: function() {
                    return this.op = "difference",
                        this
                },
                blendExclusion: function() {
                    return this.op = "exclusion",
                        this
                },
                blendHue: function() {
                    return this.op = "hue",
                        this
                },
                blendSaturation: function() {
                    return this.op = "saturation",
                        this
                },
                blendColor: function() {
                    return this.op = "color",
                        this
                },
                blendLuminosity: function() {
                    return this.op = "luminosity",
                        this
                }
            },
            Object.defineProperty(i.BitmapData.prototype, "smoothed", {
                get: function() {
                    i.Canvas.getSmoothingEnabled(this.context)
                },
                set: function(t) {
                    i.Canvas.setSmoothingEnabled(this.context, t)
                }
            }),
            Object.defineProperty(i.BitmapData.prototype, "op", {
                get: function() {
                    return this.context.globalCompositeOperation
                },
                set: function(t) {
                    this.context.globalCompositeOperation = t
                }
            }),
            i.BitmapData.getTransform = function(t, e, i, s, n, r) {
                return "number" != typeof t && (t = 0),
                "number" != typeof e && (e = 0),
                "number" != typeof i && (i = 1),
                "number" != typeof s && (s = 1),
                "number" != typeof n && (n = 0),
                "number" != typeof r && (r = 0),
                    {
                        sx: i,
                        sy: s,
                        scaleX: i,
                        scaleY: s,
                        skewX: n,
                        skewY: r,
                        translateX: t,
                        translateY: e,
                        tx: t,
                        ty: e
                    }
            }
            ,
            i.BitmapData.prototype.constructor = i.BitmapData,
            PIXI.Graphics = function() {
                PIXI.DisplayObjectContainer.call(this),
                    this.renderable = !0,
                    this.fillAlpha = 1,
                    this.lineWidth = 0,
                    this.lineColor = 0,
                    this.graphicsData = [],
                    this.tint = 16777215,
                    this.blendMode = PIXI.blendModes.NORMAL,
                    this.currentPath = null,
                    this._webGL = [],
                    this.isMask = !1,
                    this.boundsPadding = 0,
                    this._localBounds = new PIXI.Rectangle(0,0,1,1),
                    this.dirty = !0,
                    this.webGLDirty = !1,
                    this.cachedSpriteDirty = !1
            }
            ,
            PIXI.Graphics.prototype = Object.create(PIXI.DisplayObjectContainer.prototype),
            PIXI.Graphics.prototype.constructor = PIXI.Graphics,
            PIXI.Graphics.prototype.lineStyle = function(t, e, i) {
                return this.lineWidth = t || 0,
                    this.lineColor = e || 0,
                    this.lineAlpha = void 0 === i ? 1 : i,
                this.currentPath && (this.currentPath.shape.points.length ? this.drawShape(new PIXI.Polygon(this.currentPath.shape.points.slice(-2))) : (this.currentPath.lineWidth = this.lineWidth,
                    this.currentPath.lineColor = this.lineColor,
                    this.currentPath.lineAlpha = this.lineAlpha)),
                    this
            }
            ,
            PIXI.Graphics.prototype.moveTo = function(t, e) {
                return this.drawShape(new PIXI.Polygon([t, e])),
                    this
            }
            ,
            PIXI.Graphics.prototype.lineTo = function(t, e) {
                return this.currentPath || this.moveTo(0, 0),
                    this.currentPath.shape.points.push(t, e),
                    this.dirty = !0,
                    this
            }
            ,
            PIXI.Graphics.prototype.quadraticCurveTo = function(t, e, i, s) {
                this.currentPath ? 0 === this.currentPath.shape.points.length && (this.currentPath.shape.points = [0, 0]) : this.moveTo(0, 0);
                var n, r, o = 20, a = this.currentPath.shape.points;
                0 === a.length && this.moveTo(0, 0);
                for (var h = a[a.length - 2], l = a[a.length - 1], u = 0, c = 1; o >= c; ++c)
                    u = c / o,
                        n = h + (t - h) * u,
                        r = l + (e - l) * u,
                        a.push(n + (t + (i - t) * u - n) * u, r + (e + (s - e) * u - r) * u);
                return this.dirty = !0,
                    this
            }
            ,
            PIXI.Graphics.prototype.bezierCurveTo = function(t, e, i, s, n, r) {
                this.currentPath ? 0 === this.currentPath.shape.points.length && (this.currentPath.shape.points = [0, 0]) : this.moveTo(0, 0);
                for (var o, a, h, l, u, c = 20, d = this.currentPath.shape.points, p = d[d.length - 2], f = d[d.length - 1], m = 0, g = 1; c >= g; ++g)
                    m = g / c,
                        o = 1 - m,
                        a = o * o,
                        h = a * o,
                        l = m * m,
                        u = l * m,
                        d.push(h * p + 3 * a * m * t + 3 * o * l * i + u * n, h * f + 3 * a * m * e + 3 * o * l * s + u * r);
                return this.dirty = !0,
                    this
            }
            ,
            PIXI.Graphics.prototype.arcTo = function(t, e, i, s, n) {
                this.currentPath ? 0 === this.currentPath.shape.points.length && this.currentPath.shape.points.push(t, e) : this.moveTo(t, e);
                var r = this.currentPath.shape.points
                    , o = r[r.length - 2]
                    , a = r[r.length - 1]
                    , h = a - e
                    , l = o - t
                    , u = s - e
                    , c = i - t
                    , d = Math.abs(h * c - l * u);
                if (1e-8 > d || 0 === n)
                    (r[r.length - 2] !== t || r[r.length - 1] !== e) && r.push(t, e);
                else {
                    var p = h * h + l * l
                        , f = u * u + c * c
                        , m = h * u + l * c
                        , g = n * Math.sqrt(p) / d
                        , y = n * Math.sqrt(f) / d
                        , v = g * m / p
                        , x = y * m / f
                        , _ = g * c + y * l
                        , b = g * u + y * h
                        , w = l * (y + v)
                        , T = h * (y + v)
                        , S = c * (g + x)
                        , C = u * (g + x)
                        , P = Math.atan2(T - b, w - _)
                        , A = Math.atan2(C - b, S - _);
                    this.arc(_ + t, b + e, n, P, A, l * u > c * h)
                }
                return this.dirty = !0,
                    this
            }
            ,
            PIXI.Graphics.prototype.arc = function(t, e, i, s, n, r) {
                if (s === n)
                    return this;
                void 0 === r && (r = !1),
                    !r && s >= n ? n += 2 * Math.PI : r && n >= s && (s += 2 * Math.PI);
                var o = r ? -1 * (s - n) : n - s
                    , a = 40 * Math.ceil(Math.abs(o) / (2 * Math.PI));
                if (0 === o)
                    return this;
                var h = t + Math.cos(s) * i
                    , l = e + Math.sin(s) * i;
                r && this.filling ? this.moveTo(t, e) : this.moveTo(h, l);
                for (var u = this.currentPath.shape.points, c = o / (2 * a), d = 2 * c, p = Math.cos(c), f = Math.sin(c), m = a - 1, g = m % 1 / m, y = 0; m >= y; y++) {
                    var v = y + g * y
                        , x = c + s + d * v
                        , _ = Math.cos(x)
                        , b = -Math.sin(x);
                    u.push((p * _ + f * b) * i + t, (p * -b + f * _) * i + e)
                }
                return this.dirty = !0,
                    this
            }
            ,
            PIXI.Graphics.prototype.beginFill = function(t, e) {
                return this.filling = !0,
                    this.fillColor = t || 0,
                    this.fillAlpha = void 0 === e ? 1 : e,
                this.currentPath && this.currentPath.shape.points.length <= 2 && (this.currentPath.fill = this.filling,
                    this.currentPath.fillColor = this.fillColor,
                    this.currentPath.fillAlpha = this.fillAlpha),
                    this
            }
            ,
            PIXI.Graphics.prototype.endFill = function() {
                return this.filling = !1,
                    this.fillColor = null,
                    this.fillAlpha = 1,
                    this
            }
            ,
            PIXI.Graphics.prototype.drawRect = function(t, e, i, s) {
                return this.drawShape(new PIXI.Rectangle(t,e,i,s)),
                    this
            }
            ,
            PIXI.Graphics.prototype.drawRoundedRect = function(t, e, i, s, n) {
                return this.drawShape(new PIXI.RoundedRectangle(t,e,i,s,n)),
                    this
            }
            ,
            PIXI.Graphics.prototype.drawCircle = function(t, e, i) {
                return this.drawShape(new PIXI.Circle(t,e,i)),
                    this
            }
            ,
            PIXI.Graphics.prototype.drawEllipse = function(t, e, i, s) {
                return this.drawShape(new PIXI.Ellipse(t,e,i,s)),
                    this
            }
            ,
            PIXI.Graphics.prototype.drawPolygon = function(t) {
                (t instanceof i.Polygon || t instanceof PIXI.Polygon) && (t = t.points);
                var e = t;
                if (!Array.isArray(e)) {
                    e = new Array(arguments.length);
                    for (var s = 0; s < e.length; ++s)
                        e[s] = arguments[s]
                }
                return this.drawShape(new i.Polygon(e)),
                    this
            }
            ,
            PIXI.Graphics.prototype.clear = function() {
                return this.lineWidth = 0,
                    this.filling = !1,
                    this.dirty = !0,
                    this.clearDirty = !0,
                    this.graphicsData = [],
                    this
            }
            ,
            PIXI.Graphics.prototype.generateTexture = function(t, e) {
                t = t || 1;
                var i = this.getBounds()
                    , s = new PIXI.CanvasBuffer(i.width * t,i.height * t)
                    , n = PIXI.Texture.fromCanvas(s.canvas, e);
                return n.baseTexture.resolution = t,
                    s.context.scale(t, t),
                    s.context.translate(-i.x, -i.y),
                    PIXI.CanvasGraphics.renderGraphics(this, s.context),
                    n
            }
            ,
            PIXI.Graphics.prototype._renderWebGL = function(t) {
                if (this.visible !== !1 && 0 !== this.alpha && this.isMask !== !0) {
                    if (this._cacheAsBitmap)
                        return (this.dirty || this.cachedSpriteDirty) && (this._generateCachedSprite(),
                            this.updateCachedSpriteTexture(),
                            this.cachedSpriteDirty = !1,
                            this.dirty = !1),
                            this._cachedSprite.worldAlpha = this.worldAlpha,
                            void PIXI.Sprite.prototype._renderWebGL.call(this._cachedSprite, t);
                    if (t.spriteBatch.stop(),
                        t.blendModeManager.setBlendMode(this.blendMode),
                    this._mask && t.maskManager.pushMask(this._mask, t),
                    this._filters && t.filterManager.pushFilter(this._filterBlock),
                    this.blendMode !== t.spriteBatch.currentBlendMode) {
                        t.spriteBatch.currentBlendMode = this.blendMode;
                        var e = PIXI.blendModesWebGL[t.spriteBatch.currentBlendMode];
                        t.spriteBatch.gl.blendFunc(e[0], e[1])
                    }
                    if (this.webGLDirty && (this.dirty = !0,
                        this.webGLDirty = !1),
                        PIXI.WebGLGraphics.renderGraphics(this, t),
                        this.children.length) {
                        t.spriteBatch.start();
                        for (var i = 0; i < this.children.length; i++)
                            this.children[i]._renderWebGL(t);
                        t.spriteBatch.stop()
                    }
                    this._filters && t.filterManager.popFilter(),
                    this._mask && t.maskManager.popMask(this.mask, t),
                        t.drawCount++,
                        t.spriteBatch.start()
                }
            }
            ,
            PIXI.Graphics.prototype._renderCanvas = function(t) {
                if (this.visible !== !1 && 0 !== this.alpha && this.isMask !== !0) {
                    if (this._prevTint !== this.tint && (this.dirty = !0,
                        this._prevTint = this.tint),
                        this._cacheAsBitmap)
                        return (this.dirty || this.cachedSpriteDirty) && (this._generateCachedSprite(),
                            this.updateCachedSpriteTexture(),
                            this.cachedSpriteDirty = !1,
                            this.dirty = !1),
                            this._cachedSprite.alpha = this.alpha,
                            void PIXI.Sprite.prototype._renderCanvas.call(this._cachedSprite, t);
                    var e = t.context
                        , i = this.worldTransform;
                    this.blendMode !== t.currentBlendMode && (t.currentBlendMode = this.blendMode,
                        e.globalCompositeOperation = PIXI.blendModesCanvas[t.currentBlendMode]),
                    this._mask && t.maskManager.pushMask(this._mask, t);
                    var s = t.resolution;
                    e.setTransform(i.a * s, i.b * s, i.c * s, i.d * s, i.tx * s, i.ty * s),
                        PIXI.CanvasGraphics.renderGraphics(this, e);
                    for (var n = 0; n < this.children.length; n++)
                        this.children[n]._renderCanvas(t);
                    this._mask && t.maskManager.popMask(t)
                }
            }
            ,
            PIXI.Graphics.prototype.getBounds = function(t) {
                if (!this._currentBounds) {
                    if (!this.renderable)
                        return PIXI.EmptyRectangle;
                    this.dirty && (this.updateLocalBounds(),
                        this.webGLDirty = !0,
                        this.cachedSpriteDirty = !0,
                        this.dirty = !1);
                    var e = this._localBounds
                        , i = e.x
                        , s = e.width + e.x
                        , n = e.y
                        , r = e.height + e.y
                        , o = t || this.worldTransform
                        , a = o.a
                        , h = o.b
                        , l = o.c
                        , u = o.d
                        , c = o.tx
                        , d = o.ty
                        , p = a * s + l * r + c
                        , f = u * r + h * s + d
                        , m = a * i + l * r + c
                        , g = u * r + h * i + d
                        , y = a * i + l * n + c
                        , v = u * n + h * i + d
                        , x = a * s + l * n + c
                        , _ = u * n + h * s + d
                        , b = p
                        , w = f
                        , T = p
                        , S = f;
                    T = T > m ? m : T,
                        T = T > y ? y : T,
                        T = T > x ? x : T,
                        S = S > g ? g : S,
                        S = S > v ? v : S,
                        S = S > _ ? _ : S,
                        b = m > b ? m : b,
                        b = y > b ? y : b,
                        b = x > b ? x : b,
                        w = g > w ? g : w,
                        w = v > w ? v : w,
                        w = _ > w ? _ : w,
                        this._bounds.x = T,
                        this._bounds.width = b - T,
                        this._bounds.y = S,
                        this._bounds.height = w - S,
                        this._currentBounds = this._bounds
                }
                return this._currentBounds
            }
            ,
            PIXI.Graphics.prototype.containsPoint = function(t) {
                this.worldTransform.applyInverse(t, tempPoint);
                for (var e = this.graphicsData, i = 0; i < e.length; i++) {
                    var s = e[i];
                    if (s.fill && s.shape && s.shape.contains(tempPoint.x, tempPoint.y))
                        return !0
                }
                return !1
            }
            ,
            PIXI.Graphics.prototype.updateLocalBounds = function() {
                var t = 1 / 0
                    , e = -(1 / 0)
                    , s = 1 / 0
                    , n = -(1 / 0);
                if (this.graphicsData.length)
                    for (var r, o, a, h, l, u, c = 0; c < this.graphicsData.length; c++) {
                        var d = this.graphicsData[c]
                            , p = d.type
                            , f = d.lineWidth;
                        if (r = d.shape,
                        p === PIXI.Graphics.RECT || p === PIXI.Graphics.RREC)
                            a = r.x - f / 2,
                                h = r.y - f / 2,
                                l = r.width + f,
                                u = r.height + f,
                                t = t > a ? a : t,
                                e = a + l > e ? a + l : e,
                                s = s > h ? h : s,
                                n = h + u > n ? h + u : n;
                        else if (p === PIXI.Graphics.CIRC)
                            a = r.x,
                                h = r.y,
                                l = r.radius + f / 2,
                                u = r.radius + f / 2,
                                t = t > a - l ? a - l : t,
                                e = a + l > e ? a + l : e,
                                s = s > h - u ? h - u : s,
                                n = h + u > n ? h + u : n;
                        else if (p === PIXI.Graphics.ELIP)
                            a = r.x,
                                h = r.y,
                                l = r.width + f / 2,
                                u = r.height + f / 2,
                                t = t > a - l ? a - l : t,
                                e = a + l > e ? a + l : e,
                                s = s > h - u ? h - u : s,
                                n = h + u > n ? h + u : n;
                        else {
                            o = r.points;
                            for (var m = 0; m < o.length; m++)
                                o[m]instanceof i.Point ? (a = o[m].x,
                                    h = o[m].y) : (a = o[m],
                                    h = o[m + 1],
                                m < o.length - 1 && m++),
                                    t = t > a - f ? a - f : t,
                                    e = a + f > e ? a + f : e,
                                    s = s > h - f ? h - f : s,
                                    n = h + f > n ? h + f : n
                        }
                    }
                else
                    t = 0,
                        e = 0,
                        s = 0,
                        n = 0;
                var g = this.boundsPadding;
                this._localBounds.x = t - g,
                    this._localBounds.width = e - t + 2 * g,
                    this._localBounds.y = s - g,
                    this._localBounds.height = n - s + 2 * g
            }
            ,
            PIXI.Graphics.prototype._generateCachedSprite = function() {
                var t = this.getLocalBounds();
                if (this._cachedSprite)
                    this._cachedSprite.buffer.resize(t.width, t.height);
                else {
                    var e = new PIXI.CanvasBuffer(t.width,t.height)
                        , i = PIXI.Texture.fromCanvas(e.canvas);
                    this._cachedSprite = new PIXI.Sprite(i),
                        this._cachedSprite.buffer = e,
                        this._cachedSprite.worldTransform = this.worldTransform
                }
                this._cachedSprite.anchor.x = -(t.x / t.width),
                    this._cachedSprite.anchor.y = -(t.y / t.height),
                    this._cachedSprite.buffer.context.translate(-t.x, -t.y),
                    this.worldAlpha = 1,
                    PIXI.CanvasGraphics.renderGraphics(this, this._cachedSprite.buffer.context),
                    this._cachedSprite.alpha = this.alpha
            }
            ,
            PIXI.Graphics.prototype.updateCachedSpriteTexture = function() {
                var t = this._cachedSprite
                    , e = t.texture
                    , i = t.buffer.canvas;
                e.baseTexture.width = i.width,
                    e.baseTexture.height = i.height,
                    e.crop.width = e.frame.width = i.width,
                    e.crop.height = e.frame.height = i.height,
                    t._width = i.width,
                    t._height = i.height,
                    e.baseTexture.dirty()
            }
            ,
            PIXI.Graphics.prototype.destroyCachedSprite = function() {
                this._cachedSprite.texture.destroy(!0),
                    this._cachedSprite = null
            }
            ,
            PIXI.Graphics.prototype.drawShape = function(t) {
                this.currentPath && this.currentPath.shape.points.length <= 2 && this.graphicsData.pop(),
                    this.currentPath = null,
                t instanceof i.Polygon && (t = t.clone(),
                    t.flatten());
                var e = new PIXI.GraphicsData(this.lineWidth,this.lineColor,this.lineAlpha,this.fillColor,this.fillAlpha,this.filling,t);
                return this.graphicsData.push(e),
                e.type === PIXI.Graphics.POLY && (e.shape.closed = this.filling,
                    this.currentPath = e),
                    this.dirty = !0,
                    e
            }
            ,
            Object.defineProperty(PIXI.Graphics.prototype, "cacheAsBitmap", {
                get: function() {
                    return this._cacheAsBitmap
                },
                set: function(t) {
                    this._cacheAsBitmap = t,
                        this._cacheAsBitmap ? this._generateCachedSprite() : (this.destroyCachedSprite(),
                            this.dirty = !0)
                }
            }),
            PIXI.GraphicsData = function(t, e, i, s, n, r, o) {
                this.lineWidth = t,
                    this.lineColor = e,
                    this.lineAlpha = i,
                    this._lineTint = e,
                    this.fillColor = s,
                    this.fillAlpha = n,
                    this._fillTint = s,
                    this.fill = r,
                    this.shape = o,
                    this.type = o.type
            }
            ,
            PIXI.GraphicsData.prototype.constructor = PIXI.GraphicsData,
            PIXI.GraphicsData.prototype.clone = function() {
                return new GraphicsData(this.lineWidth,this.lineColor,this.lineAlpha,this.fillColor,this.fillAlpha,this.fill,this.shape)
            }
            ,
            PIXI.PolyK = {},
            PIXI.PolyK.Triangulate = function(t) {
                var e = !0
                    , i = t.length >> 1;
                if (3 > i)
                    return [];
                for (var s = [], n = [], r = 0; i > r; r++)
                    n.push(r);
                r = 0;
                for (var o = i; o > 3; ) {
                    var a = n[(r + 0) % o]
                        , h = n[(r + 1) % o]
                        , l = n[(r + 2) % o]
                        , u = t[2 * a]
                        , c = t[2 * a + 1]
                        , d = t[2 * h]
                        , p = t[2 * h + 1]
                        , f = t[2 * l]
                        , m = t[2 * l + 1]
                        , g = !1;
                    if (PIXI.PolyK._convex(u, c, d, p, f, m, e)) {
                        g = !0;
                        for (var y = 0; o > y; y++) {
                            var v = n[y];
                            if (v !== a && v !== h && v !== l && PIXI.PolyK._PointInTriangle(t[2 * v], t[2 * v + 1], u, c, d, p, f, m)) {
                                g = !1;
                                break
                            }
                        }
                    }
                    if (g)
                        s.push(a, h, l),
                            n.splice((r + 1) % o, 1),
                            o--,
                            r = 0;
                    else if (r++ > 3 * o) {
                        if (!e)
                            return null;
                        for (s = [],
                                 n = [],
                                 r = 0; i > r; r++)
                            n.push(r);
                        r = 0,
                            o = i,
                            e = !1
                    }
                }
                return s.push(n[0], n[1], n[2]),
                    s
            }
            ,
            PIXI.PolyK._PointInTriangle = function(t, e, i, s, n, r, o, a) {
                var h = o - i
                    , l = a - s
                    , u = n - i
                    , c = r - s
                    , d = t - i
                    , p = e - s
                    , f = h * h + l * l
                    , m = h * u + l * c
                    , g = h * d + l * p
                    , y = u * u + c * c
                    , v = u * d + c * p
                    , x = 1 / (f * y - m * m)
                    , _ = (y * g - m * v) * x
                    , b = (f * v - m * g) * x;
                return _ >= 0 && b >= 0 && 1 > _ + b
            }
            ,
            PIXI.PolyK._convex = function(t, e, i, s, n, r, o) {
                return (e - s) * (n - i) + (i - t) * (r - s) >= 0 === o
            }
            ,
            PIXI.WebGLGraphics = function() {}
            ,
            PIXI.WebGLGraphics.renderGraphics = function(t, e) {
                var i, s = e.gl, n = e.projection, r = e.offset, o = e.shaderManager.primitiveShader;
                t.dirty && PIXI.WebGLGraphics.updateGraphics(t, s);
                for (var a = t._webGL[s.id], h = 0; h < a.data.length; h++)
                    1 === a.data[h].mode ? (i = a.data[h],
                        e.stencilManager.pushStencil(t, i, e),
                        s.drawElements(s.TRIANGLE_FAN, 4, s.UNSIGNED_SHORT, 2 * (i.indices.length - 4)),
                        e.stencilManager.popStencil(t, i, e)) : (i = a.data[h],
                        e.shaderManager.setShader(o),
                        o = e.shaderManager.primitiveShader,
                        s.uniformMatrix3fv(o.translationMatrix, !1, t.worldTransform.toArray(!0)),
                        s.uniform1f(o.flipY, 1),
                        s.uniform2f(o.projectionVector, n.x, -n.y),
                        s.uniform2f(o.offsetVector, -r.x, -r.y),
                        s.uniform3fv(o.tintColor, PIXI.hex2rgb(t.tint)),
                        s.uniform1f(o.alpha, t.worldAlpha),
                        s.bindBuffer(s.ARRAY_BUFFER, i.buffer),
                        s.vertexAttribPointer(o.aVertexPosition, 2, s.FLOAT, !1, 24, 0),
                        s.vertexAttribPointer(o.colorAttribute, 4, s.FLOAT, !1, 24, 8),
                        s.bindBuffer(s.ELEMENT_ARRAY_BUFFER, i.indexBuffer),
                        s.drawElements(s.TRIANGLE_STRIP, i.indices.length, s.UNSIGNED_SHORT, 0))
            }
            ,
            PIXI.WebGLGraphics.updateGraphics = function(t, e) {
                var i = t._webGL[e.id];
                i || (i = t._webGL[e.id] = {
                    lastIndex: 0,
                    data: [],
                    gl: e
                }),
                    t.dirty = !1;
                var s;
                if (t.clearDirty) {
                    for (t.clearDirty = !1,
                             s = 0; s < i.data.length; s++) {
                        var n = i.data[s];
                        n.reset(),
                            PIXI.WebGLGraphics.graphicsDataPool.push(n)
                    }
                    i.data = [],
                        i.lastIndex = 0
                }
                var r;
                for (s = i.lastIndex; s < t.graphicsData.length; s++) {
                    var o = t.graphicsData[s];
                    if (o.type === PIXI.Graphics.POLY) {
                        if (o.points = o.shape.points.slice(),
                        o.shape.closed && (o.points[0] !== o.points[o.points.length - 2] || o.points[1] !== o.points[o.points.length - 1]) && o.points.push(o.points[0], o.points[1]),
                        o.fill && o.points.length >= 6)
                            if (o.points.length < 12) {
                                r = PIXI.WebGLGraphics.switchMode(i, 0);
                                var a = PIXI.WebGLGraphics.buildPoly(o, r);
                                a || (r = PIXI.WebGLGraphics.switchMode(i, 1),
                                    PIXI.WebGLGraphics.buildComplexPoly(o, r))
                            } else
                                r = PIXI.WebGLGraphics.switchMode(i, 1),
                                    PIXI.WebGLGraphics.buildComplexPoly(o, r);
                        o.lineWidth > 0 && (r = PIXI.WebGLGraphics.switchMode(i, 0),
                            PIXI.WebGLGraphics.buildLine(o, r))
                    } else
                        r = PIXI.WebGLGraphics.switchMode(i, 0),
                            o.type === PIXI.Graphics.RECT ? PIXI.WebGLGraphics.buildRectangle(o, r) : o.type === PIXI.Graphics.CIRC || o.type === PIXI.Graphics.ELIP ? PIXI.WebGLGraphics.buildCircle(o, r) : o.type === PIXI.Graphics.RREC && PIXI.WebGLGraphics.buildRoundedRectangle(o, r);
                    i.lastIndex++
                }
                for (s = 0; s < i.data.length; s++)
                    r = i.data[s],
                    r.dirty && r.upload()
            }
            ,
            PIXI.WebGLGraphics.switchMode = function(t, e) {
                var i;
                return t.data.length ? (i = t.data[t.data.length - 1],
                (i.mode !== e || 1 === e) && (i = PIXI.WebGLGraphics.graphicsDataPool.pop() || new PIXI.WebGLGraphicsData(t.gl),
                    i.mode = e,
                    t.data.push(i))) : (i = PIXI.WebGLGraphics.graphicsDataPool.pop() || new PIXI.WebGLGraphicsData(t.gl),
                    i.mode = e,
                    t.data.push(i)),
                    i.dirty = !0,
                    i
            }
            ,
            PIXI.WebGLGraphics.buildRectangle = function(t, e) {
                var i = t.shape
                    , s = i.x
                    , n = i.y
                    , r = i.width
                    , o = i.height;
                if (t.fill) {
                    var a = PIXI.hex2rgb(t.fillColor)
                        , h = t.fillAlpha
                        , l = a[0] * h
                        , u = a[1] * h
                        , c = a[2] * h
                        , d = e.points
                        , p = e.indices
                        , f = d.length / 6;
                    d.push(s, n),
                        d.push(l, u, c, h),
                        d.push(s + r, n),
                        d.push(l, u, c, h),
                        d.push(s, n + o),
                        d.push(l, u, c, h),
                        d.push(s + r, n + o),
                        d.push(l, u, c, h),
                        p.push(f, f, f + 1, f + 2, f + 3, f + 3)
                }
                if (t.lineWidth) {
                    var m = t.points;
                    t.points = [s, n, s + r, n, s + r, n + o, s, n + o, s, n],
                        PIXI.WebGLGraphics.buildLine(t, e),
                        t.points = m
                }
            }
            ,
            PIXI.WebGLGraphics.buildRoundedRectangle = function(t, e) {
                var i = t.shape
                    , s = i.x
                    , n = i.y
                    , r = i.width
                    , o = i.height
                    , a = i.radius
                    , h = [];
                if (h.push(s, n + a),
                    h = h.concat(PIXI.WebGLGraphics.quadraticBezierCurve(s, n + o - a, s, n + o, s + a, n + o)),
                    h = h.concat(PIXI.WebGLGraphics.quadraticBezierCurve(s + r - a, n + o, s + r, n + o, s + r, n + o - a)),
                    h = h.concat(PIXI.WebGLGraphics.quadraticBezierCurve(s + r, n + a, s + r, n, s + r - a, n)),
                    h = h.concat(PIXI.WebGLGraphics.quadraticBezierCurve(s + a, n, s, n, s, n + a)),
                    t.fill) {
                    var l = PIXI.hex2rgb(t.fillColor)
                        , u = t.fillAlpha
                        , c = l[0] * u
                        , d = l[1] * u
                        , p = l[2] * u
                        , f = e.points
                        , m = e.indices
                        , g = f.length / 6
                        , y = PIXI.PolyK.Triangulate(h)
                        , v = 0;
                    for (v = 0; v < y.length; v += 3)
                        m.push(y[v] + g),
                            m.push(y[v] + g),
                            m.push(y[v + 1] + g),
                            m.push(y[v + 2] + g),
                            m.push(y[v + 2] + g);
                    for (v = 0; v < h.length; v++)
                        f.push(h[v], h[++v], c, d, p, u)
                }
                if (t.lineWidth) {
                    var x = t.points;
                    t.points = h,
                        PIXI.WebGLGraphics.buildLine(t, e),
                        t.points = x
                }
            }
            ,
            PIXI.WebGLGraphics.quadraticBezierCurve = function(t, e, i, s, n, r) {
                function o(t, e, i) {
                    var s = e - t;
                    return t + s * i
                }
                for (var a, h, l, u, c, d, p = 20, f = [], m = 0, g = 0; p >= g; g++)
                    m = g / p,
                        a = o(t, i, m),
                        h = o(e, s, m),
                        l = o(i, n, m),
                        u = o(s, r, m),
                        c = o(a, l, m),
                        d = o(h, u, m),
                        f.push(c, d);
                return f
            }
            ,
            PIXI.WebGLGraphics.buildCircle = function(t, e) {
                var i, s, n = t.shape, r = n.x, o = n.y;
                t.type === PIXI.Graphics.CIRC ? (i = n.radius,
                    s = n.radius) : (i = n.width,
                    s = n.height);
                var a = 40
                    , h = 2 * Math.PI / a
                    , l = 0;
                if (t.fill) {
                    var u = PIXI.hex2rgb(t.fillColor)
                        , c = t.fillAlpha
                        , d = u[0] * c
                        , p = u[1] * c
                        , f = u[2] * c
                        , m = e.points
                        , g = e.indices
                        , y = m.length / 6;
                    for (g.push(y),
                             l = 0; a + 1 > l; l++)
                        m.push(r, o, d, p, f, c),
                            m.push(r + Math.sin(h * l) * i, o + Math.cos(h * l) * s, d, p, f, c),
                            g.push(y++, y++);
                    g.push(y - 1)
                }
                if (t.lineWidth) {
                    var v = t.points;
                    for (t.points = [],
                             l = 0; a + 1 > l; l++)
                        t.points.push(r + Math.sin(h * l) * i, o + Math.cos(h * l) * s);
                    PIXI.WebGLGraphics.buildLine(t, e),
                        t.points = v
                }
            }
            ,
            PIXI.WebGLGraphics.buildLine = function(t, e) {
                var i = 0
                    , s = t.points;
                if (0 !== s.length) {
                    if (t.lineWidth % 2)
                        for (i = 0; i < s.length; i++)
                            s[i] += .5;
                    var n = new PIXI.Point(s[0],s[1])
                        , r = new PIXI.Point(s[s.length - 2],s[s.length - 1]);
                    if (n.x === r.x && n.y === r.y) {
                        s = s.slice(),
                            s.pop(),
                            s.pop(),
                            r = new PIXI.Point(s[s.length - 2],s[s.length - 1]);
                        var o = r.x + .5 * (n.x - r.x)
                            , a = r.y + .5 * (n.y - r.y);
                        s.unshift(o, a),
                            s.push(o, a)
                    }
                    var h, l, u, c, d, p, f, m, g, y, v, x, _, b, w, T, S, C, P, A, R, I, M, E = e.points, O = e.indices, L = s.length / 2, D = s.length, k = E.length / 6, B = t.lineWidth / 2, F = PIXI.hex2rgb(t.lineColor), U = t.lineAlpha, G = F[0] * U, N = F[1] * U, X = F[2] * U;
                    for (u = s[0],
                             c = s[1],
                             d = s[2],
                             p = s[3],
                             g = -(c - p),
                             y = u - d,
                             M = Math.sqrt(g * g + y * y),
                             g /= M,
                             y /= M,
                             g *= B,
                             y *= B,
                             E.push(u - g, c - y, G, N, X, U),
                             E.push(u + g, c + y, G, N, X, U),
                             i = 1; L - 1 > i; i++)
                        u = s[2 * (i - 1)],
                            c = s[2 * (i - 1) + 1],
                            d = s[2 * i],
                            p = s[2 * i + 1],
                            f = s[2 * (i + 1)],
                            m = s[2 * (i + 1) + 1],
                            g = -(c - p),
                            y = u - d,
                            M = Math.sqrt(g * g + y * y),
                            g /= M,
                            y /= M,
                            g *= B,
                            y *= B,
                            v = -(p - m),
                            x = d - f,
                            M = Math.sqrt(v * v + x * x),
                            v /= M,
                            x /= M,
                            v *= B,
                            x *= B,
                            w = -y + c - (-y + p),
                            T = -g + d - (-g + u),
                            S = (-g + u) * (-y + p) - (-g + d) * (-y + c),
                            C = -x + m - (-x + p),
                            P = -v + d - (-v + f),
                            A = (-v + f) * (-x + p) - (-v + d) * (-x + m),
                            R = w * P - C * T,
                            Math.abs(R) < .1 ? (R += 10.1,
                                E.push(d - g, p - y, G, N, X, U),
                                E.push(d + g, p + y, G, N, X, U)) : (h = (T * A - P * S) / R,
                                l = (C * S - w * A) / R,
                                I = (h - d) * (h - d) + (l - p) + (l - p),
                                I > 19600 ? (_ = g - v,
                                    b = y - x,
                                    M = Math.sqrt(_ * _ + b * b),
                                    _ /= M,
                                    b /= M,
                                    _ *= B,
                                    b *= B,
                                    E.push(d - _, p - b),
                                    E.push(G, N, X, U),
                                    E.push(d + _, p + b),
                                    E.push(G, N, X, U),
                                    E.push(d - _, p - b),
                                    E.push(G, N, X, U),
                                    D++) : (E.push(h, l),
                                    E.push(G, N, X, U),
                                    E.push(d - (h - d), p - (l - p)),
                                    E.push(G, N, X, U)));
                    for (u = s[2 * (L - 2)],
                             c = s[2 * (L - 2) + 1],
                             d = s[2 * (L - 1)],
                             p = s[2 * (L - 1) + 1],
                             g = -(c - p),
                             y = u - d,
                             M = Math.sqrt(g * g + y * y),
                             g /= M,
                             y /= M,
                             g *= B,
                             y *= B,
                             E.push(d - g, p - y),
                             E.push(G, N, X, U),
                             E.push(d + g, p + y),
                             E.push(G, N, X, U),
                             O.push(k),
                             i = 0; D > i; i++)
                        O.push(k++);
                    O.push(k - 1)
                }
            }
            ,
            PIXI.WebGLGraphics.buildComplexPoly = function(t, e) {
                var i = t.points.slice();
                if (!(i.length < 6)) {
                    var s = e.indices;
                    e.points = i,
                        e.alpha = t.fillAlpha,
                        e.color = PIXI.hex2rgb(t.fillColor);
                    for (var n, r, o = 1 / 0, a = -(1 / 0), h = 1 / 0, l = -(1 / 0), u = 0; u < i.length; u += 2)
                        n = i[u],
                            r = i[u + 1],
                            o = o > n ? n : o,
                            a = n > a ? n : a,
                            h = h > r ? r : h,
                            l = r > l ? r : l;
                    i.push(o, h, a, h, a, l, o, l);
                    var c = i.length / 2;
                    for (u = 0; c > u; u++)
                        s.push(u)
                }
            }
            ,
            PIXI.WebGLGraphics.buildPoly = function(t, e) {
                var i = t.points;
                if (!(i.length < 6)) {
                    var s = e.points
                        , n = e.indices
                        , r = i.length / 2
                        , o = PIXI.hex2rgb(t.fillColor)
                        , a = t.fillAlpha
                        , h = o[0] * a
                        , l = o[1] * a
                        , u = o[2] * a
                        , c = PIXI.PolyK.Triangulate(i);
                    if (!c)
                        return !1;
                    var d = s.length / 6
                        , p = 0;
                    for (p = 0; p < c.length; p += 3)
                        n.push(c[p] + d),
                            n.push(c[p] + d),
                            n.push(c[p + 1] + d),
                            n.push(c[p + 2] + d),
                            n.push(c[p + 2] + d);
                    for (p = 0; r > p; p++)
                        s.push(i[2 * p], i[2 * p + 1], h, l, u, a);
                    return !0
                }
            }
            ,
            PIXI.WebGLGraphics.graphicsDataPool = [],
            PIXI.WebGLGraphicsData = function(t) {
                this.gl = t,
                    this.color = [0, 0, 0],
                    this.points = [],
                    this.indices = [],
                    this.buffer = t.createBuffer(),
                    this.indexBuffer = t.createBuffer(),
                    this.mode = 1,
                    this.alpha = 1,
                    this.dirty = !0
            }
            ,
            PIXI.WebGLGraphicsData.prototype.reset = function() {
                this.points = [],
                    this.indices = []
            }
            ,
            PIXI.WebGLGraphicsData.prototype.upload = function() {
                var t = this.gl;
                this.glPoints = new PIXI.Float32Array(this.points),
                    t.bindBuffer(t.ARRAY_BUFFER, this.buffer),
                    t.bufferData(t.ARRAY_BUFFER, this.glPoints, t.STATIC_DRAW),
                    this.glIndicies = new PIXI.Uint16Array(this.indices),
                    t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.indexBuffer),
                    t.bufferData(t.ELEMENT_ARRAY_BUFFER, this.glIndicies, t.STATIC_DRAW),
                    this.dirty = !1
            }
            ,
            PIXI.CanvasGraphics = function() {}
            ,
            PIXI.CanvasGraphics.renderGraphics = function(t, e) {
                var i = t.worldAlpha;
                t.dirty && (this.updateGraphicsTint(t),
                    t.dirty = !1);
                for (var s = 0; s < t.graphicsData.length; s++) {
                    var n = t.graphicsData[s]
                        , r = n.shape
                        , o = n._fillTint
                        , a = n._lineTint;
                    if (e.lineWidth = n.lineWidth,
                    n.type === PIXI.Graphics.POLY) {
                        e.beginPath();
                        var h = r.points;
                        e.moveTo(h[0], h[1]);
                        for (var l = 1; l < h.length / 2; l++)
                            e.lineTo(h[2 * l], h[2 * l + 1]);
                        r.closed && e.lineTo(h[0], h[1]),
                        h[0] === h[h.length - 2] && h[1] === h[h.length - 1] && e.closePath(),
                        n.fill && (e.globalAlpha = n.fillAlpha * i,
                            e.fillStyle = "#" + ("00000" + (0 | o).toString(16)).substr(-6),
                            e.fill()),
                        n.lineWidth && (e.globalAlpha = n.lineAlpha * i,
                            e.strokeStyle = "#" + ("00000" + (0 | a).toString(16)).substr(-6),
                            e.stroke())
                    } else if (n.type === PIXI.Graphics.RECT)
                        (n.fillColor || 0 === n.fillColor) && (e.globalAlpha = n.fillAlpha * i,
                            e.fillStyle = "#" + ("00000" + (0 | o).toString(16)).substr(-6),
                            e.fillRect(r.x, r.y, r.width, r.height)),
                        n.lineWidth && (e.globalAlpha = n.lineAlpha * i,
                            e.strokeStyle = "#" + ("00000" + (0 | a).toString(16)).substr(-6),
                            e.strokeRect(r.x, r.y, r.width, r.height));
                    else if (n.type === PIXI.Graphics.CIRC)
                        e.beginPath(),
                            e.arc(r.x, r.y, r.radius, 0, 2 * Math.PI),
                            e.closePath(),
                        n.fill && (e.globalAlpha = n.fillAlpha * i,
                            e.fillStyle = "#" + ("00000" + (0 | o).toString(16)).substr(-6),
                            e.fill()),
                        n.lineWidth && (e.globalAlpha = n.lineAlpha * i,
                            e.strokeStyle = "#" + ("00000" + (0 | a).toString(16)).substr(-6),
                            e.stroke());
                    else if (n.type === PIXI.Graphics.ELIP) {
                        var u = 2 * r.width
                            , c = 2 * r.height
                            , d = r.x - u / 2
                            , p = r.y - c / 2;
                        e.beginPath();
                        var f = .5522848
                            , m = u / 2 * f
                            , g = c / 2 * f
                            , y = d + u
                            , v = p + c
                            , x = d + u / 2
                            , _ = p + c / 2;
                        e.moveTo(d, _),
                            e.bezierCurveTo(d, _ - g, x - m, p, x, p),
                            e.bezierCurveTo(x + m, p, y, _ - g, y, _),
                            e.bezierCurveTo(y, _ + g, x + m, v, x, v),
                            e.bezierCurveTo(x - m, v, d, _ + g, d, _),
                            e.closePath(),
                        n.fill && (e.globalAlpha = n.fillAlpha * i,
                            e.fillStyle = "#" + ("00000" + (0 | o).toString(16)).substr(-6),
                            e.fill()),
                        n.lineWidth && (e.globalAlpha = n.lineAlpha * i,
                            e.strokeStyle = "#" + ("00000" + (0 | a).toString(16)).substr(-6),
                            e.stroke())
                    } else if (n.type === PIXI.Graphics.RREC) {
                        var b = r.x
                            , w = r.y
                            , T = r.width
                            , S = r.height
                            , C = r.radius
                            , P = Math.min(T, S) / 2 | 0;
                        C = C > P ? P : C,
                            e.beginPath(),
                            e.moveTo(b, w + C),
                            e.lineTo(b, w + S - C),
                            e.quadraticCurveTo(b, w + S, b + C, w + S),
                            e.lineTo(b + T - C, w + S),
                            e.quadraticCurveTo(b + T, w + S, b + T, w + S - C),
                            e.lineTo(b + T, w + C),
                            e.quadraticCurveTo(b + T, w, b + T - C, w),
                            e.lineTo(b + C, w),
                            e.quadraticCurveTo(b, w, b, w + C),
                            e.closePath(),
                        (n.fillColor || 0 === n.fillColor) && (e.globalAlpha = n.fillAlpha * i,
                            e.fillStyle = "#" + ("00000" + (0 | o).toString(16)).substr(-6),
                            e.fill()),
                        n.lineWidth && (e.globalAlpha = n.lineAlpha * i,
                            e.strokeStyle = "#" + ("00000" + (0 | a).toString(16)).substr(-6),
                            e.stroke())
                    }
                }
            }
            ,
            PIXI.CanvasGraphics.renderGraphicsMask = function(t, e) {
                var i = t.graphicsData.length;
                if (0 !== i) {
                    e.beginPath();
                    for (var s = 0; i > s; s++) {
                        var n = t.graphicsData[s]
                            , r = n.shape;
                        if (n.type === PIXI.Graphics.POLY) {
                            var o = r.points;
                            e.moveTo(o[0], o[1]);
                            for (var a = 1; a < o.length / 2; a++)
                                e.lineTo(o[2 * a], o[2 * a + 1]);
                            o[0] === o[o.length - 2] && o[1] === o[o.length - 1] && e.closePath()
                        } else if (n.type === PIXI.Graphics.RECT)
                            e.rect(r.x, r.y, r.width, r.height),
                                e.closePath();
                        else if (n.type === PIXI.Graphics.CIRC)
                            e.arc(r.x, r.y, r.radius, 0, 2 * Math.PI),
                                e.closePath();
                        else if (n.type === PIXI.Graphics.ELIP) {
                            var h = 2 * r.width
                                , l = 2 * r.height
                                , u = r.x - h / 2
                                , c = r.y - l / 2
                                , d = .5522848
                                , p = h / 2 * d
                                , f = l / 2 * d
                                , m = u + h
                                , g = c + l
                                , y = u + h / 2
                                , v = c + l / 2;
                            e.moveTo(u, v),
                                e.bezierCurveTo(u, v - f, y - p, c, y, c),
                                e.bezierCurveTo(y + p, c, m, v - f, m, v),
                                e.bezierCurveTo(m, v + f, y + p, g, y, g),
                                e.bezierCurveTo(y - p, g, u, v + f, u, v),
                                e.closePath()
                        } else if (n.type === PIXI.Graphics.RREC) {
                            var x = r.x
                                , _ = r.y
                                , b = r.width
                                , w = r.height
                                , T = r.radius
                                , S = Math.min(b, w) / 2 | 0;
                            T = T > S ? S : T,
                                e.moveTo(x, _ + T),
                                e.lineTo(x, _ + w - T),
                                e.quadraticCurveTo(x, _ + w, x + T, _ + w),
                                e.lineTo(x + b - T, _ + w),
                                e.quadraticCurveTo(x + b, _ + w, x + b, _ + w - T),
                                e.lineTo(x + b, _ + T),
                                e.quadraticCurveTo(x + b, _, x + b - T, _),
                                e.lineTo(x + T, _),
                                e.quadraticCurveTo(x, _, x, _ + T),
                                e.closePath()
                        }
                    }
                }
            }
            ,
            PIXI.CanvasGraphics.updateGraphicsTint = function(t) {
                if (16777215 !== t.tint)
                    for (var e = (t.tint >> 16 & 255) / 255, i = (t.tint >> 8 & 255) / 255, s = (255 & t.tint) / 255, n = 0; n < t.graphicsData.length; n++) {
                        var r = t.graphicsData[n]
                            , o = 0 | r.fillColor
                            , a = 0 | r.lineColor;
                        r._fillTint = ((o >> 16 & 255) / 255 * e * 255 << 16) + ((o >> 8 & 255) / 255 * i * 255 << 8) + (255 & o) / 255 * s * 255,
                            r._lineTint = ((a >> 16 & 255) / 255 * e * 255 << 16) + ((a >> 8 & 255) / 255 * i * 255 << 8) + (255 & a) / 255 * s * 255
                    }
            }
            ,
            i.Graphics = function(t, e, s) {
                void 0 === e && (e = 0),
                void 0 === s && (s = 0),
                    this.type = i.GRAPHICS,
                    this.physicsType = i.SPRITE,
                    PIXI.Graphics.call(this),
                    i.Component.Core.init.call(this, t, e, s, "", null)
            }
            ,
            i.Graphics.prototype = Object.create(PIXI.Graphics.prototype),
            i.Graphics.prototype.constructor = i.Graphics,
            i.Component.Core.install.call(i.Graphics.prototype, ["Angle", "AutoCull", "Bounds", "Destroy", "FixedToCamera", "InputEnabled", "InWorld", "LifeSpan", "PhysicsBody", "Reset"]),
            i.Graphics.prototype.preUpdatePhysics = i.Component.PhysicsBody.preUpdate,
            i.Graphics.prototype.preUpdateLifeSpan = i.Component.LifeSpan.preUpdate,
            i.Graphics.prototype.preUpdateInWorld = i.Component.InWorld.preUpdate,
            i.Graphics.prototype.preUpdateCore = i.Component.Core.preUpdate,
            i.Graphics.prototype.preUpdate = function() {
                return !!(this.preUpdatePhysics() && this.preUpdateLifeSpan() && this.preUpdateInWorld()) && this.preUpdateCore()
            }
            ,
            i.Graphics.prototype.destroy = function(t) {
                this.clear(),
                    i.Component.Destroy.prototype.destroy.call(this, t)
            }
            ,
            i.Graphics.prototype.drawTriangle = function(t, e) {
                void 0 === e && (e = !1);
                var s = new i.Polygon(t);
                if (e) {
                    var n = new i.Point(this.game.camera.x - t[0].x,this.game.camera.y - t[0].y)
                        , r = new i.Point(t[1].x - t[0].x,t[1].y - t[0].y)
                        , o = new i.Point(t[1].x - t[2].x,t[1].y - t[2].y)
                        , a = o.cross(r);
                    n.dot(a) > 0 && this.drawPolygon(s)
                } else
                    this.drawPolygon(s)
            }
            ,
            i.Graphics.prototype.drawTriangles = function(t, e, s) {
                void 0 === s && (s = !1);
                var n, r = new i.Point, o = new i.Point, a = new i.Point, h = [];
                if (e)
                    if (t[0]instanceof i.Point)
                        for (n = 0; n < e.length / 3; n++)
                            h.push(t[e[3 * n]]),
                                h.push(t[e[3 * n + 1]]),
                                h.push(t[e[3 * n + 2]]),
                            3 === h.length && (this.drawTriangle(h, s),
                                h = []);
                    else
                        for (n = 0; n < e.length; n++)
                            r.x = t[2 * e[n]],
                                r.y = t[2 * e[n] + 1],
                                h.push(r.copyTo({})),
                            3 === h.length && (this.drawTriangle(h, s),
                                h = []);
                else if (t[0]instanceof i.Point)
                    for (n = 0; n < t.length / 3; n++)
                        this.drawTriangle([t[3 * n], t[3 * n + 1], t[3 * n + 2]], s);
                else
                    for (n = 0; n < t.length / 6; n++)
                        r.x = t[6 * n + 0],
                            r.y = t[6 * n + 1],
                            o.x = t[6 * n + 2],
                            o.y = t[6 * n + 3],
                            a.x = t[6 * n + 4],
                            a.y = t[6 * n + 5],
                            this.drawTriangle([r, o, a], s)
            }
            ,
            i.RenderTexture = function(t, e, s, n, r, o) {
                void 0 === n && (n = ""),
                void 0 === r && (r = i.scaleModes.DEFAULT),
                void 0 === o && (o = 1),
                    this.game = t,
                    this.key = n,
                    this.type = i.RENDERTEXTURE,
                    this._tempMatrix = new PIXI.Matrix,
                    PIXI.RenderTexture.call(this, e, s, this.game.renderer, r, o),
                    this.render = i.RenderTexture.prototype.render
            }
            ,
            i.RenderTexture.prototype = Object.create(PIXI.RenderTexture.prototype),
            i.RenderTexture.prototype.constructor = i.RenderTexture,
            i.RenderTexture.prototype.renderXY = function(t, e, i, s) {
                t.updateTransform(),
                    this._tempMatrix.copyFrom(t.worldTransform),
                    this._tempMatrix.tx = e,
                    this._tempMatrix.ty = i,
                    this.renderer.type === PIXI.WEBGL_RENDERER ? this.renderWebGL(t, this._tempMatrix, s) : this.renderCanvas(t, this._tempMatrix, s)
            }
            ,
            i.RenderTexture.prototype.renderRawXY = function(t, e, i, s) {
                this._tempMatrix.identity().translate(e, i),
                    this.renderer.type === PIXI.WEBGL_RENDERER ? this.renderWebGL(t, this._tempMatrix, s) : this.renderCanvas(t, this._tempMatrix, s)
            }
            ,
            i.RenderTexture.prototype.render = function(t, e, i) {
                void 0 === e || null === e ? this._tempMatrix.copyFrom(t.worldTransform) : this._tempMatrix.copyFrom(e),
                    this.renderer.type === PIXI.WEBGL_RENDERER ? this.renderWebGL(t, this._tempMatrix, i) : this.renderCanvas(t, this._tempMatrix, i)
            }
            ,
            i.Text = function(t, e, s, n, r) {
                e = e || 0,
                    s = s || 0,
                    n = void 0 === n || null === n ? "" : n.toString(),
                    r = r || {},
                    this.type = i.TEXT,
                    this.physicsType = i.SPRITE,
                    this.padding = new i.Point,
                    this.textBounds = null,
                    this.canvas = PIXI.CanvasPool.create(this),
                    this.context = this.canvas.getContext("2d"),
                    this.colors = [],
                    this.strokeColors = [],
                    this.fontStyles = [],
                    this.fontWeights = [],
                    this.autoRound = !1,
                    this._res = t.renderer.resolution,
                    this._text = n,
                    this._fontComponents = null,
                    this._lineSpacing = 0,
                    this._charCount = 0,
                    this._width = 0,
                    this._height = 0,
                    i.Sprite.call(this, t, e, s, PIXI.Texture.fromCanvas(this.canvas)),
                    this.setStyle(r),
                "" !== n && this.updateText()
            }
            ,
            i.Text.prototype = Object.create(i.Sprite.prototype),
            i.Text.prototype.constructor = i.Text,
        i.Text.prototype.preUpdate = function() {
            return !!(this.preUpdatePhysics() && this.preUpdateLifeSpan() && this.preUpdateInWorld()) && this.preUpdateCore()
        }
        ,
        i.Text.prototype.update = function() {}
        ,
        i.Text.prototype.destroy = function(t) {
            this.texture.destroy(!0),
                PIXI.CanvasPool.remove(this),
                i.Component.Destroy.prototype.destroy.call(this, t)
        }
        ,
        i.Text.prototype.setShadow = function(t, e, i, s, n, r) {
            return void 0 === t && (t = 0),
            void 0 === e && (e = 0),
            void 0 === i && (i = "rgba(0, 0, 0, 1)"),
            void 0 === s && (s = 0),
            void 0 === n && (n = !0),
            void 0 === r && (r = !0),
                this.style.shadowOffsetX = t,
                this.style.shadowOffsetY = e,
                this.style.shadowColor = i,
                this.style.shadowBlur = s,
                this.style.shadowStroke = n,
                this.style.shadowFill = r,
                this.dirty = !0,
                this
        }
        ,
        i.Text.prototype.setStyle = function(t) {
            t = t || {},
                t.font = t.font || "bold 20pt Arial",
                t.backgroundColor = t.backgroundColor || null,
                t.fill = t.fill || "black",
                t.align = t.align || "left",
                t.boundsAlignH = t.boundsAlignH || "left",
                t.boundsAlignV = t.boundsAlignV || "top",
                t.stroke = t.stroke || "black",
                t.strokeThickness = t.strokeThickness || 0,
                t.wordWrap = t.wordWrap || !1,
                t.wordWrapWidth = t.wordWrapWidth || 100,
                t.shadowOffsetX = t.shadowOffsetX || 0,
                t.shadowOffsetY = t.shadowOffsetY || 0,
                t.shadowColor = t.shadowColor || "rgba(0,0,0,0)",
                t.shadowBlur = t.shadowBlur || 0,
                t.tabs = t.tabs || 0;
            var e = this.fontToComponents(t.font);
            return t.fontStyle && (e.fontStyle = t.fontStyle),
            t.fontVariant && (e.fontVariant = t.fontVariant),
            t.fontWeight && (e.fontWeight = t.fontWeight),
            t.fontSize && ("number" == typeof t.fontSize && (t.fontSize = t.fontSize + "px"),
                e.fontSize = t.fontSize),
                this._fontComponents = e,
                t.font = this.componentsToFont(this._fontComponents),
                this.style = t,
                this.dirty = !0,
                this
        }
        ,
        i.Text.prototype.updateText = function() {
            this.texture.baseTexture.resolution = this._res,
                this.context.font = this.style.font;
            var t = this.text;
            this.style.wordWrap && (t = this.runWordWrap(this.text));
            for (var e = t.split(/(?:\r\n|\r|\n)/), i = this.style.tabs, s = [], n = 0, r = this.determineFontProperties(this.style.font), o = 0; o < e.length; o++) {
                if (0 === i) {
                    var a = this.context.measureText(e[o]).width + this.style.strokeThickness + this.padding.x;
                    this.style.wordWrap && (a -= this.context.measureText(" ").width)
                } else {
                    var h = e[o].split(/(?:\t)/)
                        , a = this.padding.x + this.style.strokeThickness;
                    if (Array.isArray(i))
                        for (var l = 0, u = 0; u < h.length; u++) {
                            var c = Math.ceil(this.context.measureText(h[u]).width);
                            u > 0 && (l += i[u - 1]),
                                a = l + c
                        }
                    else
                        for (var u = 0; u < h.length; u++) {
                            a += Math.ceil(this.context.measureText(h[u]).width);
                            var d = this.game.math.snapToCeil(a, i) - a;
                            a += d
                        }
                }
                s[o] = Math.ceil(a),
                    n = Math.max(n, s[o])
            }
            this.canvas.width = n * this._res;
            var p = r.fontSize + this.style.strokeThickness + this.padding.y
                , f = p * e.length
                , m = this._lineSpacing;
            if (0 > m && Math.abs(m) > p && (m = -p),
            0 !== m) {
                var d = m * (e.length - 1);
                f += d
            }
            this.canvas.height = f * this._res,
                this.context.scale(this._res, this._res),
            navigator.isCocoonJS && this.context.clearRect(0, 0, this.canvas.width, this.canvas.height),
            this.style.backgroundColor && (this.context.fillStyle = this.style.backgroundColor,
                this.context.fillRect(0, 0, this.canvas.width, this.canvas.height)),
                this.context.fillStyle = this.style.fill,
                this.context.font = this.style.font,
                this.context.strokeStyle = this.style.stroke,
                this.context.textBaseline = "alphabetic",
                this.context.lineWidth = this.style.strokeThickness,
                this.context.lineCap = "round",
                this.context.lineJoin = "round";
            var g, y;
            for (this._charCount = 0,
                     o = 0; o < e.length; o++)
                g = this.style.strokeThickness / 2,
                    y = this.style.strokeThickness / 2 + o * p + r.ascent,
                o > 0 && (y += m * o),
                    "right" === this.style.align ? g += n - s[o] : "center" === this.style.align && (g += (n - s[o]) / 2),
                this.autoRound && (g = Math.round(g),
                    y = Math.round(y)),
                    this.colors.length > 0 || this.strokeColors.length > 0 || this.fontWeights.length > 0 || this.fontStyles.length > 0 ? this.updateLine(e[o], g, y) : (this.style.stroke && this.style.strokeThickness && (this.updateShadow(this.style.shadowStroke),
                        0 === i ? this.context.strokeText(e[o], g, y) : this.renderTabLine(e[o], g, y, !1)),
                    this.style.fill && (this.updateShadow(this.style.shadowFill),
                        0 === i ? this.context.fillText(e[o], g, y) : this.renderTabLine(e[o], g, y, !0)));
            this.updateTexture()
        }
        ,
        i.Text.prototype.renderTabLine = function(t, e, i, s) {
            var n = t.split(/(?:\t)/)
                , r = this.style.tabs
                , o = 0;
            if (Array.isArray(r))
                for (var a = 0, h = 0; h < n.length; h++)
                    h > 0 && (a += r[h - 1]),
                        o = e + a,
                        s ? this.context.fillText(n[h], o, i) : this.context.strokeText(n[h], o, i);
            else
                for (var h = 0; h < n.length; h++) {
                    var l = Math.ceil(this.context.measureText(n[h]).width);
                    o = this.game.math.snapToCeil(e, r),
                        s ? this.context.fillText(n[h], o, i) : this.context.strokeText(n[h], o, i),
                        e = o + l
                }
        }
        ,
        i.Text.prototype.updateShadow = function(t) {
            t ? (this.context.shadowOffsetX = this.style.shadowOffsetX,
                this.context.shadowOffsetY = this.style.shadowOffsetY,
                this.context.shadowColor = this.style.shadowColor,
                this.context.shadowBlur = this.style.shadowBlur) : (this.context.shadowOffsetX = 0,
                this.context.shadowOffsetY = 0,
                this.context.shadowColor = 0,
                this.context.shadowBlur = 0)
        }
        ,
        i.Text.prototype.updateLine = function(t, e, i) {
            for (var s = 0; s < t.length; s++) {
                var n = t[s];
                if (this.fontWeights.length > 0 || this.fontStyles.length > 0) {
                    var r = this.fontToComponents(this.context.font);
                    this.fontStyles[this._charCount] && (r.fontStyle = this.fontStyles[this._charCount]),
                    this.fontWeights[this._charCount] && (r.fontWeight = this.fontWeights[this._charCount]),
                        this.context.font = this.componentsToFont(r)
                }
                this.style.stroke && this.style.strokeThickness && (this.strokeColors[this._charCount] && (this.context.strokeStyle = this.strokeColors[this._charCount]),
                    this.updateShadow(this.style.shadowStroke),
                    this.context.strokeText(n, e, i)),
                this.style.fill && (this.colors[this._charCount] && (this.context.fillStyle = this.colors[this._charCount]),
                    this.updateShadow(this.style.shadowFill),
                    this.context.fillText(n, e, i)),
                    e += this.context.measureText(n).width,
                    this._charCount++
            }
        }
        ,
        i.Text.prototype.clearColors = function() {
            return this.colors = [],
                this.strokeColors = [],
                this.dirty = !0,
                this
        }
        ,
        i.Text.prototype.clearFontValues = function() {
            return this.fontStyles = [],
                this.fontWeights = [],
                this.dirty = !0,
                this
        }
        ,
        i.Text.prototype.addColor = function(t, e) {
            return this.colors[e] = t,
                this.dirty = !0,
                this
        }
        ,
        i.Text.prototype.addStrokeColor = function(t, e) {
            return this.strokeColors[e] = t,
                this.dirty = !0,
                this
        }
        ,
        i.Text.prototype.addFontStyle = function(t, e) {
            return this.fontStyles[e] = t,
                this.dirty = !0,
                this
        }
        ,
        i.Text.prototype.addFontWeight = function(t, e) {
            return this.fontWeights[e] = t,
                this.dirty = !0,
                this
        }
        ,
        i.Text.prototype.runWordWrap = function(t) {
            for (var e = "", i = t.split("\n"), s = 0; s < i.length; s++) {
                for (var n = this.style.wordWrapWidth, r = i[s].split(" "), o = 0; o < r.length; o++) {
                    var a = this.context.measureText(r[o]).width
                        , h = a + this.context.measureText(" ").width;
                    h > n ? (o > 0 && (e += "\n"),
                        e += r[o] + " ",
                        n = this.style.wordWrapWidth - a) : (n -= h,
                        e += r[o] + " ")
                }
                s < i.length - 1 && (e += "\n")
            }
            return e
        }
        ,
        i.Text.prototype.updateFont = function(t) {
            var e = this.componentsToFont(t);
            this.style.font !== e && (this.style.font = e,
                this.dirty = !0,
            this.parent && this.updateTransform())
        }
        ,
        i.Text.prototype.fontToComponents = function(t) {
            var e = t.match(/^\s*(?:\b(normal|italic|oblique|inherit)?\b)\s*(?:\b(normal|small-caps|inherit)?\b)\s*(?:\b(normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900|inherit)?\b)\s*(?:\b(xx-small|x-small|small|medium|large|x-large|xx-large|larger|smaller|0|\d*(?:[.]\d*)?(?:%|[a-z]{2,5}))?\b)\s*(.*)\s*$/);
            return e ? {
                font: t,
                fontStyle: e[1] || "normal",
                fontVariant: e[2] || "normal",
                fontWeight: e[3] || "normal",
                fontSize: e[4] || "medium",
                fontFamily: e[5]
            } : (console.warn("Phaser.Text - unparsable CSS font: " + t),
                {
                    font: t
                })
        }
        ,
        i.Text.prototype.componentsToFont = function(t) {
            var e, i = [];
            return e = t.fontStyle,
            e && "normal" !== e && i.push(e),
                e = t.fontVariant,
            e && "normal" !== e && i.push(e),
                e = t.fontWeight,
            e && "normal" !== e && i.push(e),
                e = t.fontSize,
            e && "medium" !== e && i.push(e),
                e = t.fontFamily,
            e && i.push(e),
            i.length || i.push(t.font),
                i.join(" ")
        }
        ,
        i.Text.prototype.setText = function(t) {
            return this.text = t.toString() || "",
                this.dirty = !0,
                this
        }
        ,
        i.Text.prototype.parseList = function(t) {
            if (!Array.isArray(t))
                return this;
            for (var e = "", i = 0; i < t.length; i++)
                Array.isArray(t[i]) ? (e += t[i].join("\t"),
                i < t.length - 1 && (e += "\n")) : (e += t[i],
                i < t.length - 1 && (e += "\t"));
            return this.text = e,
                this.dirty = !0,
                this
        }
        ,
        i.Text.prototype.setTextBounds = function(t, e, s, n) {
            return void 0 === t ? this.textBounds = null : (this.textBounds ? this.textBounds.setTo(t, e, s, n) : this.textBounds = new i.Rectangle(t,e,s,n),
            this.style.wordWrapWidth > s && (this.style.wordWrapWidth = s)),
                this.updateTexture(),
                this
        }
        ,
        i.Text.prototype.updateTexture = function() {
            var t = this.texture.baseTexture
                , e = this.texture.crop
                , i = this.texture.frame
                , s = this.canvas.width
                , n = this.canvas.height;
            if (t.width = s,
                t.height = n,
                e.width = s,
                e.height = n,
                i.width = s,
                i.height = n,
                this.texture.width = s,
                this.texture.height = n,
                this._width = s,
                this._height = n,
                this.textBounds) {
                var r = this.textBounds.x
                    , o = this.textBounds.y;
                "right" === this.style.boundsAlignH ? r += this.textBounds.width - this.canvas.width : "center" === this.style.boundsAlignH && (r += this.textBounds.halfWidth - this.canvas.width / 2),
                    "bottom" === this.style.boundsAlignV ? o += this.textBounds.height - this.canvas.height : "middle" === this.style.boundsAlignV && (o += this.textBounds.halfHeight - this.canvas.height / 2),
                    this.pivot.x = -r,
                    this.pivot.y = -o
            }
            this.renderable = 0 !== s && 0 !== n,
                this.texture.requiresReTint = !0,
                this.texture.baseTexture.dirty()
        }
        ,
        i.Text.prototype._renderWebGL = function(t) {
            this.dirty && (this.updateText(),
                this.dirty = !1),
                PIXI.Sprite.prototype._renderWebGL.call(this, t)
        }
        ,
        i.Text.prototype._renderCanvas = function(t) {
            this.dirty && (this.updateText(),
                this.dirty = !1),
                PIXI.Sprite.prototype._renderCanvas.call(this, t)
        }
        ,
        i.Text.prototype.determineFontProperties = function(t) {
            var e = i.Text.fontPropertiesCache[t];
            if (!e) {
                e = {};
                var s = i.Text.fontPropertiesCanvas
                    , n = i.Text.fontPropertiesContext;
                n.font = t;
                var r = Math.ceil(n.measureText("|MÉq").width)
                    , o = Math.ceil(n.measureText("|MÉq").width)
                    , a = 2 * o;
                if (o = 1.4 * o | 0,
                    s.width = r,
                    s.height = a,
                    n.fillStyle = "#f00",
                    n.fillRect(0, 0, r, a),
                    n.font = t,
                    n.textBaseline = "alphabetic",
                    n.fillStyle = "#000",
                    n.fillText("|MÉq", 0, o),
                    !n.getImageData(0, 0, r, a))
                    return e.ascent = o,
                        e.descent = o + 6,
                        e.fontSize = e.ascent + e.descent,
                        i.Text.fontPropertiesCache[t] = e,
                        e;
                var h, l, u = n.getImageData(0, 0, r, a).data, c = u.length, d = 4 * r, p = 0, f = !1;
                for (h = 0; o > h; h++) {
                    for (l = 0; d > l; l += 4)
                        if (255 !== u[p + l]) {
                            f = !0;
                            break
                        }
                    if (f)
                        break;
                    p += d
                }
                for (e.ascent = o - h,
                         p = c - d,
                         f = !1,
                         h = a; h > o; h--) {
                    for (l = 0; d > l; l += 4)
                        if (255 !== u[p + l]) {
                            f = !0;
                            break
                        }
                    if (f)
                        break;
                    p -= d
                }
                e.descent = h - o,
                    e.descent += 6,
                    e.fontSize = e.ascent + e.descent,
                    i.Text.fontPropertiesCache[t] = e
            }
            return e
        }
        ,
        i.Text.prototype.getBounds = function(t) {
            return this.dirty && (this.updateText(),
                this.dirty = !1),
                PIXI.Sprite.prototype.getBounds.call(this, t)
        }
        ,
        Object.defineProperty(i.Text.prototype, "text", {
            get: function() {
                return this._text
            },
            set: function(t) {
                t !== this._text && (this._text = t.toString() || "",
                    this.dirty = !0,
                this.parent && this.updateTransform())
            }
        }),
        Object.defineProperty(i.Text.prototype, "cssFont", {
            get: function() {
                return this.componentsToFont(this._fontComponents)
            },
            set: function(t) {
                t = t || "bold 20pt Arial",
                    this._fontComponents = this.fontToComponents(t),
                    this.updateFont(this._fontComponents)
            }
        }),
        Object.defineProperty(i.Text.prototype, "font", {
            get: function() {
                return this._fontComponents.fontFamily
            },
            set: function(t) {
                t = t || "Arial",
                    t = t.trim(),
                /^(?:inherit|serif|sans-serif|cursive|fantasy|monospace)$/.exec(t) || /['",]/.exec(t) || (t = "'" + t + "'"),
                    this._fontComponents.fontFamily = t,
                    this.updateFont(this._fontComponents)
            }
        }),
        Object.defineProperty(i.Text.prototype, "fontSize", {
            get: function() {
                var t = this._fontComponents.fontSize;
                return t && /(?:^0$|px$)/.exec(t) ? parseInt(t, 10) : t
            },
            set: function(t) {
                t = t || "0",
                "number" == typeof t && (t += "px"),
                    this._fontComponents.fontSize = t,
                    this.updateFont(this._fontComponents)
            }
        }),
        Object.defineProperty(i.Text.prototype, "fontWeight", {
            get: function() {
                return this._fontComponents.fontWeight || "normal"
            },
            set: function(t) {
                t = t || "normal",
                    this._fontComponents.fontWeight = t,
                    this.updateFont(this._fontComponents)
            }
        }),
        Object.defineProperty(i.Text.prototype, "fontStyle", {
            get: function() {
                return this._fontComponents.fontStyle || "normal"
            },
            set: function(t) {
                t = t || "normal",
                    this._fontComponents.fontStyle = t,
                    this.updateFont(this._fontComponents)
            }
        }),
        Object.defineProperty(i.Text.prototype, "fontVariant", {
            get: function() {
                return this._fontComponents.fontVariant || "normal"
            },
            set: function(t) {
                t = t || "normal",
                    this._fontComponents.fontVariant = t,
                    this.updateFont(this._fontComponents)
            }
        }),
        Object.defineProperty(i.Text.prototype, "fill", {
            get: function() {
                return this.style.fill
            },
            set: function(t) {
                t !== this.style.fill && (this.style.fill = t,
                    this.dirty = !0)
            }
        }),
        Object.defineProperty(i.Text.prototype, "align", {
            get: function() {
                return this.style.align
            },
            set: function(t) {
                t !== this.style.align && (this.style.align = t,
                    this.dirty = !0)
            }
        }),
        Object.defineProperty(i.Text.prototype, "resolution", {
            get: function() {
                return this._res
            },
            set: function(t) {
                t !== this._res && (this._res = t,
                    this.dirty = !0)
            }
        }),
        Object.defineProperty(i.Text.prototype, "tabs", {
            get: function() {
                return this.style.tabs
            },
            set: function(t) {
                t !== this.style.tabs && (this.style.tabs = t,
                    this.dirty = !0)
            }
        }),
        Object.defineProperty(i.Text.prototype, "boundsAlignH", {
            get: function() {
                return this.style.boundsAlignH
            },
            set: function(t) {
                t !== this.style.boundsAlignH && (this.style.boundsAlignH = t,
                    this.dirty = !0)
            }
        }),
        Object.defineProperty(i.Text.prototype, "boundsAlignV", {
            get: function() {
                return this.style.boundsAlignV
            },
            set: function(t) {
                t !== this.style.boundsAlignV && (this.style.boundsAlignV = t,
                    this.dirty = !0)
            }
        }),
        Object.defineProperty(i.Text.prototype, "stroke", {
            get: function() {
                return this.style.stroke
            },
            set: function(t) {
                t !== this.style.stroke && (this.style.stroke = t,
                    this.dirty = !0)
            }
        }),
        Object.defineProperty(i.Text.prototype, "strokeThickness", {
            get: function() {
                return this.style.strokeThickness
            },
            set: function(t) {
                t !== this.style.strokeThickness && (this.style.strokeThickness = t,
                    this.dirty = !0)
            }
        }),
        Object.defineProperty(i.Text.prototype, "wordWrap", {
            get: function() {
                return this.style.wordWrap
            },
            set: function(t) {
                t !== this.style.wordWrap && (this.style.wordWrap = t,
                    this.dirty = !0)
            }
        }),
        Object.defineProperty(i.Text.prototype, "wordWrapWidth", {
            get: function() {
                return this.style.wordWrapWidth
            },
            set: function(t) {
                t !== this.style.wordWrapWidth && (this.style.wordWrapWidth = t,
                    this.dirty = !0)
            }
        }),
        Object.defineProperty(i.Text.prototype, "lineSpacing", {
            get: function() {
                return this._lineSpacing
            },
            set: function(t) {
                t !== this._lineSpacing && (this._lineSpacing = parseFloat(t),
                    this.dirty = !0,
                this.parent && this.updateTransform())
            }
        }),
        Object.defineProperty(i.Text.prototype, "shadowOffsetX", {
            get: function() {
                return this.style.shadowOffsetX
            },
            set: function(t) {
                t !== this.style.shadowOffsetX && (this.style.shadowOffsetX = t,
                    this.dirty = !0)
            }
        }),
        Object.defineProperty(i.Text.prototype, "shadowOffsetY", {
            get: function() {
                return this.style.shadowOffsetY
            },
            set: function(t) {
                t !== this.style.shadowOffsetY && (this.style.shadowOffsetY = t,
                    this.dirty = !0)
            }
        }),
        Object.defineProperty(i.Text.prototype, "shadowColor", {
            get: function() {
                return this.style.shadowColor
            },
            set: function(t) {
                t !== this.style.shadowColor && (this.style.shadowColor = t,
                    this.dirty = !0)
            }
        }),
        Object.defineProperty(i.Text.prototype, "shadowBlur", {
            get: function() {
                return this.style.shadowBlur
            },
            set: function(t) {
                t !== this.style.shadowBlur && (this.style.shadowBlur = t,
                    this.dirty = !0)
            }
        }),
        Object.defineProperty(i.Text.prototype, "shadowStroke", {
            get: function() {
                return this.style.shadowStroke
            },
            set: function(t) {
                t !== this.style.shadowStroke && (this.style.shadowStroke = t,
                    this.dirty = !0)
            }
        }),
        Object.defineProperty(i.Text.prototype, "shadowFill", {
            get: function() {
                return this.style.shadowFill
            },
            set: function(t) {
                t !== this.style.shadowFill && (this.style.shadowFill = t,
                    this.dirty = !0)
            }
        }),
        Object.defineProperty(i.Text.prototype, "width", {
            get: function() {
                return this.dirty && (this.updateText(),
                    this.dirty = !1),
                this.scale.x * this.texture.frame.width
            },
            set: function(t) {
                this.scale.x = t / this.texture.frame.width,
                    this._width = t
            }
        }),
        Object.defineProperty(i.Text.prototype, "height", {
            get: function() {
                return this.dirty && (this.updateText(),
                    this.dirty = !1),
                this.scale.y * this.texture.frame.height
            },
            set: function(t) {
                this.scale.y = t / this.texture.frame.height,
                    this._height = t
            }
        }),
        i.Text.fontPropertiesCache = {},
        i.Text.fontPropertiesCanvas = PIXI.CanvasPool.create(i.Text.fontPropertiesCanvas),
        i.Text.fontPropertiesContext = i.Text.fontPropertiesCanvas.getContext("2d"),
        i.BitmapText = function(t, e, s, n, r, o, a) {
            e = e || 0,
                s = s || 0,
                n = n || "",
                r = r || "",
                o = o || 32,
                a = a || "left",
                PIXI.DisplayObjectContainer.call(this),
                this.type = i.BITMAPTEXT,
                this.physicsType = i.SPRITE,
                this.textWidth = 0,
                this.textHeight = 0,
                this.anchor = new i.Point,
                this._prevAnchor = new i.Point,
                this._glyphs = [],
                this._maxWidth = 0,
                this._text = r,
                this._data = t.cache.getBitmapFont(n),
                this._font = n,
                this._fontSize = o,
                this._align = a,
                this._tint = 16777215,
                this.updateText(),
                this.dirty = !1,
                i.Component.Core.init.call(this, t, e, s, "", null)
        }
        ,
        i.BitmapText.prototype = Object.create(PIXI.DisplayObjectContainer.prototype),
        i.BitmapText.prototype.constructor = i.BitmapText,
        i.Component.Core.install.call(i.BitmapText.prototype, ["Angle", "AutoCull", "Bounds", "Destroy", "FixedToCamera", "InputEnabled", "InWorld", "LifeSpan", "PhysicsBody", "Reset"]),
        i.BitmapText.prototype.preUpdatePhysics = i.Component.PhysicsBody.preUpdate,
        i.BitmapText.prototype.preUpdateLifeSpan = i.Component.LifeSpan.preUpdate,
        i.BitmapText.prototype.preUpdateInWorld = i.Component.InWorld.preUpdate,
        i.BitmapText.prototype.preUpdateCore = i.Component.Core.preUpdate,
        i.BitmapText.prototype.preUpdate = function() {
            return !!(this.preUpdatePhysics() && this.preUpdateLifeSpan() && this.preUpdateInWorld()) && this.preUpdateCore()
        }
        ,
        i.BitmapText.prototype.postUpdate = function() {
            i.Component.PhysicsBody.postUpdate.call(this),
                i.Component.FixedToCamera.postUpdate.call(this),
            this.body && this.body.type === i.Physics.ARCADE && (this.textWidth !== this.body.sourceWidth || this.textHeight !== this.body.sourceHeight) && this.body.setSize(this.textWidth, this.textHeight)
        }
        ,
        i.BitmapText.prototype.setText = function(t) {
            this.text = t
        }
        ,
        i.BitmapText.prototype.scanLine = function(t, e, i) {
            for (var s = 0, n = 0, r = -1, o = null, a = this._maxWidth > 0 ? this._maxWidth : null, h = [], l = 0; l < i.length; l++) {
                var u = l === i.length - 1;
                if (/(?:\r\n|\r|\n)/.test(i.charAt(l)))
                    return {
                        width: n,
                        text: i.substr(0, l),
                        end: u,
                        chars: h
                    };
                var c = i.charCodeAt(l)
                    , d = t.chars[c]
                    , p = 0;
                if (d) {
                    var f = o && d.kerning[o] ? d.kerning[o] : 0;
                    if (r = /(\s)/.test(i.charAt(l)) ? l : r,
                        p = (f + d.texture.width + d.xOffset) * e,
                    a && n + p >= a && r > -1)
                        return {
                            width: n,
                            text: i.substr(0, l - (l - r)),
                            end: u,
                            chars: h
                        };
                    n += d.xAdvance * e,
                        h.push(s + d.xOffset * e),
                        s += d.xAdvance * e,
                        o = c
                }
            }
            return {
                width: n,
                text: i,
                end: u,
                chars: h
            }
        }
        ,
        i.BitmapText.prototype.updateText = function() {
            var t = this._data.font;
            if (t) {
                var e = this.text
                    , i = this._fontSize / t.size
                    , s = []
                    , n = 0;
                this.textWidth = 0;
                do {
                    var r = this.scanLine(t, i, e);
                    r.y = n,
                        s.push(r),
                    r.width > this.textWidth && (this.textWidth = r.width),
                        n += t.lineHeight * i,
                        e = e.substr(r.text.length + 1)
                } while (r.end === !1);this.textHeight = n;
                for (var o = 0, a = 0, h = this.textWidth * this.anchor.x, l = this.textHeight * this.anchor.y, u = 0; u < s.length; u++) {
                    var r = s[u];
                    "right" === this._align ? a = this.textWidth - r.width : "center" === this._align && (a = (this.textWidth - r.width) / 2);
                    for (var c = 0; c < r.text.length; c++) {
                        var d = r.text.charCodeAt(c)
                            , p = t.chars[d]
                            , f = this._glyphs[o];
                        f ? f.texture = p.texture : (f = new PIXI.Sprite(p.texture),
                            f.name = r.text[c],
                            this._glyphs.push(f)),
                            f.position.x = r.chars[c] + a - h,
                            f.position.y = r.y + p.yOffset * i - l,
                            f.scale.set(i),
                            f.tint = this.tint,
                            f.texture.requiresReTint = !0,
                        f.parent || this.addChild(f),
                            o++
                    }
                }
                for (u = o; u < this._glyphs.length; u++)
                    this.removeChild(this._glyphs[u])
            }
        }
        ,
        i.BitmapText.prototype.purgeGlyphs = function() {
            for (var t = this._glyphs.length, e = [], i = 0; i < this._glyphs.length; i++)
                this._glyphs[i].parent !== this ? this._glyphs[i].destroy() : e.push(this._glyphs[i]);
            return this._glyphs = [],
                this._glyphs = e,
                this.updateText(),
            t - e.length
        }
        ,
        i.BitmapText.prototype.updateTransform = function() {
            (this.dirty || !this.anchor.equals(this._prevAnchor)) && (this.updateText(),
                this.dirty = !1,
                this._prevAnchor.copyFrom(this.anchor)),
                PIXI.DisplayObjectContainer.prototype.updateTransform.call(this)
        }
        ,
        Object.defineProperty(i.BitmapText.prototype, "align", {
            get: function() {
                return this._align
            },
            set: function(t) {
                t === this._align || "left" !== t && "center" !== t && "right" !== t || (this._align = t,
                    this.updateText())
            }
        }),
        Object.defineProperty(i.BitmapText.prototype, "tint", {
            get: function() {
                return this._tint
            },
            set: function(t) {
                t !== this._tint && (this._tint = t,
                    this.updateText())
            }
        }),
        Object.defineProperty(i.BitmapText.prototype, "font", {
            get: function() {
                return this._font
            },
            set: function(t) {
                t !== this._font && (this._font = t.trim(),
                    this._data = this.game.cache.getBitmapFont(this._font),
                    this.updateText())
            }
        }),
        Object.defineProperty(i.BitmapText.prototype, "fontSize", {
            get: function() {
                return this._fontSize
            },
            set: function(t) {
                t = parseInt(t, 10),
                t !== this._fontSize && t > 0 && (this._fontSize = t,
                    this.updateText())
            }
        }),
        Object.defineProperty(i.BitmapText.prototype, "text", {
            get: function() {
                return this._text
            },
            set: function(t) {
                t !== this._text && (this._text = t.toString() || "",
                    this.updateText())
            }
        }),
        Object.defineProperty(i.BitmapText.prototype, "maxWidth", {
            get: function() {
                return this._maxWidth
            },
            set: function(t) {
                t !== this._maxWidth && (this._maxWidth = t,
                    this.updateText())
            }
        }),
        Object.defineProperty(i.BitmapText.prototype, "smoothed", {
            get: function() {
                return !this._data.base.scaleMode
            },
            set: function(t) {
                t ? this._data.base.scaleMode = 0 : this._data.base.scaleMode = 1
            }
        }),
        i.RetroFont = function(t, e, s, n, r, o, a, h, l, u) {
            if (!t.cache.checkImageKey(e))
                return !1;
            (void 0 === o || null === o) && (o = t.cache.getImage(e).width / s),
                this.characterWidth = s,
                this.characterHeight = n,
                this.characterSpacingX = a || 0,
                this.characterSpacingY = h || 0,
                this.characterPerRow = o,
                this.offsetX = l || 0,
                this.offsetY = u || 0,
                this.align = "left",
                this.multiLine = !1,
                this.autoUpperCase = !0,
                this.customSpacingX = 0,
                this.customSpacingY = 0,
                this.fixedWidth = 0,
                this.fontSet = t.cache.getImage(e),
                this._text = "",
                this.grabData = [],
                this.frameData = new i.FrameData;
            for (var c = this.offsetX, d = this.offsetY, p = 0, f = 0; f < r.length; f++) {
                var m = this.frameData.addFrame(new i.Frame(f,c,d,this.characterWidth,this.characterHeight));
                this.grabData[r.charCodeAt(f)] = m.index,
                    p++,
                    p === this.characterPerRow ? (p = 0,
                        c = this.offsetX,
                        d += this.characterHeight + this.characterSpacingY) : c += this.characterWidth + this.characterSpacingX
            }
            t.cache.updateFrameData(e, this.frameData),
                this.stamp = new i.Image(t,0,0,e,0),
                i.RenderTexture.call(this, t, 100, 100, "", i.scaleModes.NEAREST),
                this.type = i.RETROFONT
        }
        ,
        i.RetroFont.prototype = Object.create(i.RenderTexture.prototype),
        i.RetroFont.prototype.constructor = i.RetroFont,
        i.RetroFont.ALIGN_LEFT = "left",
        i.RetroFont.ALIGN_RIGHT = "right",
        i.RetroFont.ALIGN_CENTER = "center",
        i.RetroFont.TEXT_SET1 = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~",
        i.RetroFont.TEXT_SET2 = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        i.RetroFont.TEXT_SET3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ",
        i.RetroFont.TEXT_SET4 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789",
        i.RetroFont.TEXT_SET5 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ.,/() '!?-*:0123456789",
        i.RetroFont.TEXT_SET6 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!?:;0123456789\"(),-.' ",
        i.RetroFont.TEXT_SET7 = "AGMSY+:4BHNTZ!;5CIOU.?06DJPV,(17EKQW\")28FLRX-'39",
        i.RetroFont.TEXT_SET8 = "0123456789 .ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        i.RetroFont.TEXT_SET9 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ()-0123456789.:,'\"?!",
        i.RetroFont.TEXT_SET10 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        i.RetroFont.TEXT_SET11 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ.,\"-+!?()':;0123456789",
        i.RetroFont.prototype.setFixedWidth = function(t, e) {
            void 0 === e && (e = "left"),
                this.fixedWidth = t,
                this.align = e
        }
        ,
        i.RetroFont.prototype.setText = function(t, e, i, s, n, r) {
            this.multiLine = e || !1,
                this.customSpacingX = i || 0,
                this.customSpacingY = s || 0,
                this.align = n || "left",
                r ? this.autoUpperCase = !1 : this.autoUpperCase = !0,
            t.length > 0 && (this.text = t)
        }
        ,
        i.RetroFont.prototype.buildRetroFontText = function() {
            var t = 0
                , e = 0;
            if (this.clear(),
                this.multiLine) {
                var s = this._text.split("\n");
                this.fixedWidth > 0 ? this.resize(this.fixedWidth, s.length * (this.characterHeight + this.customSpacingY) - this.customSpacingY, !0) : this.resize(this.getLongestLine() * (this.characterWidth + this.customSpacingX), s.length * (this.characterHeight + this.customSpacingY) - this.customSpacingY, !0);
                for (var n = 0; n < s.length; n++)
                    t = 0,
                        this.align === i.RetroFont.ALIGN_RIGHT ? t = this.width - s[n].length * (this.characterWidth + this.customSpacingX) : this.align === i.RetroFont.ALIGN_CENTER && (t = this.width / 2 - s[n].length * (this.characterWidth + this.customSpacingX) / 2,
                            t += this.customSpacingX / 2),
                    0 > t && (t = 0),
                        this.pasteLine(s[n], t, e, this.customSpacingX),
                        e += this.characterHeight + this.customSpacingY
            } else
                this.fixedWidth > 0 ? this.resize(this.fixedWidth, this.characterHeight, !0) : this.resize(this._text.length * (this.characterWidth + this.customSpacingX), this.characterHeight, !0),
                    t = 0,
                    this.align === i.RetroFont.ALIGN_RIGHT ? t = this.width - this._text.length * (this.characterWidth + this.customSpacingX) : this.align === i.RetroFont.ALIGN_CENTER && (t = this.width / 2 - this._text.length * (this.characterWidth + this.customSpacingX) / 2,
                        t += this.customSpacingX / 2),
                0 > t && (t = 0),
                    this.pasteLine(this._text, t, 0, this.customSpacingX);
            this.requiresReTint = !0
        }
        ,
        i.RetroFont.prototype.pasteLine = function(t, e, i, s) {
            for (var n = 0; n < t.length; n++)
                if (" " === t.charAt(n))
                    e += this.characterWidth + s;
                else if (this.grabData[t.charCodeAt(n)] >= 0 && (this.stamp.frame = this.grabData[t.charCodeAt(n)],
                    this.renderXY(this.stamp, e, i, !1),
                    e += this.characterWidth + s,
                e > this.width))
                    break
        }
        ,
        i.RetroFont.prototype.getLongestLine = function() {
            var t = 0;
            if (this._text.length > 0)
                for (var e = this._text.split("\n"), i = 0; i < e.length; i++)
                    e[i].length > t && (t = e[i].length);
            return t
        }
        ,
        i.RetroFont.prototype.removeUnsupportedCharacters = function(t) {
            for (var e = "", i = 0; i < this._text.length; i++) {
                var s = this._text[i]
                    , n = s.charCodeAt(0);
                (this.grabData[n] >= 0 || !t && "\n" === s) && (e = e.concat(s))
            }
            return e
        }
        ,
        i.RetroFont.prototype.updateOffset = function(t, e) {
            if (this.offsetX !== t || this.offsetY !== e) {
                for (var i = t - this.offsetX, s = e - this.offsetY, n = this.game.cache.getFrameData(this.stamp.key).getFrames(), r = n.length; r--; )
                    n[r].x += i,
                        n[r].y += s;
                this.buildRetroFontText()
            }
        }
        ,
        Object.defineProperty(i.RetroFont.prototype, "text", {
            get: function() {
                return this._text
            },
            set: function(t) {
                var e;
                e = this.autoUpperCase ? t.toUpperCase() : t,
                e !== this._text && (this._text = e,
                    this.removeUnsupportedCharacters(this.multiLine),
                    this.buildRetroFontText())
            }
        }),
        Object.defineProperty(i.RetroFont.prototype, "smoothed", {
            get: function() {
                return this.stamp.smoothed
            },
            set: function(t) {
                this.stamp.smoothed = t,
                    this.buildRetroFontText()
            }
        }),
        i.Rope = function(t, e, s, n, r, o) {
            this.points = [],
                this.points = o,
                this._hasUpdateAnimation = !1,
                this._updateAnimationCallback = null,
                e = e || 0,
                s = s || 0,
                n = n || null,
                r = r || null,
                this.type = i.ROPE,
                PIXI.Rope.call(this, PIXI.TextureCache.__default, this.points),
                i.Component.Core.init.call(this, t, e, s, n, r)
        }
        ,
        i.Rope.prototype = Object.create(PIXI.Rope.prototype),
        i.Rope.prototype.constructor = i.Rope,
        i.Component.Core.install.call(i.Rope.prototype, ["Angle", "Animation", "AutoCull", "Bounds", "BringToTop", "Crop", "Delta", "Destroy", "FixedToCamera", "InWorld", "LifeSpan", "LoadTexture", "Overlap", "PhysicsBody", "Reset", "ScaleMinMax", "Smoothed"]),
        i.Rope.prototype.preUpdatePhysics = i.Component.PhysicsBody.preUpdate,
        i.Rope.prototype.preUpdateLifeSpan = i.Component.LifeSpan.preUpdate,
        i.Rope.prototype.preUpdateInWorld = i.Component.InWorld.preUpdate,
        i.Rope.prototype.preUpdateCore = i.Component.Core.preUpdate,
        i.Rope.prototype.preUpdate = function() {
            return !!(this.preUpdatePhysics() && this.preUpdateLifeSpan() && this.preUpdateInWorld()) && this.preUpdateCore()
        }
        ,
        i.Rope.prototype.update = function() {
            this._hasUpdateAnimation && this.updateAnimation.call(this)
        }
        ,
        i.Rope.prototype.reset = function(t, e) {
            return i.Component.Reset.prototype.reset.call(this, t, e),
                this
        }
        ,
        Object.defineProperty(i.Rope.prototype, "updateAnimation", {
            get: function() {
                return this._updateAnimation
            },
            set: function(t) {
                t && "function" == typeof t ? (this._hasUpdateAnimation = !0,
                    this._updateAnimation = t) : (this._hasUpdateAnimation = !1,
                    this._updateAnimation = null)
            }
        }),
        Object.defineProperty(i.Rope.prototype, "segments", {
            get: function() {
                for (var t, e, s, n, r, o, a, h, l = [], u = 0; u < this.points.length; u++)
                    t = 4 * u,
                        e = this.vertices[t] * this.scale.x,
                        s = this.vertices[t + 1] * this.scale.y,
                        n = this.vertices[t + 4] * this.scale.x,
                        r = this.vertices[t + 3] * this.scale.y,
                        o = i.Math.difference(e, n),
                        a = i.Math.difference(s, r),
                        e += this.world.x,
                        s += this.world.y,
                        h = new i.Rectangle(e,s,o,a),
                        l.push(h);
                return l
            }
        }),
        i.TileSprite = function(t, e, s, n, r, o, a) {
            e = e || 0,
                s = s || 0,
                n = n || 256,
                r = r || 256,
                o = o || null,
                a = a || null,
                this.type = i.TILESPRITE,
                this.physicsType = i.SPRITE,
                this._scroll = new i.Point;
            var h = t.cache.getImage("__default", !0);
            PIXI.TilingSprite.call(this, new PIXI.Texture(h.base), n, r),
                i.Component.Core.init.call(this, t, e, s, o, a)
        }
        ,
        i.TileSprite.prototype = Object.create(PIXI.TilingSprite.prototype),
        i.TileSprite.prototype.constructor = i.TileSprite,
        i.Component.Core.install.call(i.TileSprite.prototype, ["Angle", "Animation", "AutoCull", "Bounds", "BringToTop", "Destroy", "FixedToCamera", "Health", "InCamera", "InputEnabled", "InWorld", "LifeSpan", "LoadTexture", "Overlap", "PhysicsBody", "Reset", "Smoothed"]),
        i.TileSprite.prototype.preUpdatePhysics = i.Component.PhysicsBody.preUpdate,
        i.TileSprite.prototype.preUpdateLifeSpan = i.Component.LifeSpan.preUpdate,
        i.TileSprite.prototype.preUpdateInWorld = i.Component.InWorld.preUpdate,
        i.TileSprite.prototype.preUpdateCore = i.Component.Core.preUpdate,
        i.TileSprite.prototype.preUpdate = function() {
            return 0 !== this._scroll.x && (this.tilePosition.x += this._scroll.x * this.game.time.physicsElapsed),
            0 !== this._scroll.y && (this.tilePosition.y += this._scroll.y * this.game.time.physicsElapsed),
            !!(this.preUpdatePhysics() && this.preUpdateLifeSpan() && this.preUpdateInWorld()) && this.preUpdateCore()
        }
        ,
        i.TileSprite.prototype.autoScroll = function(t, e) {
            this._scroll.set(t, e)
        }
        ,
        i.TileSprite.prototype.stopScroll = function() {
            this._scroll.set(0, 0)
        }
        ,
        i.TileSprite.prototype.destroy = function(t) {
            i.Component.Destroy.prototype.destroy.call(this, t),
                PIXI.TilingSprite.prototype.destroy.call(this)
        }
        ,
        i.TileSprite.prototype.reset = function(t, e) {
            return i.Component.Reset.prototype.reset.call(this, t, e),
                this.tilePosition.x = 0,
                this.tilePosition.y = 0,
                this
        }
        ,
        i.Device = function() {
            this.deviceReadyAt = 0,
                this.initialized = !1,
                this.desktop = !1,
                this.iOS = !1,
                this.iOSVersion = 0,
                this.cocoonJS = !1,
                this.cocoonJSApp = !1,
                this.cordova = !1,
                this.node = !1,
                this.nodeWebkit = !1,
                this.electron = !1,
                this.ejecta = !1,
                this.crosswalk = !1,
                this.android = !1,
                this.chromeOS = !1,
                this.linux = !1,
                this.macOS = !1,
                this.windows = !1,
                this.windowsPhone = !1,
                this.canvas = !1,
                this.canvasBitBltShift = null,
                this.webGL = !1,
                this.file = !1,
                this.fileSystem = !1,
                this.localStorage = !1,
                this.worker = !1,
                this.css3D = !1,
                this.pointerLock = !1,
                this.typedArray = !1,
                this.vibration = !1,
                this.getUserMedia = !0,
                this.quirksMode = !1,
                this.touch = !1,
                this.mspointer = !1,
                this.wheelEvent = null,
                this.arora = !1,
                this.chrome = !1,
                this.chromeVersion = 0,
                this.epiphany = !1,
                this.firefox = !1,
                this.firefoxVersion = 0,
                this.ie = !1,
                this.ieVersion = 0,
                this.trident = !1,
                this.tridentVersion = 0,
                this.mobileSafari = !1,
                this.midori = !1,
                this.opera = !1,
                this.safari = !1,
                this.webApp = !1,
                this.silk = !1,
                this.audioData = !1,
                this.webAudio = !1,
                this.ogg = !1,
                this.opus = !1,
                this.mp3 = !1,
                this.wav = !1,
                this.m4a = !1,
                this.webm = !1,
                this.oggVideo = !1,
                this.h264Video = !1,
                this.mp4Video = !1,
                this.webmVideo = !1,
                this.vp9Video = !1,
                this.hlsVideo = !1,
                this.iPhone = !1,
                this.iPhone4 = !1,
                this.iPad = !1,
                this.pixelRatio = 0,
                this.littleEndian = !1,
                this.LITTLE_ENDIAN = !1,
                this.support32bit = !1,
                this.fullscreen = !1,
                this.requestFullscreen = "",
                this.cancelFullscreen = "",
                this.fullscreenKeyboard = !1
        }
        ,
        i.Device = new i.Device,
        i.Device.onInitialized = new i.Signal,
        i.Device.whenReady = function(t, e, i) {
            var s = this._readyCheck;
            if (this.deviceReadyAt || !s)
                t.call(e, this);
            else if (s._monitor || i)
                s._queue = s._queue || [],
                    s._queue.push([t, e]);
            else {
                s._monitor = s.bind(this),
                    s._queue = s._queue || [],
                    s._queue.push([t, e]);
                var n = "undefined" != typeof window.cordova
                    , r = navigator.isCocoonJS;
                "complete" === document.readyState || "interactive" === document.readyState ? window.setTimeout(s._monitor, 0) : n && !r ? document.addEventListener("deviceready", s._monitor, !1) : (document.addEventListener("DOMContentLoaded", s._monitor, !1),
                    window.addEventListener("load", s._monitor, !1))
            }
        }
        ,
        i.Device._readyCheck = function() {
            var t = this._readyCheck;
            if (document.body) {
                if (!this.deviceReadyAt) {
                    this.deviceReadyAt = Date.now(),
                        document.removeEventListener("deviceready", t._monitor),
                        document.removeEventListener("DOMContentLoaded", t._monitor),
                        window.removeEventListener("load", t._monitor),
                        this._initialize(),
                        this.initialized = !0,
                        this.onInitialized.dispatch(this);
                    for (var e; e = t._queue.shift(); ) {
                        var i = e[0]
                            , s = e[1];
                        i.call(s, this)
                    }
                    this._readyCheck = null,
                        this._initialize = null,
                        this.onInitialized = null
                }
            } else
                window.setTimeout(t._monitor, 20)
        }
        ,
        i.Device._initialize = function() {
            function t() {
                var t = navigator.userAgent;
                /Playstation Vita/.test(t) ? c.vita = !0 : /Kindle/.test(t) || /\bKF[A-Z][A-Z]+/.test(t) || /Silk.*Mobile Safari/.test(t) ? c.kindle = !0 : /Android/.test(t) ? c.android = !0 : /CrOS/.test(t) ? c.chromeOS = !0 : /iP[ao]d|iPhone/i.test(t) ? (c.iOS = !0,
                    navigator.appVersion.match(/OS (\d+)/),
                    c.iOSVersion = parseInt(RegExp.$1, 10)) : /Linux/.test(t) ? c.linux = !0 : /Mac OS/.test(t) ? c.macOS = !0 : /Windows/.test(t) && (c.windows = !0),
                (/Windows Phone/i.test(t) || /IEMobile/i.test(t)) && (c.android = !1,
                    c.iOS = !1,
                    c.macOS = !1,
                    c.windows = !0,
                    c.windowsPhone = !0);
                var e = /Silk/.test(t);
                (c.windows || c.macOS || c.linux && !e || c.chromeOS) && (c.desktop = !0),
                (c.windowsPhone || /Windows NT/i.test(t) && /Touch/i.test(t)) && (c.desktop = !1)
            }
            function e() {
                c.canvas = !!window.CanvasRenderingContext2D || c.cocoonJS;
                try {
                    c.localStorage = !!localStorage.getItem
                } catch (t) {
                    c.localStorage = !1
                }
                c.file = !!(window.File && window.FileReader && window.FileList && window.Blob),
                    c.fileSystem = !!window.requestFileSystem,
                    c.webGL = function() {
                        try {
                            var t = document.createElement("canvas");
                            return t.screencanvas = !1,
                            !!window.WebGLRenderingContext && (t.getContext("webgl") || t.getContext("experimental-webgl"))
                        } catch (e) {
                            return !1
                        }
                    }(),
                    c.webGL = !!c.webGL,
                    c.worker = !!window.Worker,
                    c.pointerLock = "pointerLockElement"in document || "mozPointerLockElement"in document || "webkitPointerLockElement"in document,
                    c.quirksMode = "CSS1Compat" !== document.compatMode,
                    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia,
                    window.URL = window.URL || window.webkitURL || window.mozURL || window.msURL,
                    c.getUserMedia = c.getUserMedia && !!navigator.getUserMedia && !!window.URL,
                c.firefox && c.firefoxVersion < 21 && (c.getUserMedia = !1),
                !c.iOS && (c.ie || c.firefox || c.chrome) && (c.canvasBitBltShift = !0),
                (c.safari || c.mobileSafari) && (c.canvasBitBltShift = !1)
            }
            function i() {
                ("ontouchstart"in document.documentElement || window.navigator.maxTouchPoints && window.navigator.maxTouchPoints >= 1) && (c.touch = !0),
                (window.navigator.msPointerEnabled || window.navigator.pointerEnabled) && (c.mspointer = !0),
                c.cocoonJS || ("onwheel"in window || c.ie && "WheelEvent"in window ? c.wheelEvent = "wheel" : "onmousewheel"in window ? c.wheelEvent = "mousewheel" : c.firefox && "MouseScrollEvent"in window && (c.wheelEvent = "DOMMouseScroll"))
            }
            function s() {
                for (var t = ["requestFullscreen", "requestFullScreen", "webkitRequestFullscreen", "webkitRequestFullScreen", "msRequestFullscreen", "msRequestFullScreen", "mozRequestFullScreen", "mozRequestFullscreen"], e = document.createElement("div"), i = 0; i < t.length; i++)
                    if (e[t[i]]) {
                        c.fullscreen = !0,
                            c.requestFullscreen = t[i];
                        break
                    }
                var s = ["cancelFullScreen", "exitFullscreen", "webkitCancelFullScreen", "webkitExitFullscreen", "msCancelFullScreen", "msExitFullscreen", "mozCancelFullScreen", "mozExitFullscreen"];
                if (c.fullscreen)
                    for (var i = 0; i < s.length; i++)
                        if (document[s[i]]) {
                            c.cancelFullscreen = s[i];
                            break
                        }
                window.Element && Element.ALLOW_KEYBOARD_INPUT && (c.fullscreenKeyboard = !0)
            }
            function n() {
                var t = navigator.userAgent;
                if (/Arora/.test(t) ? c.arora = !0 : /Chrome\/(\d+)/.test(t) && !c.windowsPhone ? (c.chrome = !0,
                    c.chromeVersion = parseInt(RegExp.$1, 10)) : /Epiphany/.test(t) ? c.epiphany = !0 : /Firefox\D+(\d+)/.test(t) ? (c.firefox = !0,
                    c.firefoxVersion = parseInt(RegExp.$1, 10)) : /AppleWebKit/.test(t) && c.iOS ? c.mobileSafari = !0 : /MSIE (\d+\.\d+);/.test(t) ? (c.ie = !0,
                    c.ieVersion = parseInt(RegExp.$1, 10)) : /Midori/.test(t) ? c.midori = !0 : /Opera/.test(t) ? c.opera = !0 : /Safari/.test(t) && !c.windowsPhone ? c.safari = !0 : /Trident\/(\d+\.\d+)(.*)rv:(\d+\.\d+)/.test(t) && (c.ie = !0,
                    c.trident = !0,
                    c.tridentVersion = parseInt(RegExp.$1, 10),
                    c.ieVersion = parseInt(RegExp.$3, 10)),
                /Silk/.test(t) && (c.silk = !0),
                navigator.standalone && (c.webApp = !0),
                "undefined" != typeof window.cordova && (c.cordova = !0),
                "undefined" != typeof process && "undefined" != typeof require && (c.node = !0),
                c.node && "object" == typeof process.versions && (c.nodeWebkit = !!process.versions["node-webkit"],
                    c.electron = !!process.versions.electron),
                navigator.isCocoonJS && (c.cocoonJS = !0),
                    c.cocoonJS)
                    try {
                        c.cocoonJSApp = "undefined" != typeof CocoonJS
                    } catch (e) {
                        c.cocoonJSApp = !1
                    }
                "undefined" != typeof window.ejecta && (c.ejecta = !0),
                /Crosswalk/.test(t) && (c.crosswalk = !0)
            }
            function r() {
                var t = document.createElement("video")
                    , e = !1;
                try {
                    (e = !!t.canPlayType) && (t.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, "") && (c.oggVideo = !0),
                    t.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, "") && (c.h264Video = !0,
                        c.mp4Video = !0),
                    t.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, "") && (c.webmVideo = !0),
                    t.canPlayType('video/webm; codecs="vp9"').replace(/^no$/, "") && (c.vp9Video = !0),
                    t.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/, "") && (c.hlsVideo = !0))
                } catch (i) {}
            }
            function o() {
                c.audioData = !!window.Audio,
                    c.webAudio = !(!window.AudioContext && !window.webkitAudioContext);
                var t = document.createElement("audio")
                    , e = !1;
                try {
                    (e = !!t.canPlayType) && (t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, "") && (c.ogg = !0),
                    (t.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, "") || t.canPlayType("audio/opus;").replace(/^no$/, "")) && (c.opus = !0),
                    t.canPlayType("audio/mpeg;").replace(/^no$/, "") && (c.mp3 = !0),
                    t.canPlayType('audio/wav; codecs="1"').replace(/^no$/, "") && (c.wav = !0),
                    (t.canPlayType("audio/x-m4a;") || t.canPlayType("audio/aac;").replace(/^no$/, "")) && (c.m4a = !0),
                    t.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "") && (c.webm = !0))
                } catch (i) {}
            }
            function a() {
                c.pixelRatio = window.devicePixelRatio || 1,
                    c.iPhone = -1 != navigator.userAgent.toLowerCase().indexOf("iphone"),
                    c.iPhone4 = 2 == c.pixelRatio && c.iPhone,
                    c.iPad = -1 != navigator.userAgent.toLowerCase().indexOf("ipad"),
                    "undefined" != typeof Int8Array ? c.typedArray = !0 : c.typedArray = !1,
                "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array && "undefined" != typeof Uint32Array && (c.littleEndian = h(),
                    c.LITTLE_ENDIAN = c.littleEndian),
                    c.support32bit = "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8ClampedArray && "undefined" != typeof Int32Array && null !== c.littleEndian && l(),
                    navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate,
                navigator.vibrate && (c.vibration = !0)
            }
            function h() {
                var t = new ArrayBuffer(4)
                    , e = new Uint8Array(t)
                    , i = new Uint32Array(t);
                return e[0] = 161,
                    e[1] = 178,
                    e[2] = 195,
                    e[3] = 212,
                3569595041 == i[0] || 2712847316 != i[0] && null
            }
            function l() {
                if (void 0 === Uint8ClampedArray)
                    return !1;
                var t = PIXI.CanvasPool.create(this, 1, 1)
                    , e = t.getContext("2d");
                if (!e)
                    return !1;
                var i = e.createImageData(1, 1);
                return PIXI.CanvasPool.remove(this),
                i.data instanceof Uint8ClampedArray
            }
            function u() {
                var t, e = document.createElement("p"), i = {
                    webkitTransform: "-webkit-transform",
                    OTransform: "-o-transform",
                    msTransform: "-ms-transform",
                    MozTransform: "-moz-transform",
                    transform: "transform"
                };
                document.body.insertBefore(e, null);
                for (var s in i)
                    void 0 !== e.style[s] && (e.style[s] = "translate3d(1px,1px,1px)",
                        t = window.getComputedStyle(e).getPropertyValue(i[s]));
                document.body.removeChild(e),
                    c.css3D = void 0 !== t && t.length > 0 && "none" !== t
            }
            var c = this;
            t(),
                o(),
                r(),
                n(),
                u(),
                a(),
                e(),
                s(),
                i()
        }
        ,
        i.Device.canPlayAudio = function(t) {
            return !("mp3" !== t || !this.mp3) || (!("ogg" !== t || !this.ogg && !this.opus) || (!("m4a" !== t || !this.m4a) || (!("opus" !== t || !this.opus) || (!("wav" !== t || !this.wav) || !("webm" !== t || !this.webm)))))
        }
        ,
        i.Device.canPlayVideo = function(t) {
            return !("webm" !== t || !this.webmVideo && !this.vp9Video) || (!("mp4" !== t || !this.mp4Video && !this.h264Video) || (!("ogg" !== t && "ogv" !== t || !this.oggVideo) || !("mpeg" !== t || !this.hlsVideo)))
        }
        ,
        i.Device.isConsoleOpen = function() {
            return !(!window.console || !window.console.firebug) || !(!window.console || (console.profile(),
                console.profileEnd(),
            console.clear && console.clear(),
                !console.profiles)) && console.profiles.length > 0
        }
        ,
        i.Device.isAndroidStockBrowser = function() {
            var t = window.navigator.userAgent.match(/Android.*AppleWebKit\/([\d.]+)/);
            return t && t[1] < 537
        }
        ,
        i.Canvas = {
            create: function(t, e, i, s, n) {
                if (e = e || 256,
                    i = i || 256,
                void 0 === n)
                    var r = PIXI.CanvasPool.create(t, e, i);
                else
                    var r = document.createElement("canvas");
                return "string" == typeof s && "" !== s && (r.id = s),
                    r.width = e,
                    r.height = i,
                    r.style.display = "block",
                    r
            },
            setBackgroundColor: function(t, e) {
                return e = e || "rgb(0,0,0)",
                    t.style.backgroundColor = e,
                    t
            },
            setTouchAction: function(t, e) {
                return e = e || "none",
                    t.style.msTouchAction = e,
                    t.style["ms-touch-action"] = e,
                    t.style["touch-action"] = e,
                    t
            },
            setUserSelect: function(t, e) {
                return e = e || "none",
                    t.style["-webkit-touch-callout"] = e,
                    t.style["-webkit-user-select"] = e,
                    t.style["-khtml-user-select"] = e,
                    t.style["-moz-user-select"] = e,
                    t.style["-ms-user-select"] = e,
                    t.style["user-select"] = e,
                    t.style["-webkit-tap-highlight-color"] = "rgba(0, 0, 0, 0)",
                    t
            },
            addToDOM: function(t, e, i) {
                var s;
                return void 0 === i && (i = !0),
                e && ("string" == typeof e ? s = document.getElementById(e) : "object" == typeof e && 1 === e.nodeType && (s = e)),
                s || (s = document.body),
                i && s.style && (s.style.overflow = "hidden"),
                    s.appendChild(t),
                    t
            },
            removeFromDOM: function(t) {
                t.parentNode && t.parentNode.removeChild(t)
            },
            setTransform: function(t, e, i, s, n, r, o) {
                return t.setTransform(s, r, o, n, e, i),
                    t
            },
            setSmoothingEnabled: function(t, e) {
                var s = i.Canvas.getSmoothingPrefix(t);
                return s && (t[s] = e),
                    t
            },
            getSmoothingPrefix: function(t) {
                var e = ["i", "webkitI", "msI", "mozI", "oI"];
                for (var i in e) {
                    var s = e[i] + "mageSmoothingEnabled";
                    if (s in t)
                        return s
                }
                return null
            },
            getSmoothingEnabled: function(t) {
                var e = i.Canvas.getSmoothingPrefix(t);
                return e ? t[e] : void 0
            },
            setImageRenderingCrisp: function(t) {
                for (var e = ["optimizeSpeed", "crisp-edges", "-moz-crisp-edges", "-webkit-optimize-contrast", "optimize-contrast", "pixelated"], i = 0; i < e.length; i++)
                    t.style["image-rendering"] = e[i];
                return t.style.msInterpolationMode = "nearest-neighbor",
                    t
            },
            setImageRenderingBicubic: function(t) {
                return t.style["image-rendering"] = "auto",
                    t.style.msInterpolationMode = "bicubic",
                    t
            }
        },
        i.RequestAnimationFrame = function(t, e) {
            void 0 === e && (e = !1),
                this.game = t,
                this.isRunning = !1,
                this.forceSetTimeOut = e;
            for (var i = ["ms", "moz", "webkit", "o"], s = 0; s < i.length && !window.requestAnimationFrame; s++)
                window.requestAnimationFrame = window[i[s] + "RequestAnimationFrame"],
                    window.cancelAnimationFrame = window[i[s] + "CancelAnimationFrame"];
            this._isSetTimeOut = !1,
                this._onLoop = null,
                this._timeOutID = null
        }
        ,
        i.RequestAnimationFrame.prototype = {
            start: function() {
                this.isRunning = !0;
                var t = this;
                !window.requestAnimationFrame || this.forceSetTimeOut ? (this._isSetTimeOut = !0,
                    this._onLoop = function() {
                        return t.updateSetTimeout()
                    }
                    ,
                    this._timeOutID = window.setTimeout(this._onLoop, 0)) : (this._isSetTimeOut = !1,
                    this._onLoop = function(e) {
                        return t.updateRAF(e)
                    }
                    ,
                    this._timeOutID = window.requestAnimationFrame(this._onLoop))
            },
            updateRAF: function(t) {
                this.game.update(Math.floor(t)),
                    this._timeOutID = window.requestAnimationFrame(this._onLoop)
            },
            updateSetTimeout: function() {
                this.game.update(Date.now()),
                    this._timeOutID = window.setTimeout(this._onLoop, this.game.time.timeToCall)
            },
            stop: function() {
                this._isSetTimeOut ? clearTimeout(this._timeOutID) : window.cancelAnimationFrame(this._timeOutID),
                    this.isRunning = !1
            },
            isSetTimeOut: function() {
                return this._isSetTimeOut
            },
            isRAF: function() {
                return this._isSetTimeOut === !1
            }
        },
        i.RequestAnimationFrame.prototype.constructor = i.RequestAnimationFrame,
        i.Math = {
            PI2: 2 * Math.PI,
            fuzzyEqual: function(t, e, i) {
                return void 0 === i && (i = 1e-4),
                Math.abs(t - e) < i
            },
            fuzzyLessThan: function(t, e, i) {
                return void 0 === i && (i = 1e-4),
                e + i > t
            },
            fuzzyGreaterThan: function(t, e, i) {
                return void 0 === i && (i = 1e-4),
                t > e - i
            },
            fuzzyCeil: function(t, e) {
                return void 0 === e && (e = 1e-4),
                    Math.ceil(t - e)
            },
            fuzzyFloor: function(t, e) {
                return void 0 === e && (e = 1e-4),
                    Math.floor(t + e)
            },
            average: function() {
                for (var t = 0, e = arguments.length, i = 0; e > i; i++)
                    t += +arguments[i];
                return t / e
            },
            shear: function(t) {
                return t % 1
            },
            snapTo: function(t, e, i) {
                return void 0 === i && (i = 0),
                    0 === e ? t : (t -= i,
                        t = e * Math.round(t / e),
                    i + t)
            },
            snapToFloor: function(t, e, i) {
                return void 0 === i && (i = 0),
                    0 === e ? t : (t -= i,
                        t = e * Math.floor(t / e),
                    i + t)
            },
            snapToCeil: function(t, e, i) {
                return void 0 === i && (i = 0),
                    0 === e ? t : (t -= i,
                        t = e * Math.ceil(t / e),
                    i + t)
            },
            roundTo: function(t, e, i) {
                void 0 === e && (e = 0),
                void 0 === i && (i = 10);
                var s = Math.pow(i, -e);
                return Math.round(t * s) / s
            },
            floorTo: function(t, e, i) {
                void 0 === e && (e = 0),
                void 0 === i && (i = 10);
                var s = Math.pow(i, -e);
                return Math.floor(t * s) / s
            },
            ceilTo: function(t, e, i) {
                void 0 === e && (e = 0),
                void 0 === i && (i = 10);
                var s = Math.pow(i, -e);
                return Math.ceil(t * s) / s
            },
            angleBetween: function(t, e, i, s) {
                return Math.atan2(s - e, i - t)
            },
            angleBetweenY: function(t, e, i, s) {
                return Math.atan2(i - t, s - e)
            },
            angleBetweenPoints: function(t, e) {
                return Math.atan2(e.y - t.y, e.x - t.x)
            },
            angleBetweenPointsY: function(t, e) {
                return Math.atan2(e.x - t.x, e.y - t.y)
            },
            reverseAngle: function(t) {
                return this.normalizeAngle(t + Math.PI, !0)
            },
            normalizeAngle: function(t) {
                return t %= 2 * Math.PI,
                    t >= 0 ? t : t + 2 * Math.PI
            },
            maxAdd: function(t, e, i) {
                return Math.min(t + e, i)
            },
            minSub: function(t, e, i) {
                return Math.max(t - e, i)
            },
            wrap: function(t, e, i) {
                var s = i - e;
                if (0 >= s)
                    return 0;
                var n = (t - e) % s;
                return 0 > n && (n += s),
                n + e
            },
            wrapValue: function(t, e, i) {
                var s;
                return t = Math.abs(t),
                    e = Math.abs(e),
                    i = Math.abs(i),
                    s = (t + e) % i
            },
            isOdd: function(t) {
                return !!(1 & t)
            },
            isEven: function(t) {
                return !(1 & t)
            },
            min: function() {
                if (1 === arguments.length && "object" == typeof arguments[0])
                    var t = arguments[0];
                else
                    var t = arguments;
                for (var e = 1, i = 0, s = t.length; s > e; e++)
                    t[e] < t[i] && (i = e);
                return t[i]
            },
            max: function() {
                if (1 === arguments.length && "object" == typeof arguments[0])
                    var t = arguments[0];
                else
                    var t = arguments;
                for (var e = 1, i = 0, s = t.length; s > e; e++)
                    t[e] > t[i] && (i = e);
                return t[i]
            },
            minProperty: function(t) {
                if (2 === arguments.length && "object" == typeof arguments[1])
                    var e = arguments[1];
                else
                    var e = arguments.slice(1);
                for (var i = 1, s = 0, n = e.length; n > i; i++)
                    e[i][t] < e[s][t] && (s = i);
                return e[s][t]
            },
            maxProperty: function(t) {
                if (2 === arguments.length && "object" == typeof arguments[1])
                    var e = arguments[1];
                else
                    var e = arguments.slice(1);
                for (var i = 1, s = 0, n = e.length; n > i; i++)
                    e[i][t] > e[s][t] && (s = i);
                return e[s][t]
            },
            wrapAngle: function(t, e) {
                return e ? this.wrap(t, -Math.PI, Math.PI) : this.wrap(t, -180, 180)
            },
            linearInterpolation: function(t, e) {
                var i = t.length - 1
                    , s = i * e
                    , n = Math.floor(s);
                return 0 > e ? this.linear(t[0], t[1], s) : e > 1 ? this.linear(t[i], t[i - 1], i - s) : this.linear(t[n], t[n + 1 > i ? i : n + 1], s - n)
            },
            bezierInterpolation: function(t, e) {
                for (var i = 0, s = t.length - 1, n = 0; s >= n; n++)
                    i += Math.pow(1 - e, s - n) * Math.pow(e, n) * t[n] * this.bernstein(s, n);
                return i
            },
            catmullRomInterpolation: function(t, e) {
                var i = t.length - 1
                    , s = i * e
                    , n = Math.floor(s);
                return t[0] === t[i] ? (0 > e && (n = Math.floor(s = i * (1 + e))),
                    this.catmullRom(t[(n - 1 + i) % i], t[n], t[(n + 1) % i], t[(n + 2) % i], s - n)) : 0 > e ? t[0] - (this.catmullRom(t[0], t[0], t[1], t[1], -s) - t[0]) : e > 1 ? t[i] - (this.catmullRom(t[i], t[i], t[i - 1], t[i - 1], s - i) - t[i]) : this.catmullRom(t[n ? n - 1 : 0], t[n], t[n + 1 > i ? i : n + 1], t[n + 2 > i ? i : n + 2], s - n)
            },
            linear: function(t, e, i) {
                return (e - t) * i + t
            },
            bernstein: function(t, e) {
                return this.factorial(t) / this.factorial(e) / this.factorial(t - e)
            },
            factorial: function(t) {
                if (0 === t)
                    return 1;
                for (var e = t; --t; )
                    e *= t;
                return e
            },
            catmullRom: function(t, e, i, s, n) {
                var r = .5 * (i - t)
                    , o = .5 * (s - e)
                    , a = n * n
                    , h = n * a;
                return (2 * e - 2 * i + r + o) * h + (-3 * e + 3 * i - 2 * r - o) * a + r * n + e
            },
            difference: function(t, e) {
                return Math.abs(t - e)
            },
            roundAwayFromZero: function(t) {
                return t > 0 ? Math.ceil(t) : Math.floor(t)
            },
            sinCosGenerator: function(t, e, i, s) {
                void 0 === e && (e = 1),
                void 0 === i && (i = 1),
                void 0 === s && (s = 1);
                for (var n = e, r = i, o = s * Math.PI / t, a = [], h = [], l = 0; t > l; l++)
                    r -= n * o,
                        n += r * o,
                        a[l] = r,
                        h[l] = n;
                return {
                    sin: h,
                    cos: a,
                    length: t
                }
            },
            distance: function(t, e, i, s) {
                var n = t - i
                    , r = e - s;
                return Math.sqrt(n * n + r * r)
            },
            distanceSq: function(t, e, i, s) {
                var n = t - i
                    , r = e - s;
                return n * n + r * r
            },
            distancePow: function(t, e, i, s, n) {
                return void 0 === n && (n = 2),
                    Math.sqrt(Math.pow(i - t, n) + Math.pow(s - e, n))
            },
            clamp: function(t, e, i) {
                return e > t ? e : t > i ? i : t
            },
            clampBottom: function(t, e) {
                return e > t ? e : t
            },
            within: function(t, e, i) {
                return Math.abs(t - e) <= i
            },
            mapLinear: function(t, e, i, s, n) {
                return s + (t - e) * (n - s) / (i - e)
            },
            smoothstep: function(t, e, i) {
                return t = Math.max(0, Math.min(1, (t - e) / (i - e))),
                t * t * (3 - 2 * t)
            },
            smootherstep: function(t, e, i) {
                return t = Math.max(0, Math.min(1, (t - e) / (i - e))),
                t * t * t * (t * (6 * t - 15) + 10)
            },
            sign: function(t) {
                return 0 > t ? -1 : t > 0 ? 1 : 0
            },
            percent: function(t, e, i) {
                return void 0 === i && (i = 0),
                    t > e || i > e ? 1 : i > t || i > t ? 0 : (t - i) / e
            }
        };
        var u = Math.PI / 180
            , c = 180 / Math.PI;
        return i.Math.degToRad = function(t) {
            return t * u
        }
            ,
            i.Math.radToDeg = function(t) {
                return t * c
            }
            ,
            i.RandomDataGenerator = function(t) {
                void 0 === t && (t = []),
                    this.c = 1,
                    this.s0 = 0,
                    this.s1 = 0,
                    this.s2 = 0,
                    "string" == typeof t ? this.state(t) : this.sow(t)
            }
            ,
            i.RandomDataGenerator.prototype = {
                rnd: function() {
                    var t = 2091639 * this.s0 + 2.3283064365386963e-10 * this.c;
                    return this.c = 0 | t,
                        this.s0 = this.s1,
                        this.s1 = this.s2,
                        this.s2 = t - this.c,
                        this.s2
                },
                sow: function(t) {
                    if (this.s0 = this.hash(" "),
                        this.s1 = this.hash(this.s0),
                        this.s2 = this.hash(this.s1),
                        this.c = 1,
                        t)
                        for (var e = 0; e < t.length && null != t[e]; e++) {
                            var i = t[e];
                            this.s0 -= this.hash(i),
                                this.s0 += ~~(this.s0 < 0),
                                this.s1 -= this.hash(i),
                                this.s1 += ~~(this.s1 < 0),
                                this.s2 -= this.hash(i),
                                this.s2 += ~~(this.s2 < 0)
                        }
                },
                hash: function(t) {
                    var e, i, s;
                    for (s = 4022871197,
                             t = t.toString(),
                             i = 0; i < t.length; i++)
                        s += t.charCodeAt(i),
                            e = .02519603282416938 * s,
                            s = e >>> 0,
                            e -= s,
                            e *= s,
                            s = e >>> 0,
                            e -= s,
                            s += 4294967296 * e;
                    return 2.3283064365386963e-10 * (s >>> 0)
                },
                integer: function() {
                    return 4294967296 * this.rnd.apply(this)
                },
                frac: function() {
                    return this.rnd.apply(this) + 1.1102230246251565e-16 * (2097152 * this.rnd.apply(this) | 0)
                },
                real: function() {
                    return this.integer() + this.frac()
                },
                integerInRange: function(t, e) {
                    return Math.floor(this.realInRange(0, e - t + 1) + t)
                },
                between: function(t, e) {
                    return this.integerInRange(t, e)
                },
                realInRange: function(t, e) {
                    return this.frac() * (e - t) + t
                },
                normal: function() {
                    return 1 - 2 * this.frac()
                },
                uuid: function() {
                    var t = ""
                        , e = "";
                    for (e = t = ""; t++ < 36; e += ~t % 5 | 3 * t & 4 ? (15 ^ t ? 8 ^ this.frac() * (20 ^ t ? 16 : 4) : 4).toString(16) : "-")
                        ;
                    return e
                },
                pick: function(t) {
                    return t[this.integerInRange(0, t.length - 1)]
                },
                weightedPick: function(t) {
                    return t[~~(Math.pow(this.frac(), 2) * (t.length - 1) + .5)]
                },
                timestamp: function(t, e) {
                    return this.realInRange(t || 9466848e5, e || 1577862e6)
                },
                angle: function() {
                    return this.integerInRange(-180, 180)
                },
                state: function(t) {
                    return "string" == typeof t && t.match(/^!rnd/) && (t = t.split(","),
                        this.c = parseFloat(t[1]),
                        this.s0 = parseFloat(t[2]),
                        this.s1 = parseFloat(t[3]),
                        this.s2 = parseFloat(t[4])),
                        ["!rnd", this.c, this.s0, this.s1, this.s2].join(",")
                }
            },
            i.RandomDataGenerator.prototype.constructor = i.RandomDataGenerator,
            i.QuadTree = function(t, e, i, s, n, r, o) {
                this.maxObjects = 10,
                    this.maxLevels = 4,
                    this.level = 0,
                    this.bounds = {},
                    this.objects = [],
                    this.nodes = [],
                    this._empty = [],
                    this.reset(t, e, i, s, n, r, o)
            }
            ,
            i.QuadTree.prototype = {
                reset: function(t, e, i, s, n, r, o) {
                    this.maxObjects = n || 10,
                        this.maxLevels = r || 4,
                        this.level = o || 0,
                        this.bounds = {
                            x: Math.round(t),
                            y: Math.round(e),
                            width: i,
                            height: s,
                            subWidth: Math.floor(i / 2),
                            subHeight: Math.floor(s / 2),
                            right: Math.round(t) + Math.floor(i / 2),
                            bottom: Math.round(e) + Math.floor(s / 2)
                        },
                        this.objects.length = 0,
                        this.nodes.length = 0
                },
                populate: function(t) {
                    t.forEach(this.populateHandler, this, !0)
                },
                populateHandler: function(t) {
                    t.body && t.exists && this.insert(t.body)
                },
                split: function() {
                    this.nodes[0] = new i.QuadTree(this.bounds.right,this.bounds.y,this.bounds.subWidth,this.bounds.subHeight,this.maxObjects,this.maxLevels,this.level + 1),
                        this.nodes[1] = new i.QuadTree(this.bounds.x,this.bounds.y,this.bounds.subWidth,this.bounds.subHeight,this.maxObjects,this.maxLevels,this.level + 1),
                        this.nodes[2] = new i.QuadTree(this.bounds.x,this.bounds.bottom,this.bounds.subWidth,this.bounds.subHeight,this.maxObjects,this.maxLevels,this.level + 1),
                        this.nodes[3] = new i.QuadTree(this.bounds.right,this.bounds.bottom,this.bounds.subWidth,this.bounds.subHeight,this.maxObjects,this.maxLevels,this.level + 1)
                },
                insert: function(t) {
                    var e, i = 0;
                    if (null != this.nodes[0] && (e = this.getIndex(t),
                    -1 !== e))
                        return void this.nodes[e].insert(t);
                    if (this.objects.push(t),
                    this.objects.length > this.maxObjects && this.level < this.maxLevels)
                        for (null == this.nodes[0] && this.split(); i < this.objects.length; )
                            e = this.getIndex(this.objects[i]),
                                -1 !== e ? this.nodes[e].insert(this.objects.splice(i, 1)[0]) : i++
                },
                getIndex: function(t) {
                    var e = -1;
                    return t.x < this.bounds.right && t.right < this.bounds.right ? t.y < this.bounds.bottom && t.bottom < this.bounds.bottom ? e = 1 : t.y > this.bounds.bottom && (e = 2) : t.x > this.bounds.right && (t.y < this.bounds.bottom && t.bottom < this.bounds.bottom ? e = 0 : t.y > this.bounds.bottom && (e = 3)),
                        e
                },
                retrieve: function(t) {
                    if (t instanceof i.Rectangle)
                        var e = this.objects
                            , s = this.getIndex(t);
                    else {
                        if (!t.body)
                            return this._empty;
                        var e = this.objects
                            , s = this.getIndex(t.body)
                    }
                    return this.nodes[0] && (-1 !== s ? e = e.concat(this.nodes[s].retrieve(t)) : (e = e.concat(this.nodes[0].retrieve(t)),
                        e = e.concat(this.nodes[1].retrieve(t)),
                        e = e.concat(this.nodes[2].retrieve(t)),
                        e = e.concat(this.nodes[3].retrieve(t)))),
                        e
                },
                clear: function() {
                    this.objects.length = 0;
                    for (var t = this.nodes.length; t--; )
                        this.nodes[t].clear(),
                            this.nodes.splice(t, 1);
                    this.nodes.length = 0
                }
            },
            i.QuadTree.prototype.constructor = i.QuadTree,
            i.Net = function(t) {
                this.game = t
            }
            ,
            i.Net.prototype = {
                getHostName: function() {
                    return window.location && window.location.hostname ? window.location.hostname : null
                },
                checkDomainName: function(t) {
                    return -1 !== window.location.hostname.indexOf(t)
                },
                updateQueryString: function(t, e, i, s) {
                    void 0 === i && (i = !1),
                    (void 0 === s || "" === s) && (s = window.location.href);
                    var n = ""
                        , r = new RegExp("([?|&])" + t + "=.*?(&|#|$)(.*)","gi");
                    if (r.test(s))
                        n = "undefined" != typeof e && null !== e ? s.replace(r, "$1" + t + "=" + e + "$2$3") : s.replace(r, "$1$3").replace(/(&|\?)$/, "");
                    else if ("undefined" != typeof e && null !== e) {
                        var o = -1 !== s.indexOf("?") ? "&" : "?"
                            , a = s.split("#");
                        s = a[0] + o + t + "=" + e,
                        a[1] && (s += "#" + a[1]),
                            n = s
                    } else
                        n = s;
                    return i ? void (window.location.href = n) : n
                },
                getQueryString: function(t) {
                    void 0 === t && (t = "");
                    var e = {}
                        , i = location.search.substring(1).split("&");
                    for (var s in i) {
                        var n = i[s].split("=");
                        if (n.length > 1) {
                            if (t && t == this.decodeURI(n[0]))
                                return this.decodeURI(n[1]);
                            e[this.decodeURI(n[0])] = this.decodeURI(n[1])
                        }
                    }
                    return e
                },
                decodeURI: function(t) {
                    return decodeURIComponent(t.replace(/\+/g, " "))
                }
            },
            i.Net.prototype.constructor = i.Net,
            i.TweenManager = function(t) {
                this.game = t,
                    this.frameBased = !1,
                    this._tweens = [],
                    this._add = [],
                    this.easeMap = {
                        Power0: i.Easing.Power0,
                        Power1: i.Easing.Power1,
                        Power2: i.Easing.Power2,
                        Power3: i.Easing.Power3,
                        Power4: i.Easing.Power4,
                        Linear: i.Easing.Linear.None,
                        Quad: i.Easing.Quadratic.Out,
                        Cubic: i.Easing.Cubic.Out,
                        Quart: i.Easing.Quartic.Out,
                        Quint: i.Easing.Quintic.Out,
                        Sine: i.Easing.Sinusoidal.Out,
                        Expo: i.Easing.Exponential.Out,
                        Circ: i.Easing.Circular.Out,
                        Elastic: i.Easing.Elastic.Out,
                        Back: i.Easing.Back.Out,
                        Bounce: i.Easing.Bounce.Out,
                        "Quad.easeIn": i.Easing.Quadratic.In,
                        "Cubic.easeIn": i.Easing.Cubic.In,
                        "Quart.easeIn": i.Easing.Quartic.In,
                        "Quint.easeIn": i.Easing.Quintic.In,
                        "Sine.easeIn": i.Easing.Sinusoidal.In,
                        "Expo.easeIn": i.Easing.Exponential.In,
                        "Circ.easeIn": i.Easing.Circular.In,
                        "Elastic.easeIn": i.Easing.Elastic.In,
                        "Back.easeIn": i.Easing.Back.In,
                        "Bounce.easeIn": i.Easing.Bounce.In,
                        "Quad.easeOut": i.Easing.Quadratic.Out,
                        "Cubic.easeOut": i.Easing.Cubic.Out,
                        "Quart.easeOut": i.Easing.Quartic.Out,
                        "Quint.easeOut": i.Easing.Quintic.Out,
                        "Sine.easeOut": i.Easing.Sinusoidal.Out,
                        "Expo.easeOut": i.Easing.Exponential.Out,
                        "Circ.easeOut": i.Easing.Circular.Out,
                        "Elastic.easeOut": i.Easing.Elastic.Out,
                        "Back.easeOut": i.Easing.Back.Out,
                        "Bounce.easeOut": i.Easing.Bounce.Out,
                        "Quad.easeInOut": i.Easing.Quadratic.InOut,
                        "Cubic.easeInOut": i.Easing.Cubic.InOut,
                        "Quart.easeInOut": i.Easing.Quartic.InOut,
                        "Quint.easeInOut": i.Easing.Quintic.InOut,
                        "Sine.easeInOut": i.Easing.Sinusoidal.InOut,
                        "Expo.easeInOut": i.Easing.Exponential.InOut,
                        "Circ.easeInOut": i.Easing.Circular.InOut,
                        "Elastic.easeInOut": i.Easing.Elastic.InOut,
                        "Back.easeInOut": i.Easing.Back.InOut,
                        "Bounce.easeInOut": i.Easing.Bounce.InOut
                    },
                    this.game.onPause.add(this._pauseAll, this),
                    this.game.onResume.add(this._resumeAll, this)
            }
            ,
            i.TweenManager.prototype = {
                getAll: function() {
                    return this._tweens
                },
                removeAll: function() {
                    for (var t = 0; t < this._tweens.length; t++)
                        this._tweens[t].pendingDelete = !0;
                    this._add = []
                },
                removeFrom: function(t, e) {
                    void 0 === e && (e = !0);
                    var s, n;
                    if (Array.isArray(t))
                        for (s = 0,
                                 n = t.length; n > s; s++)
                            this.removeFrom(t[s]);
                    else if (t.type === i.GROUP && e)
                        for (var s = 0, n = t.children.length; n > s; s++)
                            this.removeFrom(t.children[s]);
                    else {
                        for (s = 0,
                                 n = this._tweens.length; n > s; s++)
                            t === this._tweens[s].target && this.remove(this._tweens[s]);
                        for (s = 0,
                                 n = this._add.length; n > s; s++)
                            t === this._add[s].target && this.remove(this._add[s])
                    }
                },
                add: function(t) {
                    t._manager = this,
                        this._add.push(t)
                },
                create: function(t) {
                    return new i.Tween(t,this.game,this)
                },
                remove: function(t) {
                    var e = this._tweens.indexOf(t);
                    -1 !== e ? this._tweens[e].pendingDelete = !0 : (e = this._add.indexOf(t),
                    -1 !== e && (this._add[e].pendingDelete = !0))
                },
                update: function() {
                    var t = this._add.length
                        , e = this._tweens.length;
                    if (0 === e && 0 === t)
                        return !1;
                    for (var i = 0; e > i; )
                        this._tweens[i].update(this.game.time.time) ? i++ : (this._tweens.splice(i, 1),
                            e--);
                    return t > 0 && (this._tweens = this._tweens.concat(this._add),
                        this._add.length = 0),
                        !0
                },
                isTweening: function(t) {
                    return this._tweens.some(function(e) {
                        return e.target === t
                    })
                },
                _pauseAll: function() {
                    for (var t = this._tweens.length - 1; t >= 0; t--)
                        this._tweens[t]._pause()
                },
                _resumeAll: function() {
                    for (var t = this._tweens.length - 1; t >= 0; t--)
                        this._tweens[t]._resume()
                },
                pauseAll: function() {
                    for (var t = this._tweens.length - 1; t >= 0; t--)
                        this._tweens[t].pause()
                },
                resumeAll: function() {
                    for (var t = this._tweens.length - 1; t >= 0; t--)
                        this._tweens[t].resume(!0)
                }
            },
            i.TweenManager.prototype.constructor = i.TweenManager,
            i.Tween = function(t, e, s) {
                this.game = e,
                    this.target = t,
                    this.manager = s,
                    this.timeline = [],
                    this.reverse = !1,
                    this.timeScale = 1,
                    this.repeatCounter = 0,
                    this.pendingDelete = !1,
                    this.onStart = new i.Signal,
                    this.onLoop = new i.Signal,
                    this.onRepeat = new i.Signal,
                    this.onChildComplete = new i.Signal,
                    this.onComplete = new i.Signal,
                    this.isRunning = !1,
                    this.current = 0,
                    this.properties = {},
                    this.chainedTween = null,
                    this.isPaused = !1,
                    this.frameBased = s.frameBased,
                    this._onUpdateCallback = null,
                    this._onUpdateCallbackContext = null,
                    this._pausedTime = 0,
                    this._codePaused = !1,
                    this._hasStarted = !1
            }
            ,
            i.Tween.prototype = {
                to: function(t, e, s, n, r, o, a) {
                    return (void 0 === e || 0 >= e) && (e = 1e3),
                    (void 0 === s || null === s) && (s = i.Easing.Default),
                    void 0 === n && (n = !1),
                    void 0 === r && (r = 0),
                    void 0 === o && (o = 0),
                    void 0 === a && (a = !1),
                    "string" == typeof s && this.manager.easeMap[s] && (s = this.manager.easeMap[s]),
                        this.isRunning ? (console.warn("Phaser.Tween.to cannot be called after Tween.start"),
                            this) : (this.timeline.push(new i.TweenData(this).to(t, e, s, r, o, a)),
                        n && this.start(),
                            this)
                },
                from: function(t, e, s, n, r, o, a) {
                    return void 0 === e && (e = 1e3),
                    (void 0 === s || null === s) && (s = i.Easing.Default),
                    void 0 === n && (n = !1),
                    void 0 === r && (r = 0),
                    void 0 === o && (o = 0),
                    void 0 === a && (a = !1),
                    "string" == typeof s && this.manager.easeMap[s] && (s = this.manager.easeMap[s]),
                        this.isRunning ? (console.warn("Phaser.Tween.from cannot be called after Tween.start"),
                            this) : (this.timeline.push(new i.TweenData(this).from(t, e, s, r, o, a)),
                        n && this.start(),
                            this)
                },
                start: function(t) {
                    if (void 0 === t && (t = 0),
                    null === this.game || null === this.target || 0 === this.timeline.length || this.isRunning)
                        return this;
                    for (var e = 0; e < this.timeline.length; e++)
                        for (var i in this.timeline[e].vEnd)
                            this.properties[i] = this.target[i] || 0,
                            Array.isArray(this.properties[i]) || (this.properties[i] *= 1);
                    for (var e = 0; e < this.timeline.length; e++)
                        this.timeline[e].loadValues();
                    return this.manager.add(this),
                        this.isRunning = !0,
                    (0 > t || t > this.timeline.length - 1) && (t = 0),
                        this.current = t,
                        this.timeline[this.current].start(),
                        this
                },
                stop: function(t) {
                    return void 0 === t && (t = !1),
                        this.isRunning = !1,
                        this._onUpdateCallback = null,
                        this._onUpdateCallbackContext = null,
                    t && (this.onComplete.dispatch(this.target, this),
                    this.chainedTween && this.chainedTween.start()),
                        this.manager.remove(this),
                        this
                },
                updateTweenData: function(t, e, i) {
                    if (0 === this.timeline.length)
                        return this;
                    if (void 0 === i && (i = 0),
                    -1 === i)
                        for (var s = 0; s < this.timeline.length; s++)
                            this.timeline[s][t] = e;
                    else
                        this.timeline[i][t] = e;
                    return this
                },
                delay: function(t, e) {
                    return this.updateTweenData("delay", t, e)
                },
                repeat: function(t, e, i) {
                    return void 0 === e && (e = 0),
                        this.updateTweenData("repeatCounter", t, i),
                        this.updateTweenData("repeatDelay", e, i)
                },
                repeatDelay: function(t, e) {
                    return this.updateTweenData("repeatDelay", t, e)
                },
                yoyo: function(t, e, i) {
                    return void 0 === e && (e = 0),
                        this.updateTweenData("yoyo", t, i),
                        this.updateTweenData("yoyoDelay", e, i)
                },
                yoyoDelay: function(t, e) {
                    return this.updateTweenData("yoyoDelay", t, e)
                },
                easing: function(t, e) {
                    return "string" == typeof t && this.manager.easeMap[t] && (t = this.manager.easeMap[t]),
                        this.updateTweenData("easingFunction", t, e)
                },
                interpolation: function(t, e, s) {
                    return void 0 === e && (e = i.Math),
                        this.updateTweenData("interpolationFunction", t, s),
                        this.updateTweenData("interpolationContext", e, s)
                },
                repeatAll: function(t) {
                    return void 0 === t && (t = 0),
                        this.repeatCounter = t,
                        this
                },
                chain: function() {
                    for (var t = arguments.length; t--; )
                        t > 0 ? arguments[t - 1].chainedTween = arguments[t] : this.chainedTween = arguments[t];
                    return this
                },
                loop: function(t) {
                    return void 0 === t && (t = !0),
                        t ? this.repeatAll(-1) : this.repeatCounter = 0,
                        this
                },
                onUpdateCallback: function(t, e) {
                    return this._onUpdateCallback = t,
                        this._onUpdateCallbackContext = e,
                        this
                },
                pause: function() {
                    this.isPaused = !0,
                        this._codePaused = !0,
                        this._pausedTime = this.game.time.time
                },
                _pause: function() {
                    this._codePaused || (this.isPaused = !0,
                        this._pausedTime = this.game.time.time)
                },
                resume: function() {
                    if (this.isPaused) {
                        this.isPaused = !1,
                            this._codePaused = !1;
                        for (var t = 0; t < this.timeline.length; t++)
                            this.timeline[t].isRunning || (this.timeline[t].startTime += this.game.time.time - this._pausedTime)
                    }
                },
                _resume: function() {
                    this._codePaused || this.resume()
                },
                update: function(t) {
                    if (this.pendingDelete)
                        return !1;
                    if (this.isPaused)
                        return !0;
                    var e = this.timeline[this.current].update(t);
                    if (e === i.TweenData.PENDING)
                        return !0;
                    if (e === i.TweenData.RUNNING)
                        return this._hasStarted || (this.onStart.dispatch(this.target, this),
                            this._hasStarted = !0),
                        null !== this._onUpdateCallback && this._onUpdateCallback.call(this._onUpdateCallbackContext, this, this.timeline[this.current].value, this.timeline[this.current]),
                            this.isRunning;
                    if (e === i.TweenData.LOOPED)
                        return this.onLoop.dispatch(this.target, this),
                            !0;
                    if (e === i.TweenData.COMPLETE) {
                        var s = !1;
                        return this.reverse ? (this.current--,
                        this.current < 0 && (this.current = this.timeline.length - 1,
                            s = !0)) : (this.current++,
                        this.current === this.timeline.length && (this.current = 0,
                            s = !0)),
                            s ? -1 === this.repeatCounter ? (this.timeline[this.current].start(),
                                this.onRepeat.dispatch(this.target, this),
                                !0) : this.repeatCounter > 0 ? (this.repeatCounter--,
                                this.timeline[this.current].start(),
                                this.onRepeat.dispatch(this.target, this),
                                !0) : (this.isRunning = !1,
                                this.onComplete.dispatch(this.target, this),
                            this.chainedTween && this.chainedTween.start(),
                                !1) : (this.onChildComplete.dispatch(this.target, this),
                                this.timeline[this.current].start(),
                                !0)
                    }
                },
                generateData: function(t, e) {
                    if (null === this.game || null === this.target)
                        return null;
                    void 0 === t && (t = 60),
                    void 0 === e && (e = []);
                    for (var i = 0; i < this.timeline.length; i++)
                        for (var s in this.timeline[i].vEnd)
                            this.properties[s] = this.target[s] || 0,
                            Array.isArray(this.properties[s]) || (this.properties[s] *= 1);
                    for (var i = 0; i < this.timeline.length; i++)
                        this.timeline[i].loadValues();
                    for (var i = 0; i < this.timeline.length; i++)
                        e = e.concat(this.timeline[i].generateData(t));
                    return e
                }
            },
            Object.defineProperty(i.Tween.prototype, "totalDuration", {
                get: function() {
                    for (var t = 0, e = 0; e < this.timeline.length; e++)
                        t += this.timeline[e].duration;
                    return t
                }
            }),
            i.Tween.prototype.constructor = i.Tween,
            i.TweenData = function(t) {
                this.parent = t,
                    this.game = t.game,
                    this.vStart = {},
                    this.vStartCache = {},
                    this.vEnd = {},
                    this.vEndCache = {},
                    this.duration = 1e3,
                    this.percent = 0,
                    this.value = 0,
                    this.repeatCounter = 0,
                    this.repeatDelay = 0,
                    this.interpolate = !1,
                    this.yoyo = !1,
                    this.yoyoDelay = 0,
                    this.inReverse = !1,
                    this.delay = 0,
                    this.dt = 0,
                    this.startTime = null,
                    this.easingFunction = i.Easing.Default,
                    this.interpolationFunction = i.Math.linearInterpolation,
                    this.interpolationContext = i.Math,
                    this.isRunning = !1,
                    this.isFrom = !1
            }
            ,
            i.TweenData.PENDING = 0,
            i.TweenData.RUNNING = 1,
            i.TweenData.LOOPED = 2,
            i.TweenData.COMPLETE = 3,
            i.TweenData.prototype = {
                to: function(t, e, i, s, n, r) {
                    return this.vEnd = t,
                        this.duration = e,
                        this.easingFunction = i,
                        this.delay = s,
                        this.repeatCounter = n,
                        this.yoyo = r,
                        this.isFrom = !1,
                        this
                },
                from: function(t, e, i, s, n, r) {
                    return this.vEnd = t,
                        this.duration = e,
                        this.easingFunction = i,
                        this.delay = s,
                        this.repeatCounter = n,
                        this.yoyo = r,
                        this.isFrom = !0,
                        this
                },
                start: function() {
                    if (this.startTime = this.game.time.time + this.delay,
                        this.parent.reverse ? this.dt = this.duration : this.dt = 0,
                        this.delay > 0 ? this.isRunning = !1 : this.isRunning = !0,
                        this.isFrom)
                        for (var t in this.vStartCache)
                            this.vStart[t] = this.vEndCache[t],
                                this.vEnd[t] = this.vStartCache[t],
                                this.parent.target[t] = this.vStart[t];
                    return this.value = 0,
                        this.yoyoCounter = 0,
                        this
                },
                loadValues: function() {
                    for (var t in this.parent.properties) {
                        if (this.vStart[t] = this.parent.properties[t],
                            Array.isArray(this.vEnd[t])) {
                            if (0 === this.vEnd[t].length)
                                continue;
                            0 === this.percent && (this.vEnd[t] = [this.vStart[t]].concat(this.vEnd[t]))
                        }
                        "undefined" != typeof this.vEnd[t] ? ("string" == typeof this.vEnd[t] && (this.vEnd[t] = this.vStart[t] + parseFloat(this.vEnd[t], 10)),
                            this.parent.properties[t] = this.vEnd[t]) : this.vEnd[t] = this.vStart[t],
                            this.vStartCache[t] = this.vStart[t],
                            this.vEndCache[t] = this.vEnd[t]
                    }
                    return this
                },
                update: function(t) {
                    if (this.isRunning) {
                        if (t < this.startTime)
                            return i.TweenData.RUNNING
                    } else {
                        if (!(t >= this.startTime))
                            return i.TweenData.PENDING;
                        this.isRunning = !0
                    }
                    var e = this.parent.frameBased ? this.game.time.physicsElapsedMS : this.game.time.elapsedMS;
                    this.parent.reverse ? (this.dt -= e * this.parent.timeScale,
                        this.dt = Math.max(this.dt, 0)) : (this.dt += e * this.parent.timeScale,
                        this.dt = Math.min(this.dt, this.duration)),
                        this.percent = this.dt / this.duration,
                        this.value = this.easingFunction(this.percent);
                    for (var s in this.vEnd) {
                        var n = this.vStart[s]
                            , r = this.vEnd[s];
                        Array.isArray(r) ? this.parent.target[s] = this.interpolationFunction.call(this.interpolationContext, r, this.value) : this.parent.target[s] = n + (r - n) * this.value
                    }
                    return !this.parent.reverse && 1 === this.percent || this.parent.reverse && 0 === this.percent ? this.repeat() : i.TweenData.RUNNING
                },
                generateData: function(t) {
                    this.parent.reverse ? this.dt = this.duration : this.dt = 0;
                    var e = []
                        , i = !1
                        , s = 1 / t * 1e3;
                    do {
                        this.parent.reverse ? (this.dt -= s,
                            this.dt = Math.max(this.dt, 0)) : (this.dt += s,
                            this.dt = Math.min(this.dt, this.duration)),
                            this.percent = this.dt / this.duration,
                            this.value = this.easingFunction(this.percent);
                        var n = {};
                        for (var r in this.vEnd) {
                            var o = this.vStart[r]
                                , a = this.vEnd[r];
                            Array.isArray(a) ? n[r] = this.interpolationFunction(a, this.value) : n[r] = o + (a - o) * this.value
                        }
                        e.push(n),
                        (!this.parent.reverse && 1 === this.percent || this.parent.reverse && 0 === this.percent) && (i = !0)
                    } while (!i);if (this.yoyo) {
                        var h = e.slice();
                        h.reverse(),
                            e = e.concat(h)
                    }
                    return e
                },
                repeat: function() {
                    if (this.yoyo) {
                        if (this.inReverse && 0 === this.repeatCounter)
                            return i.TweenData.COMPLETE;
                        this.inReverse = !this.inReverse
                    } else if (0 === this.repeatCounter)
                        return i.TweenData.COMPLETE;
                    if (this.inReverse)
                        for (var t in this.vStartCache)
                            this.vStart[t] = this.vEndCache[t],
                                this.vEnd[t] = this.vStartCache[t];
                    else {
                        for (var t in this.vStartCache)
                            this.vStart[t] = this.vStartCache[t],
                                this.vEnd[t] = this.vEndCache[t];
                        this.repeatCounter > 0 && this.repeatCounter--
                    }
                    return this.startTime = this.game.time.time,
                        this.yoyo && this.inReverse ? this.startTime += this.yoyoDelay : this.inReverse || (this.startTime += this.repeatDelay),
                        this.parent.reverse ? this.dt = this.duration : this.dt = 0,
                        i.TweenData.LOOPED
                }
            },
            i.TweenData.prototype.constructor = i.TweenData,
            i.Easing = {
                Linear: {
                    None: function(t) {
                        return t
                    }
                },
                Quadratic: {
                    In: function(t) {
                        return t * t
                    },
                    Out: function(t) {
                        return t * (2 - t)
                    },
                    InOut: function(t) {
                        return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
                    }
                },
                Cubic: {
                    In: function(t) {
                        return t * t * t
                    },
                    Out: function(t) {
                        return --t * t * t + 1
                    },
                    InOut: function(t) {
                        return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
                    }
                },
                Quartic: {
                    In: function(t) {
                        return t * t * t * t
                    },
                    Out: function(t) {
                        return 1 - --t * t * t * t
                    },
                    InOut: function(t) {
                        return (t *= 2) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
                    }
                },
                Quintic: {
                    In: function(t) {
                        return t * t * t * t * t
                    },
                    Out: function(t) {
                        return --t * t * t * t * t + 1
                    },
                    InOut: function(t) {
                        return (t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
                    }
                },
                Sinusoidal: {
                    In: function(t) {
                        return 0 === t ? 0 : 1 === t ? 1 : 1 - Math.cos(t * Math.PI / 2)
                    },
                    Out: function(t) {
                        return 0 === t ? 0 : 1 === t ? 1 : Math.sin(t * Math.PI / 2)
                    },
                    InOut: function(t) {
                        return 0 === t ? 0 : 1 === t ? 1 : .5 * (1 - Math.cos(Math.PI * t))
                    }
                },
                Exponential: {
                    In: function(t) {
                        return 0 === t ? 0 : Math.pow(1024, t - 1)
                    },
                    Out: function(t) {
                        return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
                    },
                    InOut: function(t) {
                        return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? .5 * Math.pow(1024, t - 1) : .5 * (-Math.pow(2, -10 * (t - 1)) + 2)
                    }
                },
                Circular: {
                    In: function(t) {
                        return 1 - Math.sqrt(1 - t * t)
                    },
                    Out: function(t) {
                        return Math.sqrt(1 - --t * t)
                    },
                    InOut: function(t) {
                        return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                    }
                },
                Elastic: {
                    In: function(t) {
                        var e, i = .1, s = .4;
                        return 0 === t ? 0 : 1 === t ? 1 : (!i || 1 > i ? (i = 1,
                            e = s / 4) : e = s * Math.asin(1 / i) / (2 * Math.PI),
                            -(i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / s)))
                    },
                    Out: function(t) {
                        var e, i = .1, s = .4;
                        return 0 === t ? 0 : 1 === t ? 1 : (!i || 1 > i ? (i = 1,
                            e = s / 4) : e = s * Math.asin(1 / i) / (2 * Math.PI),
                        i * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / s) + 1)
                    },
                    InOut: function(t) {
                        var e, i = .1, s = .4;
                        return 0 === t ? 0 : 1 === t ? 1 : (!i || 1 > i ? (i = 1,
                            e = s / 4) : e = s * Math.asin(1 / i) / (2 * Math.PI),
                            (t *= 2) < 1 ? -.5 * (i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / s)) : i * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / s) * .5 + 1)
                    }
                },
                Back: {
                    In: function(t) {
                        var e = 1.70158;
                        return t * t * ((e + 1) * t - e)
                    },
                    Out: function(t) {
                        var e = 1.70158;
                        return --t * t * ((e + 1) * t + e) + 1
                    },
                    InOut: function(t) {
                        var e = 2.5949095;
                        return (t *= 2) < 1 ? .5 * (t * t * ((e + 1) * t - e)) : .5 * ((t -= 2) * t * ((e + 1) * t + e) + 2)
                    }
                },
                Bounce: {
                    In: function(t) {
                        return 1 - i.Easing.Bounce.Out(1 - t)
                    },
                    Out: function(t) {
                        return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                    },
                    InOut: function(t) {
                        return .5 > t ? .5 * i.Easing.Bounce.In(2 * t) : .5 * i.Easing.Bounce.Out(2 * t - 1) + .5
                    }
                }
            },
            i.Easing.Default = i.Easing.Linear.None,
            i.Easing.Power0 = i.Easing.Linear.None,
            i.Easing.Power1 = i.Easing.Quadratic.Out,
            i.Easing.Power2 = i.Easing.Cubic.Out,
            i.Easing.Power3 = i.Easing.Quartic.Out,
            i.Easing.Power4 = i.Easing.Quintic.Out,
            i.Time = function(t) {
                this.game = t,
                    this.time = 0,
                    this.prevTime = 0,
                    this.now = 0,
                    this.elapsed = 0,
                    this.elapsedMS = 0,
                    this.physicsElapsed = 1 / 60,
                    this.physicsElapsedMS = 1 / 60 * 1e3,
                    this.desiredFpsMult = 1 / 60,
                    this._desiredFps = 60,
                    this.suggestedFps = this.desiredFps,
                    this.slowMotion = 1,
                    this.advancedTiming = !1,
                    this.frames = 0,
                    this.fps = 0,
                    this.fpsMin = 1e3,
                    this.fpsMax = 0,
                    this.msMin = 1e3,
                    this.msMax = 0,
                    this.pauseDuration = 0,
                    this.timeToCall = 0,
                    this.timeExpected = 0,
                    this.events = new i.Timer(this.game,(!1)),
                    this._frameCount = 0,
                    this._elapsedAccumulator = 0,
                    this._started = 0,
                    this._timeLastSecond = 0,
                    this._pauseStarted = 0,
                    this._justResumed = !1,
                    this._timers = []
            }
            ,
            i.Time.prototype = {
                boot: function() {
                    this._started = Date.now(),
                        this.time = Date.now(),
                        this.events.start(),
                        this.timeExpected = this.time
                },
                add: function(t) {
                    return this._timers.push(t),
                        t
                },
                create: function(t) {
                    void 0 === t && (t = !0);
                    var e = new i.Timer(this.game,t);
                    return this._timers.push(e),
                        e
                },
                removeAll: function() {
                    for (var t = 0; t < this._timers.length; t++)
                        this._timers[t].destroy();
                    this._timers = [],
                        this.events.removeAll()
                },
                refresh: function() {
                    var t = this.time;
                    this.time = Date.now(),
                        this.elapsedMS = this.time - t
                },
                update: function(t) {
                    var e = this.time;
                    this.time = Date.now(),
                        this.elapsedMS = this.time - e,
                        this.prevTime = this.now,
                        this.now = t,
                        this.elapsed = this.now - this.prevTime,
                    this.game.raf._isSetTimeOut && (this.timeToCall = Math.floor(Math.max(0, 1e3 / this._desiredFps - (this.timeExpected - t))),
                        this.timeExpected = t + this.timeToCall),
                    this.advancedTiming && this.updateAdvancedTiming(),
                    this.game.paused || (this.events.update(this.time),
                    this._timers.length && this.updateTimers())
                },
                updateTimers: function() {
                    for (var t = 0, e = this._timers.length; e > t; )
                        this._timers[t].update(this.time) ? t++ : (this._timers.splice(t, 1),
                            e--)
                },
                updateAdvancedTiming: function() {
                    this._frameCount++,
                        this._elapsedAccumulator += this.elapsed,
                    this._frameCount >= 2 * this._desiredFps && (this.suggestedFps = 5 * Math.floor(200 / (this._elapsedAccumulator / this._frameCount)),
                        this._frameCount = 0,
                        this._elapsedAccumulator = 0),
                        this.msMin = Math.min(this.msMin, this.elapsed),
                        this.msMax = Math.max(this.msMax, this.elapsed),
                        this.frames++,
                    this.now > this._timeLastSecond + 1e3 && (this.fps = Math.round(1e3 * this.frames / (this.now - this._timeLastSecond)),
                        this.fpsMin = Math.min(this.fpsMin, this.fps),
                        this.fpsMax = Math.max(this.fpsMax, this.fps),
                        this._timeLastSecond = this.now,
                        this.frames = 0)
                },
                gamePaused: function() {
                    this._pauseStarted = Date.now(),
                        this.events.pause();
                    for (var t = this._timers.length; t--; )
                        this._timers[t]._pause()
                },
                gameResumed: function() {
                    this.time = Date.now(),
                        this.pauseDuration = this.time - this._pauseStarted,
                        this.events.resume();
                    for (var t = this._timers.length; t--; )
                        this._timers[t]._resume()
                },
                totalElapsedSeconds: function() {
                    return .001 * (this.time - this._started)
                },
                elapsedSince: function(t) {
                    return this.time - t
                },
                elapsedSecondsSince: function(t) {
                    return .001 * (this.time - t)
                },
                reset: function() {
                    this._started = this.time,
                        this.removeAll()
                }
            },
            Object.defineProperty(i.Time.prototype, "desiredFps", {
                get: function() {
                    return this._desiredFps
                },
                set: function(t) {
                    this._desiredFps = t,
                        this.physicsElapsed = 1 / t,
                        this.physicsElapsedMS = 1e3 * this.physicsElapsed,
                        this.desiredFpsMult = 1 / t
                }
            }),
            i.Time.prototype.constructor = i.Time,
            i.Timer = function(t, e) {
                void 0 === e && (e = !0),
                    this.game = t,
                    this.running = !1,
                    this.autoDestroy = e,
                    this.expired = !1,
                    this.elapsed = 0,
                    this.events = [],
                    this.onComplete = new i.Signal,
                    this.nextTick = 0,
                    this.timeCap = 1e3,
                    this.paused = !1,
                    this._codePaused = !1,
                    this._started = 0,
                    this._pauseStarted = 0,
                    this._pauseTotal = 0,
                    this._now = Date.now(),
                    this._len = 0,
                    this._marked = 0,
                    this._i = 0,
                    this._diff = 0,
                    this._newTick = 0
            }
            ,
            i.Timer.MINUTE = 6e4,
            i.Timer.SECOND = 1e3,
            i.Timer.HALF = 500,
            i.Timer.QUARTER = 250,
            i.Timer.prototype = {
                create: function(t, e, s, n, r, o) {
                    t = Math.round(t);
                    var a = t;
                    a += 0 === this._now ? this.game.time.time : this._now;
                    var h = new i.TimerEvent(this,t,a,s,e,n,r,o);
                    return this.events.push(h),
                        this.order(),
                        this.expired = !1,
                        h
                },
                add: function(t, e, i) {
                    return this.create(t, !1, 0, e, i, Array.prototype.slice.call(arguments, 3))
                },
                repeat: function(t, e, i, s) {
                    return this.create(t, !1, e, i, s, Array.prototype.slice.call(arguments, 4))
                },
                loop: function(t, e, i) {
                    return this.create(t, !0, 0, e, i, Array.prototype.slice.call(arguments, 3))
                },
                start: function(t) {
                    if (!this.running) {
                        this._started = this.game.time.time + (t || 0),
                            this.running = !0;
                        for (var e = 0; e < this.events.length; e++)
                            this.events[e].tick = this.events[e].delay + this._started
                    }
                },
                stop: function(t) {
                    this.running = !1,
                    void 0 === t && (t = !0),
                    t && (this.events.length = 0)
                },
                remove: function(t) {
                    for (var e = 0; e < this.events.length; e++)
                        if (this.events[e] === t)
                            return this.events[e].pendingDelete = !0,
                                !0;
                    return !1
                },
                order: function() {
                    this.events.length > 0 && (this.events.sort(this.sortHandler),
                        this.nextTick = this.events[0].tick)
                },
                sortHandler: function(t, e) {
                    return t.tick < e.tick ? -1 : t.tick > e.tick ? 1 : 0
                },
                clearPendingEvents: function() {
                    for (this._i = this.events.length; this._i--; )
                        this.events[this._i].pendingDelete && this.events.splice(this._i, 1);
                    this._len = this.events.length,
                        this._i = 0
                },
                update: function(t) {
                    if (this.paused)
                        return !0;
                    if (this.elapsed = t - this._now,
                        this._now = t,
                    this.elapsed > this.timeCap && this.adjustEvents(t - this.elapsed),
                        this._marked = 0,
                        this.clearPendingEvents(),
                    this.running && this._now >= this.nextTick && this._len > 0) {
                        for (; this._i < this._len && this.running && this._now >= this.events[this._i].tick && !this.events[this._i].pendingDelete; )
                            this._newTick = this._now + this.events[this._i].delay - (this._now - this.events[this._i].tick),
                            this._newTick < 0 && (this._newTick = this._now + this.events[this._i].delay),
                                this.events[this._i].loop === !0 ? (this.events[this._i].tick = this._newTick,
                                    this.events[this._i].callback.apply(this.events[this._i].callbackContext, this.events[this._i].args)) : this.events[this._i].repeatCount > 0 ? (this.events[this._i].repeatCount--,
                                    this.events[this._i].tick = this._newTick,
                                    this.events[this._i].callback.apply(this.events[this._i].callbackContext, this.events[this._i].args)) : (this._marked++,
                                    this.events[this._i].pendingDelete = !0,
                                    this.events[this._i].callback.apply(this.events[this._i].callbackContext, this.events[this._i].args)),
                                this._i++;
                        this.events.length > this._marked ? this.order() : (this.expired = !0,
                            this.onComplete.dispatch(this))
                    }
                    return !this.expired || !this.autoDestroy
                },
                pause: function() {
                    this.running && (this._codePaused = !0,
                    this.paused || (this._pauseStarted = this.game.time.time,
                        this.paused = !0))
                },
                _pause: function() {
                    !this.paused && this.running && (this._pauseStarted = this.game.time.time,
                        this.paused = !0)
                },
                adjustEvents: function(t) {
                    for (var e = 0; e < this.events.length; e++)
                        if (!this.events[e].pendingDelete) {
                            var i = this.events[e].tick - t;
                            0 > i && (i = 0),
                                this.events[e].tick = this._now + i
                        }
                    var s = this.nextTick - t;
                    0 > s ? this.nextTick = this._now : this.nextTick = this._now + s
                },
                resume: function() {
                    if (this.paused) {
                        var t = this.game.time.time;
                        this._pauseTotal += t - this._now,
                            this._now = t,
                            this.adjustEvents(this._pauseStarted),
                            this.paused = !1,
                            this._codePaused = !1
                    }
                },
                _resume: function() {
                    this._codePaused || this.resume()
                },
                removeAll: function() {
                    this.onComplete.removeAll(),
                        this.events.length = 0,
                        this._len = 0,
                        this._i = 0
                },
                destroy: function() {
                    this.onComplete.removeAll(),
                        this.running = !1,
                        this.events = [],
                        this._len = 0,
                        this._i = 0
                }
            },
            Object.defineProperty(i.Timer.prototype, "next", {
                get: function() {
                    return this.nextTick
                }
            }),
            Object.defineProperty(i.Timer.prototype, "duration", {
                get: function() {
                    return this.running && this.nextTick > this._now ? this.nextTick - this._now : 0
                }
            }),
            Object.defineProperty(i.Timer.prototype, "length", {
                get: function() {
                    return this.events.length
                }
            }),
            Object.defineProperty(i.Timer.prototype, "ms", {
                get: function() {
                    return this.running ? this._now - this._started - this._pauseTotal : 0
                }
            }),
            Object.defineProperty(i.Timer.prototype, "seconds", {
                get: function() {
                    return this.running ? .001 * this.ms : 0
                }
            }),
            i.Timer.prototype.constructor = i.Timer,
            i.TimerEvent = function(t, e, i, s, n, r, o, a) {
                this.timer = t,
                    this.delay = e,
                    this.tick = i,
                    this.repeatCount = s - 1,
                    this.loop = n,
                    this.callback = r,
                    this.callbackContext = o,
                    this.args = a,
                    this.pendingDelete = !1
            }
            ,
            i.TimerEvent.prototype.constructor = i.TimerEvent,
            i.AnimationManager = function(t) {
                this.sprite = t,
                    this.game = t.game,
                    this.currentFrame = null,
                    this.currentAnim = null,
                    this.updateIfVisible = !0,
                    this.isLoaded = !1,
                    this._frameData = null,
                    this._anims = {},
                    this._outputFrames = []
            }
            ,
            i.AnimationManager.prototype = {
                loadFrameData: function(t, e) {
                    if (void 0 === t)
                        return !1;
                    if (this.isLoaded)
                        for (var i in this._anims)
                            this._anims[i].updateFrameData(t);
                    return this._frameData = t,
                        void 0 === e || null === e ? this.frame = 0 : "string" == typeof e ? this.frameName = e : this.frame = e,
                        this.isLoaded = !0,
                        !0
                },
                copyFrameData: function(t, e) {
                    if (this._frameData = t.clone(),
                        this.isLoaded)
                        for (var i in this._anims)
                            this._anims[i].updateFrameData(this._frameData);
                    return void 0 === e || null === e ? this.frame = 0 : "string" == typeof e ? this.frameName = e : this.frame = e,
                        this.isLoaded = !0,
                        !0
                },
                add: function(t, e, s, n, r) {
                    return e = e || [],
                        s = s || 60,
                    void 0 === n && (n = !1),
                    void 0 === r && (r = !(!e || "number" != typeof e[0])),
                        this._outputFrames = [],
                        this._frameData.getFrameIndexes(e, r, this._outputFrames),
                        this._anims[t] = new i.Animation(this.game,this.sprite,t,this._frameData,this._outputFrames,s,n),
                        this.currentAnim = this._anims[t],
                    this.sprite.tilingTexture && (this.sprite.refreshTexture = !0),
                        this._anims[t]
                },
                validateFrames: function(t, e) {
                    void 0 === e && (e = !0);
                    for (var i = 0; i < t.length; i++)
                        if (e === !0) {
                            if (t[i] > this._frameData.total)
                                return !1
                        } else if (this._frameData.checkFrameName(t[i]) === !1)
                            return !1;
                    return !0
                },
                play: function(t, e, i, s) {
                    return this._anims[t] ? this.currentAnim === this._anims[t] ? this.currentAnim.isPlaying === !1 ? (this.currentAnim.paused = !1,
                        this.currentAnim.play(e, i, s)) : this.currentAnim : (this.currentAnim && this.currentAnim.isPlaying && this.currentAnim.stop(),
                        this.currentAnim = this._anims[t],
                        this.currentAnim.paused = !1,
                        this.currentFrame = this.currentAnim.currentFrame,
                        this.currentAnim.play(e, i, s)) : void 0
                },
                stop: function(t, e) {
                    void 0 === e && (e = !1),
                        "string" == typeof t ? this._anims[t] && (this.currentAnim = this._anims[t],
                            this.currentAnim.stop(e)) : this.currentAnim && this.currentAnim.stop(e)
                },
                update: function() {
                    return !(this.updateIfVisible && !this.sprite.visible) && (!(!this.currentAnim || !this.currentAnim.update()) && (this.currentFrame = this.currentAnim.currentFrame,
                        !0))
                },
                next: function(t) {
                    this.currentAnim && (this.currentAnim.next(t),
                        this.currentFrame = this.currentAnim.currentFrame)
                },
                previous: function(t) {
                    this.currentAnim && (this.currentAnim.previous(t),
                        this.currentFrame = this.currentAnim.currentFrame)
                },
                getAnimation: function(t) {
                    return "string" == typeof t && this._anims[t] ? this._anims[t] : null
                },
                refreshFrame: function() {
                    this.sprite.setTexture(PIXI.TextureCache[this.currentFrame.uuid])
                },
                destroy: function() {
                    var t = null;
                    for (var t in this._anims)
                        this._anims.hasOwnProperty(t) && this._anims[t].destroy();
                    this._anims = {},
                        this._outputFrames = [],
                        this._frameData = null,
                        this.currentAnim = null,
                        this.currentFrame = null,
                        this.sprite = null,
                        this.game = null
                }
            },
            i.AnimationManager.prototype.constructor = i.AnimationManager,
            Object.defineProperty(i.AnimationManager.prototype, "frameData", {
                get: function() {
                    return this._frameData
                }
            }),
            Object.defineProperty(i.AnimationManager.prototype, "frameTotal", {
                get: function() {
                    return this._frameData.total
                }
            }),
            Object.defineProperty(i.AnimationManager.prototype, "paused", {
                get: function() {
                    return this.currentAnim.isPaused
                },
                set: function(t) {
                    this.currentAnim.paused = t
                }
            }),
            Object.defineProperty(i.AnimationManager.prototype, "name", {
                get: function() {
                    return this.currentAnim ? this.currentAnim.name : void 0
                }
            }),
            Object.defineProperty(i.AnimationManager.prototype, "frame", {
                get: function() {
                    return this.currentFrame ? this.currentFrame.index : void 0
                },
                set: function(t) {
                    "number" == typeof t && this._frameData && null !== this._frameData.getFrame(t) && (this.currentFrame = this._frameData.getFrame(t),
                    this.currentFrame && this.sprite.setFrame(this.currentFrame))
                }
            }),
            Object.defineProperty(i.AnimationManager.prototype, "frameName", {
                get: function() {
                    return this.currentFrame ? this.currentFrame.name : void 0
                },
                set: function(t) {
                    "string" == typeof t && this._frameData && null !== this._frameData.getFrameByName(t) ? (this.currentFrame = this._frameData.getFrameByName(t),
                    this.currentFrame && (this._frameIndex = this.currentFrame.index,
                        this.sprite.setFrame(this.currentFrame))) : console.warn("Cannot set frameName: " + t)
                }
            }),
            i.Animation = function(t, e, s, n, r, o, a) {
                void 0 === a && (a = !1),
                    this.game = t,
                    this._parent = e,
                    this._frameData = n,
                    this.name = s,
                    this._frames = [],
                    this._frames = this._frames.concat(r),
                    this.delay = 1e3 / o,
                    this.loop = a,
                    this.loopCount = 0,
                    this.killOnComplete = !1,
                    this.isFinished = !1,
                    this.isPlaying = !1,
                    this.isPaused = !1,
                    this._pauseStartTime = 0,
                    this._frameIndex = 0,
                    this._frameDiff = 0,
                    this._frameSkip = 1,
                    this.currentFrame = this._frameData.getFrame(this._frames[this._frameIndex]),
                    this.onStart = new i.Signal,
                    this.onUpdate = null,
                    this.onComplete = new i.Signal,
                    this.onLoop = new i.Signal,
                    this.game.onPause.add(this.onPause, this),
                    this.game.onResume.add(this.onResume, this)
            }
            ,
            i.Animation.prototype = {
                play: function(t, e, i) {
                    return "number" == typeof t && (this.delay = 1e3 / t),
                    "boolean" == typeof e && (this.loop = e),
                    "undefined" != typeof i && (this.killOnComplete = i),
                        this.isPlaying = !0,
                        this.isFinished = !1,
                        this.paused = !1,
                        this.loopCount = 0,
                        this._timeLastFrame = this.game.time.time,
                        this._timeNextFrame = this.game.time.time + this.delay,
                        this._frameIndex = 0,
                        this.updateCurrentFrame(!1, !0),
                        this._parent.events.onAnimationStart$dispatch(this._parent, this),
                        this.onStart.dispatch(this._parent, this),
                        this._parent.animations.currentAnim = this,
                        this._parent.animations.currentFrame = this.currentFrame,
                        this
                },
                restart: function() {
                    this.isPlaying = !0,
                        this.isFinished = !1,
                        this.paused = !1,
                        this.loopCount = 0,
                        this._timeLastFrame = this.game.time.time,
                        this._timeNextFrame = this.game.time.time + this.delay,
                        this._frameIndex = 0,
                        this.currentFrame = this._frameData.getFrame(this._frames[this._frameIndex]),
                        this._parent.setFrame(this.currentFrame),
                        this._parent.animations.currentAnim = this,
                        this._parent.animations.currentFrame = this.currentFrame,
                        this.onStart.dispatch(this._parent, this)
                },
                setFrame: function(t, e) {
                    var i;
                    if (void 0 === e && (e = !1),
                    "string" == typeof t)
                        for (var s = 0; s < this._frames.length; s++)
                            this._frameData.getFrame(this._frames[s]).name === t && (i = s);
                    else if ("number" == typeof t)
                        if (e)
                            i = t;
                        else
                            for (var s = 0; s < this._frames.length; s++)
                                this._frames[s] === i && (i = s);
                    i && (this._frameIndex = i - 1,
                        this._timeNextFrame = this.game.time.time,
                        this.update())
                },
                stop: function(t, e) {
                    void 0 === t && (t = !1),
                    void 0 === e && (e = !1),
                        this.isPlaying = !1,
                        this.isFinished = !0,
                        this.paused = !1,
                    t && (this.currentFrame = this._frameData.getFrame(this._frames[0]),
                        this._parent.setFrame(this.currentFrame)),
                    e && (this._parent.events.onAnimationComplete$dispatch(this._parent, this),
                        this.onComplete.dispatch(this._parent, this))
                },
                onPause: function() {
                    this.isPlaying && (this._frameDiff = this._timeNextFrame - this.game.time.time)
                },
                onResume: function() {
                    this.isPlaying && (this._timeNextFrame = this.game.time.time + this._frameDiff)
                },
                update: function() {
                    return !this.isPaused && (!!(this.isPlaying && this.game.time.time >= this._timeNextFrame) && (this._frameSkip = 1,
                        this._frameDiff = this.game.time.time - this._timeNextFrame,
                        this._timeLastFrame = this.game.time.time,
                    this._frameDiff > this.delay && (this._frameSkip = Math.floor(this._frameDiff / this.delay),
                        this._frameDiff -= this._frameSkip * this.delay),
                        this._timeNextFrame = this.game.time.time + (this.delay - this._frameDiff),
                        this._frameIndex += this._frameSkip,
                        this._frameIndex >= this._frames.length ? this.loop ? (this._frameIndex %= this._frames.length,
                            this.currentFrame = this._frameData.getFrame(this._frames[this._frameIndex]),
                        this.currentFrame && this._parent.setFrame(this.currentFrame),
                            this.loopCount++,
                            this._parent.events.onAnimationLoop$dispatch(this._parent, this),
                            this.onLoop.dispatch(this._parent, this),
                        !this.onUpdate || (this.onUpdate.dispatch(this, this.currentFrame),
                            !!this._frameData)) : (this.complete(),
                            !1) : this.updateCurrentFrame(!0)))
                },
                updateCurrentFrame: function(t, e) {
                    if (void 0 === e && (e = !1),
                        !this._frameData)
                        return !1;
                    var i = this.currentFrame.index;
                    return this.currentFrame = this._frameData.getFrame(this._frames[this._frameIndex]),
                    this.currentFrame && (e || !e && i !== this.currentFrame.index) && this._parent.setFrame(this.currentFrame),
                    !this.onUpdate || !t || (this.onUpdate.dispatch(this, this.currentFrame),
                        !!this._frameData)
                },
                next: function(t) {
                    void 0 === t && (t = 1);
                    var e = this._frameIndex + t;
                    e >= this._frames.length && (this.loop ? e %= this._frames.length : e = this._frames.length - 1),
                    e !== this._frameIndex && (this._frameIndex = e,
                        this.updateCurrentFrame(!0))
                },
                previous: function(t) {
                    void 0 === t && (t = 1);
                    var e = this._frameIndex - t;
                    0 > e && (this.loop ? e = this._frames.length + e : e++),
                    e !== this._frameIndex && (this._frameIndex = e,
                        this.updateCurrentFrame(!0))
                },
                updateFrameData: function(t) {
                    this._frameData = t,
                        this.currentFrame = this._frameData ? this._frameData.getFrame(this._frames[this._frameIndex % this._frames.length]) : null
                },
                destroy: function() {
                    this._frameData && (this.game.onPause.remove(this.onPause, this),
                        this.game.onResume.remove(this.onResume, this),
                        this.game = null,
                        this._parent = null,
                        this._frames = null,
                        this._frameData = null,
                        this.currentFrame = null,
                        this.isPlaying = !1,
                        this.onStart.dispose(),
                        this.onLoop.dispose(),
                        this.onComplete.dispose(),
                    this.onUpdate && this.onUpdate.dispose())
                },
                complete: function() {
                    this._frameIndex = this._frames.length - 1,
                        this.currentFrame = this._frameData.getFrame(this._frames[this._frameIndex]),
                        this.isPlaying = !1,
                        this.isFinished = !0,
                        this.paused = !1,
                        this._parent.events.onAnimationComplete$dispatch(this._parent, this),
                        this.onComplete.dispatch(this._parent, this),
                    this.killOnComplete && this._parent.kill()
                }
            },
            i.Animation.prototype.constructor = i.Animation,
            Object.defineProperty(i.Animation.prototype, "paused", {
                get: function() {
                    return this.isPaused
                },
                set: function(t) {
                    this.isPaused = t,
                        t ? this._pauseStartTime = this.game.time.time : this.isPlaying && (this._timeNextFrame = this.game.time.time + this.delay)
                }
            }),
            Object.defineProperty(i.Animation.prototype, "frameTotal", {
                get: function() {
                    return this._frames.length
                }
            }),
            Object.defineProperty(i.Animation.prototype, "frame", {
                get: function() {
                    return null !== this.currentFrame ? this.currentFrame.index : this._frameIndex
                },
                set: function(t) {
                    this.currentFrame = this._frameData.getFrame(this._frames[t]),
                    null !== this.currentFrame && (this._frameIndex = t,
                        this._parent.setFrame(this.currentFrame),
                    this.onUpdate && this.onUpdate.dispatch(this, this.currentFrame))
                }
            }),
            Object.defineProperty(i.Animation.prototype, "speed", {
                get: function() {
                    return Math.round(1e3 / this.delay)
                },
                set: function(t) {
                    t >= 1 && (this.delay = 1e3 / t)
                }
            }),
            Object.defineProperty(i.Animation.prototype, "enableUpdate", {
                get: function() {
                    return null !== this.onUpdate
                },
                set: function(t) {
                    t && null === this.onUpdate ? this.onUpdate = new i.Signal : t || null === this.onUpdate || (this.onUpdate.dispose(),
                        this.onUpdate = null)
                }
            }),
            i.Animation.generateFrameNames = function(t, e, s, n, r) {
                void 0 === n && (n = "");
                var o = []
                    , a = "";
                if (s > e)
                    for (var h = e; s >= h; h++)
                        a = "number" == typeof r ? i.Utils.pad(h.toString(), r, "0", 1) : h.toString(),
                            a = t + a + n,
                            o.push(a);
                else
                    for (var h = e; h >= s; h--)
                        a = "number" == typeof r ? i.Utils.pad(h.toString(), r, "0", 1) : h.toString(),
                            a = t + a + n,
                            o.push(a);
                return o
            }
            ,
            i.Frame = function(t, e, s, n, r, o) {
                this.index = t,
                    this.x = e,
                    this.y = s,
                    this.width = n,
                    this.height = r,
                    this.name = o,
                    this.centerX = Math.floor(n / 2),
                    this.centerY = Math.floor(r / 2),
                    this.distance = i.Math.distance(0, 0, n, r),
                    this.rotated = !1,
                    this.rotationDirection = "cw",
                    this.trimmed = !1,
                    this.sourceSizeW = n,
                    this.sourceSizeH = r,
                    this.spriteSourceSizeX = 0,
                    this.spriteSourceSizeY = 0,
                    this.spriteSourceSizeW = 0,
                    this.spriteSourceSizeH = 0,
                    this.right = this.x + this.width,
                    this.bottom = this.y + this.height
            }
            ,
            i.Frame.prototype = {
                resize: function(t, e) {
                    this.width = t,
                        this.height = e,
                        this.centerX = Math.floor(t / 2),
                        this.centerY = Math.floor(e / 2),
                        this.distance = i.Math.distance(0, 0, t, e),
                        this.sourceSizeW = t,
                        this.sourceSizeH = e,
                        this.right = this.x + t,
                        this.bottom = this.y + e
                },
                setTrim: function(t, e, i, s, n, r, o) {
                    this.trimmed = t,
                    t && (this.sourceSizeW = e,
                        this.sourceSizeH = i,
                        this.centerX = Math.floor(e / 2),
                        this.centerY = Math.floor(i / 2),
                        this.spriteSourceSizeX = s,
                        this.spriteSourceSizeY = n,
                        this.spriteSourceSizeW = r,
                        this.spriteSourceSizeH = o)
                },
                clone: function() {
                    var t = new i.Frame(this.index,this.x,this.y,this.width,this.height,this.name);
                    for (var e in this)
                        this.hasOwnProperty(e) && (t[e] = this[e]);
                    return t
                },
                getRect: function(t) {
                    return void 0 === t ? t = new i.Rectangle(this.x,this.y,this.width,this.height) : t.setTo(this.x, this.y, this.width, this.height),
                        t
                }
            },
            i.Frame.prototype.constructor = i.Frame,
            i.FrameData = function() {
                this._frames = [],
                    this._frameNames = []
            }
            ,
            i.FrameData.prototype = {
                addFrame: function(t) {
                    return t.index = this._frames.length,
                        this._frames.push(t),
                    "" !== t.name && (this._frameNames[t.name] = t.index),
                        t
                },
                getFrame: function(t) {
                    return t >= this._frames.length && (t = 0),
                        this._frames[t]
                },
                getFrameByName: function(t) {
                    return "number" == typeof this._frameNames[t] ? this._frames[this._frameNames[t]] : null
                },
                checkFrameName: function(t) {
                    return null != this._frameNames[t]
                },
                clone: function() {
                    for (var t = new i.FrameData, e = 0; e < this._frames.length; e++)
                        t._frames.push(this._frames[e].clone());
                    for (var s in this._frameNames)
                        this._frameNames.hasOwnProperty(s) && t._frameNames.push(this._frameNames[s]);
                    return t
                },
                getFrameRange: function(t, e, i) {
                    void 0 === i && (i = []);
                    for (var s = t; e >= s; s++)
                        i.push(this._frames[s]);
                    return i
                },
                getFrames: function(t, e, i) {
                    if (void 0 === e && (e = !0),
                    void 0 === i && (i = []),
                    void 0 === t || 0 === t.length)
                        for (var s = 0; s < this._frames.length; s++)
                            i.push(this._frames[s]);
                    else
                        for (var s = 0; s < t.length; s++)
                            e ? i.push(this.getFrame(t[s])) : i.push(this.getFrameByName(t[s]));
                    return i
                },
                getFrameIndexes: function(t, e, i) {
                    if (void 0 === e && (e = !0),
                    void 0 === i && (i = []),
                    void 0 === t || 0 === t.length)
                        for (var s = 0; s < this._frames.length; s++)
                            i.push(this._frames[s].index);
                    else
                        for (var s = 0; s < t.length; s++)
                            e ? i.push(this._frames[t[s]].index) : this.getFrameByName(t[s]) && i.push(this.getFrameByName(t[s]).index);
                    return i
                }
            },
            i.FrameData.prototype.constructor = i.FrameData,
            Object.defineProperty(i.FrameData.prototype, "total", {
                get: function() {
                    return this._frames.length
                }
            }),
            i.AnimationParser = {
                spriteSheet: function(t, e, s, n, r, o, a) {
                    var h = e;
                    if ("string" == typeof e && (h = t.cache.getImage(e)),
                    null === h)
                        return null;
                    var l = h.width
                        , u = h.height;
                    0 >= s && (s = Math.floor(-l / Math.min(-1, s))),
                    0 >= n && (n = Math.floor(-u / Math.min(-1, n)));
                    var c = Math.floor((l - o) / (s + a))
                        , d = Math.floor((u - o) / (n + a))
                        , p = c * d;
                    if (-1 !== r && (p = r),
                    0 === l || 0 === u || s > l || n > u || 0 === p)
                        return console.warn("Phaser.AnimationParser.spriteSheet: '" + e + "'s width/height zero or width/height < given frameWidth/frameHeight"),
                            null;
                    for (var f = new i.FrameData, m = o, g = o, y = 0; p > y; y++)
                        f.addFrame(new i.Frame(y,m,g,s,n,"")),
                            m += s + a,
                        m + s > l && (m = o,
                            g += n + a);
                    return f
                },
                JSONData: function(t, e) {
                    if (!e.frames)
                        return console.warn("Phaser.AnimationParser.JSONData: Invalid Texture Atlas JSON given, missing 'frames' array"),
                            void console.log(e);
                    for (var s, n = new i.FrameData, r = e.frames, o = 0; o < r.length; o++)
                        s = n.addFrame(new i.Frame(o,r[o].frame.x,r[o].frame.y,r[o].frame.w,r[o].frame.h,r[o].filename)),
                        r[o].trimmed && s.setTrim(r[o].trimmed, r[o].sourceSize.w, r[o].sourceSize.h, r[o].spriteSourceSize.x, r[o].spriteSourceSize.y, r[o].spriteSourceSize.w, r[o].spriteSourceSize.h);
                    return n
                },
                JSONDataPyxel: function(t, e) {
                    var s = ["layers", "tilewidth", "tileheight", "tileswide", "tileshigh"];
                    if (s.forEach(function(t) {
                        return e[t] ? void 0 : (console.warn("Phaser.AnimationParser.JSONDataPyxel: Invalid Pyxel Tilemap JSON given, missing '" + t + "' key."),
                            void console.log(e))
                    }),
                    1 != e.layers.length)
                        return console.warn("Phaser.AnimationParser.JSONDataPyxel: Too many layers, this parser only supports flat Tilemaps."),
                            void console.log(e);
                    for (var n, r = new i.FrameData, o = e.tileheight, a = e.tilewidth, h = e.layers[0].tiles, l = 0; l < h.length; l++)
                        n = r.addFrame(new i.Frame(l,h[l].x,h[l].y,a,o,"frame_" + l)),
                            n.setTrim(!1);
                    return r
                },
                JSONDataHash: function(t, e) {
                    if (!e.frames)
                        return console.warn("Phaser.AnimationParser.JSONDataHash: Invalid Texture Atlas JSON given, missing 'frames' object"),
                            void console.log(e);
                    var s, n = new i.FrameData, r = e.frames, o = 0;
                    for (var a in r)
                        s = n.addFrame(new i.Frame(o,r[a].frame.x,r[a].frame.y,r[a].frame.w,r[a].frame.h,a)),
                        r[a].trimmed && s.setTrim(r[a].trimmed, r[a].sourceSize.w, r[a].sourceSize.h, r[a].spriteSourceSize.x, r[a].spriteSourceSize.y, r[a].spriteSourceSize.w, r[a].spriteSourceSize.h),
                            o++;
                    return n
                },
                XMLData: function(t, e) {
                    if (!e.getElementsByTagName("TextureAtlas"))
                        return void console.warn("Phaser.AnimationParser.XMLData: Invalid Texture Atlas XML given, missing <TextureAtlas> tag");
                    for (var s, n, r, o, a, h, l, u, c, d, p, f = new i.FrameData, m = e.getElementsByTagName("SubTexture"), g = 0; g < m.length; g++)
                        r = m[g].attributes,
                            n = r.name.value,
                            o = parseInt(r.x.value, 10),
                            a = parseInt(r.y.value, 10),
                            h = parseInt(r.width.value, 10),
                            l = parseInt(r.height.value, 10),
                            u = null,
                            c = null,
                        r.frameX && (u = Math.abs(parseInt(r.frameX.value, 10)),
                            c = Math.abs(parseInt(r.frameY.value, 10)),
                            d = parseInt(r.frameWidth.value, 10),
                            p = parseInt(r.frameHeight.value, 10)),
                            s = f.addFrame(new i.Frame(g,o,a,h,l,n)),
                        (null !== u || null !== c) && s.setTrim(!0, h, l, u, c, d, p);
                    return f
                }
            },
            i.Cache = function(t) {
                this.game = t,
                    this.autoResolveURL = !1,
                    this._cache = {
                        canvas: {},
                        image: {},
                        texture: {},
                        sound: {},
                        video: {},
                        text: {},
                        json: {},
                        xml: {},
                        physics: {},
                        tilemap: {},
                        binary: {},
                        bitmapData: {},
                        bitmapFont: {},
                        shader: {},
                        renderTexture: {}
                    },
                    this._urlMap = {},
                    this._urlResolver = new Image,
                    this._urlTemp = null,
                    this.onSoundUnlock = new i.Signal,
                    this._cacheMap = [],
                    this._cacheMap[i.Cache.CANVAS] = this._cache.canvas,
                    this._cacheMap[i.Cache.IMAGE] = this._cache.image,
                    this._cacheMap[i.Cache.TEXTURE] = this._cache.texture,
                    this._cacheMap[i.Cache.SOUND] = this._cache.sound,
                    this._cacheMap[i.Cache.TEXT] = this._cache.text,
                    this._cacheMap[i.Cache.PHYSICS] = this._cache.physics,
                    this._cacheMap[i.Cache.TILEMAP] = this._cache.tilemap,
                    this._cacheMap[i.Cache.BINARY] = this._cache.binary,
                    this._cacheMap[i.Cache.BITMAPDATA] = this._cache.bitmapData,
                    this._cacheMap[i.Cache.BITMAPFONT] = this._cache.bitmapFont,
                    this._cacheMap[i.Cache.JSON] = this._cache.json,
                    this._cacheMap[i.Cache.XML] = this._cache.xml,
                    this._cacheMap[i.Cache.VIDEO] = this._cache.video,
                    this._cacheMap[i.Cache.SHADER] = this._cache.shader,
                    this._cacheMap[i.Cache.RENDER_TEXTURE] = this._cache.renderTexture,
                    this.addDefaultImage(),
                    this.addMissingImage()
            }
            ,
            i.Cache.CANVAS = 1,
            i.Cache.IMAGE = 2,
            i.Cache.TEXTURE = 3,
            i.Cache.SOUND = 4,
            i.Cache.TEXT = 5,
            i.Cache.PHYSICS = 6,
            i.Cache.TILEMAP = 7,
            i.Cache.BINARY = 8,
            i.Cache.BITMAPDATA = 9,
            i.Cache.BITMAPFONT = 10,
            i.Cache.JSON = 11,
            i.Cache.XML = 12,
            i.Cache.VIDEO = 13,
            i.Cache.SHADER = 14,
            i.Cache.RENDER_TEXTURE = 15,
            i.Cache.prototype = {
                addCanvas: function(t, e, i) {
                    void 0 === i && (i = e.getContext("2d")),
                        this._cache.canvas[t] = {
                            canvas: e,
                            context: i
                        }
                },
                addImage: function(t, e, s) {
                    this.checkImageKey(t) && this.removeImage(t);
                    var n = {
                        key: t,
                        url: e,
                        data: s,
                        base: new PIXI.BaseTexture(s),
                        frame: new i.Frame(0,0,0,s.width,s.height,t),
                        frameData: new i.FrameData
                    };
                    return n.frameData.addFrame(new i.Frame(0,0,0,s.width,s.height,e)),
                        this._cache.image[t] = n,
                        this._resolveURL(e, n),
                        n
                },
                addDefaultImage: function() {
                    var t = new Image;
                    t.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAQMAAABJtOi3AAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAABVJREFUeF7NwIEAAAAAgKD9qdeocAMAoAABm3DkcAAAAABJRU5ErkJggg==";
                    var e = this.addImage("__default", null, t);
                    e.base.skipRender = !0,
                        PIXI.TextureCache.__default = new PIXI.Texture(e.base)
                },
                addMissingImage: function() {
                    var t = new Image;
                    t.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJ9JREFUeNq01ssOwyAMRFG46v//Mt1ESmgh+DFmE2GPOBARKb2NVjo+17PXLD8a1+pl5+A+wSgFygymWYHBb0FtsKhJDdZlncG2IzJ4ayoMDv20wTmSMzClEgbWYNTAkQ0Z+OJ+A/eWnAaR9+oxCF4Os0H8htsMUp+pwcgBBiMNnAwF8GqIgL2hAzaGFFgZauDPKABmowZ4GL369/0rwACp2yA/ttmvsQAAAABJRU5ErkJggg==";
                    var e = this.addImage("__missing", null, t);
                    PIXI.TextureCache.__missing = new PIXI.Texture(e.base)
                },
                addSound: function(t, e, i, s, n) {
                    void 0 === s && (s = !0,
                        n = !1),
                    void 0 === n && (s = !1,
                        n = !0);
                    var r = !1;
                    n && (r = !0),
                        this._cache.sound[t] = {
                            url: e,
                            data: i,
                            isDecoding: !1,
                            decoded: r,
                            webAudio: s,
                            audioTag: n,
                            locked: this.game.sound.touchLocked
                        },
                        this._resolveURL(e, this._cache.sound[t])
                },
                addText: function(t, e, i) {
                    this._cache.text[t] = {
                        url: e,
                        data: i
                    },
                        this._resolveURL(e, this._cache.text[t])
                },
                addPhysicsData: function(t, e, i, s) {
                    this._cache.physics[t] = {
                        url: e,
                        data: i,
                        format: s
                    },
                        this._resolveURL(e, this._cache.physics[t])
                },
                addTilemap: function(t, e, i, s) {
                    this._cache.tilemap[t] = {
                        url: e,
                        data: i,
                        format: s
                    },
                        this._resolveURL(e, this._cache.tilemap[t])
                },
                addBinary: function(t, e) {
                    this._cache.binary[t] = e
                },
                addBitmapData: function(t, e, s) {
                    return e.key = t,
                    void 0 === s && (s = new i.FrameData,
                        s.addFrame(e.textureFrame)),
                        this._cache.bitmapData[t] = {
                            data: e,
                            frameData: s
                        },
                        e
                },
                addBitmapFont: function(t, e, s, n, r, o, a) {
                    var h = {
                        url: e,
                        data: s,
                        font: null,
                        base: new PIXI.BaseTexture(s)
                    };
                    void 0 === o && (o = 0),
                    void 0 === a && (a = 0),
                        "json" === r ? h.font = i.LoaderParser.jsonBitmapFont(n, h.base, o, a) : h.font = i.LoaderParser.xmlBitmapFont(n, h.base, o, a),
                        this._cache.bitmapFont[t] = h,
                        this._resolveURL(e, h)
                },
                addJSON: function(t, e, i) {
                    this._cache.json[t] = {
                        url: e,
                        data: i
                    },
                        this._resolveURL(e, this._cache.json[t])
                },
                addXML: function(t, e, i) {
                    this._cache.xml[t] = {
                        url: e,
                        data: i
                    },
                        this._resolveURL(e, this._cache.xml[t])
                },
                addVideo: function(t, e, i, s) {
                    this._cache.video[t] = {
                        url: e,
                        data: i,
                        isBlob: s,
                        locked: !0
                    },
                        this._resolveURL(e, this._cache.video[t])
                },
                addShader: function(t, e, i) {
                    this._cache.shader[t] = {
                        url: e,
                        data: i
                    },
                        this._resolveURL(e, this._cache.shader[t])
                },
                addRenderTexture: function(t, e) {
                    this._cache.renderTexture[t] = {
                        texture: e,
                        frame: new i.Frame(0,0,0,e.width,e.height,"","")
                    }
                },
                addSpriteSheet: function(t, e, s, n, r, o, a, h) {
                    void 0 === o && (o = -1),
                    void 0 === a && (a = 0),
                    void 0 === h && (h = 0);
                    var l = {
                        key: t,
                        url: e,
                        data: s,
                        frameWidth: n,
                        frameHeight: r,
                        margin: a,
                        spacing: h,
                        base: new PIXI.BaseTexture(s),
                        frameData: i.AnimationParser.spriteSheet(this.game, s, n, r, o, a, h)
                    };
                    this._cache.image[t] = l,
                        this._resolveURL(e, l)
                },
                addTextureAtlas: function(t, e, s, n, r) {
                    var o = {
                        key: t,
                        url: e,
                        data: s,
                        base: new PIXI.BaseTexture(s)
                    };
                    r === i.Loader.TEXTURE_ATLAS_XML_STARLING ? o.frameData = i.AnimationParser.XMLData(this.game, n, t) : r === i.Loader.TEXTURE_ATLAS_JSON_PYXEL ? o.frameData = i.AnimationParser.JSONDataPyxel(this.game, n, t) : Array.isArray(n.frames) ? o.frameData = i.AnimationParser.JSONData(this.game, n, t) : o.frameData = i.AnimationParser.JSONDataHash(this.game, n, t),
                        this._cache.image[t] = o,
                        this._resolveURL(e, o)
                },
                reloadSound: function(t) {
                    var e = this
                        , i = this.getSound(t);
                    i && (i.data.src = i.url,
                        i.data.addEventListener("canplaythrough", function() {
                            return e.reloadSoundComplete(t)
                        }, !1),
                        i.data.load())
                },
                reloadSoundComplete: function(t) {
                    var e = this.getSound(t);
                    e && (e.locked = !1,
                        this.onSoundUnlock.dispatch(t))
                },
                updateSound: function(t, e, i) {
                    var s = this.getSound(t);
                    s && (s[e] = i)
                },
                decodedSound: function(t, e) {
                    var i = this.getSound(t);
                    i.data = e,
                        i.decoded = !0,
                        i.isDecoding = !1
                },
                isSoundDecoded: function(t) {
                    var e = this.getItem(t, i.Cache.SOUND, "isSoundDecoded");
                    return e ? e.decoded : void 0
                },
                isSoundReady: function(t) {
                    var e = this.getItem(t, i.Cache.SOUND, "isSoundDecoded");
                    return e ? e.decoded && !this.game.sound.touchLocked : void 0
                },
                checkKey: function(t, e) {
                    return !!this._cacheMap[t][e]
                },
                checkURL: function(t) {
                    return !!this._urlMap[this._resolveURL(t)]
                },
                checkCanvasKey: function(t) {
                    return this.checkKey(i.Cache.CANVAS, t)
                },
                checkImageKey: function(t) {
                    return this.checkKey(i.Cache.IMAGE, t)
                },
                checkTextureKey: function(t) {
                    return this.checkKey(i.Cache.TEXTURE, t)
                },
                checkSoundKey: function(t) {
                    return this.checkKey(i.Cache.SOUND, t)
                },
                checkTextKey: function(t) {
                    return this.checkKey(i.Cache.TEXT, t)
                },
                checkPhysicsKey: function(t) {
                    return this.checkKey(i.Cache.PHYSICS, t)
                },
                checkTilemapKey: function(t) {
                    return this.checkKey(i.Cache.TILEMAP, t)
                },
                checkBinaryKey: function(t) {
                    return this.checkKey(i.Cache.BINARY, t)
                },
                checkBitmapDataKey: function(t) {
                    return this.checkKey(i.Cache.BITMAPDATA, t)
                },
                checkBitmapFontKey: function(t) {
                    return this.checkKey(i.Cache.BITMAPFONT, t)
                },
                checkJSONKey: function(t) {
                    return this.checkKey(i.Cache.JSON, t)
                },
                checkXMLKey: function(t) {
                    return this.checkKey(i.Cache.XML, t)
                },
                checkVideoKey: function(t) {
                    return this.checkKey(i.Cache.VIDEO, t)
                },
                checkShaderKey: function(t) {
                    return this.checkKey(i.Cache.SHADER, t)
                },
                checkRenderTextureKey: function(t) {
                    return this.checkKey(i.Cache.RENDER_TEXTURE, t)
                },
                getItem: function(t, e, i, s) {
                    return this.checkKey(e, t) ? void 0 === s ? this._cacheMap[e][t] : this._cacheMap[e][t][s] : (i && console.warn("Phaser.Cache." + i + ': Key "' + t + '" not found in Cache.'),
                        null)
                },
                getCanvas: function(t) {
                    return this.getItem(t, i.Cache.CANVAS, "getCanvas", "canvas")
                },
                getImage: function(t, e) {
                    (void 0 === t || null === t) && (t = "__default"),
                    void 0 === e && (e = !1);
                    var s = this.getItem(t, i.Cache.IMAGE, "getImage");
                    return null === s && (s = this.getItem("__missing", i.Cache.IMAGE, "getImage")),
                        e ? s : s.data
                },
                getTextureFrame: function(t) {
                    return this.getItem(t, i.Cache.TEXTURE, "getTextureFrame", "frame")
                },
                getSound: function(t) {
                    return this.getItem(t, i.Cache.SOUND, "getSound")
                },
                getSoundData: function(t) {
                    return this.getItem(t, i.Cache.SOUND, "getSoundData", "data")
                },
                getText: function(t) {
                    return this.getItem(t, i.Cache.TEXT, "getText", "data")
                },
                getPhysicsData: function(t, e, s) {
                    var n = this.getItem(t, i.Cache.PHYSICS, "getPhysicsData", "data");
                    if (null === n || void 0 === e || null === e)
                        return n;
                    if (n[e]) {
                        var r = n[e];
                        if (!r || !s)
                            return r;
                        for (var o in r)
                            if (o = r[o],
                            o.fixtureKey === s)
                                return o;
                        console.warn('Phaser.Cache.getPhysicsData: Could not find given fixtureKey: "' + s + " in " + t + '"')
                    } else
                        console.warn('Phaser.Cache.getPhysicsData: Invalid key/object: "' + t + " / " + e + '"');
                    return null
                },
                getTilemapData: function(t) {
                    return this.getItem(t, i.Cache.TILEMAP, "getTilemapData")
                },
                getBinary: function(t) {
                    return this.getItem(t, i.Cache.BINARY, "getBinary")
                },
                getBitmapData: function(t) {
                    return this.getItem(t, i.Cache.BITMAPDATA, "getBitmapData", "data")
                },
                getBitmapFont: function(t) {
                    return this.getItem(t, i.Cache.BITMAPFONT, "getBitmapFont")
                },
                getJSON: function(t, e) {
                    var s = this.getItem(t, i.Cache.JSON, "getJSON", "data");
                    return s ? e ? i.Utils.extend(!0, s) : s : null
                },
                getXML: function(t) {
                    return this.getItem(t, i.Cache.XML, "getXML", "data")
                },
                getVideo: function(t) {
                    return this.getItem(t, i.Cache.VIDEO, "getVideo")
                },
                getShader: function(t) {
                    return this.getItem(t, i.Cache.SHADER, "getShader", "data")
                },
                getRenderTexture: function(t) {
                    return this.getItem(t, i.Cache.RENDER_TEXTURE, "getRenderTexture")
                },
                getBaseTexture: function(t, e) {
                    return void 0 === e && (e = i.Cache.IMAGE),
                        this.getItem(t, e, "getBaseTexture", "base")
                },
                getFrame: function(t, e) {
                    return void 0 === e && (e = i.Cache.IMAGE),
                        this.getItem(t, e, "getFrame", "frame")
                },
                getFrameCount: function(t, e) {
                    var i = this.getFrameData(t, e);
                    return i ? i.total : 0
                },
                getFrameData: function(t, e) {
                    return void 0 === e && (e = i.Cache.IMAGE),
                        this.getItem(t, e, "getFrameData", "frameData")
                },
                hasFrameData: function(t, e) {
                    return void 0 === e && (e = i.Cache.IMAGE),
                    null !== this.getItem(t, e, "", "frameData")
                },
                updateFrameData: function(t, e, s) {
                    void 0 === s && (s = i.Cache.IMAGE),
                    this._cacheMap[s][t] && (this._cacheMap[s][t].frameData = e)
                },
                getFrameByIndex: function(t, e, i) {
                    var s = this.getFrameData(t, i);
                    return s ? s.getFrame(e) : null
                },
                getFrameByName: function(t, e, i) {
                    var s = this.getFrameData(t, i);
                    return s ? s.getFrameByName(e) : null
                },
                getPixiTexture: function(t) {
                    if (PIXI.TextureCache[t])
                        return PIXI.TextureCache[t];
                    var e = this.getPixiBaseTexture(t);
                    return e ? new PIXI.Texture(e) : null
                },
                getPixiBaseTexture: function(t) {
                    if (PIXI.BaseTextureCache[t])
                        return PIXI.BaseTextureCache[t];
                    var e = this.getItem(t, i.Cache.IMAGE, "getPixiBaseTexture");
                    return null !== e ? e.base : null
                },
                getURL: function(t) {
                    var t = this._resolveURL(t);
                    return t ? this._urlMap[t] : (console.warn('Phaser.Cache.getUrl: Invalid url: "' + t + '" or Cache.autoResolveURL was false'),
                        null)
                },
                getKeys: function(t) {
                    void 0 === t && (t = i.Cache.IMAGE);
                    var e = [];
                    if (this._cacheMap[t])
                        for (var s in this._cacheMap[t])
                            "__default" !== s && "__missing" !== s && e.push(s);
                    return e
                },
                removeCanvas: function(t) {
                    delete this._cache.canvas[t]
                },
                removeImage: function(t, e) {
                    void 0 === e && (e = !0);
                    var i = this.getImage(t, !0);
                    e && i.base && i.base.destroy(),
                        delete this._cache.image[t]
                },
                removeSound: function(t) {
                    delete this._cache.sound[t]
                },
                removeText: function(t) {
                    delete this._cache.text[t]
                },
                removePhysics: function(t) {
                    delete this._cache.physics[t]
                },
                removeTilemap: function(t) {
                    delete this._cache.tilemap[t]
                },
                removeBinary: function(t) {
                    delete this._cache.binary[t]
                },
                removeBitmapData: function(t) {
                    delete this._cache.bitmapData[t]
                },
                removeBitmapFont: function(t) {
                    delete this._cache.bitmapFont[t]
                },
                removeJSON: function(t) {
                    delete this._cache.json[t]
                },
                removeXML: function(t) {
                    delete this._cache.xml[t]
                },
                removeVideo: function(t) {
                    delete this._cache.video[t]
                },
                removeShader: function(t) {
                    delete this._cache.shader[t]
                },
                removeRenderTexture: function(t) {
                    delete this._cache.renderTexture[t]
                },
                removeSpriteSheet: function(t) {
                    delete this._cache.spriteSheet[t]
                },
                removeTextureAtlas: function(t) {
                    delete this._cache.atlas[t]
                },
                clearGLTextures: function() {
                    for (var t in this.cache.image)
                        this.cache.image[t].base._glTextures = []
                },
                _resolveURL: function(t, e) {
                    return this.autoResolveURL ? (this._urlResolver.src = this.game.load.baseURL + t,
                        this._urlTemp = this._urlResolver.src,
                        this._urlResolver.src = "",
                    e && (this._urlMap[this._urlTemp] = e),
                        this._urlTemp) : null
                },
                destroy: function() {
                    for (var t = 0; t < this._cacheMap.length; t++) {
                        var e = this._cacheMap[t];
                        for (var i in e)
                            "__default" !== i && "__missing" !== i && (e[i].destroy && e[i].destroy(),
                                delete e[i])
                    }
                    this._urlMap = null,
                        this._urlResolver = null,
                        this._urlTemp = null
                }
            },
            i.Cache.prototype.constructor = i.Cache,
            i.Loader = function(t) {
                this.game = t,
                    this.cache = t.cache,
                    this.resetLocked = !1,
                    this.isLoading = !1,
                    this.hasLoaded = !1,
                    this.preloadSprite = null,
                    this.crossOrigin = !1,
                    this.baseURL = "",
                    this.path = "",
                    this.onLoadStart = new i.Signal,
                    this.onLoadComplete = new i.Signal,
                    this.onPackComplete = new i.Signal,
                    this.onFileStart = new i.Signal,
                    this.onFileComplete = new i.Signal,
                    this.onFileError = new i.Signal,
                    this.useXDomainRequest = !1,
                    this._warnedAboutXDomainRequest = !1,
                    this.enableParallel = !0,
                    this.maxParallelDownloads = 4,
                    this._withSyncPointDepth = 0,
                    this._fileList = [],
                    this._flightQueue = [],
                    this._processingHead = 0,
                    this._fileLoadStarted = !1,
                    this._totalPackCount = 0,
                    this._totalFileCount = 0,
                    this._loadedPackCount = 0,
                    this._loadedFileCount = 0
            }
            ,
            i.Loader.TEXTURE_ATLAS_JSON_ARRAY = 0,
            i.Loader.TEXTURE_ATLAS_JSON_HASH = 1,
            i.Loader.TEXTURE_ATLAS_XML_STARLING = 2,
            i.Loader.PHYSICS_LIME_CORONA_JSON = 3,
            i.Loader.PHYSICS_PHASER_JSON = 4,
            i.Loader.TEXTURE_ATLAS_JSON_PYXEL = 5,
            i.Loader.prototype = {
                setPreloadSprite: function(t, e) {
                    e = e || 0,
                        this.preloadSprite = {
                            sprite: t,
                            direction: e,
                            width: t.width,
                            height: t.height,
                            rect: null
                        },
                        0 === e ? this.preloadSprite.rect = new i.Rectangle(0,0,1,t.height) : this.preloadSprite.rect = new i.Rectangle(0,0,t.width,1),
                        t.crop(this.preloadSprite.rect),
                        t.visible = !0
                },
                resize: function() {
                    this.preloadSprite && this.preloadSprite.height !== this.preloadSprite.sprite.height && (this.preloadSprite.rect.height = this.preloadSprite.sprite.height)
                },
                checkKeyExists: function(t, e) {
                    return this.getAssetIndex(t, e) > -1
                },
                getAssetIndex: function(t, e) {
                    for (var i = -1, s = 0; s < this._fileList.length; s++) {
                        var n = this._fileList[s];
                        if (n.type === t && n.key === e && (i = s,
                        !n.loaded && !n.loading))
                            break
                    }
                    return i
                },
                getAsset: function(t, e) {
                    var i = this.getAssetIndex(t, e);
                    return i > -1 && {
                        index: i,
                        file: this._fileList[i]
                    }
                },
                reset: function(t, e) {
                    void 0 === e && (e = !1),
                    this.resetLocked || (t && (this.preloadSprite = null),
                        this.isLoading = !1,
                        this._processingHead = 0,
                        this._fileList.length = 0,
                        this._flightQueue.length = 0,
                        this._fileLoadStarted = !1,
                        this._totalFileCount = 0,
                        this._totalPackCount = 0,
                        this._loadedPackCount = 0,
                        this._loadedFileCount = 0,
                    e && (this.onLoadStart.removeAll(),
                        this.onLoadComplete.removeAll(),
                        this.onPackComplete.removeAll(),
                        this.onFileStart.removeAll(),
                        this.onFileComplete.removeAll(),
                        this.onFileError.removeAll()))
                },
                addToFileList: function(t, e, i, s, n, r) {
                    if (void 0 === n && (n = !1),
                    void 0 === e || "" === e)
                        return console.warn("Phaser.Loader: Invalid or no key given of type " + t),
                            this;
                    if (void 0 === i || null === i) {
                        if (!r)
                            return console.warn("Phaser.Loader: No URL given for file type: " + t + " key: " + e),
                                this;
                        i = e + r
                    }
                    var o = {
                        type: t,
                        key: e,
                        path: this.path,
                        url: i,
                        syncPoint: this._withSyncPointDepth > 0,
                        data: null,
                        loading: !1,
                        loaded: !1,
                        error: !1
                    };
                    if (s)
                        for (var a in s)
                            o[a] = s[a];
                    var h = this.getAssetIndex(t, e);
                    if (n && h > -1) {
                        var l = this._fileList[h];
                        l.loading || l.loaded ? (this._fileList.push(o),
                            this._totalFileCount++) : this._fileList[h] = o
                    } else
                        -1 === h && (this._fileList.push(o),
                            this._totalFileCount++);
                    return this
                },
                replaceInFileList: function(t, e, i, s) {
                    return this.addToFileList(t, e, i, s, !0)
                },
                pack: function(t, e, i, s) {
                    if (void 0 === e && (e = null),
                    void 0 === i && (i = null),
                    void 0 === s && (s = null),
                    !e && !i)
                        return console.warn("Phaser.Loader.pack - Both url and data are null. One must be set."),
                            this;
                    var n = {
                        type: "packfile",
                        key: t,
                        url: e,
                        path: this.path,
                        syncPoint: !0,
                        data: null,
                        loading: !1,
                        loaded: !1,
                        error: !1,
                        callbackContext: s
                    };
                    i && ("string" == typeof i && (i = JSON.parse(i)),
                        n.data = i || {},
                        n.loaded = !0);
                    for (var r = 0; r < this._fileList.length + 1; r++) {
                        var o = this._fileList[r];
                        if (!o || !o.loaded && !o.loading && "packfile" !== o.type) {
                            this._fileList.splice(r, 1, n),
                                this._totalPackCount++;
                            break
                        }
                    }
                    return this
                },
                image: function(t, e, i) {
                    return this.addToFileList("image", t, e, void 0, i, ".png")
                },
                images: function(t, e) {
                    if (Array.isArray(e))
                        for (var i = 0; i < t.length; i++)
                            this.image(t[i], e[i]);
                    else
                        for (var i = 0; i < t.length; i++)
                            this.image(t[i]);
                    return this
                },
                text: function(t, e, i) {
                    return this.addToFileList("text", t, e, void 0, i, ".txt")
                },
                json: function(t, e, i) {
                    return this.addToFileList("json", t, e, void 0, i, ".json")
                },
                shader: function(t, e, i) {
                    return this.addToFileList("shader", t, e, void 0, i, ".frag")
                },
                xml: function(t, e, i) {
                    return this.addToFileList("xml", t, e, void 0, i, ".xml")
                },
                script: function(t, e, i, s) {
                    return void 0 === i && (i = !1),
                    i !== !1 && void 0 === s && (s = this),
                        this.addToFileList("script", t, e, {
                            syncPoint: !0,
                            callback: i,
                            callbackContext: s
                        }, !1, ".js")
                },
                binary: function(t, e, i, s) {
                    return void 0 === i && (i = !1),
                    i !== !1 && void 0 === s && (s = i),
                        this.addToFileList("binary", t, e, {
                            callback: i,
                            callbackContext: s
                        }, !1, ".bin")
                },
                spritesheet: function(t, e, i, s, n, r, o) {
                    return void 0 === n && (n = -1),
                    void 0 === r && (r = 0),
                    void 0 === o && (o = 0),
                        this.addToFileList("spritesheet", t, e, {
                            frameWidth: i,
                            frameHeight: s,
                            frameMax: n,
                            margin: r,
                            spacing: o
                        }, !1, ".png")
                },
                audio: function(t, e, i) {
                    return this.game.sound.noAudio ? this : (void 0 === i && (i = !0),
                    "string" == typeof e && (e = [e]),
                        this.addToFileList("audio", t, e, {
                            buffer: null,
                            autoDecode: i
                        }))
                },
                audiosprite: function(t, e, i, s, n) {
                    return this.game.sound.noAudio ? this : (void 0 === i && (i = null),
                    void 0 === s && (s = null),
                    void 0 === n && (n = !0),
                        this.audio(t, e, n),
                        i ? this.json(t + "-audioatlas", i) : s ? ("string" == typeof s && (s = JSON.parse(s)),
                            this.cache.addJSON(t + "-audioatlas", "", s)) : console.warn("Phaser.Loader.audiosprite - You must specify either a jsonURL or provide a jsonData object"),
                        this)
                },
                video: function(t, e, i, s) {
                    return void 0 === i && (i = this.game.device.firefox ? "loadeddata" : "canplaythrough"),
                    void 0 === s && (s = !1),
                    "string" == typeof e && (e = [e]),
                        this.addToFileList("video", t, e, {
                            buffer: null,
                            asBlob: s,
                            loadEvent: i
                        })
                },
                tilemap: function(t, e, s, n) {
                    if (void 0 === e && (e = null),
                    void 0 === s && (s = null),
                    void 0 === n && (n = i.Tilemap.CSV),
                    e || s || (e = n === i.Tilemap.CSV ? t + ".csv" : t + ".json"),
                        s) {
                        switch (n) {
                            case i.Tilemap.CSV:
                                break;
                            case i.Tilemap.TILED_JSON:
                                "string" == typeof s && (s = JSON.parse(s))
                        }
                        this.cache.addTilemap(t, null, s, n)
                    } else
                        this.addToFileList("tilemap", t, e, {
                            format: n
                        });
                    return this
                },
                physics: function(t, e, s, n) {
                    return void 0 === e && (e = null),
                    void 0 === s && (s = null),
                    void 0 === n && (n = i.Physics.LIME_CORONA_JSON),
                    e || s || (e = t + ".json"),
                        s ? ("string" == typeof s && (s = JSON.parse(s)),
                            this.cache.addPhysicsData(t, null, s, n)) : this.addToFileList("physics", t, e, {
                            format: n
                        }),
                        this
                },
                bitmapFont: function(t, e, i, s, n, r) {
                    if ((void 0 === e || null === e) && (e = t + ".png"),
                    void 0 === i && (i = null),
                    void 0 === s && (s = null),
                    null === i && null === s && (i = t + ".xml"),
                    void 0 === n && (n = 0),
                    void 0 === r && (r = 0),
                        i)
                        this.addToFileList("bitmapfont", t, e, {
                            atlasURL: i,
                            xSpacing: n,
                            ySpacing: r
                        });
                    else if ("string" == typeof s) {
                        var o, a;
                        try {
                            o = JSON.parse(s)
                        } catch (h) {
                            a = this.parseXml(s)
                        }
                        if (!a && !o)
                            throw new Error("Phaser.Loader. Invalid Bitmap Font atlas given");
                        this.addToFileList("bitmapfont", t, e, {
                            atlasURL: null,
                            atlasData: o || a,
                            atlasType: o ? "json" : "xml",
                            xSpacing: n,
                            ySpacing: r
                        })
                    }
                    return this
                },
                atlasJSONArray: function(t, e, s, n) {
                    return this.atlas(t, e, s, n, i.Loader.TEXTURE_ATLAS_JSON_ARRAY)
                },
                atlasJSONHash: function(t, e, s, n) {
                    return this.atlas(t, e, s, n, i.Loader.TEXTURE_ATLAS_JSON_HASH)
                },
                atlasXML: function(t, e, s, n) {
                    return void 0 === s && (s = null),
                    void 0 === n && (n = null),
                    s || n || (s = t + ".xml"),
                        this.atlas(t, e, s, n, i.Loader.TEXTURE_ATLAS_XML_STARLING)
                },
                atlas: function(t, e, s, n, r) {
                    if ((void 0 === e || null === e) && (e = t + ".png"),
                    void 0 === s && (s = null),
                    void 0 === n && (n = null),
                    void 0 === r && (r = i.Loader.TEXTURE_ATLAS_JSON_ARRAY),
                    s || n || (s = r === i.Loader.TEXTURE_ATLAS_XML_STARLING ? t + ".xml" : t + ".json"),
                        s)
                        this.addToFileList("textureatlas", t, e, {
                            atlasURL: s,
                            format: r
                        });
                    else {
                        switch (r) {
                            case i.Loader.TEXTURE_ATLAS_JSON_ARRAY:
                                "string" == typeof n && (n = JSON.parse(n));
                                break;
                            case i.Loader.TEXTURE_ATLAS_XML_STARLING:
                                if ("string" == typeof n) {
                                    var o = this.parseXml(n);
                                    if (!o)
                                        throw new Error("Phaser.Loader. Invalid Texture Atlas XML given");
                                    n = o
                                }
                        }
                        this.addToFileList("textureatlas", t, e, {
                            atlasURL: null,
                            atlasData: n,
                            format: r
                        })
                    }
                    return this
                },
                withSyncPoint: function(t, e) {
                    this._withSyncPointDepth++;
                    try {
                        t.call(e || this, this)
                    } finally {
                        this._withSyncPointDepth--
                    }
                    return this
                },
                addSyncPoint: function(t, e) {
                    var i = this.getAsset(t, e);
                    return i && (i.file.syncPoint = !0),
                        this
                },
                removeFile: function(t, e) {
                    var i = this.getAsset(t, e);
                    i && (i.loaded || i.loading || this._fileList.splice(i.index, 1))
                },
                removeAll: function() {
                    this._fileList.length = 0,
                        this._flightQueue.length = 0
                },
                start: function() {
                    this.isLoading || (this.hasLoaded = !1,
                        this.isLoading = !0,
                        this.updateProgress(),
                        this.processLoadQueue())
                },
                processLoadQueue: function() {
                    if (!this.isLoading)
                        return console.warn("Phaser.Loader - active loading canceled / reset"),
                            void this.finishedLoading(!0);
                    for (var t = 0; t < this._flightQueue.length; t++) {
                        var e = this._flightQueue[t];
                        (e.loaded || e.error) && (this._flightQueue.splice(t, 1),
                            t--,
                            e.loading = !1,
                            e.requestUrl = null,
                            e.requestObject = null,
                        e.error && this.onFileError.dispatch(e.key, e),
                            "packfile" !== e.type ? (this._loadedFileCount++,
                                this.onFileComplete.dispatch(this.progress, e.key, !e.error, this._loadedFileCount, this._totalFileCount)) : "packfile" === e.type && e.error && (this._loadedPackCount++,
                                this.onPackComplete.dispatch(e.key, !e.error, this._loadedPackCount, this._totalPackCount)))
                    }
                    for (var s = !1, n = this.enableParallel ? i.Math.clamp(this.maxParallelDownloads, 1, 12) : 1, t = this._processingHead; t < this._fileList.length; t++) {
                        var e = this._fileList[t];
                        if ("packfile" === e.type && !e.error && e.loaded && t === this._processingHead && (this.processPack(e),
                            this._loadedPackCount++,
                            this.onPackComplete.dispatch(e.key, !e.error, this._loadedPackCount, this._totalPackCount)),
                            e.loaded || e.error ? t === this._processingHead && (this._processingHead = t + 1) : !e.loading && this._flightQueue.length < n && ("packfile" !== e.type || e.data ? s || (this._fileLoadStarted || (this._fileLoadStarted = !0,
                                this.onLoadStart.dispatch()),
                                this._flightQueue.push(e),
                                e.loading = !0,
                                this.onFileStart.dispatch(this.progress, e.key, e.url),
                                this.loadFile(e)) : (this._flightQueue.push(e),
                                e.loading = !0,
                                this.loadFile(e))),
                        !e.loaded && e.syncPoint && (s = !0),
                        this._flightQueue.length >= n || s && this._loadedPackCount === this._totalPackCount)
                            break
                    }
                    if (this.updateProgress(),
                    this._processingHead >= this._fileList.length)
                        this.finishedLoading();
                    else if (!this._flightQueue.length) {
                        console.warn("Phaser.Loader - aborting: processing queue empty, loading may have stalled");
                        var r = this;
                        setTimeout(function() {
                            r.finishedLoading(!0)
                        }, 2e3)
                    }
                },
                finishedLoading: function(t) {
                    this.hasLoaded || (this.hasLoaded = !0,
                        this.isLoading = !1,
                    t || this._fileLoadStarted || (this._fileLoadStarted = !0,
                        this.onLoadStart.dispatch()),
                        this.onLoadComplete.dispatch(),
                        this.reset(),
                        this.game.state.loadComplete())
                },
                asyncComplete: function(t, e) {
                    void 0 === e && (e = ""),
                        t.loaded = !0,
                        t.error = !!e,
                    e && (t.errorMessage = e,
                        console.warn("Phaser.Loader - " + t.type + "[" + t.key + "]: " + e)),
                        this.processLoadQueue()
                },
                processPack: function(t) {
                    var e = t.data[t.key];
                    if (!e)
                        return void console.warn("Phaser.Loader - " + t.key + ": pack has data, but not for pack key");
                    for (var s = 0; s < e.length; s++) {
                        var n = e[s];
                        switch (n.type) {
                            case "image":
                                this.image(n.key, n.url, n.overwrite);
                                break;
                            case "text":
                                this.text(n.key, n.url, n.overwrite);
                                break;
                            case "json":
                                this.json(n.key, n.url, n.overwrite);
                                break;
                            case "xml":
                                this.xml(n.key, n.url, n.overwrite);
                                break;
                            case "script":
                                this.script(n.key, n.url, n.callback, t.callbackContext || this);
                                break;
                            case "binary":
                                this.binary(n.key, n.url, n.callback, t.callbackContext || this);
                                break;
                            case "spritesheet":
                                this.spritesheet(n.key, n.url, n.frameWidth, n.frameHeight, n.frameMax, n.margin, n.spacing);
                                break;
                            case "video":
                                this.video(n.key, n.urls);
                                break;
                            case "audio":
                                this.audio(n.key, n.urls, n.autoDecode);
                                break;
                            case "audiosprite":
                                this.audiosprite(n.key, n.urls, n.jsonURL, n.jsonData, n.autoDecode);
                                break;
                            case "tilemap":
                                this.tilemap(n.key, n.url, n.data, i.Tilemap[n.format]);
                                break;
                            case "physics":
                                this.physics(n.key, n.url, n.data, i.Loader[n.format]);
                                break;
                            case "bitmapFont":
                                this.bitmapFont(n.key, n.textureURL, n.atlasURL, n.atlasData, n.xSpacing, n.ySpacing);
                                break;
                            case "atlasJSONArray":
                                this.atlasJSONArray(n.key, n.textureURL, n.atlasURL, n.atlasData);
                                break;
                            case "atlasJSONHash":
                                this.atlasJSONHash(n.key, n.textureURL, n.atlasURL, n.atlasData);
                                break;
                            case "atlasXML":
                                this.atlasXML(n.key, n.textureURL, n.atlasURL, n.atlasData);
                                break;
                            case "atlas":
                                this.atlas(n.key, n.textureURL, n.atlasURL, n.atlasData, i.Loader[n.format]);
                                break;
                            case "shader":
                                this.shader(n.key, n.url, n.overwrite)
                        }
                    }
                },
                transformUrl: function(t, e) {
                    return !!t && (t.match(/^(?:blob:|data:|http:\/\/|https:\/\/|\/\/)/) ? t : this.baseURL + e.path + t)
                },
                loadFile: function(t) {
                    switch (t.type) {
                        case "packfile":
                            this.xhrLoad(t, this.transformUrl(t.url, t), "text", this.fileComplete);
                            break;
                        case "image":
                        case "spritesheet":
                        case "textureatlas":
                        case "bitmapfont":
                            this.loadImageTag(t);
                            break;
                        case "audio":
                            t.url = this.getAudioURL(t.url),
                                t.url ? this.game.sound.usingWebAudio ? this.xhrLoad(t, this.transformUrl(t.url, t), "arraybuffer", this.fileComplete) : this.game.sound.usingAudioTag && this.loadAudioTag(t) : this.fileError(t, null, "No supported audio URL specified or device does not have audio playback support");
                            break;
                        case "video":
                            t.url = this.getVideoURL(t.url),
                                t.url ? t.asBlob ? this.xhrLoad(t, this.transformUrl(t.url, t), "arraybuffer", this.fileComplete) : this.loadVideoTag(t) : this.fileError(t, null, "No supported video URL specified or device does not have video playback support");
                            break;
                        case "json":
                            this.xhrLoad(t, this.transformUrl(t.url, t), "text", this.jsonLoadComplete);
                            break;
                        case "xml":
                            this.xhrLoad(t, this.transformUrl(t.url, t), "text", this.xmlLoadComplete);
                            break;
                        case "tilemap":
                            t.format === i.Tilemap.TILED_JSON ? this.xhrLoad(t, this.transformUrl(t.url, t), "text", this.jsonLoadComplete) : t.format === i.Tilemap.CSV ? this.xhrLoad(t, this.transformUrl(t.url, t), "text", this.csvLoadComplete) : this.asyncComplete(t, "invalid Tilemap format: " + t.format);
                            break;
                        case "text":
                        case "script":
                        case "shader":
                        case "physics":
                            this.xhrLoad(t, this.transformUrl(t.url, t), "text", this.fileComplete);
                            break;
                        case "binary":
                            this.xhrLoad(t, this.transformUrl(t.url, t), "arraybuffer", this.fileComplete)
                    }
                },
                loadImageTag: function(t) {
                    var e = this;
                    t.data = new Image,
                        t.data.name = t.key,
                    this.crossOrigin && (t.data.crossOrigin = this.crossOrigin),
                        t.data.onload = function() {
                            t.data.onload && (t.data.onload = null,
                                t.data.onerror = null,
                                e.fileComplete(t))
                        }
                        ,
                        t.data.onerror = function() {
                            t.data.onload && (t.data.onload = null,
                                t.data.onerror = null,
                                e.fileError(t))
                        }
                        ,
                        t.data.src = this.transformUrl(t.url, t),
                    t.data.complete && t.data.width && t.data.height && (t.data.onload = null,
                        t.data.onerror = null,
                        this.fileComplete(t))
                },
                loadVideoTag: function(t) {
                    var e = this;
                    t.data = document.createElement("video"),
                        t.data.name = t.key,
                        t.data.controls = !1,
                        t.data.autoplay = !1;
                    var s = function() {
                        t.data.removeEventListener(t.loadEvent, s, !1),
                            t.data.onerror = null,
                            t.data.canplay = !0,
                            i.GAMES[e.game.id].load.fileComplete(t)
                    };
                    t.data.onerror = function() {
                        t.data.removeEventListener(t.loadEvent, s, !1),
                            t.data.onerror = null,
                            t.data.canplay = !1,
                            e.fileError(t)
                    }
                        ,
                        t.data.addEventListener(t.loadEvent, s, !1),
                        t.data.src = this.transformUrl(t.url, t),
                        t.data.load()
                },
                loadAudioTag: function(t) {
                    var e = this;
                    if (this.game.sound.touchLocked)
                        t.data = new Audio,
                            t.data.name = t.key,
                            t.data.preload = "auto",
                            t.data.src = this.transformUrl(t.url, t),
                            this.fileComplete(t);
                    else {
                        t.data = new Audio,
                            t.data.name = t.key;
                        var s = function() {
                            t.data.removeEventListener("canplaythrough", s, !1),
                                t.data.onerror = null,
                                i.GAMES[e.game.id].load.fileComplete(t)
                        };
                        t.data.onerror = function() {
                            t.data.removeEventListener("canplaythrough", s, !1),
                                t.data.onerror = null,
                                e.fileError(t)
                        }
                            ,
                            t.data.preload = "auto",
                            t.data.src = this.transformUrl(t.url, t),
                            t.data.addEventListener("canplaythrough", s, !1),
                            t.data.load()
                    }
                },
                xhrLoad: function(t, e, i, s, n) {
                    if (this.useXDomainRequest && window.XDomainRequest)
                        return void this.xhrLoadWithXDR(t, e, i, s, n);
                    var r = new XMLHttpRequest;
                    r.open("GET", e, !0),
                        r.responseType = i,
                        n = n || this.fileError;
                    var o = this;
                    r.onload = function() {
                        try {
                            return s.call(o, t, r)
                        } catch (e) {
                            o.hasLoaded ? window.console && console.error(e) : o.asyncComplete(t, e.message || "Exception")
                        }
                    }
                        ,
                        r.onerror = function() {
                            try {
                                return n.call(o, t, r)
                            } catch (e) {
                                o.hasLoaded ? window.console && console.error(e) : o.asyncComplete(t, e.message || "Exception")
                            }
                        }
                        ,
                        t.requestObject = r,
                        t.requestUrl = e,
                        r.send()
                },
                xhrLoadWithXDR: function(t, e, i, s, n) {
                    this._warnedAboutXDomainRequest || this.game.device.ie && !(this.game.device.ieVersion >= 10) || (this._warnedAboutXDomainRequest = !0,
                        console.warn("Phaser.Loader - using XDomainRequest outside of IE 9"));
                    var r = new window.XDomainRequest;
                    r.open("GET", e, !0),
                        r.responseType = i,
                        r.timeout = 3e3,
                        n = n || this.fileError;
                    var o = this;
                    r.onerror = function() {
                        try {
                            return n.call(o, t, r)
                        } catch (e) {
                            o.asyncComplete(t, e.message || "Exception")
                        }
                    }
                        ,
                        r.ontimeout = function() {
                            try {
                                return n.call(o, t, r)
                            } catch (e) {
                                o.asyncComplete(t, e.message || "Exception")
                            }
                        }
                        ,
                        r.onprogress = function() {}
                        ,
                        r.onload = function() {
                            try {
                                return s.call(o, t, r)
                            } catch (e) {
                                o.asyncComplete(t, e.message || "Exception")
                            }
                        }
                        ,
                        t.requestObject = r,
                        t.requestUrl = e,
                        setTimeout(function() {
                            r.send()
                        }, 0)
                },
                getVideoURL: function(t) {
                    for (var e = 0; e < t.length; e++) {
                        var i, s = t[e];
                        if (s.uri)
                            s = s.uri,
                                i = s.type;
                        else {
                            if (0 === s.indexOf("blob:") || 0 === s.indexOf("data:"))
                                return s;
                            s.indexOf("?") >= 0 && (s = s.substr(0, s.indexOf("?")));
                            var n = s.substr((Math.max(0, s.lastIndexOf(".")) || 1 / 0) + 1);
                            i = n.toLowerCase()
                        }
                        if (this.game.device.canPlayVideo(i))
                            return t[e]
                    }
                    return null
                },
                getAudioURL: function(t) {
                    if (this.game.sound.noAudio)
                        return null;
                    for (var e = 0; e < t.length; e++) {
                        var i, s = t[e];
                        if (s.uri)
                            s = s.uri,
                                i = s.type;
                        else {
                            if (0 === s.indexOf("blob:") || 0 === s.indexOf("data:"))
                                return s;
                            s.indexOf("?") >= 0 && (s = s.substr(0, s.indexOf("?")));
                            var n = s.substr((Math.max(0, s.lastIndexOf(".")) || 1 / 0) + 1);
                            i = n.toLowerCase()
                        }
                        if (this.game.device.canPlayAudio(i))
                            return t[e]
                    }
                    return null
                },
                fileError: function(t, e, i) {
                    var s = t.requestUrl || this.transformUrl(t.url, t)
                        , n = "error loading asset from URL " + s;
                    !i && e && (i = e.status),
                    i && (n = n + " (" + i + ")"),
                        this.asyncComplete(t, n)
                },
                fileComplete: function(t, e) {
                    var s = !0;
                    switch (t.type) {
                        case "packfile":
                            var n = JSON.parse(e.responseText);
                            t.data = n || {};
                            break;
                        case "image":
                            this.cache.addImage(t.key, t.url, t.data);
                            break;
                        case "spritesheet":
                            this.cache.addSpriteSheet(t.key, t.url, t.data, t.frameWidth, t.frameHeight, t.frameMax, t.margin, t.spacing);
                            break;
                        case "textureatlas":
                            if (null == t.atlasURL)
                                this.cache.addTextureAtlas(t.key, t.url, t.data, t.atlasData, t.format);
                            else if (s = !1,
                            t.format == i.Loader.TEXTURE_ATLAS_JSON_ARRAY || t.format == i.Loader.TEXTURE_ATLAS_JSON_HASH || t.format == i.Loader.TEXTURE_ATLAS_JSON_PYXEL)
                                this.xhrLoad(t, this.transformUrl(t.atlasURL, t), "text", this.jsonLoadComplete);
                            else {
                                if (t.format != i.Loader.TEXTURE_ATLAS_XML_STARLING)
                                    throw new Error("Phaser.Loader. Invalid Texture Atlas format: " + t.format);
                                this.xhrLoad(t, this.transformUrl(t.atlasURL, t), "text", this.xmlLoadComplete)
                            }
                            break;
                        case "bitmapfont":
                            t.atlasURL ? (s = !1,
                                this.xhrLoad(t, this.transformUrl(t.atlasURL, t), "text", function(t, e) {
                                    var i;
                                    try {
                                        i = JSON.parse(e.responseText)
                                    } catch (s) {}
                                    i ? (t.atlasType = "json",
                                        this.jsonLoadComplete(t, e)) : (t.atlasType = "xml",
                                        this.xmlLoadComplete(t, e))
                                })) : this.cache.addBitmapFont(t.key, t.url, t.data, t.atlasData, t.atlasType, t.xSpacing, t.ySpacing);
                            break;
                        case "video":
                            if (t.asBlob)
                                try {
                                    t.data = new Blob([new Uint8Array(e.response)])
                                } catch (r) {
                                    throw new Error("Phaser.Loader. Unable to parse video file as Blob: " + t.key)
                                }
                            this.cache.addVideo(t.key, t.url, t.data, t.asBlob);
                            break;
                        case "audio":
                            this.game.sound.usingWebAudio ? (t.data = e.response,
                                this.cache.addSound(t.key, t.url, t.data, !0, !1),
                            t.autoDecode && this.game.sound.decode(t.key)) : this.cache.addSound(t.key, t.url, t.data, !1, !0);
                            break;
                        case "text":
                            t.data = e.responseText,
                                this.cache.addText(t.key, t.url, t.data);
                            break;
                        case "shader":
                            t.data = e.responseText,
                                this.cache.addShader(t.key, t.url, t.data);
                            break;
                        case "physics":
                            var n = JSON.parse(e.responseText);
                            this.cache.addPhysicsData(t.key, t.url, n, t.format);
                            break;
                        case "script":
                            t.data = document.createElement("script"),
                                t.data.language = "javascript",
                                t.data.type = "text/javascript",
                                t.data.defer = !1,
                                t.data.text = e.responseText,
                                document.head.appendChild(t.data),
                            t.callback && (t.data = t.callback.call(t.callbackContext, t.key, e.responseText));
                            break;
                        case "binary":
                            t.callback ? t.data = t.callback.call(t.callbackContext, t.key, e.response) : t.data = e.response,
                                this.cache.addBinary(t.key, t.data)
                    }
                    s && this.asyncComplete(t)
                },
                jsonLoadComplete: function(t, e) {
                    var i = JSON.parse(e.responseText);
                    "tilemap" === t.type ? this.cache.addTilemap(t.key, t.url, i, t.format) : "bitmapfont" === t.type ? this.cache.addBitmapFont(t.key, t.url, t.data, i, t.atlasType, t.xSpacing, t.ySpacing) : "json" === t.type ? this.cache.addJSON(t.key, t.url, i) : this.cache.addTextureAtlas(t.key, t.url, t.data, i, t.format),
                        this.asyncComplete(t)
                },
                csvLoadComplete: function(t, e) {
                    var i = e.responseText;
                    this.cache.addTilemap(t.key, t.url, i, t.format),
                        this.asyncComplete(t)
                },
                xmlLoadComplete: function(t, e) {
                    var i = e.responseText
                        , s = this.parseXml(i);
                    if (!s) {
                        var n = e.responseType || e.contentType;
                        return console.warn("Phaser.Loader - " + t.key + ": invalid XML (" + n + ")"),
                            void this.asyncComplete(t, "invalid XML")
                    }
                    "bitmapfont" === t.type ? this.cache.addBitmapFont(t.key, t.url, t.data, s, t.atlasType, t.xSpacing, t.ySpacing) : "textureatlas" === t.type ? this.cache.addTextureAtlas(t.key, t.url, t.data, s, t.format) : "xml" === t.type && this.cache.addXML(t.key, t.url, s),
                        this.asyncComplete(t)
                },
                parseXml: function(t) {
                    var e;
                    try {
                        if (window.DOMParser) {
                            var i = new DOMParser;
                            e = i.parseFromString(t, "text/xml")
                        } else
                            e = new ActiveXObject("Microsoft.XMLDOM"),
                                e.async = "false",
                                e.loadXML(t)
                    } catch (s) {
                        e = null
                    }
                    return e && e.documentElement && !e.getElementsByTagName("parsererror").length ? e : null
                },
                updateProgress: function() {
                    this.preloadSprite && (0 === this.preloadSprite.direction ? this.preloadSprite.rect.width = Math.floor(this.preloadSprite.width / 100 * this.progress) : this.preloadSprite.rect.height = Math.floor(this.preloadSprite.height / 100 * this.progress),
                        this.preloadSprite.sprite ? this.preloadSprite.sprite.updateCrop() : this.preloadSprite = null)
                },
                totalLoadedFiles: function() {
                    return this._loadedFileCount
                },
                totalQueuedFiles: function() {
                    return this._totalFileCount - this._loadedFileCount
                },
                totalLoadedPacks: function() {
                    return this._totalPackCount
                },
                totalQueuedPacks: function() {
                    return this._totalPackCount - this._loadedPackCount
                }
            },
            Object.defineProperty(i.Loader.prototype, "progressFloat", {
                get: function() {
                    var t = this._loadedFileCount / this._totalFileCount * 100;
                    return i.Math.clamp(t || 0, 0, 100)
                }
            }),
            Object.defineProperty(i.Loader.prototype, "progress", {
                get: function() {
                    return Math.round(this.progressFloat)
                }
            }),
            i.Loader.prototype.constructor = i.Loader,
            i.LoaderParser = {
                bitmapFont: function(t, e, i, s) {
                    return this.xmlBitmapFont(t, e, i, s)
                },
                xmlBitmapFont: function(t, e, i, s) {
                    var n = {}
                        , r = t.getElementsByTagName("info")[0]
                        , o = t.getElementsByTagName("common")[0];
                    n.font = r.getAttribute("face"),
                        n.size = parseInt(r.getAttribute("size"), 10),
                        n.lineHeight = parseInt(o.getAttribute("lineHeight"), 10) + s,
                        n.chars = {};
                    for (var a = t.getElementsByTagName("char"), h = 0; h < a.length; h++) {
                        var l = parseInt(a[h].getAttribute("id"), 10);
                        n.chars[l] = {
                            x: parseInt(a[h].getAttribute("x"), 10),
                            y: parseInt(a[h].getAttribute("y"), 10),
                            width: parseInt(a[h].getAttribute("width"), 10),
                            height: parseInt(a[h].getAttribute("height"), 10),
                            xOffset: parseInt(a[h].getAttribute("xoffset"), 10),
                            yOffset: parseInt(a[h].getAttribute("yoffset"), 10),
                            xAdvance: parseInt(a[h].getAttribute("xadvance"), 10) + i,
                            kerning: {}
                        }
                    }
                    var u = t.getElementsByTagName("kerning");
                    for (h = 0; h < u.length; h++) {
                        var c = parseInt(u[h].getAttribute("first"), 10)
                            , d = parseInt(u[h].getAttribute("second"), 10)
                            , p = parseInt(u[h].getAttribute("amount"), 10);
                        n.chars[d].kerning[c] = p
                    }
                    return this.finalizeBitmapFont(e, n)
                },
                jsonBitmapFont: function(t, e, i, s) {
                    var n = {
                        font: t.font.info._face,
                        size: parseInt(t.font.info._size, 10),
                        lineHeight: parseInt(t.font.common._lineHeight, 10) + s,
                        chars: {}
                    };
                    return t.font.chars["char"].forEach(function(t) {
                        var e = parseInt(t._id, 10);
                        n.chars[e] = {
                            x: parseInt(t._x, 10),
                            y: parseInt(t._y, 10),
                            width: parseInt(t._width, 10),
                            height: parseInt(t._height, 10),
                            xOffset: parseInt(t._xoffset, 10),
                            yOffset: parseInt(t._yoffset, 10),
                            xAdvance: parseInt(t._xadvance, 10) + i,
                            kerning: {}
                        }
                    }),
                    t.font.kernings && t.font.kernings.kerning && t.font.kernings.kerning.forEach(function(t) {
                        n.chars[t._second].kerning[t._first] = parseInt(t._amount, 10)
                    }),
                        this.finalizeBitmapFont(e, n)
                },
                finalizeBitmapFont: function(t, e) {
                    return Object.keys(e.chars).forEach(function(s) {
                        var n = e.chars[s];
                        n.texture = new PIXI.Texture(t,new i.Rectangle(n.x,n.y,n.width,n.height))
                    }),
                        e
                }
            },
            i.AudioSprite = function(t, e) {
                this.game = t,
                    this.key = e,
                    this.config = this.game.cache.getJSON(e + "-audioatlas"),
                    this.autoplayKey = null,
                    this.autoplay = !1,
                    this.sounds = {};
                for (var i in this.config.spritemap) {
                    var s = this.config.spritemap[i]
                        , n = this.game.add.sound(this.key);
                    n.addMarker(i, s.start, s.end - s.start, null, s.loop),
                        this.sounds[i] = n
                }
                this.config.autoplay && (this.autoplayKey = this.config.autoplay,
                    this.play(this.autoplayKey),
                    this.autoplay = this.sounds[this.autoplayKey])
            }
            ,
            i.AudioSprite.prototype = {
                play: function(t, e) {
                    return void 0 === e && (e = 1),
                        this.sounds[t].play(t, null, e)
                },
                stop: function(t) {
                    if (t)
                        this.sounds[t].stop();
                    else
                        for (var e in this.sounds)
                            this.sounds[e].stop()
                },
                get: function(t) {
                    return this.sounds[t]
                }
            },
            i.AudioSprite.prototype.constructor = i.AudioSprite,
            i.Sound = function(t, e, s, n, r) {
                void 0 === s && (s = 1),
                void 0 === n && (n = !1),
                void 0 === r && (r = t.sound.connectToMaster),
                    this.game = t,
                    this.name = e,
                    this.key = e,
                    this.loop = n,
                    this.volume = s,
                    this.markers = {},
                    this.context = null,
                    this.autoplay = !1,
                    this.totalDuration = 0,
                    this.startTime = 0,
                    this.currentTime = 0,
                    this.duration = 0,
                    this.durationMS = 0,
                    this.position = 0,
                    this.stopTime = 0,
                    this.paused = !1,
                    this.pausedPosition = 0,
                    this.pausedTime = 0,
                    this.isPlaying = !1,
                    this.currentMarker = "",
                    this.fadeTween = null,
                    this.pendingPlayback = !1,
                    this.override = !1,
                    this.allowMultiple = !1,
                    this.usingWebAudio = this.game.sound.usingWebAudio,
                    this.usingAudioTag = this.game.sound.usingAudioTag,
                    this.externalNode = null,
                    this.masterGainNode = null,
                    this.gainNode = null,
                    this._sound = null,
                    this.usingWebAudio ? (this.context = this.game.sound.context,
                        this.masterGainNode = this.game.sound.masterGain,
                        void 0 === this.context.createGain ? this.gainNode = this.context.createGainNode() : this.gainNode = this.context.createGain(),
                        this.gainNode.gain.value = s * this.game.sound.volume,
                    r && this.gainNode.connect(this.masterGainNode)) : this.usingAudioTag && (this.game.cache.getSound(e) && this.game.cache.isSoundReady(e) ? (this._sound = this.game.cache.getSoundData(e),
                        this.totalDuration = 0,
                    this._sound.duration && (this.totalDuration = this._sound.duration)) : this.game.cache.onSoundUnlock.add(this.soundHasUnlocked, this)),
                    this.onDecoded = new i.Signal,
                    this.onPlay = new i.Signal,
                    this.onPause = new i.Signal,
                    this.onResume = new i.Signal,
                    this.onLoop = new i.Signal,
                    this.onStop = new i.Signal,
                    this.onMute = new i.Signal,
                    this.onMarkerComplete = new i.Signal,
                    this.onFadeComplete = new i.Signal,
                    this._volume = s,
                    this._buffer = null,
                    this._muted = !1,
                    this._tempMarker = 0,
                    this._tempPosition = 0,
                    this._tempVolume = 0,
                    this._muteVolume = 0,
                    this._tempLoop = 0,
                    this._paused = !1,
                    this._onDecodedEventDispatched = !1
            }
            ,
            i.Sound.prototype = {
                soundHasUnlocked: function(t) {
                    t === this.key && (this._sound = this.game.cache.getSoundData(this.key),
                        this.totalDuration = this._sound.duration)
                },
                addMarker: function(t, e, i, s, n) {
                    (void 0 === s || null === s) && (s = 1),
                    void 0 === n && (n = !1),
                        this.markers[t] = {
                            name: t,
                            start: e,
                            stop: e + i,
                            volume: s,
                            duration: i,
                            durationMS: 1e3 * i,
                            loop: n
                        }
                },
                removeMarker: function(t) {
                    delete this.markers[t]
                },
                onEndedHandler: function() {
                    this._sound.onended = null,
                        this.isPlaying = !1,
                        this.stop()
                },
                update: function() {
                    return this.game.cache.checkSoundKey(this.key) ? (this.isDecoded && !this._onDecodedEventDispatched && (this.onDecoded.dispatch(this),
                        this._onDecodedEventDispatched = !0),
                    this.pendingPlayback && this.game.cache.isSoundReady(this.key) && (this.pendingPlayback = !1,
                        this.play(this._tempMarker, this._tempPosition, this._tempVolume, this._tempLoop)),
                        void (this.isPlaying && (this.currentTime = this.game.time.time - this.startTime,
                        this.currentTime >= this.durationMS && (this.usingWebAudio ? this.loop ? (this.onLoop.dispatch(this),
                            "" === this.currentMarker ? (this.currentTime = 0,
                                this.startTime = this.game.time.time) : (this.onMarkerComplete.dispatch(this.currentMarker, this),
                                this.play(this.currentMarker, 0, this.volume, !0, !0))) : "" !== this.currentMarker && this.stop() : this.loop ? (this.onLoop.dispatch(this),
                            this.play(this.currentMarker, 0, this.volume, !0, !0)) : this.stop())))) : void this.destroy()
                },
                loopFull: function(t) {
                    this.play(null, 0, t, !0)
                },
                play: function(t, e, i, s, n) {
                    if ((void 0 === t || t === !1 || null === t) && (t = ""),
                    void 0 === n && (n = !0),
                    this.isPlaying && !this.allowMultiple && !n && !this.override)
                        return this;
                    if (this._sound && this.isPlaying && !this.allowMultiple && (this.override || n))
                        if (this.usingWebAudio)
                            if (this.externalNode ? this._sound.disconnect(this.externalNode) : this._sound.disconnect(this.gainNode),
                            void 0 === this._sound.stop)
                                this._sound.noteOff(0);
                            else
                                try {
                                    this._sound.stop(0)
                                } catch (r) {}
                        else
                            this.usingAudioTag && (this._sound.pause(),
                                this._sound.currentTime = 0);
                    if ("" === t && Object.keys(this.markers).length > 0)
                        return this;
                    if ("" !== t) {
                        if (this.currentMarker = t,
                            !this.markers[t])
                            return this;
                        this.position = this.markers[t].start,
                            this.volume = this.markers[t].volume,
                            this.loop = this.markers[t].loop,
                            this.duration = this.markers[t].duration,
                            this.durationMS = this.markers[t].durationMS,
                        "undefined" != typeof i && (this.volume = i),
                        "undefined" != typeof s && (this.loop = s),
                            this._tempMarker = t,
                            this._tempPosition = this.position,
                            this._tempVolume = this.volume,
                            this._tempLoop = this.loop
                    } else
                        e = e || 0,
                        void 0 === i && (i = this._volume),
                        void 0 === s && (s = this.loop),
                            this.position = e,
                            this.volume = i,
                            this.loop = s,
                            this.duration = 0,
                            this.durationMS = 0,
                            this._tempMarker = t,
                            this._tempPosition = e,
                            this._tempVolume = i,
                            this._tempLoop = s;
                    return this.usingWebAudio ? this.game.cache.isSoundDecoded(this.key) ? (this._sound = this.context.createBufferSource(),
                        this.externalNode ? this._sound.connect(this.externalNode) : this._sound.connect(this.gainNode),
                        this._buffer = this.game.cache.getSoundData(this.key),
                        this._sound.buffer = this._buffer,
                    this.loop && "" === t && (this._sound.loop = !0),
                    this.loop || "" !== t || (this._sound.onended = this.onEndedHandler.bind(this)),
                        this.totalDuration = this._sound.buffer.duration,
                    0 === this.duration && (this.duration = this.totalDuration,
                        this.durationMS = Math.ceil(1e3 * this.totalDuration)),
                        void 0 === this._sound.start ? this._sound.noteGrainOn(0, this.position, this.duration) : this.loop && "" === t ? this._sound.start(0, 0) : this._sound.start(0, this.position, this.duration),
                        this.isPlaying = !0,
                        this.startTime = this.game.time.time,
                        this.currentTime = 0,
                        this.stopTime = this.startTime + this.durationMS,
                        this.onPlay.dispatch(this)) : (this.pendingPlayback = !0,
                    this.game.cache.getSound(this.key) && this.game.cache.getSound(this.key).isDecoding === !1 && this.game.sound.decode(this.key, this)) : this.game.cache.getSound(this.key) && this.game.cache.getSound(this.key).locked ? (this.game.cache.reloadSound(this.key),
                        this.pendingPlayback = !0) : this._sound && (this.game.device.cocoonJS || 4 === this._sound.readyState) ? (this._sound.play(),
                        this.totalDuration = this._sound.duration,
                    0 === this.duration && (this.duration = this.totalDuration,
                        this.durationMS = 1e3 * this.totalDuration),
                        this._sound.currentTime = this.position,
                        this._sound.muted = this._muted,
                        this._muted ? this._sound.volume = 0 : this._sound.volume = this._volume,
                        this.isPlaying = !0,
                        this.startTime = this.game.time.time,
                        this.currentTime = 0,
                        this.stopTime = this.startTime + this.durationMS,
                        this.onPlay.dispatch(this)) : this.pendingPlayback = !0,
                        this
                },
                restart: function(t, e, i, s) {
                    t = t || "",
                        e = e || 0,
                        i = i || 1,
                    void 0 === s && (s = !1),
                        this.play(t, e, i, s, !0)
                },
                pause: function() {
                    this.isPlaying && this._sound && (this.paused = !0,
                        this.pausedPosition = this.currentTime,
                        this.pausedTime = this.game.time.time,
                        this.onPause.dispatch(this),
                        this.stop())
                },
                resume: function() {
                    if (this.paused && this._sound) {
                        if (this.usingWebAudio) {
                            var t = this.position + this.pausedPosition / 1e3;
                            this._sound = this.context.createBufferSource(),
                                this._sound.buffer = this._buffer,
                                this.externalNode ? this._sound.connect(this.externalNode) : this._sound.connect(this.gainNode),
                            this.loop && (this._sound.loop = !0),
                            this.loop || "" !== this.currentMarker || (this._sound.onended = this.onEndedHandler.bind(this));
                            var e = this.duration - this.pausedPosition / 1e3;
                            void 0 === this._sound.start ? this._sound.noteGrainOn(0, t, e) : this.loop && this.game.device.chrome ? 42 === this.game.device.chromeVersion ? this._sound.start(0) : this._sound.start(0, t) : this._sound.start(0, t, e)
                        } else
                            this._sound.play();
                        this.isPlaying = !0,
                            this.paused = !1,
                            this.startTime += this.game.time.time - this.pausedTime,
                            this.onResume.dispatch(this)
                    }
                },
                stop: function() {
                    if (this.isPlaying && this._sound)
                        if (this.usingWebAudio)
                            if (this.externalNode ? this._sound.disconnect(this.externalNode) : this._sound.disconnect(this.gainNode),
                            void 0 === this._sound.stop)
                                this._sound.noteOff(0);
                            else
                                try {
                                    this._sound.stop(0)
                                } catch (t) {}
                        else
                            this.usingAudioTag && (this._sound.pause(),
                                this._sound.currentTime = 0);
                    this.pendingPlayback = !1,
                        this.isPlaying = !1;
                    var e = this.currentMarker;
                    "" !== this.currentMarker && this.onMarkerComplete.dispatch(this.currentMarker, this),
                        this.currentMarker = "",
                    null !== this.fadeTween && this.fadeTween.stop(),
                    this.paused || this.onStop.dispatch(this, e)
                },
                fadeIn: function(t, e, i) {
                    void 0 === e && (e = !1),
                    void 0 === i && (i = this.currentMarker),
                    this.paused || (this.play(i, 0, 0, e),
                        this.fadeTo(t, 1))
                },
                fadeOut: function(t) {
                    this.fadeTo(t, 0)
                },
                fadeTo: function(t, e) {
                    if (this.isPlaying && !this.paused && e !== this.volume) {
                        if (void 0 === t && (t = 1e3),
                        void 0 === e)
                            return void console.warn("Phaser.Sound.fadeTo: No Volume Specified.");
                        this.fadeTween = this.game.add.tween(this).to({
                            volume: e
                        }, t, i.Easing.Linear.None, !0),
                            this.fadeTween.onComplete.add(this.fadeComplete, this)
                    }
                },
                fadeComplete: function() {
                    this.onFadeComplete.dispatch(this, this.volume),
                    0 === this.volume && this.stop()
                },
                destroy: function(t) {
                    void 0 === t && (t = !0),
                        this.stop(),
                        t ? this.game.sound.remove(this) : (this.markers = {},
                            this.context = null,
                            this._buffer = null,
                            this.externalNode = null,
                            this.onDecoded.dispose(),
                            this.onPlay.dispose(),
                            this.onPause.dispose(),
                            this.onResume.dispose(),
                            this.onLoop.dispose(),
                            this.onStop.dispose(),
                            this.onMute.dispose(),
                            this.onMarkerComplete.dispose())
                }
            },
            i.Sound.prototype.constructor = i.Sound,
            Object.defineProperty(i.Sound.prototype, "isDecoding", {
                get: function() {
                    return this.game.cache.getSound(this.key).isDecoding
                }
            }),
            Object.defineProperty(i.Sound.prototype, "isDecoded", {
                get: function() {
                    return this.game.cache.isSoundDecoded(this.key)
                }
            }),
            Object.defineProperty(i.Sound.prototype, "mute", {
                get: function() {
                    return this._muted || this.game.sound.mute
                },
                set: function(t) {
                    t = t || !1,
                    t !== this._muted && (t ? (this._muted = !0,
                        this._muteVolume = this._tempVolume,
                        this.usingWebAudio ? this.gainNode.gain.value = 0 : this.usingAudioTag && this._sound && (this._sound.volume = 0)) : (this._muted = !1,
                        this.usingWebAudio ? this.gainNode.gain.value = this._muteVolume : this.usingAudioTag && this._sound && (this._sound.volume = this._muteVolume)),
                        this.onMute.dispatch(this))
                }
            }),
            Object.defineProperty(i.Sound.prototype, "volume", {
                get: function() {
                    return this._volume
                },
                set: function(t) {
                    return this.game.device.firefox && this.usingAudioTag && (t = this.game.math.clamp(t, 0, 1)),
                        this._muted ? void (this._muteVolume = t) : (this._tempVolume = t,
                            this._volume = t,
                            void (this.usingWebAudio ? this.gainNode.gain.value = t : this.usingAudioTag && this._sound && (this._sound.volume = t)))
                }
            }),
            i.SoundManager = function(t) {
                this.game = t,
                    this.onSoundDecode = new i.Signal,
                    this.onVolumeChange = new i.Signal,
                    this.onMute = new i.Signal,
                    this.onUnMute = new i.Signal,
                    this.context = null,
                    this.usingWebAudio = !1,
                    this.usingAudioTag = !1,
                    this.noAudio = !1,
                    this.connectToMaster = !0,
                    this.touchLocked = !1,
                    this.channels = 32,
                    this._codeMuted = !1,
                    this._muted = !1,
                    this._unlockSource = null,
                    this._volume = 1,
                    this._sounds = [],
                    this._watchList = new i.ArraySet,
                    this._watching = !1,
                    this._watchCallback = null,
                    this._watchContext = null
            }
            ,
            i.SoundManager.prototype = {
                boot: function() {
                    if (this.game.device.iOS && this.game.device.webAudio === !1 && (this.channels = 1),
                        window.PhaserGlobal) {
                        if (window.PhaserGlobal.disableAudio === !0)
                            return this.noAudio = !0,
                                void (this.touchLocked = !1);
                        if (window.PhaserGlobal.disableWebAudio === !0)
                            return this.usingAudioTag = !0,
                                void (this.touchLocked = !1)
                    }
                    if (window.PhaserGlobal && window.PhaserGlobal.audioContext)
                        this.context = window.PhaserGlobal.audioContext;
                    else if (window.AudioContext)
                        try {
                            this.context = new window.AudioContext
                        } catch (t) {
                            this.context = null,
                                this.usingWebAudio = !1,
                                this.touchLocked = !1
                        }
                    else if (window.webkitAudioContext)
                        try {
                            this.context = new window.webkitAudioContext
                        } catch (t) {
                            this.context = null,
                                this.usingWebAudio = !1,
                                this.touchLocked = !1
                        }
                    if (null === this.context) {
                        if (void 0 === window.Audio)
                            return void (this.noAudio = !0);
                        this.usingAudioTag = !0
                    } else
                        this.usingWebAudio = !0,
                            void 0 === this.context.createGain ? this.masterGain = this.context.createGainNode() : this.masterGain = this.context.createGain(),
                            this.masterGain.gain.value = 1,
                            this.masterGain.connect(this.context.destination);
                    this.noAudio || (!this.game.device.cocoonJS && this.game.device.iOS || window.PhaserGlobal && window.PhaserGlobal.fakeiOSTouchLock) && this.setTouchLock()
                },
                setTouchLock: function() {
                    this.game.device.iOSVersion > 8 ? this.game.input.touch.addTouchLockCallback(this.unlock, this, !0) : this.game.input.touch.addTouchLockCallback(this.unlock, this),
                        this.touchLocked = !0
                },
                unlock: function() {
                    if (this.noAudio || !this.touchLocked || null !== this._unlockSource)
                        return !0;
                    if (this.usingAudioTag)
                        this.touchLocked = !1,
                            this._unlockSource = null;
                    else if (this.usingWebAudio) {
                        var t = this.context.createBuffer(1, 1, 22050);
                        this._unlockSource = this.context.createBufferSource(),
                            this._unlockSource.buffer = t,
                            this._unlockSource.connect(this.context.destination),
                            void 0 === this._unlockSource.start ? this._unlockSource.noteOn(0) : this._unlockSource.start(0)
                    }
                    return !0
                },
                stopAll: function() {
                    if (!this.noAudio)
                        for (var t = 0; t < this._sounds.length; t++)
                            this._sounds[t] && this._sounds[t].stop()
                },
                pauseAll: function() {
                    if (!this.noAudio)
                        for (var t = 0; t < this._sounds.length; t++)
                            this._sounds[t] && this._sounds[t].pause()
                },
                resumeAll: function() {
                    if (!this.noAudio)
                        for (var t = 0; t < this._sounds.length; t++)
                            this._sounds[t] && this._sounds[t].resume()
                },
                decode: function(t, e) {
                    e = e || null;
                    var i = this.game.cache.getSoundData(t);
                    if (i && this.game.cache.isSoundDecoded(t) === !1) {
                        this.game.cache.updateSound(t, "isDecoding", !0);
                        var s = this;
                        try {
                            this.context.decodeAudioData(i, function(i) {
                                i && (s.game.cache.decodedSound(t, i),
                                    s.onSoundDecode.dispatch(t, e))
                            })
                        } catch (n) {}
                    }
                },
                setDecodedCallback: function(t, e, s) {
                    "string" == typeof t && (t = [t]),
                        this._watchList.reset();
                    for (var n = 0; n < t.length; n++)
                        t[n]instanceof i.Sound ? this.game.cache.isSoundDecoded(t[n].key) || this._watchList.add(t[n].key) : this.game.cache.isSoundDecoded(t[n]) || this._watchList.add(t[n]);
                    0 === this._watchList.total ? (this._watching = !1,
                        e.call(s)) : (this._watching = !0,
                        this._watchCallback = e,
                        this._watchContext = s)
                },
                update: function() {
                    if (!this.noAudio) {
                        !this.touchLocked || null === this._unlockSource || this._unlockSource.playbackState !== this._unlockSource.PLAYING_STATE && this._unlockSource.playbackState !== this._unlockSource.FINISHED_STATE || (this.touchLocked = !1,
                            this._unlockSource = null);
                        for (var t = 0; t < this._sounds.length; t++)
                            this._sounds[t].update();
                        if (this._watching) {
                            for (var e = this._watchList.first; e; )
                                this.game.cache.isSoundDecoded(e) && this._watchList.remove(e),
                                    e = this._watchList.next;
                            0 === this._watchList.total && (this._watching = !1,
                                this._watchCallback.call(this._watchContext))
                        }
                    }
                },
                add: function(t, e, s, n) {
                    void 0 === e && (e = 1),
                    void 0 === s && (s = !1),
                    void 0 === n && (n = this.connectToMaster);
                    var r = new i.Sound(this.game,t,e,s,n);
                    return this._sounds.push(r),
                        r
                },
                addSprite: function(t) {
                    var e = new i.AudioSprite(this.game,t);
                    return e
                },
                remove: function(t) {
                    for (var e = this._sounds.length; e--; )
                        if (this._sounds[e] === t)
                            return this._sounds[e].destroy(!1),
                                this._sounds.splice(e, 1),
                                !0;
                    return !1
                },
                removeByKey: function(t) {
                    for (var e = this._sounds.length, i = 0; e--; )
                        this._sounds[e].key === t && (this._sounds[e].destroy(!1),
                            this._sounds.splice(e, 1),
                            i++);
                    return i
                },
                play: function(t, e, i) {
                    if (!this.noAudio) {
                        var s = this.add(t, e, i);
                        return s.play(),
                            s
                    }
                },
                setMute: function() {
                    if (!this._muted) {
                        this._muted = !0,
                        this.usingWebAudio && (this._muteVolume = this.masterGain.gain.value,
                            this.masterGain.gain.value = 0);
                        for (var t = 0; t < this._sounds.length; t++)
                            this._sounds[t].usingAudioTag && (this._sounds[t].mute = !0);
                        this.onMute.dispatch()
                    }
                },
                unsetMute: function() {
                    if (this._muted && !this._codeMuted) {
                        this._muted = !1,
                        this.usingWebAudio && (this.masterGain.gain.value = this._muteVolume);
                        for (var t = 0; t < this._sounds.length; t++)
                            this._sounds[t].usingAudioTag && (this._sounds[t].mute = !1);
                        this.onUnMute.dispatch()
                    }
                },
                destroy: function() {
                    this.stopAll();
                    for (var t = 0; t < this._sounds.length; t++)
                        this._sounds[t] && this._sounds[t].destroy();
                    this._sounds = [],
                        this.onSoundDecode.dispose(),
                    this.context && window.PhaserGlobal && (window.PhaserGlobal.audioContext = this.context)
                }
            },
            i.SoundManager.prototype.constructor = i.SoundManager,
            Object.defineProperty(i.SoundManager.prototype, "mute", {
                get: function() {
                    return this._muted
                },
                set: function(t) {
                    if (t = t || !1) {
                        if (this._muted)
                            return;
                        this._codeMuted = !0,
                            this.setMute()
                    } else {
                        if (!this._muted)
                            return;
                        this._codeMuted = !1,
                            this.unsetMute()
                    }
                }
            }),
            Object.defineProperty(i.SoundManager.prototype, "volume", {
                get: function() {
                    return this._volume
                },
                set: function(t) {
                    if (0 > t ? t = 0 : t > 1 && (t = 1),
                    this._volume !== t) {
                        if (this._volume = t,
                            this.usingWebAudio)
                            this.masterGain.gain.value = t;
                        else
                            for (var e = 0; e < this._sounds.length; e++)
                                this._sounds[e].usingAudioTag && (this._sounds[e].volume = this._sounds[e].volume * t);
                        this.onVolumeChange.dispatch(t)
                    }
                }
            }),
            i.ScaleManager = function(t, e, s) {
                this.game = t,
                    this.dom = i.DOM,
                    this.grid = null,
                    this.width = 0,
                    this.height = 0,
                    this.minWidth = null,
                    this.maxWidth = null,
                    this.minHeight = null,
                    this.maxHeight = null,
                    this.offset = new i.Point,
                    this.forceLandscape = !1,
                    this.forcePortrait = !1,
                    this.incorrectOrientation = !1,
                    this._pageAlignHorizontally = !1,
                    this._pageAlignVertically = !1,
                    this.onOrientationChange = new i.Signal,
                    this.enterIncorrectOrientation = new i.Signal,
                    this.leaveIncorrectOrientation = new i.Signal,
                    this.fullScreenTarget = null,
                    this._createdFullScreenTarget = null,
                    this.onFullScreenInit = new i.Signal,
                    this.onFullScreenChange = new i.Signal,
                    this.onFullScreenError = new i.Signal,
                    this.screenOrientation = this.dom.getScreenOrientation(),
                    this.scaleFactor = new i.Point(1,1),
                    this.scaleFactorInversed = new i.Point(1,1),
                    this.margin = {
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        x: 0,
                        y: 0
                    },
                    this.bounds = new i.Rectangle,
                    this.aspectRatio = 0,
                    this.sourceAspectRatio = 0,
                    this.event = null,
                    this.windowConstraints = {
                        right: "layout",
                        bottom: ""
                    },
                    this.compatibility = {
                        supportsFullScreen: !1,
                        orientationFallback: null,
                        noMargins: !1,
                        scrollTo: null,
                        forceMinimumDocumentHeight: !1,
                        canExpandParent: !0,
                        clickTrampoline: ""
                    },
                    this._scaleMode = i.ScaleManager.NO_SCALE,
                    this._fullScreenScaleMode = i.ScaleManager.NO_SCALE,
                    this.parentIsWindow = !1,
                    this.parentNode = null,
                    this.parentScaleFactor = new i.Point(1,1),
                    this.trackParentInterval = 2e3,
                    this.onSizeChange = new i.Signal,
                    this.onResize = null,
                    this.onResizeContext = null,
                    this._pendingScaleMode = null,
                    this._fullScreenRestore = null,
                    this._gameSize = new i.Rectangle,
                    this._userScaleFactor = new i.Point(1,1),
                    this._userScaleTrim = new i.Point(0,0),
                    this._lastUpdate = 0,
                    this._updateThrottle = 0,
                    this._updateThrottleReset = 100,
                    this._parentBounds = new i.Rectangle,
                    this._tempBounds = new i.Rectangle,
                    this._lastReportedCanvasSize = new i.Rectangle,
                    this._lastReportedGameSize = new i.Rectangle,
                    this._booted = !1,
                t.config && this.parseConfig(t.config),
                    this.setupScale(e, s)
            }
            ,
            i.ScaleManager.EXACT_FIT = 0,
            i.ScaleManager.NO_SCALE = 1,
            i.ScaleManager.SHOW_ALL = 2,
            i.ScaleManager.RESIZE = 3,
            i.ScaleManager.USER_SCALE = 4,
            i.ScaleManager.prototype = {
                boot: function() {
                    var t = this.compatibility;
                    t.supportsFullScreen = this.game.device.fullscreen && !this.game.device.cocoonJS,
                    this.game.device.iPad || this.game.device.webApp || this.game.device.desktop || (this.game.device.android && !this.game.device.chrome ? t.scrollTo = new i.Point(0,1) : t.scrollTo = new i.Point(0,0)),
                        this.game.device.desktop ? (t.orientationFallback = "screen",
                            t.clickTrampoline = "when-not-mouse") : (t.orientationFallback = "",
                            t.clickTrampoline = "");
                    var e = this;
                    this._orientationChange = function(t) {
                        return e.orientationChange(t)
                    }
                        ,
                        this._windowResize = function(t) {
                            return e.windowResize(t)
                        }
                        ,
                        window.addEventListener("orientationchange", this._orientationChange, !1),
                        window.addEventListener("resize", this._windowResize, !1),
                    this.compatibility.supportsFullScreen && (this._fullScreenChange = function(t) {
                        return e.fullScreenChange(t)
                    }
                        ,
                        this._fullScreenError = function(t) {
                            return e.fullScreenError(t)
                        }
                        ,
                        document.addEventListener("webkitfullscreenchange", this._fullScreenChange, !1),
                        document.addEventListener("mozfullscreenchange", this._fullScreenChange, !1),
                        document.addEventListener("MSFullscreenChange", this._fullScreenChange, !1),
                        document.addEventListener("fullscreenchange", this._fullScreenChange, !1),
                        document.addEventListener("webkitfullscreenerror", this._fullScreenError, !1),
                        document.addEventListener("mozfullscreenerror", this._fullScreenError, !1),
                        document.addEventListener("MSFullscreenError", this._fullScreenError, !1),
                        document.addEventListener("fullscreenerror", this._fullScreenError, !1)),
                        this.game.onResume.add(this._gameResumed, this),
                        this.dom.getOffset(this.game.canvas, this.offset),
                        this.bounds.setTo(this.offset.x, this.offset.y, this.width, this.height),
                        this.setGameSize(this.game.width, this.game.height),
                        this.screenOrientation = this.dom.getScreenOrientation(this.compatibility.orientationFallback),
                    i.FlexGrid && (this.grid = new i.FlexGrid(this,this.width,this.height)),
                        this._booted = !0,
                    this._pendingScaleMode && (this.scaleMode = this._pendingScaleMode,
                        this._pendingScaleMode = null)
                },
                parseConfig: function(t) {
                    t.scaleMode && (this._booted ? this.scaleMode = t.scaleMode : this._pendingScaleMode = t.scaleMode),
                    t.fullScreenScaleMode && (this.fullScreenScaleMode = t.fullScreenScaleMode),
                    t.fullScreenTarget && (this.fullScreenTarget = t.fullScreenTarget)
                },
                setupScale: function(t, e) {
                    var s, n = new i.Rectangle;
                    "" !== this.game.parent && ("string" == typeof this.game.parent ? s = document.getElementById(this.game.parent) : this.game.parent && 1 === this.game.parent.nodeType && (s = this.game.parent)),
                        s ? (this.parentNode = s,
                            this.parentIsWindow = !1,
                            this.getParentBounds(this._parentBounds),
                            n.width = this._parentBounds.width,
                            n.height = this._parentBounds.height,
                            this.offset.set(this._parentBounds.x, this._parentBounds.y)) : (this.parentNode = null,
                            this.parentIsWindow = !0,
                            n.width = this.dom.visualBounds.width,
                            n.height = this.dom.visualBounds.height,
                            this.offset.set(0, 0));
                    var r = 0
                        , o = 0;
                    "number" == typeof t ? r = t : (this.parentScaleFactor.x = parseInt(t, 10) / 100,
                        r = n.width * this.parentScaleFactor.x),
                        "number" == typeof e ? o = e : (this.parentScaleFactor.y = parseInt(e, 10) / 100,
                            o = n.height * this.parentScaleFactor.y),
                        this._gameSize.setTo(0, 0, r, o),
                        this.updateDimensions(r, o, !1)
                },
                _gameResumed: function() {
                    this.queueUpdate(!0)
                },
                setGameSize: function(t, e) {
                    this._gameSize.setTo(0, 0, t, e),
                    this.currentScaleMode !== i.ScaleManager.RESIZE && this.updateDimensions(t, e, !0),
                        this.queueUpdate(!0)
                },
                setUserScale: function(t, e, i, s) {
                    this._userScaleFactor.setTo(t, e),
                        this._userScaleTrim.setTo(0 | i, 0 | s),
                        this.queueUpdate(!0)
                },
                setResizeCallback: function(t, e) {
                    this.onResize = t,
                        this.onResizeContext = e
                },
                signalSizeChange: function() {
                    if (!i.Rectangle.sameDimensions(this, this._lastReportedCanvasSize) || !i.Rectangle.sameDimensions(this.game, this._lastReportedGameSize)) {
                        var t = this.width
                            , e = this.height;
                        this._lastReportedCanvasSize.setTo(0, 0, t, e),
                            this._lastReportedGameSize.setTo(0, 0, this.game.width, this.game.height),
                        this.grid && this.grid.onResize(t, e),
                            this.onSizeChange.dispatch(this, t, e),
                        this.currentScaleMode === i.ScaleManager.RESIZE && (this.game.state.resize(t, e),
                            this.game.load.resize(t, e))
                    }
                },
                setMinMax: function(t, e, i, s) {
                    this.minWidth = t,
                        this.minHeight = e,
                    "undefined" != typeof i && (this.maxWidth = i),
                    "undefined" != typeof s && (this.maxHeight = s)
                },
                preUpdate: function() {
                    if (!(this.game.time.time < this._lastUpdate + this._updateThrottle)) {
                        var t = this._updateThrottle;
                        this._updateThrottleReset = t >= 400 ? 0 : 100,
                            this.dom.getOffset(this.game.canvas, this.offset);
                        var e = this._parentBounds.width
                            , s = this._parentBounds.height
                            , n = this.getParentBounds(this._parentBounds)
                            , r = n.width !== e || n.height !== s
                            , o = this.updateOrientationState();
                        (r || o) && (this.onResize && this.onResize.call(this.onResizeContext, this, n),
                            this.updateLayout(),
                            this.signalSizeChange());
                        var a = 2 * this._updateThrottle;
                        this._updateThrottle < t && (a = Math.min(t, this._updateThrottleReset)),
                            this._updateThrottle = i.Math.clamp(a, 25, this.trackParentInterval),
                            this._lastUpdate = this.game.time.time
                    }
                },
                pauseUpdate: function() {
                    this.preUpdate(),
                        this._updateThrottle = this.trackParentInterval
                },
                updateDimensions: function(t, e, i) {
                    this.width = t * this.parentScaleFactor.x,
                        this.height = e * this.parentScaleFactor.y,
                        this.game.width = this.width,
                        this.game.height = this.height,
                        this.sourceAspectRatio = this.width / this.height,
                        this.updateScalingAndBounds(),
                    i && (this.game.renderer.resize(this.width, this.height),
                        this.game.camera.setSize(this.width, this.height),
                        this.game.world.resize(this.width, this.height))
                },
                updateScalingAndBounds: function() {
                    this.scaleFactor.x = this.game.width / this.width,
                        this.scaleFactor.y = this.game.height / this.height,
                        this.scaleFactorInversed.x = this.width / this.game.width,
                        this.scaleFactorInversed.y = this.height / this.game.height,
                        this.aspectRatio = this.width / this.height,
                    this.game.canvas && this.dom.getOffset(this.game.canvas, this.offset),
                        this.bounds.setTo(this.offset.x, this.offset.y, this.width, this.height),
                    this.game.input && this.game.input.scale && this.game.input.scale.setTo(this.scaleFactor.x, this.scaleFactor.y)
                },
                forceOrientation: function(t, e) {
                    void 0 === e && (e = !1),
                        this.forceLandscape = t,
                        this.forcePortrait = e,
                        this.queueUpdate(!0)
                },
                classifyOrientation: function(t) {
                    return "portrait-primary" === t || "portrait-secondary" === t ? "portrait" : "landscape-primary" === t || "landscape-secondary" === t ? "landscape" : null
                },
                updateOrientationState: function() {
                    var t = this.screenOrientation
                        , e = this.incorrectOrientation;
                    this.screenOrientation = this.dom.getScreenOrientation(this.compatibility.orientationFallback),
                        this.incorrectOrientation = this.forceLandscape && !this.isLandscape || this.forcePortrait && !this.isPortrait;
                    var i = t !== this.screenOrientation
                        , s = e !== this.incorrectOrientation;
                    return s && (this.incorrectOrientation ? this.enterIncorrectOrientation.dispatch() : this.leaveIncorrectOrientation.dispatch()),
                    (i || s) && this.onOrientationChange.dispatch(this, t, e),
                    i || s
                },
                orientationChange: function(t) {
                    this.event = t,
                        this.queueUpdate(!0)
                },
                windowResize: function(t) {
                    this.event = t,
                        this.queueUpdate(!0)
                },
                scrollTop: function() {
                    var t = this.compatibility.scrollTo;
                    t && window.scrollTo(t.x, t.y)
                },
                refresh: function() {
                    this.scrollTop(),
                        this.queueUpdate(!0)
                },
                updateLayout: function() {
                    var t = this.currentScaleMode;
                    if (t === i.ScaleManager.RESIZE)
                        return void this.reflowGame();
                    if (this.scrollTop(),
                    this.compatibility.forceMinimumDocumentHeight && (document.documentElement.style.minHeight = window.innerHeight + "px"),
                        this.incorrectOrientation ? this.setMaximum() : t === i.ScaleManager.EXACT_FIT ? this.setExactFit() : t === i.ScaleManager.SHOW_ALL ? !this.isFullScreen && this.boundingParent && this.compatibility.canExpandParent ? (this.setShowAll(!0),
                            this.resetCanvas(),
                            this.setShowAll()) : this.setShowAll() : t === i.ScaleManager.NO_SCALE ? (this.width = this.game.width,
                            this.height = this.game.height) : t === i.ScaleManager.USER_SCALE && (this.width = this.game.width * this._userScaleFactor.x - this._userScaleTrim.x,
                            this.height = this.game.height * this._userScaleFactor.y - this._userScaleTrim.y),
                    !this.compatibility.canExpandParent && (t === i.ScaleManager.SHOW_ALL || t === i.ScaleManager.USER_SCALE)) {
                        var e = this.getParentBounds(this._tempBounds);
                        this.width = Math.min(this.width, e.width),
                            this.height = Math.min(this.height, e.height)
                    }
                    this.width = 0 | this.width,
                        this.height = 0 | this.height,
                        this.reflowCanvas()
                },
                getParentBounds: function(t) {
                    var e = t || new i.Rectangle
                        , s = this.boundingParent
                        , n = this.dom.visualBounds
                        , r = this.dom.layoutBounds;
                    if (s) {
                        var o = s.getBoundingClientRect()
                            , a = s.offsetParent ? s.offsetParent.getBoundingClientRect() : s.getBoundingClientRect();
                        e.setTo(o.left - a.left, o.top - a.top, o.width, o.height);
                        var h = this.windowConstraints;
                        if (h.right) {
                            var l = "layout" === h.right ? r : n;
                            e.right = Math.min(e.right, l.width)
                        }
                        if (h.bottom) {
                            var l = "layout" === h.bottom ? r : n;
                            e.bottom = Math.min(e.bottom, l.height)
                        }
                    } else
                        e.setTo(0, 0, n.width, n.height);
                    return e.setTo(Math.round(e.x), Math.round(e.y), Math.round(e.width), Math.round(e.height)),
                        e
                },
                alignCanvas: function(t, e) {
                    var i = this.getParentBounds(this._tempBounds)
                        , s = this.game.canvas
                        , n = this.margin;
                    if (t) {
                        n.left = n.right = 0;
                        var r = s.getBoundingClientRect();
                        if (this.width < i.width && !this.incorrectOrientation) {
                            var o = r.left - i.x
                                , a = i.width / 2 - this.width / 2;
                            a = Math.max(a, 0);
                            var h = a - o;
                            n.left = Math.round(h)
                        }
                        s.style.marginLeft = n.left + "px",
                        0 !== n.left && (n.right = -(i.width - r.width - n.left),
                            s.style.marginRight = n.right + "px")
                    }
                    if (e) {
                        n.top = n.bottom = 0;
                        var r = s.getBoundingClientRect();
                        if (this.height < i.height && !this.incorrectOrientation) {
                            var o = r.top - i.y
                                , a = i.height / 2 - this.height / 2;
                            a = Math.max(a, 0);
                            var h = a - o;
                            n.top = Math.round(h)
                        }
                        s.style.marginTop = n.top + "px",
                        0 !== n.top && (n.bottom = -(i.height - r.height - n.top),
                            s.style.marginBottom = n.bottom + "px")
                    }
                    n.x = n.left,
                        n.y = n.top
                },
                reflowGame: function() {
                    this.resetCanvas("", "");
                    var t = this.getParentBounds(this._tempBounds);
                    this.updateDimensions(t.width, t.height, !0)
                },
                reflowCanvas: function() {
                    this.incorrectOrientation || (this.width = i.Math.clamp(this.width, this.minWidth || 0, this.maxWidth || this.width),
                        this.height = i.Math.clamp(this.height, this.minHeight || 0, this.maxHeight || this.height)),
                        this.resetCanvas(),
                    this.compatibility.noMargins || (this.isFullScreen && this._createdFullScreenTarget ? this.alignCanvas(!0, !0) : this.alignCanvas(this.pageAlignHorizontally, this.pageAlignVertically)),
                        this.updateScalingAndBounds()
                },
                resetCanvas: function(t, e) {
                    void 0 === t && (t = this.width + "px"),
                    void 0 === e && (e = this.height + "px");
                    var i = this.game.canvas;
                    this.compatibility.noMargins || (i.style.marginLeft = "",
                        i.style.marginTop = "",
                        i.style.marginRight = "",
                        i.style.marginBottom = ""),
                        i.style.width = t,
                        i.style.height = e
                },
                queueUpdate: function(t) {
                    t && (this._parentBounds.width = 0,
                        this._parentBounds.height = 0),
                        this._updateThrottle = this._updateThrottleReset
                },
                reset: function(t) {
                    t && this.grid && this.grid.reset()
                },
                setMaximum: function() {
                    this.width = this.dom.visualBounds.width,
                        this.height = this.dom.visualBounds.height
                },
                setShowAll: function(t) {
                    var e, i = this.getParentBounds(this._tempBounds), s = i.width, n = i.height;
                    e = t ? Math.max(n / this.game.height, s / this.game.width) : Math.min(n / this.game.height, s / this.game.width),
                        this.width = Math.round(this.game.width * e),
                        this.height = Math.round(this.game.height * e)
                },
                setExactFit: function() {
                    var t = this.getParentBounds(this._tempBounds);
                    this.width = t.width,
                        this.height = t.height,
                    this.isFullScreen || (this.maxWidth && (this.width = Math.min(this.width, this.maxWidth)),
                    this.maxHeight && (this.height = Math.min(this.height, this.maxHeight)))
                },
                createFullScreenTarget: function() {
                    var t = document.createElement("div");
                    return t.style.margin = "0",
                        t.style.padding = "0",
                        t.style.background = "#000",
                        t
                },
                startFullScreen: function(t, e) {
                    if (this.isFullScreen)
                        return !1;
                    if (!this.compatibility.supportsFullScreen) {
                        var s = this;
                        return void setTimeout(function() {
                            s.fullScreenError()
                        }, 10)
                    }
                    if ("when-not-mouse" === this.compatibility.clickTrampoline) {
                        var n = this.game.input;
                        if (n.activePointer && n.activePointer !== n.mousePointer && (e || e !== !1))
                            return void n.activePointer.addClickTrampoline("startFullScreen", this.startFullScreen, this, [t, !1])
                    }
                    "undefined" != typeof t && this.game.renderType === i.CANVAS && (this.game.stage.smoothed = t);
                    var r = this.fullScreenTarget;
                    r || (this.cleanupCreatedTarget(),
                        this._createdFullScreenTarget = this.createFullScreenTarget(),
                        r = this._createdFullScreenTarget);
                    var o = {
                        targetElement: r
                    };
                    if (this.onFullScreenInit.dispatch(this, o),
                        this._createdFullScreenTarget) {
                        var a = this.game.canvas
                            , h = a.parentNode;
                        h.insertBefore(r, a),
                            r.appendChild(a)
                    }
                    return this.game.device.fullscreenKeyboard ? r[this.game.device.requestFullscreen](Element.ALLOW_KEYBOARD_INPUT) : r[this.game.device.requestFullscreen](),
                        !0
                },
                stopFullScreen: function() {
                    return !(!this.isFullScreen || !this.compatibility.supportsFullScreen) && (document[this.game.device.cancelFullscreen](),
                        !0)
                },
                cleanupCreatedTarget: function() {
                    var t = this._createdFullScreenTarget;
                    if (t && t.parentNode) {
                        var e = t.parentNode;
                        e.insertBefore(this.game.canvas, t),
                            e.removeChild(t)
                    }
                    this._createdFullScreenTarget = null
                },
                prepScreenMode: function(t) {
                    var e = !!this._createdFullScreenTarget
                        , s = this._createdFullScreenTarget || this.fullScreenTarget;
                    t ? (e || this.fullScreenScaleMode === i.ScaleManager.EXACT_FIT) && s !== this.game.canvas && (this._fullScreenRestore = {
                        targetWidth: s.style.width,
                        targetHeight: s.style.height
                    },
                        s.style.width = "100%",
                        s.style.height = "100%") : (this._fullScreenRestore && (s.style.width = this._fullScreenRestore.targetWidth,
                        s.style.height = this._fullScreenRestore.targetHeight,
                        this._fullScreenRestore = null),
                        this.updateDimensions(this._gameSize.width, this._gameSize.height, !0),
                        this.resetCanvas())
                },
                fullScreenChange: function(t) {
                    this.event = t,
                        this.isFullScreen ? (this.prepScreenMode(!0),
                            this.updateLayout(),
                            this.queueUpdate(!0)) : (this.prepScreenMode(!1),
                            this.cleanupCreatedTarget(),
                            this.updateLayout(),
                            this.queueUpdate(!0)),
                        this.onFullScreenChange.dispatch(this, this.width, this.height)
                },
                fullScreenError: function(t) {
                    this.event = t,
                        this.cleanupCreatedTarget(),
                        console.warn("Phaser.ScaleManager: requestFullscreen failed or device does not support the Fullscreen API"),
                        this.onFullScreenError.dispatch(this)
                },
                scaleSprite: function(t, e, i, s) {
                    if (void 0 === e && (e = this.width),
                    void 0 === i && (i = this.height),
                    void 0 === s && (s = !1),
                    !t || !t.scale)
                        return t;
                    if (t.scale.x = 1,
                        t.scale.y = 1,
                    t.width <= 0 || t.height <= 0 || 0 >= e || 0 >= i)
                        return t;
                    var n = e
                        , r = t.height * e / t.width
                        , o = t.width * i / t.height
                        , a = i
                        , h = o > e;
                    return h = h ? s : !s,
                        h ? (t.width = Math.floor(n),
                            t.height = Math.floor(r)) : (t.width = Math.floor(o),
                            t.height = Math.floor(a)),
                        t
                },
                destroy: function() {
                    this.game.onResume.remove(this._gameResumed, this),
                        window.removeEventListener("orientationchange", this._orientationChange, !1),
                        window.removeEventListener("resize", this._windowResize, !1),
                    this.compatibility.supportsFullScreen && (document.removeEventListener("webkitfullscreenchange", this._fullScreenChange, !1),
                        document.removeEventListener("mozfullscreenchange", this._fullScreenChange, !1),
                        document.removeEventListener("MSFullscreenChange", this._fullScreenChange, !1),
                        document.removeEventListener("fullscreenchange", this._fullScreenChange, !1),
                        document.removeEventListener("webkitfullscreenerror", this._fullScreenError, !1),
                        document.removeEventListener("mozfullscreenerror", this._fullScreenError, !1),
                        document.removeEventListener("MSFullscreenError", this._fullScreenError, !1),
                        document.removeEventListener("fullscreenerror", this._fullScreenError, !1))
                }
            },
            i.ScaleManager.prototype.constructor = i.ScaleManager,
            Object.defineProperty(i.ScaleManager.prototype, "boundingParent", {
                get: function() {
                    if (this.parentIsWindow || this.isFullScreen && !this._createdFullScreenTarget)
                        return null;
                    var t = this.game.canvas && this.game.canvas.parentNode;
                    return t || null
                }
            }),
            Object.defineProperty(i.ScaleManager.prototype, "scaleMode", {
                get: function() {
                    return this._scaleMode
                },
                set: function(t) {
                    return t !== this._scaleMode && (this.isFullScreen || (this.updateDimensions(this._gameSize.width, this._gameSize.height, !0),
                        this.queueUpdate(!0)),
                        this._scaleMode = t),
                        this._scaleMode
                }
            }),
            Object.defineProperty(i.ScaleManager.prototype, "fullScreenScaleMode", {
                get: function() {
                    return this._fullScreenScaleMode
                },
                set: function(t) {
                    return t !== this._fullScreenScaleMode && (this.isFullScreen ? (this.prepScreenMode(!1),
                        this._fullScreenScaleMode = t,
                        this.prepScreenMode(!0),
                        this.queueUpdate(!0)) : this._fullScreenScaleMode = t),
                        this._fullScreenScaleMode
                }
            }),
            Object.defineProperty(i.ScaleManager.prototype, "currentScaleMode", {
                get: function() {
                    return this.isFullScreen ? this._fullScreenScaleMode : this._scaleMode
                }
            }),
            Object.defineProperty(i.ScaleManager.prototype, "pageAlignHorizontally", {
                get: function() {
                    return this._pageAlignHorizontally
                },
                set: function(t) {
                    t !== this._pageAlignHorizontally && (this._pageAlignHorizontally = t,
                        this.queueUpdate(!0))
                }
            }),
            Object.defineProperty(i.ScaleManager.prototype, "pageAlignVertically", {
                get: function() {
                    return this._pageAlignVertically
                },
                set: function(t) {
                    t !== this._pageAlignVertically && (this._pageAlignVertically = t,
                        this.queueUpdate(!0))
                }
            }),
            Object.defineProperty(i.ScaleManager.prototype, "isFullScreen", {
                get: function() {
                    return !!(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement)
                }
            }),
            Object.defineProperty(i.ScaleManager.prototype, "isPortrait", {
                get: function() {
                    return "portrait" === this.classifyOrientation(this.screenOrientation)
                }
            }),
            Object.defineProperty(i.ScaleManager.prototype, "isLandscape", {
                get: function() {
                    return "landscape" === this.classifyOrientation(this.screenOrientation)
                }
            }),
            Object.defineProperty(i.ScaleManager.prototype, "isGamePortrait", {
                get: function() {
                    return this.height > this.width
                }
            }),
            Object.defineProperty(i.ScaleManager.prototype, "isGameLandscape", {
                get: function() {
                    return this.width > this.height
                }
            }),
            i.Utils.Debug = function(t) {
                this.game = t,
                    this.sprite = null,
                    this.bmd = null,
                    this.canvas = null,
                    this.context = null,
                    this.font = "14px Courier",
                    this.columnWidth = 100,
                    this.lineHeight = 16,
                    this.renderShadow = !0,
                    this.currentX = 0,
                    this.currentY = 0,
                    this.currentAlpha = 1,
                    this.dirty = !1
            }
            ,
            i.Utils.Debug.prototype = {
                boot: function() {
                    this.game.renderType === i.CANVAS ? this.context = this.game.context : (this.bmd = this.game.make.bitmapData(this.game.width, this.game.height),
                        this.sprite = this.game.make.image(0, 0, this.bmd),
                        this.game.stage.addChild(this.sprite),
                        this.canvas = PIXI.CanvasPool.create(this, this.game.width, this.game.height),
                        this.context = this.canvas.getContext("2d"))
                },
                preUpdate: function() {
                    this.dirty && this.sprite && (this.bmd.clear(),
                        this.bmd.draw(this.canvas, 0, 0),
                        this.context.clearRect(0, 0, this.game.width, this.game.height),
                        this.dirty = !1)
                },
                reset: function() {
                    this.context && this.context.clearRect(0, 0, this.game.width, this.game.height),
                    this.sprite && this.bmd.clear()
                },
                start: function(t, e, i, s) {
                    "number" != typeof t && (t = 0),
                    "number" != typeof e && (e = 0),
                        i = i || "rgb(255,255,255)",
                    void 0 === s && (s = 0),
                        this.currentX = t,
                        this.currentY = e,
                        this.currentColor = i,
                        this.columnWidth = s,
                        this.dirty = !0,
                        this.context.save(),
                        this.context.setTransform(1, 0, 0, 1, 0, 0),
                        this.context.strokeStyle = i,
                        this.context.fillStyle = i,
                        this.context.font = this.font,
                        this.context.globalAlpha = this.currentAlpha
                },
                stop: function() {
                    this.context.restore()
                },
                line: function() {
                    for (var t = this.currentX, e = 0; e < arguments.length; e++)
                        this.renderShadow && (this.context.fillStyle = "rgb(0,0,0)",
                            this.context.fillText(arguments[e], t + 1, this.currentY + 1),
                            this.context.fillStyle = this.currentColor),
                            this.context.fillText(arguments[e], t, this.currentY),
                            t += this.columnWidth;
                    this.currentY += this.lineHeight
                },
                soundInfo: function(t, e, i, s) {
                    this.start(e, i, s),
                        this.line("Sound: " + t.key + " Locked: " + t.game.sound.touchLocked),
                        this.line("Is Ready?: " + this.game.cache.isSoundReady(t.key) + " Pending Playback: " + t.pendingPlayback),
                        this.line("Decoded: " + t.isDecoded + " Decoding: " + t.isDecoding),
                        this.line("Total Duration: " + t.totalDuration + " Playing: " + t.isPlaying),
                        this.line("Time: " + t.currentTime),
                        this.line("Volume: " + t.volume + " Muted: " + t.mute),
                        this.line("WebAudio: " + t.usingWebAudio + " Audio: " + t.usingAudioTag),
                    "" !== t.currentMarker && (this.line("Marker: " + t.currentMarker + " Duration: " + t.duration + " (ms: " + t.durationMS + ")"),
                        this.line("Start: " + t.markers[t.currentMarker].start + " Stop: " + t.markers[t.currentMarker].stop),
                        this.line("Position: " + t.position)),
                        this.stop()
                },
                cameraInfo: function(t, e, i, s) {
                    this.start(e, i, s),
                        this.line("Camera (" + t.width + " x " + t.height + ")"),
                        this.line("X: " + t.x + " Y: " + t.y),
                    t.bounds && this.line("Bounds x: " + t.bounds.x + " Y: " + t.bounds.y + " w: " + t.bounds.width + " h: " + t.bounds.height),
                        this.line("View x: " + t.view.x + " Y: " + t.view.y + " w: " + t.view.width + " h: " + t.view.height),
                        this.line("Total in view: " + t.totalInView),
                        this.stop()
                },
                timer: function(t, e, i, s) {
                    this.start(e, i, s),
                        this.line("Timer (running: " + t.running + " expired: " + t.expired + ")"),
                        this.line("Next Tick: " + t.next + " Duration: " + t.duration),
                        this.line("Paused: " + t.paused + " Length: " + t.length),
                        this.stop()
                },
                pointer: function(t, e, i, s, n) {
                    null != t && (void 0 === e && (e = !1),
                        i = i || "rgba(0,255,0,0.5)",
                        s = s || "rgba(255,0,0,0.5)",
                    (e !== !0 || t.isUp !== !0) && (this.start(t.x, t.y - 100, n),
                        this.context.beginPath(),
                        this.context.arc(t.x, t.y, t.circle.radius, 0, 2 * Math.PI),
                        t.active ? this.context.fillStyle = i : this.context.fillStyle = s,
                        this.context.fill(),
                        this.context.closePath(),
                        this.context.beginPath(),
                        this.context.moveTo(t.positionDown.x, t.positionDown.y),
                        this.context.lineTo(t.position.x, t.position.y),
                        this.context.lineWidth = 2,
                        this.context.stroke(),
                        this.context.closePath(),
                        this.line("ID: " + t.id + " Active: " + t.active),
                        this.line("World X: " + t.worldX + " World Y: " + t.worldY),
                        this.line("Screen X: " + t.x + " Screen Y: " + t.y + " In: " + t.withinGame),
                        this.line("Duration: " + t.duration + " ms"),
                        this.line("is Down: " + t.isDown + " is Up: " + t.isUp),
                        this.stop()))
                },
                spriteInputInfo: function(t, e, i, s) {
                    this.start(e, i, s),
                        this.line("Sprite Input: (" + t.width + " x " + t.height + ")"),
                        this.line("x: " + t.input.pointerX().toFixed(1) + " y: " + t.input.pointerY().toFixed(1)),
                        this.line("over: " + t.input.pointerOver() + " duration: " + t.input.overDuration().toFixed(0)),
                        this.line("down: " + t.input.pointerDown() + " duration: " + t.input.downDuration().toFixed(0)),
                        this.line("just over: " + t.input.justOver() + " just out: " + t.input.justOut()),
                        this.stop()
                },
                key: function(t, e, i, s) {
                    this.start(e, i, s, 150),
                        this.line("Key:", t.keyCode, "isDown:", t.isDown),
                        this.line("justDown:", t.justDown, "justUp:", t.justUp),
                        this.line("Time Down:", t.timeDown.toFixed(0), "duration:", t.duration.toFixed(0)),
                        this.stop()
                },
                inputInfo: function(t, e, i) {
                    this.start(t, e, i),
                        this.line("Input"),
                        this.line("X: " + this.game.input.x + " Y: " + this.game.input.y),
                        this.line("World X: " + this.game.input.worldX + " World Y: " + this.game.input.worldY),
                        this.line("Scale X: " + this.game.input.scale.x.toFixed(1) + " Scale Y: " + this.game.input.scale.x.toFixed(1)),
                        this.line("Screen X: " + this.game.input.activePointer.screenX + " Screen Y: " + this.game.input.activePointer.screenY),
                        this.stop()
                },
                spriteBounds: function(t, e, i) {
                    var s = t.getBounds();
                    s.x += this.game.camera.x,
                        s.y += this.game.camera.y,
                        this.rectangle(s, e, i)
                },
                ropeSegments: function(t, e, i) {
                    var s = t.segments
                        , n = this;
                    s.forEach(function(t) {
                        n.rectangle(t, e, i)
                    }, this)
                },
                spriteInfo: function(t, e, i, s) {
                    this.start(e, i, s),
                        this.line("Sprite:  (" + t.width + " x " + t.height + ") anchor: " + t.anchor.x + " x " + t.anchor.y),
                        this.line("x: " + t.x.toFixed(1) + " y: " + t.y.toFixed(1)),
                        this.line("angle: " + t.angle.toFixed(1) + " rotation: " + t.rotation.toFixed(1)),
                        this.line("visible: " + t.visible + " in camera: " + t.inCamera),
                        this.line("bounds x: " + t._bounds.x.toFixed(1) + " y: " + t._bounds.y.toFixed(1) + " w: " + t._bounds.width.toFixed(1) + " h: " + t._bounds.height.toFixed(1)),
                        this.stop()
                },
                spriteCoords: function(t, e, i, s) {
                    this.start(e, i, s, 100),
                    t.name && this.line(t.name),
                        this.line("x:", t.x.toFixed(2), "y:", t.y.toFixed(2)),
                        this.line("pos x:", t.position.x.toFixed(2), "pos y:", t.position.y.toFixed(2)),
                        this.line("world x:", t.world.x.toFixed(2), "world y:", t.world.y.toFixed(2)),
                        this.stop()
                },
                lineInfo: function(t, e, i, s) {
                    this.start(e, i, s, 80),
                        this.line("start.x:", t.start.x.toFixed(2), "start.y:", t.start.y.toFixed(2)),
                        this.line("end.x:", t.end.x.toFixed(2), "end.y:", t.end.y.toFixed(2)),
                        this.line("length:", t.length.toFixed(2), "angle:", t.angle),
                        this.stop()
                },
                pixel: function(t, e, i, s) {
                    s = s || 2,
                        this.start(),
                        this.context.fillStyle = i,
                        this.context.fillRect(t, e, s, s),
                        this.stop()
                },
                geom: function(t, e, s, n) {
                    void 0 === s && (s = !0),
                    void 0 === n && (n = 0),
                        e = e || "rgba(0,255,0,0.4)",
                        this.start(),
                        this.context.fillStyle = e,
                        this.context.strokeStyle = e,
                        t instanceof i.Rectangle || 1 === n ? s ? this.context.fillRect(t.x - this.game.camera.x, t.y - this.game.camera.y, t.width, t.height) : this.context.strokeRect(t.x - this.game.camera.x, t.y - this.game.camera.y, t.width, t.height) : t instanceof i.Circle || 2 === n ? (this.context.beginPath(),
                            this.context.arc(t.x - this.game.camera.x, t.y - this.game.camera.y, t.radius, 0, 2 * Math.PI, !1),
                            this.context.closePath(),
                            s ? this.context.fill() : this.context.stroke()) : t instanceof i.Point || 3 === n ? this.context.fillRect(t.x - this.game.camera.x, t.y - this.game.camera.y, 4, 4) : (t instanceof i.Line || 4 === n) && (this.context.lineWidth = 1,
                            this.context.beginPath(),
                            this.context.moveTo(t.start.x + .5 - this.game.camera.x, t.start.y + .5 - this.game.camera.y),
                            this.context.lineTo(t.end.x + .5 - this.game.camera.x, t.end.y + .5 - this.game.camera.y),
                            this.context.closePath(),
                            this.context.stroke()),
                        this.stop()
                },
                rectangle: function(t, e, i) {
                    void 0 === i && (i = !0),
                        e = e || "rgba(0, 255, 0, 0.4)",
                        this.start(),
                        i ? (this.context.fillStyle = e,
                            this.context.fillRect(t.x - this.game.camera.x, t.y - this.game.camera.y, t.width, t.height)) : (this.context.strokeStyle = e,
                            this.context.strokeRect(t.x - this.game.camera.x, t.y - this.game.camera.y, t.width, t.height)),
                        this.stop()
                },
                text: function(t, e, i, s, n) {
                    s = s || "rgb(255,255,255)",
                        n = n || "16px Courier",
                        this.start(),
                        this.context.font = n,
                    this.renderShadow && (this.context.fillStyle = "rgb(0,0,0)",
                        this.context.fillText(t, e + 1, i + 1)),
                        this.context.fillStyle = s,
                        this.context.fillText(t, e, i),
                        this.stop()
                },
                quadTree: function(t, e) {
                    e = e || "rgba(255,0,0,0.3)",
                        this.start();
                    var i = t.bounds;
                    if (0 === t.nodes.length) {
                        this.context.strokeStyle = e,
                            this.context.strokeRect(i.x, i.y, i.width, i.height),
                            this.text("size: " + t.objects.length, i.x + 4, i.y + 16, "rgb(0,200,0)", "12px Courier"),
                            this.context.strokeStyle = "rgb(0,255,0)";
                        for (var s = 0; s < t.objects.length; s++)
                            this.context.strokeRect(t.objects[s].x, t.objects[s].y, t.objects[s].width, t.objects[s].height)
                    } else
                        for (var s = 0; s < t.nodes.length; s++)
                            this.quadTree(t.nodes[s]);
                    this.stop()
                },
                body: function(t, e, s) {
                    t.body && (this.start(),
                        t.body.type === i.Physics.ARCADE ? i.Physics.Arcade.Body.render(this.context, t.body, e, s) : t.body.type === i.Physics.NINJA ? i.Physics.Ninja.Body.render(this.context, t.body, e, s) : t.body.type === i.Physics.BOX2D && i.Physics.Box2D.renderBody(this.context, t.body, e),
                        this.stop())
                },
                bodyInfo: function(t, e, s, n) {
                    t.body && (this.start(e, s, n, 210),
                        t.body.type === i.Physics.ARCADE ? i.Physics.Arcade.Body.renderBodyInfo(this, t.body) : t.body.type === i.Physics.BOX2D && this.game.physics.box2d.renderBodyInfo(this, t.body),
                        this.stop())
                },
                box2dWorld: function() {
                    this.start(),
                        this.context.translate(-this.game.camera.view.x, -this.game.camera.view.y, 0),
                        this.game.physics.box2d.renderDebugDraw(this.context),
                        this.stop()
                },
                box2dBody: function(t, e) {
                    this.start(),
                        i.Physics.Box2D.renderBody(this.context, t, e),
                        this.stop()
                },
                destroy: function() {
                    PIXI.CanvasPool.remove(this)
                }
            },
            i.Utils.Debug.prototype.constructor = i.Utils.Debug,
            i.DOM = {
                getOffset: function(t, e) {
                    e = e || new i.Point;
                    var s = t.getBoundingClientRect()
                        , n = i.DOM.scrollY
                        , r = i.DOM.scrollX
                        , o = document.documentElement.clientTop
                        , a = document.documentElement.clientLeft;
                    return e.x = s.left + r - a,
                        e.y = s.top + n - o,
                        e
                },
                getBounds: function(t, e) {
                    return void 0 === e && (e = 0),
                        t = t && !t.nodeType ? t[0] : t,
                    !(!t || 1 !== t.nodeType) && this.calibrate(t.getBoundingClientRect(), e)
                },
                calibrate: function(t, e) {
                    e = +e || 0;
                    var i = {
                        width: 0,
                        height: 0,
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    };
                    return i.width = (i.right = t.right + e) - (i.left = t.left - e),
                        i.height = (i.bottom = t.bottom + e) - (i.top = t.top - e),
                        i
                },
                getAspectRatio: function(t) {
                    t = null == t ? this.visualBounds : 1 === t.nodeType ? this.getBounds(t) : t;
                    var e = t.width
                        , i = t.height;
                    return "function" == typeof e && (e = e.call(t)),
                    "function" == typeof i && (i = i.call(t)),
                    e / i
                },
                inLayoutViewport: function(t, e) {
                    var i = this.getBounds(t, e);
                    return !!i && i.bottom >= 0 && i.right >= 0 && i.top <= this.layoutBounds.width && i.left <= this.layoutBounds.height
                },
                getScreenOrientation: function(t) {
                    var e = window.screen
                        , i = e.orientation || e.mozOrientation || e.msOrientation;
                    if (i && "string" == typeof i.type)
                        return i.type;
                    if ("string" == typeof i)
                        return i;
                    var s = "portrait-primary"
                        , n = "landscape-primary";
                    if ("screen" === t)
                        return e.height > e.width ? s : n;
                    if ("viewport" === t)
                        return this.visualBounds.height > this.visualBounds.width ? s : n;
                    if ("window.orientation" === t && "number" == typeof window.orientation)
                        return 0 === window.orientation || 180 === window.orientation ? s : n;
                    if (window.matchMedia) {
                        if (window.matchMedia("(orientation: portrait)").matches)
                            return s;
                        if (window.matchMedia("(orientation: landscape)").matches)
                            return n
                    }
                    return this.visualBounds.height > this.visualBounds.width ? s : n
                },
                visualBounds: new i.Rectangle,
                layoutBounds: new i.Rectangle,
                documentBounds: new i.Rectangle
            },
            i.Device.whenReady(function(t) {
                var e = window && "pageXOffset"in window ? function() {
                        return window.pageXOffset
                    }
                    : function() {
                        return document.documentElement.scrollLeft
                    }
                    , s = window && "pageYOffset"in window ? function() {
                        return window.pageYOffset
                    }
                    : function() {
                        return document.documentElement.scrollTop
                    }
                ;
                Object.defineProperty(i.DOM, "scrollX", {
                    get: e
                }),
                    Object.defineProperty(i.DOM, "scrollY", {
                        get: s
                    }),
                    Object.defineProperty(i.DOM.visualBounds, "x", {
                        get: e
                    }),
                    Object.defineProperty(i.DOM.visualBounds, "y", {
                        get: s
                    }),
                    Object.defineProperty(i.DOM.layoutBounds, "x", {
                        value: 0
                    }),
                    Object.defineProperty(i.DOM.layoutBounds, "y", {
                        value: 0
                    });
                var n = t.desktop && document.documentElement.clientWidth <= window.innerWidth && document.documentElement.clientHeight <= window.innerHeight;
                if (n) {
                    var r = function() {
                        return Math.max(window.innerWidth, document.documentElement.clientWidth)
                    }
                        , o = function() {
                        return Math.max(window.innerHeight, document.documentElement.clientHeight)
                    };
                    Object.defineProperty(i.DOM.visualBounds, "width", {
                        get: r
                    }),
                        Object.defineProperty(i.DOM.visualBounds, "height", {
                            get: o
                        }),
                        Object.defineProperty(i.DOM.layoutBounds, "width", {
                            get: r
                        }),
                        Object.defineProperty(i.DOM.layoutBounds, "height", {
                            get: o
                        })
                } else
                    Object.defineProperty(i.DOM.visualBounds, "width", {
                        get: function() {
                            return window.innerWidth
                        }
                    }),
                        Object.defineProperty(i.DOM.visualBounds, "height", {
                            get: function() {
                                return window.innerHeight
                            }
                        }),
                        Object.defineProperty(i.DOM.layoutBounds, "width", {
                            get: function() {
                                var t = document.documentElement.clientWidth
                                    , e = window.innerWidth;
                                return e > t ? e : t
                            }
                        }),
                        Object.defineProperty(i.DOM.layoutBounds, "height", {
                            get: function() {
                                var t = document.documentElement.clientHeight
                                    , e = window.innerHeight;
                                return e > t ? e : t
                            }
                        });
                Object.defineProperty(i.DOM.documentBounds, "x", {
                    value: 0
                }),
                    Object.defineProperty(i.DOM.documentBounds, "y", {
                        value: 0
                    }),
                    Object.defineProperty(i.DOM.documentBounds, "width", {
                        get: function() {
                            var t = document.documentElement;
                            return Math.max(t.clientWidth, t.offsetWidth, t.scrollWidth)
                        }
                    }),
                    Object.defineProperty(i.DOM.documentBounds, "height", {
                        get: function() {
                            var t = document.documentElement;
                            return Math.max(t.clientHeight, t.offsetHeight, t.scrollHeight)
                        }
                    })
            }, null, !0),
            i.ArraySet = function(t) {
                this.position = 0,
                    this.list = t || []
            }
            ,
            i.ArraySet.prototype = {
                add: function(t) {
                    return this.exists(t) || this.list.push(t),
                        t
                },
                getIndex: function(t) {
                    return this.list.indexOf(t)
                },
                getByKey: function(t, e) {
                    for (var i = this.list.length; i--; )
                        if (this.list[i][t] === e)
                            return this.list[i];
                    return null
                },
                exists: function(t) {
                    return this.list.indexOf(t) > -1
                },
                reset: function() {
                    this.list.length = 0
                },
                remove: function(t) {
                    var e = this.list.indexOf(t);
                    return e > -1 ? (this.list.splice(e, 1),
                        t) : void 0
                },
                setAll: function(t, e) {
                    for (var i = this.list.length; i--; )
                        this.list[i] && (this.list[i][t] = e)
                },
                callAll: function(t) {
                    for (var e = Array.prototype.slice.call(arguments, 1), i = this.list.length; i--; )
                        this.list[i] && this.list[i][t] && this.list[i][t].apply(this.list[i], e)
                },
                removeAll: function(t) {
                    void 0 === t && (t = !1);
                    for (var e = this.list.length; e--; )
                        if (this.list[e]) {
                            var i = this.remove(this.list[e]);
                            t && i.destroy()
                        }
                    this.position = 0,
                        this.list = []
                }
            },
            Object.defineProperty(i.ArraySet.prototype, "total", {
                get: function() {
                    return this.list.length
                }
            }),
            Object.defineProperty(i.ArraySet.prototype, "first", {
                get: function() {
                    return this.position = 0,
                        this.list.length > 0 ? this.list[0] : null
                }
            }),
            Object.defineProperty(i.ArraySet.prototype, "next", {
                get: function() {
                    return this.position < this.list.length ? (this.position++,
                        this.list[this.position]) : null
                }
            }),
            i.ArraySet.prototype.constructor = i.ArraySet,
            i.ArrayUtils = {
                getRandomItem: function(t, e, i) {
                    if (null === t)
                        return null;
                    void 0 === e && (e = 0),
                    void 0 === i && (i = t.length);
                    var s = e + Math.floor(Math.random() * i);
                    return void 0 === t[s] ? null : t[s]
                },
                removeRandomItem: function(t, e, i) {
                    if (null == t)
                        return null;
                    void 0 === e && (e = 0),
                    void 0 === i && (i = t.length);
                    var s = e + Math.floor(Math.random() * i);
                    if (s < t.length) {
                        var n = t.splice(s, 1);
                        return void 0 === n[0] ? null : n[0]
                    }
                    return null
                },
                shuffle: function(t) {
                    for (var e = t.length - 1; e > 0; e--) {
                        var i = Math.floor(Math.random() * (e + 1))
                            , s = t[e];
                        t[e] = t[i],
                            t[i] = s
                    }
                    return t
                },
                transposeMatrix: function(t) {
                    for (var e = t.length, i = t[0].length, s = new Array(i), n = 0; i > n; n++) {
                        s[n] = new Array(e);
                        for (var r = e - 1; r > -1; r--)
                            s[n][r] = t[r][n]
                    }
                    return s
                },
                rotateMatrix: function(t, e) {
                    if ("string" != typeof e && (e = (e % 360 + 360) % 360),
                    90 === e || -270 === e || "rotateLeft" === e)
                        t = i.ArrayUtils.transposeMatrix(t),
                            t = t.reverse();
                    else if (-90 === e || 270 === e || "rotateRight" === e)
                        t = t.reverse(),
                            t = i.ArrayUtils.transposeMatrix(t);
                    else if (180 === Math.abs(e) || "rotate180" === e) {
                        for (var s = 0; s < t.length; s++)
                            t[s].reverse();
                        t = t.reverse()
                    }
                    return t
                },
                findClosest: function(t, e) {
                    if (!e.length)
                        return NaN;
                    if (1 === e.length || t < e[0])
                        return e[0];
                    for (var i = 1; e[i] < t; )
                        i++;
                    var s = e[i - 1]
                        , n = i < e.length ? e[i] : Number.POSITIVE_INFINITY;
                    return t - s >= n - t ? n : s
                },
                rotate: function(t) {
                    var e = t.shift();
                    return t.push(e),
                        e
                },
                numberArray: function(t, e) {
                    for (var i = [], s = t; e >= s; s++)
                        i.push(s);
                    return i
                },
                numberArrayStep: function(t, e, s) {
                    (void 0 === t || null === t) && (t = 0),
                    (void 0 === e || null === e) && (e = t,
                        t = 0),
                    void 0 === s && (s = 1);
                    for (var n = [], r = Math.max(i.Math.roundAwayFromZero((e - t) / (s || 1)), 0), o = 0; r > o; o++)
                        n.push(t),
                            t += s;
                    return n
                }
            },
            i.LinkedList = function() {
                this.next = null,
                    this.prev = null,
                    this.first = null,
                    this.last = null,
                    this.total = 0
            }
            ,
            i.LinkedList.prototype = {
                add: function(t) {
                    return 0 === this.total && null === this.first && null === this.last ? (this.first = t,
                        this.last = t,
                        this.next = t,
                        t.prev = this,
                        this.total++,
                        t) : (this.last.next = t,
                        t.prev = this.last,
                        this.last = t,
                        this.total++,
                        t)
                },
                reset: function() {
                    this.first = null,
                        this.last = null,
                        this.next = null,
                        this.prev = null,
                        this.total = 0
                },
                remove: function(t) {
                    return 1 === this.total ? (this.reset(),
                        void (t.next = t.prev = null)) : (t === this.first ? this.first = this.first.next : t === this.last && (this.last = this.last.prev),
                    t.prev && (t.prev.next = t.next),
                    t.next && (t.next.prev = t.prev),
                        t.next = t.prev = null,
                    null === this.first && (this.last = null),
                        void this.total--)
                },
                callAll: function(t) {
                    if (this.first && this.last) {
                        var e = this.first;
                        do
                            e && e[t] && e[t].call(e),
                                e = e.next;
                        while (e != this.last.next)
                    }
                }
            },
            i.LinkedList.prototype.constructor = i.LinkedList,
            i.Create = function(t) {
                this.game = t,
                    this.bmd = null,
                    this.canvas = null,
                    this.ctx = null,
                    this.palettes = [{
                        0: "#000",
                        1: "#9D9D9D",
                        2: "#FFF",
                        3: "#BE2633",
                        4: "#E06F8B",
                        5: "#493C2B",
                        6: "#A46422",
                        7: "#EB8931",
                        8: "#F7E26B",
                        9: "#2F484E",
                        A: "#44891A",
                        B: "#A3CE27",
                        C: "#1B2632",
                        D: "#005784",
                        E: "#31A2F2",
                        F: "#B2DCEF"
                    }, {
                        0: "#000",
                        1: "#191028",
                        2: "#46af45",
                        3: "#a1d685",
                        4: "#453e78",
                        5: "#7664fe",
                        6: "#833129",
                        7: "#9ec2e8",
                        8: "#dc534b",
                        9: "#e18d79",
                        A: "#d6b97b",
                        B: "#e9d8a1",
                        C: "#216c4b",
                        D: "#d365c8",
                        E: "#afaab9",
                        F: "#f5f4eb"
                    }, {
                        0: "#000",
                        1: "#2234d1",
                        2: "#0c7e45",
                        3: "#44aacc",
                        4: "#8a3622",
                        5: "#5c2e78",
                        6: "#aa5c3d",
                        7: "#b5b5b5",
                        8: "#5e606e",
                        9: "#4c81fb",
                        A: "#6cd947",
                        B: "#7be2f9",
                        C: "#eb8a60",
                        D: "#e23d69",
                        E: "#ffd93f",
                        F: "#fff"
                    }, {
                        0: "#000",
                        1: "#fff",
                        2: "#8b4131",
                        3: "#7bbdc5",
                        4: "#8b41ac",
                        5: "#6aac41",
                        6: "#3931a4",
                        7: "#d5de73",
                        8: "#945a20",
                        9: "#5a4100",
                        A: "#bd736a",
                        B: "#525252",
                        C: "#838383",
                        D: "#acee8b",
                        E: "#7b73de",
                        F: "#acacac"
                    }, {
                        0: "#000",
                        1: "#191028",
                        2: "#46af45",
                        3: "#a1d685",
                        4: "#453e78",
                        5: "#7664fe",
                        6: "#833129",
                        7: "#9ec2e8",
                        8: "#dc534b",
                        9: "#e18d79",
                        A: "#d6b97b",
                        B: "#e9d8a1",
                        C: "#216c4b",
                        D: "#d365c8",
                        E: "#afaab9",
                        F: "#fff"
                    }]
            }
            ,
            i.Create.PALETTE_ARNE = 0,
            i.Create.PALETTE_JMP = 1,
            i.Create.PALETTE_CGA = 2,
            i.Create.PALETTE_C64 = 3,
            i.Create.PALETTE_JAPANESE_MACHINE = 4,
            i.Create.prototype = {
                texture: function(t, e, i, s, n) {
                    void 0 === i && (i = 8),
                    void 0 === s && (s = i),
                    void 0 === n && (n = 0);
                    var r = e[0].length * i
                        , o = e.length * s;
                    null === this.bmd && (this.bmd = this.game.make.bitmapData(),
                        this.canvas = this.bmd.canvas,
                        this.ctx = this.bmd.context),
                        this.bmd.resize(r, o),
                        this.bmd.clear();
                    for (var a = 0; a < e.length; a++)
                        for (var h = e[a], l = 0; l < h.length; l++) {
                            var u = h[l];
                            "." !== u && " " !== u && (this.ctx.fillStyle = this.palettes[n][u],
                                this.ctx.fillRect(l * i, a * s, i, s))
                        }
                    return this.bmd.generateTexture(t)
                },
                grid: function(t, e, i, s, n, r) {
                    null === this.bmd && (this.bmd = this.game.make.bitmapData(),
                        this.canvas = this.bmd.canvas,
                        this.ctx = this.bmd.context),
                        this.bmd.resize(e, i),
                        this.ctx.fillStyle = r;
                    for (var o = 0; i > o; o += n)
                        this.ctx.fillRect(0, o, e, 1);
                    for (var a = 0; e > a; a += s)
                        this.ctx.fillRect(a, 0, 1, i);
                    return this.bmd.generateTexture(t)
                }
            },
            i.Create.prototype.constructor = i.Create,
            i.FlexGrid = function(t, e, s) {
                this.game = t.game,
                    this.manager = t,
                    this.width = e,
                    this.height = s,
                    this.boundsCustom = new i.Rectangle(0,0,e,s),
                    this.boundsFluid = new i.Rectangle(0,0,e,s),
                    this.boundsFull = new i.Rectangle(0,0,e,s),
                    this.boundsNone = new i.Rectangle(0,0,e,s),
                    this.positionCustom = new i.Point(0,0),
                    this.positionFluid = new i.Point(0,0),
                    this.positionFull = new i.Point(0,0),
                    this.positionNone = new i.Point(0,0),
                    this.scaleCustom = new i.Point(1,1),
                    this.scaleFluid = new i.Point(1,1),
                    this.scaleFluidInversed = new i.Point(1,1),
                    this.scaleFull = new i.Point(1,1),
                    this.scaleNone = new i.Point(1,1),
                    this.customWidth = 0,
                    this.customHeight = 0,
                    this.customOffsetX = 0,
                    this.customOffsetY = 0,
                    this.ratioH = e / s,
                    this.ratioV = s / e,
                    this.multiplier = 0,
                    this.layers = []
            }
            ,
            i.FlexGrid.prototype = {
                setSize: function(t, e) {
                    this.width = t,
                        this.height = e,
                        this.ratioH = t / e,
                        this.ratioV = e / t,
                        this.scaleNone = new i.Point(1,1),
                        this.boundsNone.width = this.width,
                        this.boundsNone.height = this.height,
                        this.refresh()
                },
                createCustomLayer: function(t, e, s, n) {
                    void 0 === n && (n = !0),
                        this.customWidth = t,
                        this.customHeight = e,
                        this.boundsCustom.width = t,
                        this.boundsCustom.height = e;
                    var r = new i.FlexLayer(this,this.positionCustom,this.boundsCustom,this.scaleCustom);
                    return n && this.game.world.add(r),
                        this.layers.push(r),
                    "undefined" != typeof s && null !== typeof s && r.addMultiple(s),
                        r
                },
                createFluidLayer: function(t, e) {
                    void 0 === e && (e = !0);
                    var s = new i.FlexLayer(this,this.positionFluid,this.boundsFluid,this.scaleFluid);
                    return e && this.game.world.add(s),
                        this.layers.push(s),
                    "undefined" != typeof t && null !== typeof t && s.addMultiple(t),
                        s
                },
                createFullLayer: function(t) {
                    var e = new i.FlexLayer(this,this.positionFull,this.boundsFull,this.scaleFluid);
                    return this.game.world.add(e),
                        this.layers.push(e),
                    "undefined" != typeof t && e.addMultiple(t),
                        e
                },
                createFixedLayer: function(t) {
                    var e = new i.FlexLayer(this,this.positionNone,this.boundsNone,this.scaleNone);
                    return this.game.world.add(e),
                        this.layers.push(e),
                    "undefined" != typeof t && e.addMultiple(t),
                        e
                },
                reset: function() {
                    for (var t = this.layers.length; t--; )
                        this.layers[t].persist || (this.layers[t].position = null,
                            this.layers[t].scale = null,
                            this.layers.slice(t, 1))
                },
                onResize: function(t, e) {
                    this.ratioH = t / e,
                        this.ratioV = e / t,
                        this.refresh(t, e)
                },
                refresh: function() {
                    this.multiplier = Math.min(this.manager.height / this.height, this.manager.width / this.width),
                        this.boundsFluid.width = Math.round(this.width * this.multiplier),
                        this.boundsFluid.height = Math.round(this.height * this.multiplier),
                        this.scaleFluid.set(this.boundsFluid.width / this.width, this.boundsFluid.height / this.height),
                        this.scaleFluidInversed.set(this.width / this.boundsFluid.width, this.height / this.boundsFluid.height),
                        this.scaleFull.set(this.boundsFull.width / this.width, this.boundsFull.height / this.height),
                        this.boundsFull.width = Math.round(this.manager.width * this.scaleFluidInversed.x),
                        this.boundsFull.height = Math.round(this.manager.height * this.scaleFluidInversed.y),
                        this.boundsFluid.centerOn(this.manager.bounds.centerX, this.manager.bounds.centerY),
                        this.boundsNone.centerOn(this.manager.bounds.centerX, this.manager.bounds.centerY),
                        this.positionFluid.set(this.boundsFluid.x, this.boundsFluid.y),
                        this.positionNone.set(this.boundsNone.x, this.boundsNone.y)
                },
                fitSprite: function(t) {
                    this.manager.scaleSprite(t),
                        t.x = this.manager.bounds.centerX,
                        t.y = this.manager.bounds.centerY
                },
                debug: function() {
                    this.game.debug.text(this.boundsFluid.width + " x " + this.boundsFluid.height, this.boundsFluid.x + 4, this.boundsFluid.y + 16),
                        this.game.debug.geom(this.boundsFluid, "rgba(255,0,0,0.9", !1)
                }
            },
            i.FlexGrid.prototype.constructor = i.FlexGrid,
            i.FlexLayer = function(t, e, s, n) {
                i.Group.call(this, t.game, null, "__flexLayer" + t.game.rnd.uuid(), !1),
                    this.manager = t.manager,
                    this.grid = t,
                    this.persist = !1,
                    this.position = e,
                    this.bounds = s,
                    this.scale = n,
                    this.topLeft = s.topLeft,
                    this.topMiddle = new i.Point(s.halfWidth,0),
                    this.topRight = s.topRight,
                    this.bottomLeft = s.bottomLeft,
                    this.bottomMiddle = new i.Point(s.halfWidth,s.bottom),
                    this.bottomRight = s.bottomRight
            }
            ,
            i.FlexLayer.prototype = Object.create(i.Group.prototype),
            i.FlexLayer.prototype.constructor = i.FlexLayer,
            i.FlexLayer.prototype.resize = function() {}
            ,
            i.FlexLayer.prototype.debug = function() {
                this.game.debug.text(this.bounds.width + " x " + this.bounds.height, this.bounds.x + 4, this.bounds.y + 16),
                    this.game.debug.geom(this.bounds, "rgba(0,0,255,0.9", !1),
                    this.game.debug.geom(this.topLeft, "rgba(255,255,255,0.9"),
                    this.game.debug.geom(this.topMiddle, "rgba(255,255,255,0.9"),
                    this.game.debug.geom(this.topRight, "rgba(255,255,255,0.9")
            }
            ,
            i.Color = {
                packPixel: function(t, e, s, n) {
                    return i.Device.LITTLE_ENDIAN ? (n << 24 | s << 16 | e << 8 | t) >>> 0 : (t << 24 | e << 16 | s << 8 | n) >>> 0
                },
                unpackPixel: function(t, e, s, n) {
                    return (void 0 === e || null === e) && (e = i.Color.createColor()),
                    (void 0 === s || null === s) && (s = !1),
                    (void 0 === n || null === n) && (n = !1),
                        i.Device.LITTLE_ENDIAN ? (e.a = (4278190080 & t) >>> 24,
                            e.b = (16711680 & t) >>> 16,
                            e.g = (65280 & t) >>> 8,
                            e.r = 255 & t) : (e.r = (4278190080 & t) >>> 24,
                            e.g = (16711680 & t) >>> 16,
                            e.b = (65280 & t) >>> 8,
                            e.a = 255 & t),
                        e.color = t,
                        e.rgba = "rgba(" + e.r + "," + e.g + "," + e.b + "," + e.a / 255 + ")",
                    s && i.Color.RGBtoHSL(e.r, e.g, e.b, e),
                    n && i.Color.RGBtoHSV(e.r, e.g, e.b, e),
                        e
                },
                fromRGBA: function(t, e) {
                    return e || (e = i.Color.createColor()),
                        e.r = (4278190080 & t) >>> 24,
                        e.g = (16711680 & t) >>> 16,
                        e.b = (65280 & t) >>> 8,
                        e.a = 255 & t,
                        e.rgba = "rgba(" + e.r + "," + e.g + "," + e.b + "," + e.a + ")",
                        e
                },
                toRGBA: function(t, e, i, s) {
                    return t << 24 | e << 16 | i << 8 | s
                },
                RGBtoHSL: function(t, e, s, n) {
                    n || (n = i.Color.createColor(t, e, s, 1)),
                        t /= 255,
                        e /= 255,
                        s /= 255;
                    var r = Math.min(t, e, s)
                        , o = Math.max(t, e, s);
                    if (n.h = 0,
                        n.s = 0,
                        n.l = (o + r) / 2,
                    o !== r) {
                        var a = o - r;
                        n.s = n.l > .5 ? a / (2 - o - r) : a / (o + r),
                            o === t ? n.h = (e - s) / a + (s > e ? 6 : 0) : o === e ? n.h = (s - t) / a + 2 : o === s && (n.h = (t - e) / a + 4),
                            n.h /= 6
                    }
                    return n
                },
                HSLtoRGB: function(t, e, s, n) {
                    if (n ? (n.r = s,
                        n.g = s,
                        n.b = s) : n = i.Color.createColor(s, s, s),
                    0 !== e) {
                        var r = .5 > s ? s * (1 + e) : s + e - s * e
                            , o = 2 * s - r;
                        n.r = i.Color.hueToColor(o, r, t + 1 / 3),
                            n.g = i.Color.hueToColor(o, r, t),
                            n.b = i.Color.hueToColor(o, r, t - 1 / 3)
                    }
                    return n.r = Math.floor(255 * n.r | 0),
                        n.g = Math.floor(255 * n.g | 0),
                        n.b = Math.floor(255 * n.b | 0),
                        i.Color.updateColor(n),
                        n
                },
                RGBtoHSV: function(t, e, s, n) {
                    n || (n = i.Color.createColor(t, e, s, 255)),
                        t /= 255,
                        e /= 255,
                        s /= 255;
                    var r = Math.min(t, e, s)
                        , o = Math.max(t, e, s)
                        , a = o - r;
                    return n.h = 0,
                        n.s = 0 === o ? 0 : a / o,
                        n.v = o,
                    o !== r && (o === t ? n.h = (e - s) / a + (s > e ? 6 : 0) : o === e ? n.h = (s - t) / a + 2 : o === s && (n.h = (t - e) / a + 4),
                        n.h /= 6),
                        n
                },
                HSVtoRGB: function(t, e, s, n) {
                    void 0 === n && (n = i.Color.createColor(0, 0, 0, 1, t, e, 0, s));
                    var r, o, a, h = Math.floor(6 * t), l = 6 * t - h, u = s * (1 - e), c = s * (1 - l * e), d = s * (1 - (1 - l) * e);
                    switch (h % 6) {
                        case 0:
                            r = s,
                                o = d,
                                a = u;
                            break;
                        case 1:
                            r = c,
                                o = s,
                                a = u;
                            break;
                        case 2:
                            r = u,
                                o = s,
                                a = d;
                            break;
                        case 3:
                            r = u,
                                o = c,
                                a = s;
                            break;
                        case 4:
                            r = d,
                                o = u,
                                a = s;
                            break;
                        case 5:
                            r = s,
                                o = u,
                                a = c
                    }
                    return n.r = Math.floor(255 * r),
                        n.g = Math.floor(255 * o),
                        n.b = Math.floor(255 * a),
                        i.Color.updateColor(n),
                        n
                },
                hueToColor: function(t, e, i) {
                    return 0 > i && (i += 1),
                    i > 1 && (i -= 1),
                        1 / 6 > i ? t + 6 * (e - t) * i : .5 > i ? e : 2 / 3 > i ? t + (e - t) * (2 / 3 - i) * 6 : t
                },
                createColor: function(t, e, s, n, r, o, a, h) {
                    var l = {
                        r: t || 0,
                        g: e || 0,
                        b: s || 0,
                        a: n || 1,
                        h: r || 0,
                        s: o || 0,
                        l: a || 0,
                        v: h || 0,
                        color: 0,
                        color32: 0,
                        rgba: ""
                    };
                    return i.Color.updateColor(l)
                },
                updateColor: function(t) {
                    return t.rgba = "rgba(" + t.r.toString() + "," + t.g.toString() + "," + t.b.toString() + "," + t.a.toString() + ")",
                        t.color = i.Color.getColor(t.r, t.g, t.b),
                        t.color32 = i.Color.getColor32(t.a, t.r, t.g, t.b),
                        t
                },
                getColor32: function(t, e, i, s) {
                    return t << 24 | e << 16 | i << 8 | s
                },
                getColor: function(t, e, i) {
                    return t << 16 | e << 8 | i
                },
                RGBtoString: function(t, e, s, n, r) {
                    return void 0 === n && (n = 255),
                    void 0 === r && (r = "#"),
                        "#" === r ? "#" + ((1 << 24) + (t << 16) + (e << 8) + s).toString(16).slice(1) : "0x" + i.Color.componentToHex(n) + i.Color.componentToHex(t) + i.Color.componentToHex(e) + i.Color.componentToHex(s)
                },
                hexToRGB: function(t) {
                    var e = i.Color.hexToColor(t);
                    return e ? i.Color.getColor32(e.a, e.r, e.g, e.b) : void 0
                },
                hexToColor: function(t, e) {
                    t = t.replace(/^(?:#|0x)?([a-f\d])([a-f\d])([a-f\d])$/i, function(t, e, i, s) {
                        return e + e + i + i + s + s
                    });
                    var s = /^(?:#|0x)?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
                    if (s) {
                        var n = parseInt(s[1], 16)
                            , r = parseInt(s[2], 16)
                            , o = parseInt(s[3], 16);
                        e ? (e.r = n,
                            e.g = r,
                            e.b = o) : e = i.Color.createColor(n, r, o)
                    }
                    return e
                },
                webToColor: function(t, e) {
                    e || (e = i.Color.createColor());
                    var s = /^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?))?\s*\)$/.exec(t);
                    return s && (e.r = parseInt(s[1], 10),
                        e.g = parseInt(s[2], 10),
                        e.b = parseInt(s[3], 10),
                        e.a = void 0 !== s[4] ? parseFloat(s[4]) : 1,
                        i.Color.updateColor(e)),
                        e
                },
                valueToColor: function(t, e) {
                    if (e || (e = i.Color.createColor()),
                    "string" == typeof t)
                        return 0 === t.indexOf("rgb") ? i.Color.webToColor(t, e) : (e.a = 1,
                            i.Color.hexToColor(t, e));
                    if ("number" == typeof t) {
                        var s = i.Color.getRGB(t);
                        return e.r = s.r,
                            e.g = s.g,
                            e.b = s.b,
                            e.a = s.a / 255,
                            e
                    }
                    return e
                },
                componentToHex: function(t) {
                    var e = t.toString(16);
                    return 1 == e.length ? "0" + e : e
                },
                HSVColorWheel: function(t, e) {
                    void 0 === t && (t = 1),
                    void 0 === e && (e = 1);
                    for (var s = [], n = 0; 359 >= n; n++)
                        s.push(i.Color.HSVtoRGB(n / 359, t, e));
                    return s
                },
                HSLColorWheel: function(t, e) {
                    void 0 === t && (t = .5),
                    void 0 === e && (e = .5);
                    for (var s = [], n = 0; 359 >= n; n++)
                        s.push(i.Color.HSLtoRGB(n / 359, t, e));
                    return s
                },
                interpolateColor: function(t, e, s, n, r) {
                    void 0 === r && (r = 255);
                    var o = i.Color.getRGB(t)
                        , a = i.Color.getRGB(e)
                        , h = (a.red - o.red) * n / s + o.red
                        , l = (a.green - o.green) * n / s + o.green
                        , u = (a.blue - o.blue) * n / s + o.blue;
                    return i.Color.getColor32(r, h, l, u)
                },
                interpolateColorWithRGB: function(t, e, s, n, r, o) {
                    var a = i.Color.getRGB(t)
                        , h = (e - a.red) * o / r + a.red
                        , l = (s - a.green) * o / r + a.green
                        , u = (n - a.blue) * o / r + a.blue;
                    return i.Color.getColor(h, l, u)
                },
                interpolateRGB: function(t, e, s, n, r, o, a, h) {
                    var l = (n - t) * h / a + t
                        , u = (r - e) * h / a + e
                        , c = (o - s) * h / a + s;
                    return i.Color.getColor(l, u, c)
                },
                getRandomColor: function(t, e, s) {
                    if (void 0 === t && (t = 0),
                    void 0 === e && (e = 255),
                    void 0 === s && (s = 255),
                    e > 255 || t > e)
                        return i.Color.getColor(255, 255, 255);
                    var n = t + Math.round(Math.random() * (e - t))
                        , r = t + Math.round(Math.random() * (e - t))
                        , o = t + Math.round(Math.random() * (e - t));
                    return i.Color.getColor32(s, n, r, o)
                },
                getRGB: function(t) {
                    return t > 16777215 ? {
                        alpha: t >>> 24,
                        red: t >> 16 & 255,
                        green: t >> 8 & 255,
                        blue: 255 & t,
                        a: t >>> 24,
                        r: t >> 16 & 255,
                        g: t >> 8 & 255,
                        b: 255 & t
                    } : {
                        alpha: 255,
                        red: t >> 16 & 255,
                        green: t >> 8 & 255,
                        blue: 255 & t,
                        a: 255,
                        r: t >> 16 & 255,
                        g: t >> 8 & 255,
                        b: 255 & t
                    }
                },
                getWebRGB: function(t) {
                    if ("object" == typeof t)
                        return "rgba(" + t.r.toString() + "," + t.g.toString() + "," + t.b.toString() + "," + (t.a / 255).toString() + ")";
                    var e = i.Color.getRGB(t);
                    return "rgba(" + e.r.toString() + "," + e.g.toString() + "," + e.b.toString() + "," + (e.a / 255).toString() + ")"
                },
                getAlpha: function(t) {
                    return t >>> 24
                },
                getAlphaFloat: function(t) {
                    return (t >>> 24) / 255
                },
                getRed: function(t) {
                    return t >> 16 & 255
                },
                getGreen: function(t) {
                    return t >> 8 & 255
                },
                getBlue: function(t) {
                    return 255 & t
                },
                blendNormal: function(t) {
                    return t
                },
                blendLighten: function(t, e) {
                    return e > t ? e : t
                },
                blendDarken: function(t, e) {
                    return e > t ? t : e
                },
                blendMultiply: function(t, e) {
                    return t * e / 255
                },
                blendAverage: function(t, e) {
                    return (t + e) / 2
                },
                blendAdd: function(t, e) {
                    return Math.min(255, t + e)
                },
                blendSubtract: function(t, e) {
                    return Math.max(0, t + e - 255)
                },
                blendDifference: function(t, e) {
                    return Math.abs(t - e)
                },
                blendNegation: function(t, e) {
                    return 255 - Math.abs(255 - t - e)
                },
                blendScreen: function(t, e) {
                    return 255 - ((255 - t) * (255 - e) >> 8)
                },
                blendExclusion: function(t, e) {
                    return t + e - 2 * t * e / 255
                },
                blendOverlay: function(t, e) {
                    return 128 > e ? 2 * t * e / 255 : 255 - 2 * (255 - t) * (255 - e) / 255
                },
                blendSoftLight: function(t, e) {
                    return 128 > e ? 2 * ((t >> 1) + 64) * (e / 255) : 255 - 2 * (255 - ((t >> 1) + 64)) * (255 - e) / 255
                },
                blendHardLight: function(t, e) {
                    return i.Color.blendOverlay(e, t)
                },
                blendColorDodge: function(t, e) {
                    return 255 === e ? e : Math.min(255, (t << 8) / (255 - e))
                },
                blendColorBurn: function(t, e) {
                    return 0 === e ? e : Math.max(0, 255 - (255 - t << 8) / e)
                },
                blendLinearDodge: function(t, e) {
                    return i.Color.blendAdd(t, e)
                },
                blendLinearBurn: function(t, e) {
                    return i.Color.blendSubtract(t, e)
                },
                blendLinearLight: function(t, e) {
                    return 128 > e ? i.Color.blendLinearBurn(t, 2 * e) : i.Color.blendLinearDodge(t, 2 * (e - 128))
                },
                blendVividLight: function(t, e) {
                    return 128 > e ? i.Color.blendColorBurn(t, 2 * e) : i.Color.blendColorDodge(t, 2 * (e - 128))
                },
                blendPinLight: function(t, e) {
                    return 128 > e ? i.Color.blendDarken(t, 2 * e) : i.Color.blendLighten(t, 2 * (e - 128))
                },
                blendHardMix: function(t, e) {
                    return i.Color.blendVividLight(t, e) < 128 ? 0 : 255
                },
                blendReflect: function(t, e) {
                    return 255 === e ? e : Math.min(255, t * t / (255 - e))
                },
                blendGlow: function(t, e) {
                    return i.Color.blendReflect(e, t)
                },
                blendPhoenix: function(t, e) {
                    return Math.min(t, e) - Math.max(t, e) + 255
                }
            },
            i.Physics = function(t, e) {
                e = e || {},
                    this.game = t,
                    this.config = e,
                    this.arcade = null,
                    this.p2 = null,
                    this.ninja = null,
                    this.box2d = null,
                    this.chipmunk = null,
                    this.matter = null,
                    this.parseConfig()
            }
            ,
            i.Physics.ARCADE = 0,
            i.Physics.P2JS = 1,
            i.Physics.NINJA = 2,
            i.Physics.BOX2D = 3,
            i.Physics.CHIPMUNK = 4,
            i.Physics.MATTERJS = 5,
            i.Physics.prototype = {
                parseConfig: function() {
                    this.config.hasOwnProperty("arcade") && this.config.arcade !== !0 || !i.Physics.hasOwnProperty("Arcade") || (this.arcade = new i.Physics.Arcade(this.game)),
                    this.config.hasOwnProperty("ninja") && this.config.ninja === !0 && i.Physics.hasOwnProperty("Ninja") && (this.ninja = new i.Physics.Ninja(this.game)),
                    this.config.hasOwnProperty("p2") && this.config.p2 === !0 && i.Physics.hasOwnProperty("P2") && (this.p2 = new i.Physics.P2(this.game,this.config)),
                    this.config.hasOwnProperty("box2d") && this.config.box2d === !0 && i.Physics.hasOwnProperty("BOX2D") && (this.box2d = new i.Physics.BOX2D(this.game,this.config)),
                    this.config.hasOwnProperty("matter") && this.config.matter === !0 && i.Physics.hasOwnProperty("Matter") && (this.matter = new i.Physics.Matter(this.game,this.config))
                },
                startSystem: function(t) {
                    t === i.Physics.ARCADE ? this.arcade = new i.Physics.Arcade(this.game) : t === i.Physics.P2JS ? null === this.p2 ? this.p2 = new i.Physics.P2(this.game,this.config) : this.p2.reset() : t === i.Physics.NINJA ? this.ninja = new i.Physics.Ninja(this.game) : t === i.Physics.BOX2D ? null === this.box2d ? this.box2d = new i.Physics.Box2D(this.game,this.config) : this.box2d.reset() : t === i.Physics.MATTERJS && (null === this.matter ? this.matter = new i.Physics.Matter(this.game,this.config) : this.matter.reset())
                },
                enable: function(t, e, s) {
                    void 0 === e && (e = i.Physics.ARCADE),
                    void 0 === s && (s = !1),
                        e === i.Physics.ARCADE ? this.arcade.enable(t) : e === i.Physics.P2JS && this.p2 ? this.p2.enable(t, s) : e === i.Physics.NINJA && this.ninja ? this.ninja.enableAABB(t) : e === i.Physics.BOX2D && this.box2d ? this.box2d.enable(t) : e === i.Physics.MATTERJS && this.matter && this.matter.enable(t)
                },
                preUpdate: function() {
                    this.p2 && this.p2.preUpdate(),
                    this.box2d && this.box2d.preUpdate(),
                    this.matter && this.matter.preUpdate()
                },
                update: function() {
                    this.p2 && this.p2.update(),
                    this.box2d && this.box2d.update(),
                    this.matter && this.matter.update()
                },
                setBoundsToWorld: function() {
                    this.arcade && this.arcade.setBoundsToWorld(),
                    this.ninja && this.ninja.setBoundsToWorld(),
                    this.p2 && this.p2.setBoundsToWorld(),
                    this.box2d && this.box2d.setBoundsToWorld(),
                    this.matter && this.matter.setBoundsToWorld()
                },
                clear: function() {
                    this.p2 && this.p2.clear(),
                    this.box2d && this.box2d.clear(),
                    this.matter && this.matter.clear()
                },
                reset: function() {
                    this.p2 && this.p2.reset(),
                    this.box2d && this.box2d.reset(),
                    this.matter && this.matter.reset()
                },
                destroy: function() {
                    this.p2 && this.p2.destroy(),
                    this.box2d && this.box2d.destroy(),
                    this.matter && this.matter.destroy(),
                        this.arcade = null,
                        this.ninja = null,
                        this.p2 = null,
                        this.box2d = null,
                        this.matter = null
                }
            },
            i.Physics.prototype.constructor = i.Physics,
            i.Particles = function(t) {
                this.game = t,
                    this.emitters = {},
                    this.ID = 0
            }
            ,
            i.Particles.prototype = {
                add: function(t) {
                    return this.emitters[t.name] = t,
                        t
                },
                remove: function(t) {
                    delete this.emitters[t.name]
                },
                update: function() {
                    for (var t in this.emitters)
                        this.emitters[t].exists && this.emitters[t].update()
                }
            },
            i.Particles.prototype.constructor = i.Particles,
            i.Video = function(t, e, s) {
                if (void 0 === e && (e = null),
                void 0 === s && (s = null),
                    this.game = t,
                    this.key = e,
                    this.width = 0,
                    this.height = 0,
                    this.type = i.VIDEO,
                    this.disableTextureUpload = !1,
                    this.touchLocked = !1,
                    this.onPlay = new i.Signal,
                    this.onChangeSource = new i.Signal,
                    this.onComplete = new i.Signal,
                    this.onAccess = new i.Signal,
                    this.onError = new i.Signal,
                    this.onTimeout = new i.Signal,
                    this.timeout = 15e3,
                    this._timeOutID = null,
                    this.video = null,
                    this.videoStream = null,
                    this.isStreaming = !1,
                    this.retryLimit = 20,
                    this.retry = 0,
                    this.retryInterval = 500,
                    this._retryID = null,
                    this._codeMuted = !1,
                    this._muted = !1,
                    this._codePaused = !1,
                    this._paused = !1,
                    this._pending = !1,
                    this._autoplay = !1,
                e && this.game.cache.checkVideoKey(e)) {
                    var n = this.game.cache.getVideo(e);
                    n.isBlob ? this.createVideoFromBlob(n.data) : this.video = n.data,
                        this.width = this.video.videoWidth,
                        this.height = this.video.videoHeight
                } else
                    s && this.createVideoFromURL(s, !1);
                this.video && !s ? (this.baseTexture = new PIXI.BaseTexture(this.video),
                    this.baseTexture.forceLoaded(this.width, this.height)) : (this.baseTexture = new PIXI.BaseTexture(PIXI.TextureCache.__default.baseTexture.source),
                    this.baseTexture.forceLoaded(this.width, this.height)),
                    this.texture = new PIXI.Texture(this.baseTexture),
                    this.textureFrame = new i.Frame(0,0,0,this.width,this.height,"video"),
                    this.texture.setFrame(this.textureFrame),
                    this.texture.valid = !1,
                null !== e && this.video && (this.texture.valid = this.video.canplay),
                    this.snapshot = null,
                i.BitmapData && (this.snapshot = new i.BitmapData(this.game,"",this.width,this.height)),
                    !this.game.device.cocoonJS && (this.game.device.iOS || this.game.device.android) || window.PhaserGlobal && window.PhaserGlobal.fakeiOSTouchLock ? this.setTouchLock() : n && (n.locked = !1)
            }
            ,
            i.Video.prototype = {
                connectToMediaStream: function(t, e) {
                    return t && e && (this.video = t,
                        this.videoStream = e,
                        this.isStreaming = !0,
                        this.baseTexture.source = this.video,
                        this.updateTexture(null, this.video.videoWidth, this.video.videoHeight),
                        this.onAccess.dispatch(this)),
                        this
                },
                startMediaStream: function(t, e, i) {
                    if (void 0 === t && (t = !1),
                    void 0 === e && (e = null),
                    void 0 === i && (i = null),
                        !this.game.device.getUserMedia)
                        return this.onError.dispatch(this, "No getUserMedia"),
                            !1;
                    null !== this.videoStream && (this.videoStream.active ? this.videoStream.active = !1 : this.videoStream.stop()),
                        this.removeVideoElement(),
                        this.video = document.createElement("video"),
                        this.video.setAttribute("autoplay", "autoplay"),
                    null !== e && (this.video.width = e),
                    null !== i && (this.video.height = i),
                        this._timeOutID = window.setTimeout(this.getUserMediaTimeout.bind(this), this.timeout);
                    try {
                        navigator.getUserMedia({
                            audio: t,
                            video: !0
                        }, this.getUserMediaSuccess.bind(this), this.getUserMediaError.bind(this))
                    } catch (s) {
                        this.getUserMediaError(s)
                    }
                    return this
                },
                getUserMediaTimeout: function() {
                    clearTimeout(this._timeOutID),
                        this.onTimeout.dispatch(this)
                },
                getUserMediaError: function(t) {
                    clearTimeout(this._timeOutID),
                        this.onError.dispatch(this, t)
                },
                getUserMediaSuccess: function(t) {
                    clearTimeout(this._timeOutID),
                        this.videoStream = t,
                        void 0 !== this.video.mozSrcObject ? this.video.mozSrcObject = t : this.video.src = window.URL && window.URL.createObjectURL(t) || t;
                    var e = this;
                    this.video.onloadeddata = function() {
                        function t() {
                            if (i > 0)
                                if (e.video.videoWidth > 0) {
                                    var s = e.video.videoWidth
                                        , n = e.video.videoHeight;
                                    isNaN(e.video.videoHeight) && (n = s / (4 / 3)),
                                        e.video.play(),
                                        e.isStreaming = !0,
                                        e.baseTexture.source = e.video,
                                        e.updateTexture(null, s, n),
                                        e.onAccess.dispatch(e)
                                } else
                                    window.setTimeout(t, 500);
                            else
                                console.warn("Unable to connect to video stream. Webcam error?");
                            i--
                        }
                        var i = 10;
                        t()
                    }
                },
                createVideoFromBlob: function(t) {
                    var e = this;
                    return this.video = document.createElement("video"),
                        this.video.controls = !1,
                        this.video.setAttribute("autoplay", "autoplay"),
                        this.video.addEventListener("loadeddata", function(t) {
                            e.updateTexture(t)
                        }, !0),
                        this.video.src = window.URL.createObjectURL(t),
                        this.video.canplay = !0,
                        this
                },
                createVideoFromURL: function(t, e) {
                    return void 0 === e && (e = !1),
                    this.texture && (this.texture.valid = !1),
                        this.video = document.createElement("video"),
                        this.video.controls = !1,
                    e && this.video.setAttribute("autoplay", "autoplay"),
                        this.video.src = t,
                        this.video.canplay = !0,
                        this.video.load(),
                        this.retry = this.retryLimit,
                        this._retryID = window.setTimeout(this.checkVideoProgress.bind(this), this.retryInterval),
                        this.key = t,
                        this
                },
                updateTexture: function(t, e, i) {
                    var s = !1;
                    (void 0 === e || null === e) && (e = this.video.videoWidth,
                        s = !0),
                    (void 0 === i || null === i) && (i = this.video.videoHeight),
                        this.width = e,
                        this.height = i,
                    this.baseTexture.source !== this.video && (this.baseTexture.source = this.video),
                        this.baseTexture.forceLoaded(e, i),
                        this.texture.frame.resize(e, i),
                        this.texture.width = e,
                        this.texture.height = i,
                        this.texture.valid = !0,
                    this.snapshot && this.snapshot.resize(e, i),
                    s && null !== this.key && (this.onChangeSource.dispatch(this, e, i),
                    this._autoplay && (this.video.play(),
                        this.onPlay.dispatch(this, this.loop, this.playbackRate)))
                },
                complete: function() {
                    this.onComplete.dispatch(this)
                },
                play: function(t, e) {
                    return void 0 === t && (t = !1),
                    void 0 === e && (e = 1),
                    this.game.sound.onMute && (this.game.sound.onMute.add(this.setMute, this),
                        this.game.sound.onUnMute.add(this.unsetMute, this),
                    this.game.sound.mute && this.setMute()),
                        this.game.onPause.add(this.setPause, this),
                        this.game.onResume.add(this.setResume, this),
                        this.video.addEventListener("ended", this.complete.bind(this), !0),
                        t ? this.video.loop = "loop" : this.video.loop = "",
                        this.video.playbackRate = e,
                        this.touchLocked ? this._pending = !0 : (this._pending = !1,
                        null !== this.key && (4 !== this.video.readyState ? (this.retry = this.retryLimit,
                            this._retryID = window.setTimeout(this.checkVideoProgress.bind(this), this.retryInterval)) : this.video.addEventListener("playing", this.playHandler.bind(this), !0)),
                            this.video.play(),
                            this.onPlay.dispatch(this, t, e)),
                        this
                },
                playHandler: function() {
                    this.video.removeEventListener("playing", this.playHandler.bind(this)),
                        this.updateTexture()
                },
                stop: function() {
                    return this.game.sound.onMute && (this.game.sound.onMute.remove(this.setMute, this),
                        this.game.sound.onUnMute.remove(this.unsetMute, this)),
                        this.game.onPause.remove(this.setPause, this),
                        this.game.onResume.remove(this.setResume, this),
                        this.isStreaming ? (this.video.mozSrcObject ? (this.video.mozSrcObject.stop(),
                            this.video.src = null) : (this.video.src = "",
                            this.videoStream.active ? this.videoStream.active = !1 : this.videoStream.stop()),
                            this.videoStream = null,
                            this.isStreaming = !1) : (this.video.removeEventListener("ended", this.complete.bind(this), !0),
                            this.video.removeEventListener("playing", this.playHandler.bind(this), !0),
                            this.touchLocked ? this._pending = !1 : this.video.pause()),
                        this
                },
                add: function(t) {
                    if (Array.isArray(t))
                        for (var e = 0; e < t.length; e++)
                            t[e].loadTexture && t[e].loadTexture(this);
                    else
                        t.loadTexture(this);
                    return this
                },
                addToWorld: function(t, e, i, s, n, r) {
                    n = n || 1,
                        r = r || 1;
                    var o = this.game.add.image(t, e, this);
                    return o.anchor.set(i, s),
                        o.scale.set(n, r),
                        o
                },
                render: function() {
                    !this.disableTextureUpload && this.playing && this.baseTexture.dirty()
                },
                setMute: function() {
                    this._muted || (this._muted = !0,
                        this.video.muted = !0)
                },
                unsetMute: function() {
                    this._muted && !this._codeMuted && (this._muted = !1,
                        this.video.muted = !1)
                },
                setPause: function() {
                    this._paused || this.touchLocked || (this._paused = !0,
                        this.video.pause())
                },
                setResume: function() {
                    !this._paused || this._codePaused || this.touchLocked || (this._paused = !1,
                    this.video.ended || this.video.play())
                },
                changeSource: function(t, e) {
                    return void 0 === e && (e = !0),
                        this.texture.valid = !1,
                        this.video.pause(),
                        this.retry = this.retryLimit,
                        this._retryID = window.setTimeout(this.checkVideoProgress.bind(this), this.retryInterval),
                        this.video.src = t,
                        this.video.load(),
                        this._autoplay = e,
                    e || (this.paused = !0),
                        this
                },
                checkVideoProgress: function() {
                    4 === this.video.readyState ? this.updateTexture() : (this.retry--,
                        this.retry > 0 ? this._retryID = window.setTimeout(this.checkVideoProgress.bind(this), this.retryInterval) : console.warn("Phaser.Video: Unable to start downloading video in time", this.isStreaming))
                },
                setTouchLock: function() {
                    this.game.input.touch.addTouchLockCallback(this.unlock, this),
                        this.touchLocked = !0
                },
                unlock: function() {
                    if (this.touchLocked = !1,
                        this.video.play(),
                        this.onPlay.dispatch(this, this.loop, this.playbackRate),
                        this.key) {
                        var t = this.game.cache.getVideo(this.key);
                        t && !t.isBlob && (t.locked = !1)
                    }
                    return !0
                },
                grab: function(t, e, i) {
                    return void 0 === t && (t = !1),
                    void 0 === e && (e = 1),
                    void 0 === i && (i = null),
                        null === this.snapshot ? void console.warn("Video.grab cannot run because Phaser.BitmapData is unavailable") : (t && this.snapshot.cls(),
                            this.snapshot.copy(this.video, 0, 0, this.width, this.height, 0, 0, this.width, this.height, 0, 0, 0, 1, 1, e, i),
                            this.snapshot)
                },
                removeVideoElement: function() {
                    if (this.video) {
                        for (this.video.parentNode && this.video.parentNode.removeChild(this.video); this.video.hasChildNodes(); )
                            this.video.removeChild(this.video.firstChild);
                        this.video.removeAttribute("autoplay"),
                            this.video.removeAttribute("src"),
                            this.video = null
                    }
                },
                destroy: function() {
                    this.stop(),
                        this.removeVideoElement(),
                    this.touchLocked && this.game.input.touch.removeTouchLockCallback(this.unlock, this),
                    this._retryID && window.clearTimeout(this._retryID)
                }
            },
            Object.defineProperty(i.Video.prototype, "currentTime", {
                get: function() {
                    return this.video ? this.video.currentTime : 0
                },
                set: function(t) {
                    this.video.currentTime = t
                }
            }),
            Object.defineProperty(i.Video.prototype, "duration", {
                get: function() {
                    return this.video ? this.video.duration : 0
                }
            }),
            Object.defineProperty(i.Video.prototype, "progress", {
                get: function() {
                    return this.video ? this.video.currentTime / this.video.duration : 0
                }
            }),
            Object.defineProperty(i.Video.prototype, "mute", {
                get: function() {
                    return this._muted
                },
                set: function(t) {
                    if (t = t || null) {
                        if (this._muted)
                            return;
                        this._codeMuted = !0,
                            this.setMute()
                    } else {
                        if (!this._muted)
                            return;
                        this._codeMuted = !1,
                            this.unsetMute()
                    }
                }
            }),
            Object.defineProperty(i.Video.prototype, "paused", {
                get: function() {
                    return this._paused
                },
                set: function(t) {
                    if (t = t || null,
                        !this.touchLocked)
                        if (t) {
                            if (this._paused)
                                return;
                            this._codePaused = !0,
                                this.setPause()
                        } else {
                            if (!this._paused)
                                return;
                            this._codePaused = !1,
                                this.setResume()
                        }
                }
            }),
            Object.defineProperty(i.Video.prototype, "volume", {
                get: function() {
                    return this.video ? this.video.volume : 1
                },
                set: function(t) {
                    0 > t ? t = 0 : t > 1 && (t = 1),
                    this.video && (this.video.volume = t)
                }
            }),
            Object.defineProperty(i.Video.prototype, "playbackRate", {
                get: function() {
                    return this.video ? this.video.playbackRate : 1
                },
                set: function(t) {
                    this.video && (this.video.playbackRate = t)
                }
            }),
            Object.defineProperty(i.Video.prototype, "loop", {
                get: function() {
                    return !!this.video && this.video.loop
                },
                set: function(t) {
                    t && this.video ? this.video.loop = "loop" : this.video && (this.video.loop = "")
                }
            }),
            Object.defineProperty(i.Video.prototype, "playing", {
                get: function() {
                    return !(this.video.paused && this.video.ended)
                }
            }),
            i.Video.prototype.constructor = i.Video,
            void 0 === PIXI.blendModes && (PIXI.blendModes = i.blendModes),
            void 0 === PIXI.scaleModes && (PIXI.scaleModes = i.scaleModes),
            void 0 === PIXI.Texture.emptyTexture && (PIXI.Texture.emptyTexture = new PIXI.Texture(new PIXI.BaseTexture)),
            void 0 === PIXI.DisplayObject._tempMatrix && (PIXI.DisplayObject._tempMatrix = new PIXI.Matrix),
            void 0 === PIXI.RenderTexture.tempMatrix && (PIXI.RenderTexture.tempMatrix = new PIXI.Matrix),
            PIXI.Graphics && void 0 === PIXI.Graphics.POLY && (PIXI.Graphics.POLY = i.POLYGON,
                PIXI.Graphics.RECT = i.RECTANGLE,
                PIXI.Graphics.CIRC = i.CIRCLE,
                PIXI.Graphics.ELIP = i.ELLIPSE,
                PIXI.Graphics.RREC = i.ROUNDEDRECTANGLE),
            PIXI.TextureSilentFail = !0,
            "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = i),
                exports.Phaser = i) : "undefined" != typeof define && define.amd ? define("Phaser", function() {
                return e.Phaser = i
            }()) : e.Phaser = i,
            i
    }
        .call(this);