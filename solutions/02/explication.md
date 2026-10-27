# Correction 2

`waitForTimeout(500)` parie sur la vitesse du serveur, et `count()` lit une valeur à un instant précis sans la réessayer. Sur une machine plus lente, la lecture arrive avant l'affichage : le test échoue sans qu'il y ait de bug.

`expect(locator).toHaveCount(2)` réessaie jusqu'à l'échéance : le test attend ce dont il a besoin, ni plus, ni moins.
