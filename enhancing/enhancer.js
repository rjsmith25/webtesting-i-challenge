module.exports = {
  succeed,
  fail,
  repair,
  get
};

function succeed(item) {
  if (item.enhancement === 20) {
    return item;
  }
  return { ...item, enhancement: item.enhancement + 1 };
}

function fail(item) {
  if (item.enhancement > 16) {
    item = { ...item, enhancement: item.enhancement - 1 };
  }

  if (item.enhancement >= 15) {
    item = { ...item, durability: item.durability - 10 };
  }

  if (item.enhancement < 15) {
    item = { ...item, durability: item.durability - 5 };
  }
  return item;
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
