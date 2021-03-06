(this["webpackJsonpmy-app"] = this["webpackJsonpmy-app"] || []).push([
  [0],
  [
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, n) {
      e.exports = {
        item: "NavItem_item__25LXF",
        activeLink: "NavItem_activeLink__2i9vV",
      };
    },
    ,
    ,
    ,
    ,
    ,
    function (e, t, n) {
      e.exports = { header: "Header_header__2eCg5", ul: "Header_ul__2pal9" };
    },
    function (e, t, n) {
      e.exports = { nav: "Nav_nav__1-zOP" };
    },
    ,
    function (e, t, n) {
      e.exports = { logo: "Logo_logo__GV18W" };
    },
    function (e, t, n) {
      e.exports = { home: "Home_home__Odzrh" };
    },
    function (e, t, n) {
      e.exports = { employees: "Employees_employees__3aokI" };
    },
    function (e, t, n) {
      e.exports = { employeeName: "Employee_employeeName__3NokE" };
    },
    function (e, t, n) {
      e.exports = { addEmployee: "NewEmployee_addEmployee__Nw3Vf" };
    },
    function (e, t, n) {
      e.exports = { footer: "Footer_footer__3eiYF" };
    },
    ,
    function (e, t, n) {
      e.exports = n(40);
    },
    ,
    ,
    ,
    ,
    function (e, t, n) {},
    ,
    ,
    ,
    ,
    ,
    function (e, t, n) {
      "use strict";
      n.r(t);
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      var a = n(18),
        o = n(0),
        r = n.n(o),
        c = (n(34), n(19)),
        l = n.n(c),
        m = n(20),
        i = n.n(m),
        u = n(13),
        s = n.n(u),
        p = n(7),
        E = function (e) {
          return r.a.createElement(
            "div",
            { className: s.a.item },
            r.a.createElement(
              p.b,
              { to: e.path, activeClassName: s.a.activeLink },
              e.name
            )
          );
        },
        f = function () {
          return r.a.createElement(
            "nav",
            { className: i.a.nav },
            r.a.createElement(E, { path: "/home", name: "Home" }),
            r.a.createElement(E, { path: "/employees", name: "Employees" })
          );
        },
        d = n(22),
        _ = n.n(d),
        v = function () {
          return r.a.createElement("div", { className: _.a.logo }, "Logo");
        },
        h = function () {
          return r.a.createElement(
            "header",
            { className: l.a.header },
            r.a.createElement(v, null),
            r.a.createElement(f, null)
          );
        },
        y = n(23),
        N = n.n(y),
        b = function () {
          return r.a.createElement(
            "div",
            { className: N.a.home },
            "CONTENT HOME"
          );
        },
        g = n(24),
        x = n.n(g),
        O = n(25),
        k = n.n(O),
        w = n(28),
        j = n(11),
        C = Object(o.createContext)({}),
        L = function () {
          return Object(o.useContext)(C);
        },
        H = function (e) {
          var t = e.children,
            n = Object(o.useState)([]),
            a = Object(j.a)(n, 2),
            c = a[0],
            l = a[1],
            m = {
              employees: c,
              deleteEmployee: function (e) {
                l(function (t) {
                  return t.filter(function (t) {
                    return t.id !== e;
                  });
                });
              },
              addEmployee: function (e) {
                l(function (t) {
                  return [
                    {
                      id: Math.random().toString(36).substr(2, 9),
                      first_name: e,
                      email: "",
                      last_name: "",
                      avatar: "",
                    },
                  ].concat(Object(w.a)(t));
                });
              },
            };
          return (
            Object(o.useEffect)(function () {
              fetch("https://reqres.in/api/users?per_page=12")
                .then(function (e) {
                  return e.json();
                })
                .then(function (e) {
                  var t = e.data;
                  return l(t);
                });
            }, []),
            r.a.createElement(C.Provider, { value: m }, t)
          );
        },
        F = function (e) {
          var t = e.name,
            n = e.id,
            a = L().deleteEmployee;
          return r.a.createElement(
            "div",
            { className: k.a.employeeName },
            t,
            r.a.createElement(
              "button",
              {
                onClick: function () {
                  return a(n);
                },
              },
              "DELETE"
            )
          );
        },
        I = n(26),
        D = n.n(I),
        S = function () {
          var e = L().addEmployee,
            t = Object(o.useState)(""),
            n = Object(j.a)(t, 2),
            a = n[0],
            c = n[1];
          return r.a.createElement(
            "div",
            { className: D.a.addEmployee },
            r.a.createElement("p", null, "Add an employee:"),
            r.a.createElement("input", {
              type: "text",
              placeholder: "Name",
              value: a,
              onChange: function (e) {
                return c(e.target.value);
              },
            }),
            r.a.createElement(
              "button",
              {
                onClick: function () {
                  a && (e(a), c(""));
                },
              },
              "ADD"
            )
          );
        },
        T = function () {
          var e = L().employees;
          return r.a.createElement(
            "div",
            { className: x.a.employees },
            r.a.createElement(S, null),
            e.map(function (e) {
              var t = e.id,
                n = e.first_name;
              return r.a.createElement(F, { key: t, id: t, name: n });
            })
          );
        },
        V = n(27),
        W = n.n(V),
        z = function () {
          return r.a.createElement(
            "div",
            { className: W.a.footer },
            "Footer 2020"
          );
        },
        A = n(1),
        B = function () {
          return r.a.createElement(
            p.a,
            null,
            r.a.createElement(
              H,
              null,
              r.a.createElement(
                "div",
                { className: "wrapper" },
                r.a.createElement(h, null),
                r.a.createElement(A.b, {
                  exact: !0,
                  path: "/",
                  render: function () {
                    return r.a.createElement(A.a, { to: "/home" });
                  },
                }),
                r.a.createElement(A.b, { path: "/home", component: b }),
                r.a.createElement(A.b, { path: "/employees", component: T }),
                r.a.createElement(z, null)
              )
            )
          );
        };
      Object(a.render)(
        r.a.createElement(p.a, null, r.a.createElement(B, null)),
        document.getElementById("root")
      ),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready
            .then(function (e) {
              e.unregister();
            })
            .catch(function (e) {
              console.error(e.message);
            });
    },
  ],
  [[29, 1, 2]],
]);
//# sourceMappingURL=main.bd4428a8.chunk.js.map
