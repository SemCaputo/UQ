(function () {
  const dice = document.getElementById('dice');
  const output = document.getElementById('output');
  const toggleBtn = document.getElementById('dice-toggle');

  let diceFace = document.getElementById('dice-face');
  if (!diceFace) {
    diceFace = document.createElement('div');
    diceFace.id = 'dice-face';
    dice.appendChild(diceFace);
  }

  const faces = {
    1: ['[     ]', '[  *  ]', '[     ]'],
    2: ['[ *   ]', '[     ]', '[   * ]'],
    3: ['[ *   ]', '[  *  ]', '[   * ]'],
    4: ['[ * * ]', '[     ]', '[ * * ]'],
    5: ['[ * * ]', '[  *  ]', '[ * * ]'],
    6: ['[ * * ]', '[ * * ]', '[ * * ]']
  };

  function rollDice() {
    const roll1 = Math.floor(Math.random() * 6) + 1;
    const roll2 = Math.floor(Math.random() * 6) + 1;
    const total = roll1 + roll2;

    const face1 = faces[roll1].join('<br />');
    const face2 = faces[roll2].join('<br />');

    diceFace.innerHTML = `${face1}<br /><br />${face2}`;
    const timestamp = new Date().toLocaleTimeString();
    if (output) {
      output.innerHTML = `[${timestamp}] Rolled ${roll1} + ${roll2} = ${total}`;
    }
  }

  function toggleDice() {
    const container = document.getElementById('dice-container');
    if (container.classList.contains('hidden')) {
      container.classList.remove('hidden');
      toggleBtn.textContent = 'Hide Dice';
    } else {
      container.classList.add('hidden');
      toggleBtn.textContent = 'Show Dice';
    }
  }

  if (dice) {
    dice.addEventListener('click', rollDice);
    dice.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        rollDice();
      }
    });
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', toggleDice);
  }
})();