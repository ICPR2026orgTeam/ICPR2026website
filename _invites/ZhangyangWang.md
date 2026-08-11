---
layout: keyNoteSpeaker
idInvite: "PRIZE2"
name: "Zhangyang “Atlas” Wang"
slug: "Zhangyang"
chair: "Arun Ross"
role: '2026 IAPR J. K. Aggarwal Prize'
company: "University of Texas at Austin"
photoSpeaker: photoZhangyangWang.jpg
last_modified: 23/07/2026
prize_description: | 
                   <b class="text-info">IAPR J. K. Aggarwal Prize</b> For contributions to the efficient training and deployment of generative models with applications to language and vision 
abstractTitle: "Where Does Learning Live in the Spectrum? From Principal Low-Rank Gradients to Off-Principal RL Post-Training"
abstract: |
          This talk follows one question through the life of a foundation model: where in the singular spectrum of its weights does learning actually happen? During pretraining, the gradient famously collapses onto a slowly-moving, low-rank  principal subspace. Our prior work — including GaLore and APOLLO — turned that single fact into training that matches full-model quality at a fraction of the optimizer memory; a follow-up then showed this low-rank structure is also predictably uneven across layers, set by the model's own curvature geometry. That story yet takes a sharp turn in RL post-training. Looking at reinforcement learning with verifiable rewards (RLVR) through the same spectral lens, our recent study finds almost the mirror image: the singular values barely move, the input–output singular subspaces rotate instead, and the updates deliberately avoid the principal directions — the exact part of the spectrum that low-rank, principal-targeted adapters like LoRA and PiSSA are built to capture. We pin this down with direct causal interventions — rebasing the spectrum, holding the singular values fixed, and scrambling the subspaces — which trace the effect to a curvature-constrained bias the model inherits from how it was pretrained. The same analysis dissolves a popular claim along the way: the widely-cited result that RL updates only a tiny fraction of weights turns out to be a numeric precision artifact, not real sparsity. Reading this geometry correctly points to a different kind of post-training algorithm: hold the spectrum fixed and move the singular frames on the Stiefel manifold. The new Isospectral Optimizer (ISO) both improves and accelerates RL training and lets separately trained RL models be merged with no data and no rollouts. Taken together, we argue that the spectral structure of learning is regime-dependent, and that the "common wisdoms" of ML efficiency inherited from pretraining could be the wrong starting point for RL post-training.

biographie: |
            Dr. Zhangyang “Atlas” Wang is the Temple Foundation Endowed Associate Professor at The University of Texas at Austin. His research focuses on how training dynamics discover structural inductive biases such as sparsity, low-rank structure, and algebraic symmetries; how these structures manifest at test time in inference, reasoning, and agentic planning; and how they enable resource-aware and trustworthy AI in high-stakes real-world domains. His work has received a number of distinctions, and he has mentored a broad network of Ph.D. students and postdoctoral researchers, many of whom now hold tenure-track faculty positions or senior research roles in industry. He is also on leave serving as Research Director at XTX Markets, where he founded and leads the firm’s AI Lab in New York City. For more information about his group and alumni, please visit:  <a href="www.vita-group.space/team"> www.vita-group.space/team </a> 
---



