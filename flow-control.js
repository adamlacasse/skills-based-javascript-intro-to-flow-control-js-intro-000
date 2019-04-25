function basicTeenager(age) {
  if (age > 12 && age < 20) {
    return "You are a teenager!";
  }
}

function teenager(age) {
  if (age > 12 && age < 20) {
    return "You are a teenager!";
  }
  return "You are not a teenager";
}

function ageChecker(age) {
  if (age > 12 && age < 20) {
    return "You are a teenager!";
  } else if (age < 13) {
      return "You are a kid";
    } return "You are a grownup";
}

function ternaryTeenager(age) {
  age > 12 && age < 20 ? return "You are a teenager" : return "You are not a teenager";
}

function switchAge(age) {
  switch (age) {
    case 13:
      "You are a teenager";
      break;
    case 19:
      "You are a teenager";
      break;
    case 14:
      "You are a teenager";
      break;
    case 15:
      "You are a teenager";
      break;
    case 16:
      "You are a teenager";
      break;
    case 17:
      "You are a teenager";
      break;
    case 18:
      "You are a teenager";
      break;
    default:
      "You have an age";

  }
}
