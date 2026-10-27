
/**
 * Lab 02: JavaScript med kontrollstrukturer.
 */

/**
 * Returnerar true om värdet är större än 42.
 */
export function isLarger(value) {
  if (value > 42) {
    return true
  } else {
    return false
  }
}

/**
 * Kontrollerar om talet är positivt, negativt eller noll.
 */
export function isPositiveNegative(value) {
  if (value > 0) {
    return "Positive"
  } else if (value < 0) {
    return "Negative"
  } else {
    return "Neither"
  }
}

/**
 * Kontrollerar om talet är udda eller jämnt.
 */
export function isOddEven(value) {
  if (value % 2 === 0) {
    return "Even"
  } else {
    return "Odd"
  }
}

/**
 * Kontrollerar summan av tre kort.
 */
export function blackJack(value1, value2, value3) {
  const sum = value1 + value2 + value3

  if (sum === 21) {
    return "Black Jack"
  } else if (sum > 21) {
    return "Busted"
  } else {
    return "Draw"
  }
}

/**
 * Returnerar betyg baserat på poäng.
 */
export function gradeChecker(score) {
  if (score >= 90) {
    return "A"
  } else if (score >= 80) {
    return "B"
  } else if (score >= 70) {
    return "C"
  } else {
    return "F"
  }
}

/**
 * Kontrollerar temperaturen.
 */
export function temperature(temp) {
  if (temp < 10) {
    return "Cold"
  } else if (temp <= 25) {
    return "Warm"
  } else {
    return "Hot"
  }
}

/**
 * Trafikljus med if/else.
 */
export function trafficlight(color) {
  const light = color.toLowerCase()

  if (light === "red") {
    return "Stop"
  } else if (light === "yellow") {
    return "Wait"
  } else if (light === "green") {
    return "Go"
  } else {
    return "Invalid color"
  }
}

/**
 * Jämför ett tal med heltalsvärdet i en sträng.
 */
export function intRepresentation(value, text) {
  const number = parseInt(text, 10)

  if (value === number) {
    return true
  } else {
    return false
  }
}

/**
 * FizzBuzz.
 */
export function fizzBuzz(value) {
  if (value % 3 === 0 && value % 5 === 0) {
    return "FizzBuzz"
  } else if (value % 3 === 0) {
    return "Fizz"
  } else if (value % 5 === 0) {
    return "Buzz"
  } else {
    return value
  }
}

/**
 * Trafikljus med switch.
 */
export function trafficlightSwitch(color) {
  const light = color.toLowerCase()

  switch (light) {
    case "red":
      return "Stop"

    case "yellow":
      return "Wait"

    case "green":
      return "Go"

    default:
      return "Invalid color"
  }
}

/**
 * Kalkylator.
 * Lämnad olöst tills vidare.
 */
export function calculator(value1, value2, op, reverse = false) {
  // TODO: Write your code here.
  return -1
}
