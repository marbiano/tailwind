<script>
  export let name = '';

  $: genIntro = (name) => {
    switch (name) {
      case 'Steve':
        return 'Adam and you';
      case 'Adam':
        return 'Steve and you';
      case '':
        return 'You two';
      default:
        return 'They';
    }
  };
</script>

<h1>My thoughts on Tailwind</h1>
<p>{genIntro(name)} seem like a bunch of laser-focused folks.</p>
<p>
  You create new things, you solve other people's problems, you actively
  participate in the community, all that while making a living of it.
</p>
<p>
  You also seem to
  <strong>release quality stuff.</strong>
  I was never a fan of CSS frameworks, but using Tailwind CSS is a delight, it
  reminds me of
  <a href="http://compass-style.org">Compass</a>
  in the old days. Refactoring UI seems very helpful. It's a reference that I
  would have loved to have while trying to learn how to design an interface.
</p>
<p>
  So yeah, you seem to have
  <strong>a ton of motivation, talent and real challenges.</strong>
  And that profoundly inspires me.
</p>
