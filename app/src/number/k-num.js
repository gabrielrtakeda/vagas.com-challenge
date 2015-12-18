module.exports = function() {
  var self = this;

  var priv = {
    k: {len:  4, unit: 'k', cut: 1000},
    m: {len:  7, unit: 'm', cut: 1000000},
    g: {len: 10, unit: 'g', cut: 1000000000},
    t: {len: 13, unit: 't', cut: 1000000000000}
  };

  self.abstract = (n, unit) => {
    var o = priv[unit];
    return n.toString().length >= o.len ?
      parseInt(n / o.cut).toString().concat(o.unit) : n;
  };

  self.k = (n) => { return self.abstract(n, 'k'); };
  self.m = (n) => { return self.abstract(n, 'm'); };
  self.g = (n) => { return self.abstract(n, 'g'); };
  self.t = (n) => { return self.abstract(n, 't'); };

  self.thin = (n) => {
    if (n >= priv.t.cut) return self.t(n);
    else if (n >= priv.g.cut) return self.g(n);
    else if (n >= priv.m.cut) return self.m(n);
    else if (n >= priv.k.cut) return self.k(n);
    return n;
  };
};
