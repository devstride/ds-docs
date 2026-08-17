---
title: "Creating Your Account"
description: "How to sign up for DevStride — with Google or Microsoft, or with an email address and password — plus what happens next depending on whether you were invited, your colleagues are already here, or you are the first one in."
---

There are two ways to create a DevStride account: use an identity you already have with **Google** or **Microsoft**, or set up an **email address and password**. Both land you in the same place.

What happens *after* you sign up depends on your situation — you might be joining an organization you were invited to, asking to join one your colleagues have already created, or creating the first one yourself. All three are covered below.

## Signing up with Google or Microsoft

On the signup page, accept the terms of use and privacy policy, then choose **Sign up with Google** or **Sign up with Microsoft**. You are handed to that provider, you approve the sign-in there, and you come back to DevStride with your account created.

You never set a DevStride password. From then on, you sign in the same way you signed up.

**The provider buttons stay greyed out until you have accepted the terms.** That is deliberate: choosing a provider sends you straight to them, so your agreement has to be recorded before you leave the page.

**Only the providers DevStride has configured appear.** If there is no button for yours, sign up with an email address and password instead.

**What comes across.** Your name is taken from your provider, so your profile starts filled in rather than blank. Your profile picture comes across too, if your provider shares one — not all do, and you can always set it yourself afterwards.

**If you already have a DevStride account with that email address**, you are not given a second one. The Google or Microsoft identity is connected to the account you already have, and you are signed in to it.

**If someone has already invited you**, that invitation is matched by email address and accepted, so you arrive as a member of their organization instead of starting from nothing.

::alert{type="info" title="Opening an invitation link is different"}
If you follow an invitation link, that page asks for a password rather than offering the Google and Microsoft buttons. The invitation is tied to one specific email address, so the page keeps you on it — signing in with a different identity would quietly unbind the invitation.

You can still use Google or Microsoft: go to the ordinary signup page instead and sign up with the **same** email address the invitation was sent to. Your invitation is matched to it and accepted just the same.
::

::alert{type="info" title="Signing up is not the same as signing in"}
If you try to **sign in** with a Google or Microsoft identity that is not connected to any DevStride account, you are told you do not have access yet. That is deliberate: signing in never quietly creates an account you did not mean to create. Use the signup page if you want a new account.
::

### When this is not available

**Your provider has to tell us your email address.** DevStride sends notifications to it, and it is how you get matched to invitations and to your organization. Most accounts share it automatically; some — particularly guest accounts belonging to another company's directory — do not. If yours does not, signup stops and points you at email-and-password signup instead, rather than creating an account that cannot receive anything.

**Company (enterprise) identity providers are not offered here.** If your organization uses enterprise single sign-on, you join it by invitation or through that organization's own provider, so your company keeps control of who is a member. See [Enterprise SSO](https://docs.devstride.com/workspace-administration/settings/integrations/enterprise-sso).

## Signing up with an email address and password

Fill in **First Name**, **Last Name**, **Email Address** and a password, then continue.

DevStride emails you a **six-digit code**. Enter it on the *Verify Your Information* step to confirm the address is really yours. Until that is done, the account is not active — which is what stops someone signing up with an address that is not theirs.

## What happens next

Once your account exists, one of three things happens.

**You were invited.** Your pending invitation is accepted automatically and you go straight into that organization. You do not need to be invited a second time or enter anything else.

**Your colleagues are already here.** If other people have signed up with the same email domain as yours — say you are `you@acme.com` and an Acme organization already exists — you are shown that organization and can **request access** to it. If there is more than one, you choose which. An administrator there approves the request.

**You are the first one in.** You are asked for an organization name, and that becomes your workspace. You are its owner.

::alert{type="warning" title="Use your work email address"}
Domain matching is what connects you to colleagues who are already using DevStride. Signing up with a personal address means DevStride cannot tell that you belong with them, and you will end up in a separate organization instead of theirs.
::

## Signing in afterwards

Sign in the way you signed up. If you used Google or Microsoft, use the same button. If you set a password, use that.

**Already have a password account and want to use Google or Microsoft instead?** There is no setting to switch. Go to the signup page and sign up with that provider using the **same email address** — DevStride recognises the address, connects the identity to your existing account rather than creating a second one, and signs you in. After that either way in works.
