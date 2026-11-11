const stages = {
 before: ['PREBOARDING / REMOVE THE UNCERTAINTY', 'A welcome that arrives before she does.', 'Send the schedule, confirm equipment and access, explain where to go, and introduce her buddy. Aisha knows who will meet her and what her first morning will involve.', 'Send a short personal welcome with one contact for questions, rather than a folder of unexplained policies.'],
 week: ['WEEK ONE / BUILD CLARITY & CONNECTION', 'A first task, with someone in her corner.', 'Her manager walks through an example analysis and agrees on a small deliverable. Her buddy explains team routines and introduces the people who can help.', 'Ask the newcomer to explain the first assignment in their own words, then make time for questions.'],
 thirty: ['DAY 30 / TURN PRACTICE INTO CONFIDENCE', 'Make progress visible. Keep support close.', 'Aisha and her manager review her first month together. They identify one skill that is improving and one task that needs more practice, then update the next-month goals.', 'Ask: What feels clear? Where are you stuck? Who else would it help you to meet?'],
 ninety: ['DAY 90 / KEEP THE RELATIONSHIP GOING', 'Belonging is not a box to tick.', 'Aisha now owns a small recurring analysis. The manager reviews expectations and workload with her, asks for feedback on onboarding, and agrees on a development goal and ongoing check-ins.', 'Keep the buddy connection available and schedule the next manager conversation before ending this one.']
};
const tabs = [...document.querySelectorAll('[data-stage]')];
const panel = document.getElementById('stage-panel');
function selectStage(tab) {
 const [label, title, copy, task] = stages[tab.dataset.stage];
 tabs.forEach(t => { const active = t === tab; t.setAttribute('aria-selected', String(active)); t.tabIndex = active ? 0 : -1; });
 panel.setAttribute('aria-labelledby', tab.id);
 panel.querySelector('.stage-label').textContent = label;
 panel.querySelector('h4').textContent = title;
 panel.querySelector('p').textContent = copy;
 panel.querySelector('.stage-task').replaceChildren(Object.assign(document.createElement('strong'), {textContent:'Try this: '}), document.createTextNode(task));
}
tabs.forEach((tab, index) => {
 tab.addEventListener('click', () => selectStage(tab));
 tab.addEventListener('keydown', event => {
  let next;
  if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
  if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
  if (event.key === 'Home') next = 0;
  if (event.key === 'End') next = tabs.length - 1;
  if (next !== undefined) { event.preventDefault(); selectStage(tabs[next]); tabs[next].focus(); }
 });
});
